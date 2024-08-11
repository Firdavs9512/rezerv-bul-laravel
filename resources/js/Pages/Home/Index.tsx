import GuestLayout from "@/Layouts/GuestLayout";
import { HomeHero } from "./components/hero";
import {
    RestoranCard,
    RestoranCardTitle,
} from "@/components/shared/RestoranCard";
import { HomeHowDoesItWork } from "./components/howDoesItWork";
import { RestaurantOwner } from "@/components/templates/RestaurantOwner";
import { Restoran } from "@/types";
import { Head } from "@inertiajs/react";

interface HomePageProps {
    favorite: Restoran[];
    popular: Restoran[];
    closest: Restoran[];
}

export default function HomePage({
    closest,
    favorite,
    popular,
}: HomePageProps) {
    return (
        <GuestLayout>
            <Head title="Home" />

            {/* Hero */}
            <HomeHero />

            {/* Favori */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <RestoranCardTitle title="Favori" />

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {favorite.map((restoran, index) => (
                        <RestoranCard key={index} {...restoran} />
                    ))}
                </div>
            </div>

            {/* Popular */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <RestoranCardTitle title="Popular" />

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {popular.map((restoran, index) => (
                        <RestoranCard key={index} {...restoran} />
                    ))}
                </div>
            </div>

            {/* The Closest */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <RestoranCardTitle title="The Closest" />

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {closest.map((restoran, index) => (
                        <RestoranCard key={index} {...restoran} />
                    ))}
                </div>
            </div>

            {/* How does it work */}
            <HomeHowDoesItWork />

            {/* Are you a restaurant owner? */}
            <RestaurantOwner />
        </GuestLayout>
    );
}
