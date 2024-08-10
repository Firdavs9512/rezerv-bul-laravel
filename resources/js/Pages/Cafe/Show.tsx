import { Link } from "@inertiajs/react";
import {
    Heart,
    MapPin,
    TabletSmartphone,
    Utensils,
    Banknote,
    ArrowDownWideNarrow,
    ChevronDown,
    UserRound,
    ThumbsUp,
    ThumbsDown,
    RefreshCcw,
    Plus,
    Minus,
    Calendar,
    Clock3,
    ChevronRight,
    User,
    ChevronLeft,
} from "lucide-react";
import res1 from "@/assets/images/f35a7384-771e-4be5-a492-f13e4d8bf89e.jpg";
import res2 from "@/assets/images/4fa5dfa2-e2ec-41fa-98b3-4440e913804d.jpg";
import res3 from "@/assets/images/651bee1d-db23-4893-9faf-d7ce5eec3bfc.jpg";
import res4 from "@/assets/images/6ba98c7b-7c44-4f3c-85a9-b3ec7e88355c.jpg";
import googlePlay from "@/assets/images/googlePlay.9c45cdb3.svg";
import appStore from "@/assets/images/appStore.9ab96665.svg";
import { cn } from "@/lib/utils";

const reviews = [
    {
        user: "User A",
        date: "September 1, 2024",
        rating: 8.2,
        comment: "Great food and friendly staff!",
        likes: 5,
        dislikes: 1,
    },
    {
        user: "User B",
        date: "September 3, 2024",
        rating: 7.5,
        comment: "Decent place, but service could be improved.",
        likes: 3,
        dislikes: 2,
    },
    {
        user: "User C",
        date: "September 5, 2024",
        rating: 9.0,
        comment: "Amazing atmosphere and delicious food!",
        likes: 10,
        dislikes: 0,
    },
    {
        user: "User C",
        date: "September 5, 2024",
        rating: 9.0,
        comment:
            "Nous emmenons régulièrement des amis et on est toujours bien reçu ... toujours très sympa... et le personnel aussi ...et la cuisine est très bonne",
        likes: 10,
        dislikes: 0,
    },
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface MonthDay {
    day: number;
    isActive: boolean;
    percentage: number; // 0-100
    thisMonth: boolean;
    nextMonth?: boolean;
}

const monthDays: MonthDay[] = [
    {
        day: 29,
        isActive: false,
        percentage: 0,
        thisMonth: false,
        nextMonth: false,
    },
    {
        day: 30,
        isActive: false,
        percentage: 0,
        thisMonth: false,
        nextMonth: false,
    },
    {
        day: 31,
        isActive: false,
        percentage: 0,
        thisMonth: false,
        nextMonth: false,
    },
    {
        day: 1,
        isActive: false,
        percentage: 0,
        nextMonth: false,
        thisMonth: true,
    },
    {
        day: 2,
        isActive: false,
        percentage: 50,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 3,
        isActive: false,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 4,
        isActive: false,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 5,
        isActive: false,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 6,
        isActive: false,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 7,
        isActive: false,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 8,
        isActive: false,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 9,
        isActive: false,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 10,
        isActive: false,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 11,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 12,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 13,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 14,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 15,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 16,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 17,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 18,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 19,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 20,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 21,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 22,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 23,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 24,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 25,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 26,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 27,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 28,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 29,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 30,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 31,
        isActive: true,
        percentage: 100,
        thisMonth: true,
        nextMonth: false,
    },
    {
        day: 1,
        isActive: true,
        percentage: 100,
        thisMonth: false,
        nextMonth: true,
    },
    {
        day: 2,
        isActive: true,
        percentage: 100,
        thisMonth: false,
        nextMonth: true,
    },
    {
        day: 3,
        isActive: true,
        percentage: 100,
        thisMonth: false,
        nextMonth: true,
    },
    {
        day: 4,
        isActive: true,
        percentage: 100,
        thisMonth: false,
        nextMonth: true,
    },
    {
        day: 5,
        isActive: true,
        percentage: 100,
        thisMonth: false,
        nextMonth: true,
    },
    {
        day: 6,
        isActive: true,
        percentage: 100,
        thisMonth: false,
        nextMonth: true,
    },
    {
        day: 7,
        isActive: true,
        percentage: 100,
        thisMonth: false,
        nextMonth: true,
    },
    {
        day: 8,
        isActive: true,
        percentage: 100,
        thisMonth: false,
        nextMonth: true,
    },
];

export default function ShowPage() {
    return (
        <main className="w-full text-sm">
            <div className="px-6 py-1 text-end">
                <nav className="flex items-center justify-end gap-x-3">
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
            </div>
            <div className="flex items-center justify-between w-full px-6 py-5 bg-white scroll-py-4">
                <div>
                    <Link
                        href="#"
                        className="text-3xl font-semibold text-primary"
                    >
                        RezervBul
                    </Link>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        className="w-full px-4 py-4 text-sm font-medium bg-white border rounded-lg min-w-[700px] text-slate-800 border-slate-200 focus:outline-none focus:border-primary"
                    />
                    <button className="absolute h-10 px-4 my-auto font-medium text-white rounded bg-primary right-2 top-[7px]">
                        Search
                    </button>
                </div>

                <div className="flex items-center gap-x-12">
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

            {/* Breadcrumb */}
            <div className="w-full max-w-5xl mx-auto my-2">
                <nav className="flex items-center text-sm font-semibold text-primary">
                    <Link href="#" className="hover:underline">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="#" className="hover:underline">
                        Istanbul
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="#" className="hover:underline">
                        Cafe
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="#" className="hover:underline text-slate-800">
                        Cafe de Paris
                    </Link>
                </nav>
            </div>

            {/* Image slider here */}
            <div className="grid w-full grid-cols-12 mb-10 h-44">
                <img src={res1} alt="" className="h-full col-span-3" />
                <img src={res2} alt="" className="h-full col-span-3" />
                <img src={res3} alt="" className="h-full col-span-3" />
                <img src={res4} alt="" className="h-full col-span-3" />
            </div>

            {/* Information */}
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
                                <span>Cafe</span>
                            </p>
                        </div>
                        <div>
                            <Heart className="w-6 cursor-pointer" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-semibold text-slate-800">
                        Cafe de Paris
                    </h1>

                    {/* Address,category,price */}
                    <div className="relative mt-5">
                        <div className="flex flex-col text-base gap-y-2">
                            <div className="flex items-center gap-x-2">
                                <div className="flex items-center justify-center w-8 h-8 text-center border rounded-md bg-primary-light border-primary/60">
                                    <MapPin className="w-4 text-primary/60" />
                                </div>
                                <p className="text-slate-600">
                                    <span>
                                        Istanbul, Turkey, Beyoglu, Istiklal
                                        Street
                                    </span>
                                </p>
                            </div>

                            <div className="flex items-center gap-x-2">
                                <div className="flex items-center justify-center w-8 h-8 text-center border rounded-md bg-primary-light border-primary/60">
                                    <Utensils className="w-4 text-primary/60" />
                                </div>
                                <p className="text-slate-600">
                                    <span>Cafe</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-x-2">
                                <div className="flex items-center justify-center w-8 h-8 text-center border rounded-md bg-primary-light border-primary/60">
                                    <Banknote className="w-4 text-primary/60" />
                                </div>
                                <p className="text-slate-600">
                                    <span>
                                        Reservation Fee: 20 TL per person
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0">
                            <div className="text-end">
                                <span
                                    className="inline-flex items-center justify-center w-8 h-8 text-base font-medium text-center rounded-md bg-primary-light text-primary"
                                    title="Online Reservation"
                                >
                                    8.9
                                </span>

                                <p className="text-xs text-slate-600">
                                    1000+ Reviews
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* About,Menu,Reviews */}
                    <div className="flex items-center mt-5 text-base border-b border-slate-300/80">
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
                            About Cafe de Paris
                        </h3>
                        <p className="mt-2 text-slate-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam sed purus auctor, ultricies quam sit
                            amet, ultrices metus. Sed auctor, odio nec ultrices
                            consectetur, nunc metus.
                        </p>
                    </div>

                    {/* Menu */}
                    <div className="mt-5" id="menu">
                        <h3 className="text-xl font-semibold text-slate-800">
                            Menu
                        </h3>
                        <div className="flex flex-col w-full mt-2 text-base gap-y-3">
                            <div className="flex items-start justify-between">
                                <div className="flex w-full border-b border-dashed border-slate-400">
                                    Saumon gravelax
                                </div>
                                <div>€10.9</div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="flex w-full border-b border-dashed border-slate-400">
                                    Saumon gravelax
                                </div>
                                <div>€10.9</div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="flex w-full border-b border-dashed border-slate-400">
                                    Saumon gravelax
                                </div>
                                <div>€10.9</div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="flex w-full border-b border-dashed border-slate-400">
                                    Saumon gravelax
                                </div>
                                <div>€10.9</div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="flex w-full border-b border-dashed border-slate-400">
                                    Saumon gravelax
                                </div>
                                <div>€10.9</div>
                            </div>
                            <div className="flex items-start justify-between">
                                <div className="flex w-full border-b border-dashed border-slate-400">
                                    Saumon gravelax
                                </div>
                                <div>€10.9</div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="flex w-full border-b border-dashed border-slate-400">
                                    Saumon gravelax
                                </div>
                                <div>€10.9</div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="flex w-full border-b border-dashed border-slate-400">
                                    Saumon gravelax
                                </div>
                                <div>€10.9</div>
                            </div>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="mt-5" id="reviews">
                        <div className="flex items-center justify-between w-full p-3 rounded-md bg-slate-200/50">
                            <div className="flex items-center justify-around w-1/2 px-4">
                                <div className="flex items-center justify-center w-20 h-20 text-center border-2 rounded-full border-primary">
                                    <div className="flex items-end">
                                        <div className="text-2xl font-semibold">
                                            8.9
                                        </div>
                                        <div>/10</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-semibold">
                                        Fabulous
                                    </div>
                                    <p className="text-sm text-slate-600">
                                        1000+ Reviews
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-[1px] h-20 bg-slate-300"></div>
                            <div className="flex items-center justify-around w-1/2 px-5">
                                <div className="text-center">
                                    <div className="flex items-end justify-center text-center gap-x-1">
                                        <div className="text-lg font-semibold">
                                            8.9
                                        </div>
                                        <div>/10</div>
                                    </div>
                                    <div>Food</div>
                                </div>
                                <div className="w-[1px] bg-slate-300 h-10"></div>

                                <div className="text-center">
                                    <div className="flex items-end justify-center text-center gap-x-1">
                                        <div className="text-lg font-semibold">
                                            8.9
                                        </div>
                                        <div>/10</div>
                                    </div>
                                    <div>Service</div>
                                </div>
                                <div className="w-[1px] bg-slate-300 h-10"></div>

                                <div className="text-center">
                                    <div className="flex items-end justify-center text-center gap-x-1">
                                        <div className="text-lg font-semibold">
                                            8.9
                                        </div>
                                        <div>/10</div>
                                    </div>
                                    <div>Ambience</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mt-5 gap-x-2">
                            <div className="flex items-center px-3 py-1 transition-colors border rounded-sm cursor-pointer gap-x-1 border-primary text-primary hover:bg-primary-light/60">
                                <ArrowDownWideNarrow className="w-5" />
                                <span className="font-semibold">Newest</span>
                            </div>

                            <div className="flex items-center px-3 py-1 transition-colors border rounded-sm cursor-pointer gap-x-1 hover:border-primary hover:text-primary hover:bg-primary-light/60 text-slate-800 border-slate-300">
                                <span className="font-semibold">Stars</span>
                                <ChevronDown className="w-5" />
                            </div>

                            <div className="flex items-center px-3 py-1 transition-colors border rounded-sm cursor-pointer gap-x-1 hover:border-primary hover:text-primary hover:bg-primary-light/60 text-slate-800 border-slate-300">
                                <span className="font-semibold">
                                    Categories
                                </span>
                                <ChevronDown className="w-5" />
                            </div>
                        </div>

                        <div className="w-full mt-5 border-t border-slate-300"></div>

                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="flex flex-col pt-3 border-b border-slate-300"
                            >
                                <div className="flex items-center justify-between py-3">
                                    <div className="flex items-center gap-x-4">
                                        <div className="flex items-center justify-center w-10 h-10 text-center rounded-full bg-primary-light text-primary">
                                            <UserRound className="w-10" />
                                        </div>
                                        <div>
                                            <div className="font-semibold">
                                                {review.user}
                                            </div>
                                            <div className="text-slate-700">
                                                {review.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-x-0.5">
                                        <div className="text-lg font-semibold">
                                            {review.rating}
                                        </div>
                                        <div className="text-slate-600 pb-0.5">
                                            /10
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-700">
                                    {review.comment}
                                </p>

                                <div className="flex items-center pb-5 mt-3 gap-x-4">
                                    <div className="flex items-center cursor-pointer gap-x-1 group">
                                        <ThumbsUp className="w-4 transition-colors group-hover:fill-primary group-hover:text-primary" />
                                        <span className="transition-colors group-hover:text-primary">
                                            <span className="font-semibold">
                                                {review.likes}
                                            </span>{" "}
                                            Like
                                        </span>
                                    </div>
                                    <div className="flex items-center cursor-pointer gap-x-1 group">
                                        <ThumbsDown className="w-4 transition-colors group-hover:fill-primary group-hover:text-primary" />
                                        <span className="transition-colors group-hover:text-primary">
                                            <span className="font-semibold">
                                                {review.dislikes}
                                            </span>{" "}
                                            Dislike
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex mt-5 text-center">
                            <div className="flex items-center px-3 py-1 mx-auto transition-colors border rounded-sm cursor-pointer gap-x-1 hover:border-primary hover:text-primary hover:bg-primary-light/60 text-slate-800 border-slate-300">
                                <span className="font-semibold">
                                    Load More Reviews
                                </span>
                                <RefreshCcw className="w-4" />
                            </div>
                        </div>
                    </div>

                    {/* Asked Questions */}
                    <div className="mt-10">
                        <h3 className="text-xl font-semibold">
                            Frequently Asked Questions
                        </h3>
                        <div className="mt-3 border rounded-sm border-slate-300 text-slate-800">
                            <div className="flex flex-col p-3 border-b border-slate-300">
                                <div className="flex items-center font-semibold">
                                    <Minus className="w-5 mr-2" />
                                    <p>
                                        How is the noise level rated at
                                        L'Imperatif?
                                    </p>
                                </div>
                                <div className="mt-1 ml-7 text-slate-600">
                                    <p>
                                        The quality of the food at L'Imperatif
                                        is rated 8.9/10 by TheFork users.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col p-3 border-b border-slate-300">
                                <div className="flex items-center font-semibold">
                                    <Plus className="w-5 mr-2" />
                                    <p>
                                        How is the noise level rated at
                                        L'Imperatif?
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col p-3 border-b border-slate-300">
                                <div className="flex items-center font-semibold">
                                    <Plus className="w-5 mr-2" />
                                    <p>
                                        How is the noise level rated at
                                        L'Imperatif?
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col p-3 border-b border-slate-300">
                                <div className="flex items-center font-semibold">
                                    <Plus className="w-5 mr-2" />
                                    <p>
                                        How is the noise level rated at
                                        L'Imperatif?
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col p-3 border-slate-300">
                                <div className="flex items-center font-semibold">
                                    <Plus className="w-5 mr-2" />
                                    <p>
                                        How is the noise level rated at
                                        L'Imperatif?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    <div className="pb-6 mt-3 shadow-xl rounded-xl">
                        <div className="w-full p-3 border-b bg-slate-200 rounded-t-xl border-slate-300">
                            <h4 className="text-xl font-semibold text-slate-800">
                                Find a table
                            </h4>
                            <p className="text-slate-600">Book for free</p>
                        </div>

                        <div className="flex items-center justify-between mx-3 mt-3 bg-primary-light rounded-xl">
                            <div className="flex items-center">
                                <div className="relative inline-flex items-center px-2 py-1 text-white cursor-pointer rounded-l-xl gap-x-1 bg-primary">
                                    <Calendar className="w-4" />
                                    <span className="font-semibold">Date</span>
                                </div>
                                <div
                                    className="w-0 h-0"
                                    style={{
                                        borderTop: "16px solid transparent",
                                        borderLeft: "20px solid #00594F",
                                        borderBottom: "16px solid transparent",
                                    }}
                                ></div>
                            </div>

                            <div className="px-2 py-1 ml-2">
                                <Clock3 className="w-4" />
                            </div>

                            <div className="text-slate-500">
                                <ChevronRight className="w-4" />
                            </div>

                            <div className="px-2 py-1 ml-2">
                                <User className="w-4" />
                            </div>

                            <div className="text-slate-500">
                                <ChevronRight className="w-4" />
                            </div>

                            <div className="px-2 py-1 ml-2 mr-4">
                                <Banknote className="w-4" />
                            </div>
                        </div>

                        <div className="w-full mt-3 border-t border-slate-300"></div>

                        <div className="flex items-center justify-between mx-5 mt-3">
                            <div className="text-slate-400">
                                <ChevronLeft className="w-5 cursor-pointer" />
                            </div>
                            <div className="text-base font-semibold">
                                August 2024
                            </div>
                            <div className="text-slate-400">
                                <ChevronRight className="w-5 cursor-pointer" />
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-1 mx-3 mt-3">
                            {weekdays.map((day, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center p-2 text-center"
                                >
                                    {day}
                                </div>
                            ))}

                            {monthDays.map((monthDay, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex items-center justify-center text-center"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "flex items-center justify-center w-10 h-10",
                                            !monthDay.isActive &&
                                                "bg-slate-200 rounded line-through decoration-slate-400 cursor-not-allowed",
                                            !monthDay.isActive &&
                                                monthDay.thisMonth &&
                                                "decoration-slate-800 cursor-not-allowed",
                                            monthDay.isActive &&
                                                "border border-slate-500 rounded hover:bg-primary-light transition-colors cursor-pointer"
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                monthDay.thisMonth
                                                    ? "text-slate-800"
                                                    : "text-slate-400"
                                            )}
                                        >
                                            {monthDay.day}
                                        </span>
                                    </div>
                                </div>
                            ))}
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

                <div className="w-full max-w-4xl mx-auto mt-10 text-sm border-t border-slate-800">
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
