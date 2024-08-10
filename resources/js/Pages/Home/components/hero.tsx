import eatImage from "@/assets/images/eat.png";

export function HomeHero() {
    return (
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
    );
}
