import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { TabletSmartphone } from "lucide-react";

interface HeaderProps {
    topMenu: boolean;
    headerSearch: boolean;
    headerSticky: boolean;
}

export function Header({ headerSearch, headerSticky, topMenu }: HeaderProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-between w-full px-6 py-5 bg-white scroll-py-4",
                !topMenu && "mt-5"
            )}
        >
            <div>
                <Link href="#" className="text-3xl font-semibold text-primary">
                    RezervBul
                </Link>
            </div>

            {headerSearch && (
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
            )}

            <div className="flex items-center gap-x-12">
                {!topMenu && (
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
                )}

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
    );
}
