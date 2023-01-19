import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "inline-flex items-center px-1 pt-1 border-b-2 border-white text-sm font-medium leading-5 text-white focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                    : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-200 hover:text-white hover:border-white focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
