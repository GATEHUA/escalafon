import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

function OtrotrabajoData({ otrotrabajoDat }) {
    const [editingOtr, setEditingOtr] = useState(false);
    const { data, setData, put, processing, reset, errors } = useForm({
        estado_ot: otrotrabajoDat.estado_ot || "",
        cargo_ot: otrotrabajoDat.cargo_ot || "",
        nombre_institucion_ot: otrotrabajoDat.nombre_institucion_ot || "",
        frecuencia_diaria_ot: otrotrabajoDat.frecuencia_diaria_ot || "",
        hora_entrada_ot: otrotrabajoDat.hora_entrada_ot || "",
        hora_salida_ot: otrotrabajoDat.hora_salida_ot,
    });
    const handleDestroyOtr = (e) => {
        e.preventDefault();
        Swal.fire({
            title: `¿Estás seguro?`,
            text: `Se eliminara el registro de su otro trabajo, de manera permanente`,
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, bórralo!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(
                    route("otrotrabajo.destroy", otrotrabajoDat.id),
                    {
                        preserveScroll: true,
                    }
                );
                Swal.fire(
                    "¡Eliminado!",
                    "Su registro ha sido eliminado",
                    "success"
                );
            }
        });
    };
    const otrotrabajoEdit = (e) => {
        e.preventDefault();
        put(route("otrotrabajo.update", otrotrabajoDat.id), {
            preserveScroll: true,
            onSuccess: () => setEditingOtr(false),
        });
    };
    return (
        <div className="bg-transparent shadow-md border border-white rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
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
                            onClick={() => setEditingOtr(true)}
                        >
                            Editar
                        </button>
                        {/* <Dropdown.Link
                            as="button"
                            href={route(
                                "otrotrabajo.destroy",
                                otrotrabajoDat.id
                            )}
                            method="delete"
                            preserveScroll={true}
                        >
                            Eliminar
                        </Dropdown.Link> */}
                        <button
                            onClick={handleDestroyOtr}
                            className="block w-full px-4 py-2 text-left font-bold text-sm leading-5 text-gray-700 hover:bg-red-500 hover:text-white transition duration-150 ease-in-out"
                        >
                            Eliminar
                        </button>
                    </Dropdown.Content>
                </Dropdown>
            </div>
            {editingOtr ? (
                <form onSubmit={otrotrabajoEdit} encType="multipart/form-data">
                    <div className="-mx-3 md:flex md:mb-2">
                        <div className="md:w-1/5 md:px-3">
                            <div className=" items-center ml-1">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2 ">
                                    ESTADO
                                </label>
                            </div>
                            <div className="flex my-4 justify-between">
                                <div className="flex items-center">
                                    <input
                                        checked={
                                            data.estado_ot == "SI"
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            setData("estado_ot", e.target.value)
                                        }
                                        id="estado_ot"
                                        type="radio"
                                        value="SI"
                                        name="estado_ot"
                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        SI
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        checked={
                                            data.estado_ot == "NO"
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            setData("estado_ot", e.target.value)
                                        }
                                        id="estado_ot-2"
                                        type="radio"
                                        value="NO"
                                        name="estado_ot"
                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        NO
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/5 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                CARGO DESEMPEÑADO
                            </label>
                            <input
                                value={data.cargo_ot ? data.cargo_ot : ""}
                                onChange={(e) =>
                                    setData("cargo_ot", e.target.value)
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="cargo_ot"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-1/5 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                hora de entrada
                            </label>
                            <input
                                value={
                                    data.hora_entrada_ot
                                        ? data.hora_entrada_ot
                                        : ""
                                }
                                onChange={(e) =>
                                    setData("hora_entrada_ot", e.target.value)
                                }
                                type="time"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                                id="hora_entrada_ot"
                            />
                        </div>
                        <div className="md:w-1/5 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                hora de salida
                            </label>
                            <input
                                value={
                                    data.hora_salida_ot
                                        ? data.hora_salida_ot
                                        : ""
                                }
                                onChange={(e) =>
                                    setData("hora_salida_ot", e.target.value)
                                }
                                type="time"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                                id="hora_salida_ot"
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-4/6 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                nombre de la institucion
                            </label>
                            <input
                                value={
                                    data.nombre_institucion_ot
                                        ? data.nombre_institucion_ot
                                        : ""
                                }
                                onChange={(e) =>
                                    setData(
                                        "nombre_institucion_ot",
                                        e.target.value
                                    )
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="nombre_institucion_ot"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-2/6 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                FRECUENCIA DIARIA
                            </label>
                            <input
                                value={
                                    data.frecuencia_diaria_ot
                                        ? data.frecuencia_diaria_ot
                                        : ""
                                }
                                onChange={(e) =>
                                    setData(
                                        "frecuencia_diaria_ot",
                                        e.target.value
                                    )
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="frecuencia_diaria_ot"
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
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"></path>
                                </svg>
                                GUARDAR
                            </span>
                        </PrimaryButton>
                        <button
                            onClick={() => setEditingOtr(false) && reset()}
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
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125 73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z"></path>
                                </svg>
                                CANCELAR
                            </span>
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <div className="-mx-3 md:flex md:mb-2">
                        <div className="md:w-1/5 md:px-3">
                            <div className=" items-center ml-1">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2 ">
                                    ESTADO
                                </label>
                            </div>
                            <div className="flex my-4 justify-between">
                                <div className="flex items-center">
                                    <input
                                        disabled
                                        checked={
                                            otrotrabajoDat.estado_ot == "SI"
                                                ? true
                                                : false
                                        }
                                        type="radio"
                                        value="SI"
                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        SI
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        disabled
                                        checked={
                                            otrotrabajoDat.estado_ot == "NO"
                                                ? true
                                                : false
                                        }
                                        type="radio"
                                        value="NO"
                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        NO
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/5 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                CARGO DESEMPEÑADO
                            </label>
                            <input
                                disabled
                                defaultValue={otrotrabajoDat.cargo_ot}
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="cargo_ot"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-1/5 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                hora de entrada
                            </label>
                            <input
                                disabled
                                defaultValue={otrotrabajoDat.hora_entrada_ot}
                                type="time"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                                id="hora_entrada_ot"
                            />
                        </div>
                        <div className="md:w-1/5 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                hora de salida
                            </label>
                            <input
                                disabled
                                defaultValue={otrotrabajoDat.hora_salida_ot}
                                type="time"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                                id="hora_salida_ot"
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-4/6 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                nombre de la institucion
                            </label>
                            <input
                                disabled
                                defaultValue={
                                    otrotrabajoDat.nombre_institucion_ot
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="nombre_institucion_ot"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-2/6 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                FRECUENCIA DIARIA
                            </label>
                            <input
                                disabled
                                defaultValue={
                                    otrotrabajoDat.frecuencia_diaria_ot
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                id="frecuencia_diaria_ot"
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

export default OtrotrabajoData;
