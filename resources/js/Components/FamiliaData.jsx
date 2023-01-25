import React, { useState } from "react";

import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import { Inertia } from "@inertiajs/inertia";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

function FamiliafamiliaDat({ familiaDat }) {
    // const {auth} = usePage().props
    const [editingFam, setEditingFam] = useState(false);
    const { data, setData, put, processing, reset, errors } = useForm({
        t_relacion_f: familiaDat.t_relacion_f || "",
        apellidos_nombres_f: familiaDat.apellidos_nombres_f || "",
        tipo_documento_f: familiaDat.tipo_documento_f || "",
        dni_f: familiaDat.dni_f || "",
        carnet_extranjeria_f: familiaDat.carnet_extranjeria_f || "",
        partida_nacimiento_f: familiaDat.partida_nacimiento_f || "",
        otro_documento_f: familiaDat.otro_documento_f || "",
        genero_f: familiaDat.genero_f,
        fecha_nacimiento_f: familiaDat.fecha_nacimiento_f || "",
        estado_civil_f: familiaDat.estado_civil_f || "",
        estado_v_m_f: familiaDat.estado_v_m_f || "",
        nacionalidad_f: familiaDat.nacionalidad_f || "",
    });

    const handleDestroyFam = (e) => {
        e.preventDefault();
        Swal.fire({
            title: `¿Estás seguro?`,
            text: `Se eliminara el registro del familiar:  ${
                data.apellidos_nombres_f != ""
                    ? data.apellidos_nombres_f
                    : "(Sin Nombre)"
            }, de manera permanente`,
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, bórralo!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route("familia.destroy", familiaDat.id), {
                    preserveScroll: true,
                });
                Swal.fire(
                    "¡Eliminado!",
                    "Su registro ha sido eliminado",
                    "success"
                );
            }
        });
    };

    const familiaEdit = (e) => {
        e.preventDefault();
        put(route("familia.update", familiaDat.id), {
            preserveScroll: true,
            onSuccess: () => setEditingFam(false),
        });
        // Swal.fire({
        //     icon: "info",
        //     title: "Datos actualizados correctamente",
        //     showConfirmButton: false,
        //     timer: 1500,
        //     // iconColor: "green",
        // });
    };

    return (
        <div className="bg-transparent shadow-md rounded border border-white px-7 pt-5 pb-5 mb-4 flex flex-col">
            <ToastContainer />
            <div className="flex justify-end">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <button
                            className="block w-full px-4 py-2 text-left font-bold text-sm leading-5 text-gray-700 hover:bg-gray-500 hover:text-white focus:bg-gray-100 transition duration-150 ease-in-out"
                            onClick={() => setEditingFam(true)}
                        >
                            Editar
                        </button>

                        {/* <Dropdown.Link
                            as="button"
                            href={route("familia.destroy", familiaDat.id)}
                            method="delete"
                            preserveScroll={true}
                        >
                            Eliminar
                        </Dropdown.Link> */}
                        <button
                            onClick={handleDestroyFam}
                            className="block w-full px-4 py-2 text-left font-bold text-sm leading-5 text-gray-700 hover:bg-red-500 hover:text-white transition duration-150 ease-in-out"
                        >
                            Eliminar
                        </button>
                    </Dropdown.Content>
                </Dropdown>
            </div>

            {editingFam ? (
                <form onSubmit={familiaEdit} encType="multipart/form-data">
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/4 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                tipo de relacion
                            </label>
                            {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                            <select
                                value={
                                    data.t_relacion_f ? data.t_relacion_f : ""
                                }
                                autoFocus
                                onChange={(e) =>
                                    setData("t_relacion_f", e.target.value)
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-1 px-4 mb-3 font-medium"
                                name="t_relacion_f"
                            >
                                <option value="">-Seleccione-</option>
                                <option value="PADRE">PADRE</option>
                                <option value="MADRE">MADRE</option>
                                <option value="CONYUGE">CONYUGE</option>
                                <option value="HIJO">HIJO</option>
                            </select>
                        </div>
                        <div className="md:w-1/2 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                apellidos y nombre(s)
                            </label>
                            <input
                                value={
                                    data.apellidos_nombres_f
                                        ? data.apellidos_nombres_f
                                        : ""
                                }
                                onChange={(e) =>
                                    setData(
                                        "apellidos_nombres_f",
                                        e.target.value
                                    )
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-1/4 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                tipo de documento
                            </label>
                            {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                            <select
                                value={
                                    data.tipo_documento_f
                                        ? data.tipo_documento_f
                                        : ""
                                }
                                onChange={(e) =>
                                    setData("tipo_documento_f", e.target.value)
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-1 px-4 mb-3 font-medium"
                                name="tipo_documento_f"
                            >
                                <option value="DNI">DNI</option>
                                <option value="CARNET DE EXTRANJERIA">
                                    CARNET DE EXTRANJERIA
                                </option>
                                <option value="PARTIDA DE NACIMIENTO">
                                    PARTIDA DE NACIMIENTO
                                </option>
                                <option value="OTRO DOCUMENTO">
                                    OTRO DOCUMENTO
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        {data.tipo_documento_f == "DNI" ? (
                            <div className="md:w-1/6 md:px-3 md:mb-0">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    D.N.I.
                                </label>
                                <input
                                    value={data.dni_f ? data.dni_f : ""}
                                    onChange={(e) =>
                                        setData("dni_f", e.target.value)
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}

                        {data.tipo_documento_f == "CARNET DE EXTRANJERIA" ? (
                            <div className="md:w-1/6 md:px-3 md:mb-0">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    CARNET DE EXTRANJERIA
                                </label>
                                <input
                                    value={
                                        data.carnet_extranjeria_f
                                            ? data.carnet_extranjeria_f
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setData(
                                            "carnet_extranjeria_f",
                                            e.target.value
                                        )
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}

                        {data.tipo_documento_f == "PARTIDA DE NACIMIENTO" ? (
                            <div className="md:w-1/6 md:px-3 md:mb-0">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    partida de nacimiento
                                </label>
                                <input
                                    value={
                                        data.partida_nacimiento_f
                                            ? data.partida_nacimiento_f
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setData(
                                            "partida_nacimiento_f",
                                            e.target.value
                                        )
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}

                        {data.tipo_documento_f == "OTRO DOCUMENTO" ? (
                            <div className="md:w-1/6 md:px-3 md:mb-0">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    OTO DOCUMENTO
                                </label>
                                <input
                                    value={
                                        data.otro_documento_f
                                            ? data.otro_documento_f
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setData(
                                            "otro_documento_f",
                                            e.target.value
                                        )
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}

                        <div className="md:w-1/6 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Fecha de nacimiento
                            </label>
                            <input
                                value={
                                    data.fecha_nacimiento_f
                                        ? data.fecha_nacimiento_f
                                        : ""
                                }
                                onChange={(e) =>
                                    setData(
                                        "fecha_nacimiento_f",
                                        e.target.value
                                    )
                                }
                                type="date"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                            />
                        </div>
                        <div className=" md:w-1/6 md:px-3">
                            <div className=" items-center ml-1">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2 ">
                                    vive
                                </label>
                            </div>
                            <div className="flex my-4 justify-around">
                                <div className="flex items-center">
                                    <input
                                        checked={
                                            data.estado_v_m_f == "SI"
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "estado_v_m_f",
                                                e.target.value
                                            )
                                        }
                                        type="radio"
                                        value="SI"
                                        name={familiaDat.id}
                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        SI
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        checked={
                                            data.estado_v_m_f == "NO"
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "estado_v_m_f",
                                                e.target.value
                                            )
                                        }
                                        type="radio"
                                        value="NO"
                                        name={familiaDat.id}
                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        NO
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/6 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                genero
                            </label>
                            {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                            <select
                                value={data.genero_f ? data.genero_f : ""}
                                onChange={(e) =>
                                    setData("genero_f", e.target.value)
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-1 px-4 mb-3 font-medium"
                                name="genero_f"
                            >
                                <option value="">-Seleccione-</option>
                                <option value="MASCULINO">MASCULINO</option>
                                <option value="FEMENINO">FEMENINO</option>
                                <option value="OTRO">OTRO</option>
                            </select>
                        </div>
                        <div className="md:w-1/6 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                estado civil
                            </label>
                            {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                            <select
                                value={
                                    data.estado_civil_f
                                        ? data.estado_civil_f
                                        : ""
                                }
                                onChange={(e) =>
                                    setData("estado_civil_f", e.target.value)
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-1 px-4 mb-3 font-medium"
                                name="estado_civil_f"
                            >
                                <option value="">-Seleccione-</option>
                                <option value="SOLTERO(A)">SOLTERO(A)</option>
                                <option value="CASADO(A)">CASADO(A)</option>
                                <option value="VIUDO(A)">VIUDO(A)</option>
                                <option value="DIVORCIADO(A)">
                                    DIVORCIADO(A)
                                </option>
                                <option value="CONCUBINO(A)">
                                    CONCUBINO(A)
                                </option>
                                SOLTERO(A)
                            </select>
                        </div>

                        <div className="md:w-1/6 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                nacionalidad
                            </label>
                            <input
                                value={
                                    data.nacionalidad_f
                                        ? data.nacionalidad_f
                                        : ""
                                }
                                onChange={(e) =>
                                    setData("nacionalidad_f", e.target.value)
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <InputError message={errors.message} className="mt-2" />

                    <div className="flex justify-center md:justify-start">
                        <PrimaryButton className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-blue-600 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-transparent opacity-10 group-hover:translate-x-0"></span>
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-transparent opacity-10 group-hover:translate-x-0"></span>
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
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                                </svg>
                                GUARDAR
                            </span>
                        </PrimaryButton>
                        <button
                            onClick={() => setEditingFam(false) && reset()}
                            className="ml-4 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-red-600 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                        >
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-transparent opacity-10 group-hover:translate-x-0"></span>
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-transparent opacity-10 group-hover:translate-x-0"></span>
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
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                                </svg>
                                CANCELAR
                            </span>
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/4 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                tipo de relacion
                            </label>

                            <input
                                disabled
                                value={
                                    familiaDat.t_relacion_f !== null
                                        ? familiaDat.t_relacion_f
                                        : ""
                                }
                                className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="t_relacion_f"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-1/2 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                apellidos y nombre(s)
                            </label>
                            <input
                                disabled
                                value={
                                    familiaDat.apellidos_nombres_f !== null
                                        ? familiaDat.apellidos_nombres_f
                                        : ""
                                }
                                className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="apellidos_nombres_f"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-1/4 md:px-3 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                tipo de documento
                            </label>
                            <input
                                disabled
                                value={
                                    familiaDat.tipo_documento_f !== null
                                        ? familiaDat.tipo_documento_f
                                        : ""
                                }
                                className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="tipo_documento_f"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        {familiaDat.tipo_documento_f == "DNI" ? (
                            <div className="md:w-1/6 md:px-3 ">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    D.N.I.
                                </label>
                                <input
                                    disabled
                                    value={
                                        familiaDat.dni_f !== null
                                            ? familiaDat.dni_f
                                            : ""
                                    }
                                    className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                    id="dni_f"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}

                        {familiaDat.tipo_documento_f ==
                        "CARNET DE EXTRANJERIA" ? (
                            <div className="md:w-1/6 md:px-3 ">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    CARNET DE EXTRANJERIA
                                </label>
                                <input
                                    disabled
                                    value={
                                        familiaDat.carnet_extranjeria_f !== null
                                            ? familiaDat.carnet_extranjeria_f
                                            : ""
                                    }
                                    className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                    id="carnet_extranjeria_f"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}

                        {familiaDat.tipo_documento_f ==
                        "PARTIDA DE NACIMIENTO" ? (
                            <div className="md:w-1/6 md:px-3 ">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    partida de nacimiento
                                </label>
                                <input
                                    disabled
                                    value={
                                        familiaDat.partida_nacimiento_f !== null
                                            ? familiaDat.partida_nacimiento_f
                                            : ""
                                    }
                                    className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                    id="partida_nacimiento_f"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}

                        {familiaDat.tipo_documento_f == "OTRO DOCUMENTO" ? (
                            <div className="md:w-1/6 md:px-3 ">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    OTO DOCUMENTO
                                </label>
                                <input
                                    disabled
                                    value={
                                        familiaDat.otro_documento_f !== null
                                            ? familiaDat.otro_documento_f
                                            : ""
                                    }
                                    className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}

                        <div className="md:w-1/6 md:px-3 ">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Fecha de nacimiento
                            </label>
                            <input
                                disabled
                                value={
                                    familiaDat.fecha_nacimiento_f !== null
                                        ? familiaDat.fecha_nacimiento_f
                                        : ""
                                }
                                type="date"
                                className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                            />
                        </div>
                        <div className=" md:w-1/6 md:px-3">
                            <div className=" items-center ml-1">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2 ">
                                    vive
                                </label>
                            </div>
                            <div className="flex my-4 justify-around">
                                <div className="flex items-center">
                                    <input
                                        disabled
                                        checked={
                                            familiaDat.estado_v_m_f == "SI"
                                                ? true
                                                : false
                                        }
                                        type="radio"
                                        value="SI"
                                        className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        SI
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        disabled
                                        checked={
                                            familiaDat.estado_v_m_f == "NO"
                                                ? true
                                                : false
                                        }
                                        type="radio"
                                        value="NO"
                                        className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        NO
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/6 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                genero
                            </label>
                            <input
                                disabled
                                value={
                                    familiaDat.genero_f !== null
                                        ? familiaDat.genero_f
                                        : ""
                                }
                                className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-1/6 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                estado civil
                            </label>
                            <input
                                disabled
                                value={
                                    familiaDat.estado_civil_f !== null
                                        ? familiaDat.estado_civil_f
                                        : ""
                                }
                                className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-1/6 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                nacionalidad
                            </label>
                            <input
                                disabled
                                value={
                                    familiaDat.nacionalidad_f !== null
                                        ? familiaDat.nacionalidad_f
                                        : ""
                                }
                                className=" w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default FamiliafamiliaDat;
