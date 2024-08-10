import {
    ArrowDownWideNarrow,
    ChevronDown,
    RefreshCcw,
    ThumbsDown,
    ThumbsUp,
    UserRound,
} from "lucide-react";

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

export function CafeReviews() {
    return (
        <div className="mt-5" id="reviews">
            <div className="flex items-center justify-between w-full p-3 rounded-md bg-slate-200/50">
                <div className="flex items-center justify-around w-1/2 px-4">
                    <div className="flex items-center justify-center w-20 h-20 text-center border-2 rounded-full border-primary">
                        <div className="flex items-end">
                            <div className="text-2xl font-semibold">8.9</div>
                            <div>/10</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-semibold">Fabulous</div>
                        <p className="text-sm text-slate-600">1000+ Reviews</p>
                    </div>
                </div>
                <div className="flex w-[1px] h-20 bg-slate-300"></div>
                <div className="flex items-center justify-around w-1/2 px-5">
                    <div className="text-center">
                        <div className="flex items-end justify-center text-center gap-x-1">
                            <div className="text-lg font-semibold">8.9</div>
                            <div>/10</div>
                        </div>
                        <div>Food</div>
                    </div>
                    <div className="w-[1px] bg-slate-300 h-10"></div>

                    <div className="text-center">
                        <div className="flex items-end justify-center text-center gap-x-1">
                            <div className="text-lg font-semibold">8.9</div>
                            <div>/10</div>
                        </div>
                        <div>Service</div>
                    </div>
                    <div className="w-[1px] bg-slate-300 h-10"></div>

                    <div className="text-center">
                        <div className="flex items-end justify-center text-center gap-x-1">
                            <div className="text-lg font-semibold">8.9</div>
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
                    <span className="font-semibold">Categories</span>
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
                            <div className="text-slate-600 pb-0.5">/10</div>
                        </div>
                    </div>
                    <p className="text-slate-700">{review.comment}</p>

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
                    <span className="font-semibold">Load More Reviews</span>
                    <RefreshCcw className="w-4" />
                </div>
            </div>
        </div>
    );
}
