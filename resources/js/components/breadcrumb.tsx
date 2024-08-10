import { Link } from "@inertiajs/react";
import React from "react";

export interface Breadcrumb {
    children?: React.ReactNode;
    url?: string;
    isActive: boolean;
    title: string;
}

interface Props {
    breadcrumbs: Breadcrumb[];
}

export function Breadcrumb({ breadcrumbs }: Props) {
    return (
        <div className="w-full max-w-5xl mx-auto my-2">
            <nav className="flex items-center text-sm font-semibold text-primary">
                {breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={index}>
                        <Link
                            href={breadcrumb.url || "#"}
                            className={`hover:underline ${
                                breadcrumb.isActive
                                    ? "text-slate-800"
                                    : "text-primary"
                            }`}
                        >
                            {breadcrumb.title}
                        </Link>
                        {index < breadcrumbs.length - 1 && (
                            <span className="mx-2">/</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </div>
    );
}
