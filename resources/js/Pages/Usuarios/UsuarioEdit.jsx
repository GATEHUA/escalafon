import React from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";

import InputError from "@/Components/InputError";

import { Link } from "@inertiajs/inertia-react";

function UsuarioEdit({ usuarioData, auth }) {
    // console.log(usuarioData);
    const UserEdit = (e) => {
        e.preventDefault();
        post(route("usuarios.update", usuarioData[0].id));
        // console.log(data.name, data.email, data.rol, data.password);
        // Swal.fire({
        //     icon: "success",
        //     title: "Datos actualizados correctamente",
        //     showConfirmButton: false,
        //     timer: 1500,
        // });
    };
    const { data, setData, post, processing, reset, errors, progress } =
        useForm({
            name: usuarioData[0].name || "",
            email: usuarioData[0].email || "",
            rol: usuarioData[0].rol || "",
            password: usuarioData[0].password || "",
            _method: "put",
        });
    return (
        <AuthenticatedLayout auth={auth}>
            <div className="md:p-6 p-3 rounded-lg">
                <div className="fondo-princ shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                    <h3 className="uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                        DATOS DEL USUARIO
                    </h3>
                    <form onSubmit={UserEdit}>
                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 md:px-3">
                                <label
                                    className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Nombre de Usuario
                                </label>
                                <input
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="name"
                                    type="text"
                                    placeholder=""
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-.5"
                                />
                            </div>

                            <div className="md:w-1/2 md:px-3">
                                <label
                                    className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                    htmlFor="email"
                                >
                                    E-MAIL
                                </label>
                                <input
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="email"
                                    type="text"
                                    placeholder=""
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-.5"
                                />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 md:px-3">
                                <label
                                    className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                    htmlFor="password"
                                >
                                    CONTRASEÑA(NUEVA)
                                </label>
                                <input
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    disabled={
                                        usuarioData[0].google_id ? true : false
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="password"
                                    type="text"
                                    placeholder=""
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-.5"
                                />
                            </div>
                            <div className="md:w-1/2 md:px-3">
                                <label
                                    className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                    htmlFor="rol"
                                >
                                    ROL
                                </label>
                                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                <select
                                    value={data.rol ? data.rol : ""}
                                    onChange={(e) =>
                                        setData("rol", e.target.value)
                                    }
                                    id="rol"
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium"
                                    name="rol"
                                >
                                    <option value="USUARIO">USUARIO</option>
                                    <option value="EDITOR">EDITOR</option>
                                    <option value="ADMINISTRADOR">
                                        ADMINISTRADOR
                                    </option>
                                </select>
                                <InputError
                                    message={errors.rol}
                                    className="mt-.5"
                                />
                            </div>
                        </div>

                        <PrimaryButton
                            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 ring-offset-blue-200 focus:ring-blue-600 hover:ring-offset-blue-500 ease focus:outline-none"
                            disabled={processing}
                        >
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 fondo-princ opacity-10 group-hover:translate-x-0"></span>
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 fondo-princ opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center text-sm">
                                <svg
                                    className="relative w-5 h-5 mr-2 text-white"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"></path>
                                </svg>
                                Actualizar
                            </span>
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default UsuarioEdit;
