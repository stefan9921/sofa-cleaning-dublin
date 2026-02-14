import Link from "next/link";

interface AreaCardProps {
  name: string;
  slug: string;
  neighborhoods: string[];
}

export default function AreaCard({ name, slug, neighborhoods }: AreaCardProps) {
  return (
    <Link
      href={`/areas/${slug}`}
      className="card group hover:border-primary border-2 border-transparent"
    >
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
        {name}
      </h3>
      <p className="text-sm text-slate-500">
        {neighborhoods.join(" • ")}
      </p>
      <div className="mt-3 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        View area
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
