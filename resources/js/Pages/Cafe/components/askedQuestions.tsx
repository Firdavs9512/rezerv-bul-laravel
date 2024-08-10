import { Minus, Plus } from "lucide-react";

export function AskedQuestions() {
    return (
        <div className="mt-10">
            <h3 className="text-xl font-semibold">
                Frequently Asked Questions
            </h3>
            <div className="mt-3 border rounded-sm border-slate-300 text-slate-800">
                <div className="flex flex-col p-3 border-b border-slate-300">
                    <div className="flex items-center font-semibold">
                        <Minus className="w-5 mr-2" />
                        <p>How is the noise level rated at L'Imperatif?</p>
                    </div>
                    <div className="mt-1 ml-7 text-slate-600">
                        <p>
                            The quality of the food at L'Imperatif is rated
                            8.9/10 by TheFork users.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col p-3 border-b border-slate-300">
                    <div className="flex items-center font-semibold">
                        <Plus className="w-5 mr-2" />
                        <p>How is the noise level rated at L'Imperatif?</p>
                    </div>
                </div>

                <div className="flex flex-col p-3 border-b border-slate-300">
                    <div className="flex items-center font-semibold">
                        <Plus className="w-5 mr-2" />
                        <p>How is the noise level rated at L'Imperatif?</p>
                    </div>
                </div>

                <div className="flex flex-col p-3 border-b border-slate-300">
                    <div className="flex items-center font-semibold">
                        <Plus className="w-5 mr-2" />
                        <p>How is the noise level rated at L'Imperatif?</p>
                    </div>
                </div>

                <div className="flex flex-col p-3 border-slate-300">
                    <div className="flex items-center font-semibold">
                        <Plus className="w-5 mr-2" />
                        <p>How is the noise level rated at L'Imperatif?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
