import { CalendarCheck, Handshake, Star } from "lucide-react";

export function HomeHowDoesItWork() {
    return (
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
                            An unrivaled selection of restaurants for whatever
                            you want
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
                    <div className="my-2 font-bold ">Exclusive benefits</div>
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
    );
}
