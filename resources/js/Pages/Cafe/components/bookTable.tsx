import { cn } from "@/lib/utils";
import {
    Banknote,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Clock3,
    User,
} from "lucide-react";

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

export function BookTable() {
    return (
        <div className="sticky col-span-4">
            <div className="sticky pb-6 mt-3 shadow-xl top-2 rounded-xl">
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
                    <div className="text-base font-semibold">August 2024</div>
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
    );
}
