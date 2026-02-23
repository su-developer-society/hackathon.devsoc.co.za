"use client";


import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { FaCircleQuestion, FaDrupal, FaServer, FaWordpress } from "react-icons/fa6";

type Platform = "wordpress" | "drupal" | "unknown" | "hestia";

type ClusterStatus = {
  host: string;
  cluster: string;
  platform: Platform;
  online: boolean;
  responseMs: number | null;
};

type Target = Pick<ClusterStatus, "host" | "cluster" | "platform">;

const groupOrder = ["a", "a2", "b", "c", "d"];

function range(from: number, to: number): number[] {
  const values: number[] = [];
  for (let number = from; number <= to; number += 1) {
    values.push(number);
  }
  return values;
}

function buildTargets(): Target[] {
  const targets: Target[] = [];

  for (const index of range(1, 16)) {
    targets.push({ host: `${index}.a.hacakthon.devsoc.co.za`, cluster: "a", platform: "wordpress" });
  }
  for (const index of range(17, 32)) {
    targets.push({ host: `${index}.a2.hacakthon.devsoc.co.za`, cluster: "a2", platform: "drupal" });
  }
  for (const index of range(1, 48)) {
    targets.push({ host: `${index}.b.hacakthon.devsoc.co.za`, cluster: "b", platform: "wordpress" });
  }
  for (const index of range(1, 24)) {
    targets.push({ host: `${index}.c.hacakthon.devsoc.co.za`, cluster: "c", platform: "drupal" });
  }
  for (const index of range(1, 4)) {
    targets.push({ host: `${index}.d.hackathon.devsoc.co.za`, cluster: "d", platform: "unknown" });
  }

  targets.push({ host: "a.hacakthon.devsoc.co.za", cluster: "a", platform: "hestia" });
  targets.push({ host: "a2.hacakthon.devsoc.co.za", cluster: "a2", platform: "hestia" });
  targets.push({ host: "b.hacakthon.devsoc.co.za", cluster: "b", platform: "hestia" });
  targets.push({ host: "c.hacakthon.devsoc.co.za", cluster: "c", platform: "hestia" });
  targets.push({ host: "d.hackathon.devsoc.co.za", cluster: "d", platform: "hestia" });

  return targets;
}

async function probeHost(target: Target): Promise<ClusterStatus> {
  const startedAt = performance.now();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4500);

  try {
    await fetch(`https://${target.host}?t=${Date.now()}`, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      signal: controller.signal,
    });

    window.clearTimeout(timeout);
    return {
      host: target.host,
      cluster: target.cluster,
      platform: target.platform,
      online: true,
      responseMs: Math.round(performance.now() - startedAt),
    };
  } catch {
    window.clearTimeout(timeout);
    return {
      host: target.host,
      cluster: target.cluster,
      platform: target.platform,
      online: false,
      responseMs: null,
    };
  }
}

const iconForPlatform = (platform: Platform) => {
  if (platform === "wordpress") return <FaWordpress />;
  if (platform === "drupal") return <FaDrupal />;
  if (platform === "hestia") return <FaServer />;
  return <FaCircleQuestion />;
};

export default function ClustersPage() {
  const [data, setData] = useState<ClusterStatus[]>([]);
  const [generatedAt, setGeneratedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadStatuses = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const targets = buildTargets();
      const results = await Promise.all(targets.map((target) => probeHost(target)));
      setData(results);
      setGeneratedAt(new Date().toISOString());
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not load cluster status.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadStatuses();
  }, [loadStatuses]);

  const grouped = useMemo(() => {
    const map = new Map<string, ClusterStatus[]>();
    for (const group of groupOrder) {
      map.set(group, []);
    }
    for (const item of data) {
      const entries = map.get(item.cluster) ?? [];
      entries.push(item);
      map.set(item.cluster, entries);
    }
    return map;
  }, [data]);

  const total = data.length;
  const online = data.filter((item) => item.online).length;

  return (
    <div className="bg clusters-bg">
      <div className="clusters-scroll">
        <div className="clusters-wrap">
          <header className="clusters-header">
            <Link href="/" className="clusters-back">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <h1 className="clusters-title">Clusters Status</h1>
            <p className="clusters-subtitle">Live availability for cluster subdomains and control panels</p>

            <div className="clusters-toolbar">
              <div className="clusters-summary">
                <span>{online} online</span>
                <span>{Math.max(total - online, 0)} offline</span>
                <span>{total} total</span>
              </div>
              <button type="button" className="clusters-refresh" onClick={() => void loadStatuses()} disabled={loading}>
                <RefreshCw size={14} className={loading ? "spin" : ""} /> Refresh
              </button>
            </div>

            {generatedAt ? (
              <p className="clusters-meta">Last checked: {new Date(generatedAt).toLocaleString()}</p>
            ) : null}
            {error ? <p className="clusters-error">{error}</p> : null}
          </header>

          {groupOrder.map((group) => {
            const records = grouped.get(group) ?? [];
            return (
              <section className="clusters-section" key={group}>
                <h2 className="clusters-group-title">Cluster {group.toUpperCase()}</h2>
                <div className="clusters-grid">
                  {records.map((entry) => (
                    <article className="cluster-card" key={entry.host}>
                      <div className="cluster-card-top">
                        <span className={`cluster-icon cluster-${entry.platform}`}>{iconForPlatform(entry.platform)}</span>
                        <span className={`cluster-badge ${entry.online ? "online" : "offline"}`}>
                          {entry.online ? "Online" : "Offline"}
                        </span>
                      </div>
                      <p className="cluster-host">{entry.host}</p>
                      <p className="cluster-extra">
                        {entry.online ? "Reachable" : "No response"}
                        {entry.responseMs !== null ? ` · ${entry.responseMs}ms` : ""}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
