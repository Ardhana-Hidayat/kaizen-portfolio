// src/components/ui/Badge.jsx
export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#2A2A2A] bg-[#1A1A1A] text-[#888888] text-[11px] font-medium uppercase tracking-[0.1em] font-sans ${className}`}
    >
      {children}
    </span>
  )
}
