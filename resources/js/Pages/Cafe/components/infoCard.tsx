import { Heart, MapPin, Utensils, Banknote } from "lucide-react";
import { BookTable } from "./bookTable";
import { CafeReviews } from "./reviews";
import { AskedQuestions } from "./askedQuestions";
import { CafeInfoMenu } from "./infoMenu";
import { Restoran } from "@/types";

export function CafeInfoCard({
    address,
    category,
    description,
    name,
    rating,
}: Restoran) {
    return (
        <div className="grid w-full max-w-5xl grid-cols-11 mx-auto">
            <div className="col-span-7 pr-5">
                <div className="flex items-center justify-between mt-5 mb-3">
                    <div className="flex items-center gap-x-3">
                        <div className="inline-flex font-semibold text-sm text-white bg-black py-0.5 px-1.5 rounded">
                            Up to 50%
                        </div>

                        <p>
                            <span>Istanbul</span>
                            <span className="mx-2">/</span>
                            <span>{category.name}</span>
                        </p>
                    </div>
                    <div>
                        <Heart className="w-6 cursor-pointer" />
                    </div>
                </div>

                <h1 className="text-3xl font-semibold text-slate-800">
                    {name}
                </h1>

                {/* Address,category,price */}
                <div className="relative mt-5">
                    <div className="flex flex-col text-base gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <div className="flex items-center justify-center w-8 h-8 text-center border rounded-md bg-primary-light border-primary/60">
                                <MapPin className="w-4 text-primary/60" />
                            </div>
                            <p className="text-slate-600">
                                <span>{address}</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="flex items-center justify-center w-8 h-8 text-center border rounded-md bg-primary-light border-primary/60">
                                <Utensils className="w-4 text-primary/60" />
                            </div>
                            <p className="text-slate-600">
                                <span>{category.name}</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2">
                            <div className="flex items-center justify-center w-8 h-8 text-center border rounded-md bg-primary-light border-primary/60">
                                <Banknote className="w-4 text-primary/60" />
                            </div>
                            <p className="text-slate-600">
                                <span>Reservation Fee: 20 TL per person</span>
                            </p>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0">
                        <div className="text-end">
                            <span
                                className="inline-flex items-center justify-center w-8 h-8 text-base font-medium text-center rounded-md bg-primary-light text-primary"
                                title="Online Reservation"
                            >
                                {rating.toFixed(1)}
                            </span>

                            <p className="text-xs text-slate-600">
                                1000+ Reviews
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    {/* About,Menu,Reviews */}
                    <div className="sticky top-0 flex items-center mt-5 text-base border-b border-slate-300/80 bg-slate-100">
                        <a
                            href="#about"
                            className="px-6 py-2 font-semibold border-b-[4px] text-primary border-b-primary"
                        >
                            About
                        </a>

                        <a
                            href="#menu"
                            className="px-6 py-2 font-semibold text-slate-700"
                        >
                            Menu
                        </a>

                        <a
                            href="#reviews"
                            className="px-6 py-2 font-semibold text-slate-700"
                        >
                            Reviews
                        </a>
                    </div>

                    {/* About */}
                    <div className="mt-5" id="about">
                        <h3 className="text-xl font-semibold text-slate-800">
                            About {category.name} {name}
                        </h3>
                        <p className="mt-2 text-slate-600">{description}</p>
                    </div>

                    {/* Menu */}
                    <CafeInfoMenu />

                    {/* Reviews */}
                    <CafeReviews />
                </div>

                {/* Asked Questions */}
                <AskedQuestions />
            </div>

            <BookTable />
        </div>
    );
}
