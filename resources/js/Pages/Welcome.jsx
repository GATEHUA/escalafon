import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import "../../css/app.css";

export default function Welcome(props) {
    return (
        <>
            <Head title="Bienvenidos" />
            <img
                className="imagen-w-f h-screen w-full"
                src="https://undac.edu.pe/wp-content/uploads/2020/11/JVR8659-1-scaled.jpg"
                alt=""
            />
            <div className=" absolute items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className=" titulo fixed w-full px-64 ">
                    <div className="  p-4 fondo-princ rounded ">
                        <h1 className=" font-bold  text-5xl flex justify-center text-center text-white mb-1 ">
                            Se podran ingresar a partir del 6 de febrero...
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
