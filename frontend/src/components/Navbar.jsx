import { LayoutTemplate } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="h-16 bg-white/70 backdrop-blur-xl border-b border-violet-100/50 py-2.5 px-4 md:px-0 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-5">
                <Link to='/' className="flex items-center pb-6 gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200">
                        <LayoutTemplate className="w-5 h-5 text-white"/>
                    </div>
                    <h1 className="text-2xl font-bold">
                         <span className="primary-color">CV</span>
                         <span className="secondary-color">Xpert</span>
                    </h1>
                </Link>                
            </div>
        </div>
    );
};
