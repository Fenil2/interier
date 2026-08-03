"use client";

import { useEffect, useState, useCallback, Fragment } from "react";

type Status = "NEW" | "CONTACTED" | "QUALIFIED" | "CLOSED";

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string | null;
  status: Status;
  createdAt: string;
}

const STATUS_OPTIONS: Status[] = ["NEW", "CONTACTED", "QUALIFIED", "CLOSED"];

const STATUS_STYLES: Record<Status, string> = {
  NEW: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  CONTACTED: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  QUALIFIED: "bg-[#c8a856]/15 text-[#c8a856] border-[#c8a856]/30",
  CLOSED: "bg-green-600/15 text-green-400 border-green-600/30",
};

const STAT_LABELS: { key: string; label: string; color: string }[] = [
  { key: "total", label: "Total Leads", color: "text-white" },
  { key: "NEW", label: "New", color: "text-blue-300" },
  { key: "CONTACTED", label: "Contacted", color: "text-yellow-300" },
  { key: "QUALIFIED", label: "Qualified", color: "text-[#c8a856]" },
  { key: "CLOSED", label: "Closed", color: "text-green-400" },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "ALL") params.set("status", statusFilter);
      if (search.trim()) params.set("search", search.trim());
      const res = await fetch(`/api/leads?${params}`);
      const data = await res.json();
      setLeads(data.leads ?? []);
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter]);

  useEffect(() => {
    const t = setTimeout(fetchLeads, 300);
    return () => clearTimeout(t);
  }, [fetchLeads]);

  async function updateStatus(id: string, status: Status) {
    setUpdatingId(id);
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setUpdatingId(null);
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  }

  async function deleteLead(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    setDeletingId(id);
    await fetch(`/api/leads/${id}`, { method: "DELETE" });
    setLeads((prev) => prev.filter((l) => l.id !== id));
    setDeletingId(null);
  }

  const stats = {
    total: leads.length,
    NEW: leads.filter((l) => l.status === "NEW").length,
    CONTACTED: leads.filter((l) => l.status === "CONTACTED").length,
    QUALIFIED: leads.filter((l) => l.status === "QUALIFIED").length,
    CLOSED: leads.filter((l) => l.status === "CLOSED").length,
  } as Record<string, number>;

  return (
    <div className="min-h-screen bg-[#0f1a12] text-white">
      {/* Header */}
      <header className="border-b border-[#1e3824] bg-[#1a2e20] px-6 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Fourwalls <span className="text-[#c8a856]">Dashboard</span>
            </h1>
            <p className="mt-0.5 text-[0.75rem] text-[#6a8870]">Leads &amp; Enquiry Management</p>
          </div>
          <a
            href="/"
            className="rounded-md border border-[#c8a85630] px-4 py-2 text-[0.78rem] font-medium text-[#c8a856] transition-colors hover:bg-[#c8a85610]"
          >
            ← Back to Site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-10">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {STAT_LABELS.map(({ key, label, color }) => (
            <div
              key={key}
              className="rounded-xl border border-[#1e3824] bg-[#142218] px-4 py-4 transition-colors hover:border-[#c8a85630]"
            >
              <div className={`text-2xl font-bold ${color}`}>{loading ? "—" : stats[key]}</div>
              <div className="mt-0.5 text-[0.75rem] text-[#6a8870]">{label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-5 flex flex-wrap gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email or phone…"
            className="flex-1 min-w-[200px] rounded-lg border border-[#1e3824] bg-[#142218] px-4 py-2.5 text-[0.88rem] text-white/80 outline-none placeholder:text-[#4e6858] focus:border-[#c8a85666]"
          />
          <div className="flex flex-wrap gap-2">
            {["ALL", ...STATUS_OPTIONS].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`rounded-lg border px-4 py-2 text-[0.78rem] font-semibold transition-all ${
                  statusFilter === s
                    ? "border-[#c8a856] bg-[#c8a856] text-[#1a2e20]"
                    : "border-[#1e3824] bg-[#142218] text-[#6a8870] hover:border-[#c8a85640] hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-[#1e3824] bg-[#142218]">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-[#6a8870]">Loading leads…</div>
          ) : leads.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-2 text-3xl">📋</div>
              <div className="text-[0.9rem] text-[#6a8870]">No leads found</div>
              <div className="mt-1 text-[0.78rem] text-[#4e6858]">
                {search || statusFilter !== "ALL" ? "Try adjusting your filters" : "Leads from the contact form will appear here"}
              </div>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-[0.85rem]">
                  <thead>
                    <tr className="border-b border-[#1e3824] bg-[#0f1a12]/60">
                      <th className="px-5 py-3.5 text-left text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">Name</th>
                      <th className="px-5 py-3.5 text-left text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">Contact</th>
                      <th className="px-5 py-3.5 text-left text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">Service</th>
                      <th className="px-5 py-3.5 text-left text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">Date</th>
                      <th className="px-5 py-3.5 text-left text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">Status</th>
                      <th className="px-5 py-3.5 text-right text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e3824]">
                    {leads.map((lead) => (
                      <Fragment key={lead.id}>
                        <tr
                          className="cursor-pointer transition-colors hover:bg-[#1a2e20]/60"
                          onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                        >
                          <td className="px-5 py-4">
                            <div className="font-semibold text-white">{lead.firstName} {lead.lastName}</div>
                          </td>
                          <td className="px-5 py-4">
                            <div className="text-white/70">{lead.email}</div>
                            <div className="text-[0.78rem] text-[#6a8870]">{lead.phone}</div>
                          </td>
                          <td className="px-5 py-4 text-white/60">{lead.service}</td>
                          <td className="px-5 py-4 text-[0.8rem] text-[#6a8870]">{formatDate(lead.createdAt)}</td>
                          <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                            <select
                              value={lead.status}
                              disabled={updatingId === lead.id}
                              onChange={(e) => updateStatus(lead.id, e.target.value as Status)}
                              className={`rounded-md border px-2.5 py-1 text-[0.75rem] font-semibold outline-none transition-all disabled:opacity-50 ${STATUS_STYLES[lead.status]} bg-transparent`}
                            >
                              {STATUS_OPTIONS.map((s) => (
                                <option key={s} value={s} className="bg-[#142218] text-white">{s}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-5 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => deleteLead(lead.id)}
                              disabled={deletingId === lead.id}
                              className="rounded-md border border-red-500/25 px-3 py-1.5 text-[0.75rem] text-red-400 transition-all hover:bg-red-500/10 disabled:opacity-40"
                            >
                              {deletingId === lead.id ? "…" : "Delete"}
                            </button>
                          </td>
                        </tr>
                        {expandedId === lead.id && lead.message && (
                          <tr className="bg-[#0f1a12]/40">
                            <td colSpan={6} className="px-5 py-3">
                              <span className="text-[0.72rem] font-semibold uppercase tracking-widest text-[#6a8870]">Message: </span>
                              <span className="text-[0.85rem] text-white/60">{lead.message}</span>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="divide-y divide-[#1e3824] md:hidden">
                {leads.map((lead) => (
                  <div key={lead.id} className="p-4">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-white">{lead.firstName} {lead.lastName}</div>
                        <div className="text-[0.8rem] text-[#6a8870]">{formatDate(lead.createdAt)}</div>
                      </div>
                      <span className={`rounded-md border px-2.5 py-1 text-[0.72rem] font-semibold ${STATUS_STYLES[lead.status]}`}>
                        {lead.status}
                      </span>
                    </div>
                    <div className="mb-2 text-[0.83rem] text-white/70">{lead.email}</div>
                    <div className="mb-2 text-[0.83rem] text-[#6a8870]">{lead.phone}</div>
                    <div className="mb-3 text-[0.8rem] text-white/50">{lead.service}</div>
                    {lead.message && (
                      <div className="mb-3 rounded-md bg-[#0f1a12]/60 p-3 text-[0.8rem] text-white/50">
                        {lead.message}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <select
                        value={lead.status}
                        disabled={updatingId === lead.id}
                        onChange={(e) => updateStatus(lead.id, e.target.value as Status)}
                        className="flex-1 rounded-md border border-[#1e3824] bg-[#0f1a12] px-3 py-2 text-[0.8rem] text-white/70 outline-none disabled:opacity-50"
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <button
                        onClick={() => deleteLead(lead.id)}
                        disabled={deletingId === lead.id}
                        className="rounded-md border border-red-500/25 px-3 py-2 text-[0.78rem] text-red-400 transition-all hover:bg-red-500/10 disabled:opacity-40"
                      >
                        {deletingId === lead.id ? "…" : "Delete"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Footer count */}
          {!loading && leads.length > 0 && (
            <div className="border-t border-[#1e3824] px-5 py-3 text-[0.75rem] text-[#4e6858]">
              Showing {leads.length} lead{leads.length !== 1 ? "s" : ""}
              {statusFilter !== "ALL" && ` · Filtered by ${statusFilter}`}
              {search && ` · Search: "${search}"`}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
