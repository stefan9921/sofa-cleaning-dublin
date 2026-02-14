import Link from "next/link";

interface ServiceCardProps {
  name: string;
  slug: string;
  description: string;
  price: string;
  features: string[];
}

export default function ServiceCard({ name, slug, description, price, features }: ServiceCardProps) {
  return (
    <div className="card group hover:border-primary/20 border border-transparent">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
          {price}
        </span>
      </div>
      
      <p className="text-slate-600 text-sm mb-4">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link
        href={`/services/${slug}`}
        className="btn-outline w-full text-center text-sm py-2.5"
      >
        Learn More
      </Link>
    </div>
  );
}
