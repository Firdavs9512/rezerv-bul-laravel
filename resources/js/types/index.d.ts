import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
}

export interface Restoran {
    slug: string;
    name: string;
    description: string;
    category: Category;
    category_id: number;
    address: string;
    phone: string;
    email: string;
    image: string;
    rating: number;
    latitude: number;
    longitude: number;
}
