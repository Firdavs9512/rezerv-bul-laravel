import { Link } from "@inertiajs/react";

export interface RestoranCardInfo {
    upTo?: number;
    name: string;
    location: string;
    rating: number;
    image: string;
    url?: string;
}

export function RestoranCard({
    image,
    location,
    name,
    rating,
    upTo = 0,
    url = "#",
}: RestoranCardInfo) {
    return (
        <Link
            href={url}
            className="col-span-3 p-2 transition-all rounded hover:shadow-lg hover:bg-white hover:cursor-pointer"
        >
            <div className="mb-2">
                <img src={image} alt={name} className="h-36" />
            </div>
            <div className="grid items-center justify-between grid-cols-12">
                <h5 className="col-span-10 text-base font-bold">{name}</h5>
                <p className="col-span-2 text-sm font-semibold text-slate-600 text-end">
                    {rating}
                </p>
            </div>
            <div className="mt-2 space-y-1">
                <p className="text-sm text-slate-600">{location}</p>
                {upTo > 0 && (
                    <div className="inline-flex font-semibold text-sm text-white bg-black py-0.5 px-1.5 rounded">
                        Up to {upTo}%
                    </div>
                )}
            </div>
        </Link>
    );
}

interface RestoranCardTitleProps {
    title: string;
    subtitle?: string;
    viewAll?: string;
}

export function RestoranCardTitle({
    title,
    subtitle = "Restoranlar",
    viewAll = "#",
}: RestoranCardTitleProps) {
    return (
        <div className="flex items-center justify-between w-ful">
            <h4>
                <span className="text-2xl font-semibold text-secondary">
                    {title}
                </span>{" "}
                <span className="text-base text-slate-600">{subtitle}</span>
            </h4>

            <div>
                <Link
                    href={viewAll}
                    className="px-4 py-2 font-medium border rounded-sm border-primary-light hover:border-primary hover:bg-primary-light"
                >
                    View All
                </Link>
            </div>
        </div>
    );
}
