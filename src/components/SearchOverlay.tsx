"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { searchIndex } from "@/lib/nav";

/** nv-search-overlay: full-screen finder for every page and programme. */
export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const results = useMemo(() => { const t = q.trim().toLowerCase(); return t ? searchIndex.filter(i => (i.label + " " + i.meta).toLowerCase().includes(t)) : searchIndex.slice(0, 9); }, [q]);
  useEffect(() => {
    if (!open) return;
    setQ(""); setTimeout(() => input.current?.focus(), 60);
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search Anugraha" onClick={onClose}>
      <div className="search-box" onClick={e => e.stopPropagation()}>
        <form onSubmit={e => { e.preventDefault(); if (results[0]) { router.push(results[0].href); onClose(); } }} className="search-field">
          <Search size={26} aria-hidden="true" />
          <input ref={input} value={q} onChange={e => setQ(e.target.value)} placeholder="Search programs, pages, admissions…" aria-label="Search" />
          <button type="button" onClick={onClose} aria-label="Close search"><X size={24} /></button>
        </form>
        <ul className="search-results">
          {results.map(r => <li key={r.href}><Link href={r.href} onClick={onClose}><span>{r.label}</span><small>{r.meta}</small></Link></li>)}
          {!results.length && <li className="empty">No matches. Try “wedding”, “budget” or “admissions”.</li>}
        </ul>
      </div>
    </div>
  );
}
