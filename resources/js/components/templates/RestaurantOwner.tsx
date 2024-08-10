import res1 from "@/assets/images/f35a7384-771e-4be5-a492-f13e4d8bf89e.jpg";

export function RestaurantOwner() {
    return (
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
                            Tell us more about you and we will contact you as
                            soon as possible
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
                            Log in to RezervBul Manager and contact us by Chat.
                        </p>
                        <button className="px-4 py-2 mt-2 font-medium text-white rounded-sm bg-primary">
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
