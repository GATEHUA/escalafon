import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
    return (
        <div className="fondo-reg min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-cover">
            <div>
                <Link href="/">
                    <div className="w-32 h-32 bg-white border border-gray-100  flex justify-center items-center rounded-full ">
                        <img
                            className="w-24 h-24"
                            src="https://extranet.undac.edu.pe/img/undac.png"
                            alt=""
                        />
                    </div>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 fondo-princ shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
