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
                            SUB UNIDAD DE ESCALAFON
                        </h1>
                        <div className="flex justify-center">
                            {" "}
                            <hr
                                className=" bg-white "
                                style={{ width: "700px", height: "3px" }}
                            />
                        </div>

                        <p className=" text-xl text-center font flex justify-center items-center py-2 text-white">
                            Actualizacion de información escencial del personal
                            de la UNDAC
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href={route("register")}
                                className="mt-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
                            >
                                Comienza Ahora
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="fixed top-0 px-6 w-full py-2 sm:block fondo-nav">
                    <div className="flex justify-between">
                        <img
                            style={{
                                width: "55px",
                                height: "55px",
                                cursor: "pointer",
                            }}
                            src="https://extranet.undac.edu.pe/img/undac.png"
                            alt=""
                        />
                        {props.auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="w-1/2 font-semibold text-base text-black border-b-2 border-black hover:text-blue-600 hover:border-b-2 hover:border-blue-700 "
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="py-4">
                                <Link
                                    href={route("login")}
                                    className=" font-semibold  text-base text-black border-b-2 border-black hover:text-blue-600 hover:border-b-2 hover:border-blue-700 "
                                >
                                    Iniciar Sesión
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="  ml-4 text-base font-semibold text-black border-b-2 border-black hover:text-blue-600 hover:border-b-2 hover:border-blue-700 "
                                >
                                    Registrese
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
