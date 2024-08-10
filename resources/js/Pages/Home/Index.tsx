import res1 from "@/assets/images/f35a7384-771e-4be5-a492-f13e4d8bf89e.jpg";
import GuestLayout from "@/Layouts/GuestLayout";
import { HomeHero } from "./components/hero";
import {
    RestoranCard,
    RestoranCardInfo,
    RestoranCardTitle,
} from "@/components/shared/RestoranCard";
import { HomeHowDoesItWork } from "./components/howDoesItWork";
import { RestaurantOwner } from "@/components/templates/RestaurantOwner";

const restoranlar: RestoranCardInfo[] = [
    {
        image: res1,
        location: "5th Avenue, New York",
        name: "Amerikan Cafe",
        rating: 9.8,
        upTo: 50,
        url: "/show",
    },
    {
        image: res1,
        location: "Times Square, New York",
        name: "Italian Restaurant",
        rating: 8.5,
        upTo: 30,
        url: "/show",
    },
    {
        image: res1,
        location: "Times Square, New York",
        name: "Italian Restaurant",
        rating: 8.5,
        upTo: 30,
        url: "/show",
    },
    {
        image: res1,
        location: "Times Square, New York",
        name: "Italian Restaurant",
        rating: 8.5,
        upTo: 30,
        url: "/show",
    },
];

export default function HomePage() {
    return (
        <GuestLayout>
            {/* Hero */}
            <HomeHero />

            {/* Favori */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <RestoranCardTitle title="Favori" />

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {restoranlar.map((restoran, index) => (
                        <RestoranCard key={index} {...restoran} />
                    ))}
                </div>
            </div>

            {/* Popular */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <RestoranCardTitle title="Popular" />

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {restoranlar.map((restoran, index) => (
                        <RestoranCard key={index} {...restoran} />
                    ))}
                    {restoranlar.map((restoran, index) => (
                        <RestoranCard key={index} {...restoran} />
                    ))}
                </div>
            </div>

            {/* The Closest */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <RestoranCardTitle title="The Closest" />

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {restoranlar.map((restoran, index) => (
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
