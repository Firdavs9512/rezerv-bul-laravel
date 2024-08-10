import { Link } from "@inertiajs/react";
import googlePlay from "@/assets/images/googlePlay.9c45cdb3.svg";
import appStore from "@/assets/images/appStore.9ab96665.svg";

export function Footer() {
    return (
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
    );
}
