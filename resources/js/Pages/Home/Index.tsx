import { Link } from "@inertiajs/react";
import { CalendarCheck, Handshake, Star, TabletSmartphone } from "lucide-react";
import eatImage from "@/assets/images/eat.png";
import res1 from "@/assets/images/f35a7384-771e-4be5-a492-f13e4d8bf89e.jpg";
import googlePlay from "@/assets/images/googlePlay.9c45cdb3.svg";
import appStore from "@/assets/images/appStore.9ab96665.svg";

export default function HomePage() {
    return (
        <main className="w-full text-sm">
            <div className="flex items-center justify-between w-full px-6 py-5 mt-5 bg-white scroll-py-4">
                <div>
                    <Link
                        href="#"
                        className="text-3xl font-semibold text-primary"
                    >
                        RezervBul
                    </Link>
                </div>

                <div className="flex items-center gap-x-12">
                    <nav className="flex items-center gap-x-3">
                        <Link
                            href="#"
                            className="uppercase transition-colors text-primary hover:text-primary-dark hover:underline"
                        >
                            Register My Restaurant
                        </Link>
                        <div className="w-[1px] h-4 bg-slate-400"></div>
                        <Link
                            href="#"
                            className="uppercase transition-colors text-primary hover:text-primary-dark hover:underline"
                        >
                            Help
                        </Link>
                    </nav>

                    <div className="flex items-center gap-x-3">
                        <button className="flex items-center h-10 px-4 font-medium transition-colors border rounded-sm border-primary-light gap-x-2 hover:border-primary hover:bg-primary-light">
                            <TabletSmartphone className="w-4" />
                            Get The App
                        </button>
                        <button className="h-10 px-4 font-medium text-white transition-colors rounded-sm bg-primary hover:bg-primary-dark">
                            Login
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <div className="relative mx-10 bg-gradient-to-r from-primary to-primary-dark h-[400px] my-10 rounded-2xl flex items-center justify-center">
                <div className="w-full max-w-4xl">
                    <h1 className="text-6xl font-bold text-center text-white">
                        Discover and book the best restaurant
                    </h1>

                    <div className="relative mt-10">
                        <input
                            type="text"
                            placeholder="Search for restaurants"
                            className="w-full px-4 py-4 text-sm font-medium bg-white border rounded-lg text-slate-800 border-slate-200 focus:outline-none focus:border-primary"
                        />
                        <button className="absolute h-10 px-4 my-auto font-medium text-white rounded bg-primary right-2 top-[7px]">
                            Search
                        </button>
                    </div>
                </div>

                <img
                    src={eatImage}
                    alt="Eat"
                    className="absolute top-0 right-0 h-[70%]"
                />

                <img
                    src={eatImage}
                    alt="Eat"
                    className="absolute h-[60%] bottom-0 left-0"
                />
            </div>

            {/* Favori */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <div className="flex items-center justify-between w-ful">
                    <h4>
                        <span className="text-2xl font-semibold text-secondary">
                            Favori
                        </span>{" "}
                        <span className="text-base text-slate-600">
                            Restoranlar
                        </span>
                    </h4>

                    <div>
                        <button className="px-4 py-2 font-medium border rounded-sm border-primary-light hover:border-primary hover:bg-primary-light">
                            View All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="col-span-3 p-2 transition-all rounded hover:shadow-lg hover:bg-white hover:cursor-pointer"
                        >
                            <div className="mb-2">
                                <img src={res1} alt="" className="h-36" />
                            </div>
                            <div className="grid items-center justify-between grid-cols-12">
                                <h5 className="col-span-10 text-base font-bold">
                                    Amerikan Cafe
                                </h5>
                                <p className="col-span-2 text-sm font-semibold text-slate-600 text-end">
                                    9.8
                                </p>
                            </div>
                            <div className="mt-2 space-y-1">
                                <p className="text-sm text-slate-600">
                                    5th Avenue, New York
                                </p>
                                {item % 2 === 0 && (
                                    <div className="inline-flex font-semibold text-sm text-white bg-black py-0.5 px-1.5 rounded">
                                        Up to 50%
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <div className="flex items-center justify-between w-ful">
                    <h4>
                        <span className="text-2xl font-semibold text-secondary">
                            Popular
                        </span>{" "}
                        <span className="text-base text-slate-600">
                            Restoranlar
                        </span>
                    </h4>

                    <div>
                        <button className="px-4 py-2 font-medium border rounded-sm border-primary-light hover:border-primary hover:bg-primary-light">
                            View All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div
                            key={item}
                            className="col-span-3 p-2 transition-all rounded hover:shadow-lg hover:bg-white hover:cursor-pointer"
                        >
                            <div className="mb-2">
                                <img src={res1} alt="" className="h-36" />
                            </div>
                            <div className="grid items-center justify-between grid-cols-12">
                                <h5 className="col-span-10 text-base font-bold">
                                    Amerikan Cafe
                                </h5>
                                <p className="col-span-2 text-sm font-semibold text-slate-600 text-end">
                                    9.8
                                </p>
                            </div>
                            <div className="mt-2 space-y-1">
                                <p className="text-sm text-slate-600">
                                    5th Avenue, New York
                                </p>
                                {item % 2 === 0 && (
                                    <div className="inline-flex font-semibold text-sm text-white bg-black py-0.5 px-1.5 rounded">
                                        Up to 50%
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* The Closest */}
            <div className="w-full max-w-5xl mx-auto mb-10">
                <div className="flex items-center justify-between w-ful">
                    <h4>
                        <span className="text-2xl font-semibold text-secondary">
                            The Closest
                        </span>{" "}
                        <span className="text-base text-slate-600">
                            Restoranlar
                        </span>
                    </h4>

                    <div>
                        <button className="px-4 py-2 font-medium border rounded-sm border-primary-light hover:border-primary hover:bg-primary-light">
                            View All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-5">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="col-span-3 p-2 transition-all rounded hover:shadow-lg hover:bg-white hover:cursor-pointer"
                        >
                            <div className="mb-2">
                                <img src={res1} alt="" className="h-36" />
                            </div>
                            <div className="grid items-center justify-between grid-cols-12">
                                <h5 className="col-span-10 text-base font-bold">
                                    Amerikan Cafe
                                </h5>
                                <p className="col-span-2 text-sm font-semibold text-slate-600 text-end">
                                    9.8
                                </p>
                            </div>
                            <div className="mt-2 space-y-1">
                                <p className="text-sm text-slate-600">
                                    5th Avenue, New York
                                </p>
                                {item % 2 === 0 && (
                                    <div className="inline-flex font-semibold text-sm text-white bg-black py-0.5 px-1.5 rounded">
                                        Up to 50%
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How does it work */}
            <div className="w-full max-w-5xl mx-auto mt-5 mb-10">
                <h4 className="text-2xl font-semibold text-secondary">
                    How does it work?
                </h4>

                <div className="grid grid-cols-12 gap-4 mt-6">
                    <div className="col-span-3">
                        <div className="h-12">
                            <div className="flex items-center justify-center w-10 h-10 text-center border-2 rounded-full border-primary">
                                <Star className="w-full fill-primary text-primary" />
                            </div>
                        </div>
                        <div className="my-2 font-bold">Best choice</div>
                        <div>
                            <p className="text-xs text-slate-600">
                                An unrivaled selection of restaurants for
                                whatever you want
                            </p>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="flex items-center h-12 ">
                            <div className="flex items-center gap-x-1">
                                <Star className="w-6 fill-primary text-primary" />
                                <Star className="w-6 fill-primary text-primary" />
                                <Star className="w-6 fill-primary text-primary" />
                                <Star className="w-6 fill-primary text-primary" />
                                <Star className="w-6 text-primary" />
                            </div>
                        </div>
                        <div className="my-2 font-bold ">User reviews</div>
                        <div>
                            <p className="text-xs text-slate-600">
                                Recommendations and reviews from a powerful
                                community.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="flex items-center h-12">
                            <Handshake
                                className="text-primary"
                                size={40}
                                strokeWidth={1.3}
                            />
                        </div>
                        <div className="my-2 font-bold ">
                            Exclusive benefits
                        </div>
                        <div>
                            <p className="text-xs text-slate-600">
                                Offers for many restaurants and lots of other
                                benefits with our loyalty program.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="flex items-center h-12 ">
                            <div className="flex items-center h-12">
                                <CalendarCheck
                                    className="text-primary"
                                    size={40}
                                    strokeWidth={1.3}
                                />
                            </div>
                        </div>
                        <div className="my-2 font-bold">Easy reservation</div>
                        <div>
                            <p className="text-xs text-slate-600">
                                Instant, free, everywhere. 24/7
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Are you a restaurant owner? */}
            <div className="w-full max-w-5xl mx-auto mt-5 mb-10">
                <h4 className="text-2xl font-semibold text-secondary">
                    Are you a restaurant owner?
                </h4>

                <div className="grid grid-cols-12 mt-6 border rounded-lg border-slate-300">
                    <div className="col-span-6">
                        <img
                            src={res1}
                            alt=""
                            className="w-full h-full rounded-l-lg"
                        />
                    </div>

                    <div className="col-span-6 p-5">
                        <div className="">
                            <h5 className="text-xl font-semibold">
                                Register your Restaurant
                            </h5>
                            <p className="text-base text-slate-600">
                                Tell us more about you and we will contact you
                                as soon as possible
                            </p>
                            <button className="px-4 py-2 mt-2 font-medium text-white rounded-sm bg-primary">
                                See More Details
                            </button>
                        </div>

                        <div className="mt-7">
                            <h5 className="text-xl font-semibold">
                                Already a Client
                            </h5>
                            <p className="text-base text-slate-600">
                                Log in to RezervBul Manager and contact us by
                                Chat.
                            </p>
                            <button className="px-4 py-2 mt-2 font-medium text-white rounded-sm bg-primary">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-black">
                <div className="w-full max-w-5xl pt-10 mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3">
                            <h5 className="text-lg font-semibold text-white">
                                RezervBul
                            </h5>
                            <p className="mt-2 text-sm text-slate-400">
                                RezervBul is the leading restaurant reservation
                                platform in Turkey.
                            </p>
                        </div>

                        <div className="col-span-3">
                            <h5 className="text-lg font-semibold text-white">
                                Contact
                            </h5>
                            <p className="mt-2 text-sm text-slate-400">
                                <a
                                    href="mailto:info@rezerv-bull.com"
                                    className="hover:underline"
                                >
                                    info@rezerv-bul.com
                                </a>
                            </p>
                        </div>
                        <div className="col-span-3"></div>
                        <div className="col-span-3">
                            <h5 className="text-lg font-semibold text-white">
                                Download the app
                            </h5>
                            <div className="flex flex-col items-start mt-2 gap-y-2">
                                <img
                                    src={googlePlay}
                                    alt="Google Play"
                                    className="h-8"
                                />
                                <img
                                    src={appStore}
                                    alt="App Store"
                                    className="h-8"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-5xl mx-auto mt-10 text-sm border-t border-slate-800">
                    <div className="flex items-center justify-between pt-3 pb-4 text-slate-400">
                        <p>© 2024 RezervBul. All rights reserved.</p>
                        <div className="flex items-center gap-x-4">
                            <Link
                                href="#"
                                className="text-slate-400 hover:text-white"
                            >
                                Terms of Use
                            </Link>
                            <Link
                                href="#"
                                className="text-slate-400 hover:text-white"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
