import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Link } from "@inertiajs/react";

interface Props {
    children: React.ReactNode | React.ReactNode[];
    topMenu?: boolean;
    headerSearch?: boolean;
    headerSticky?: boolean;
}

export default function GuestLayout(props: Props) {
    const {
        children,
        topMenu = false,
        headerSearch = false,
        headerSticky = true,
    } = props;

    return (
        <main className="w-full text-sm">
            {topMenu && (
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
            )}

            <Header
                headerSearch={headerSearch}
                headerSticky={headerSticky}
                topMenu={topMenu}
            />

            {children}

            <Footer />
        </main>
    );
}
