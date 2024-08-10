import res1 from "@/assets/images/f35a7384-771e-4be5-a492-f13e4d8bf89e.jpg";
import res2 from "@/assets/images/4fa5dfa2-e2ec-41fa-98b3-4440e913804d.jpg";
import res3 from "@/assets/images/651bee1d-db23-4893-9faf-d7ce5eec3bfc.jpg";
import res4 from "@/assets/images/6ba98c7b-7c44-4f3c-85a9-b3ec7e88355c.jpg";
import GuestLayout from "@/Layouts/GuestLayout";
import { Breadcrumb } from "@/components/breadcrumb";
import { RestaurantOwner } from "@/components/templates/RestaurantOwner";
import { CafeInfoCard } from "./components/infoCard";

const breadcrumbs: Breadcrumb[] = [
    {
        title: "Home",
        url: "/",
        isActive: false,
    },
    {
        title: "Istanbul",
        url: "/istanbul",
        isActive: false,
    },
    {
        title: "Cafe",
        url: "/istanbul/cafe",
        isActive: false,
    },
    {
        title: "Cafe de Paris",
        url: "/istanbul/cafe/cafe-de-paris",
        isActive: true,
    },
];

export default function ShowPage() {
    return (
        <GuestLayout headerSearch topMenu>
            <Breadcrumb breadcrumbs={breadcrumbs} />

            {/* Image slider here */}
            <div className="grid w-full grid-cols-12 mb-10 h-44">
                <img src={res1} alt="" className="h-full col-span-3" />
                <img src={res2} alt="" className="h-full col-span-3" />
                <img src={res3} alt="" className="h-full col-span-3" />
                <img src={res4} alt="" className="h-full col-span-3" />
            </div>

            {/* Information */}
            <CafeInfoCard />

            {/* Are you a restaurant owner? */}
            <RestaurantOwner />
        </GuestLayout>
    );
}
