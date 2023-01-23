import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

function DocumentoData({ documentoDat }) {
    const [editingDoc, setEditingDoc] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        t_nombre_documento_d: documentoDat.t_nombre_documento_d || "",
        descripcion_documento_d: documentoDat.descripcion_documento_d || "",
        documento_d: documentoDat.documento_d || "",
        fecha_documento_d: documentoDat.fecha_documento_d || "",
        _method: "put",
    });
    const handleDestroyDoc = (e) => {
        e.preventDefault();
        Swal.fire({
            title: `¿Estás seguro?`,
            text: `Se eliminara el registro de su docuento con nombre: ${
                data.t_nombre_documento_d != ""
                    ? data.t_nombre_documento_d
                    : "(No definido)"
            }, de manera permanente`,
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, bórralo!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route("documento.destroy", documentoDat.id), {
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
    const documentoEdit = (e) => {
        e.preventDefault();
        post(route("documento.update", documentoDat.id), {
            preserveScroll: true,
            onSuccess: () => setEditingDoc(false),
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
                            onClick={() => setEditingDoc(true)}
                        >
                            Edit
                        </button>
                        {/* <Dropdown.Link
                            as="button"
                            href={route("documento.edit", documentoDat.id)}
                            method="get"
                            className="text-white"
                        >
                            Editar
                        </Dropdown.Link> */}
                        {/* <Dropdown.Link
                            as="button"
                            href={route("documento.destroy", documentoDat.id)}
                            method="delete"
                            preserveScroll={true}
                        >
                            Eliminar
                        </Dropdown.Link> */}
                        <button
                            onClick={handleDestroyDoc}
                            className="block w-full px-4 py-2 text-left font-bold text-sm leading-5 text-gray-700 hover:bg-red-500 hover:text-white transition duration-150 ease-in-out"
                        >
                            Eliminar
                        </button>
                    </Dropdown.Content>
                </Dropdown>
            </div>
            {editingDoc ? (
                <form onSubmit={documentoEdit} encType="multipart/form-data">
                    <div className="-mx-3 md:flex mb-2">
                        <div className="w-1/5 px-3">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="t_nombre_documento_d"
                            >
                                nombre
                            </label>
                            <input
                                value={data.t_nombre_documento_d}
                                onChange={(e) =>
                                    setData(
                                        "t_nombre_documento_d",
                                        e.target.value
                                    )
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                id="t_nombre_documento_d"
                                type="text"
                                placeholder=""
                            />
                            <InputError
                                message={errors.t_nombre_documento_d}
                                className="mt-.5"
                            />
                        </div>
                        <div className="w-2/5 px-3">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="descripcion_documento_d"
                            >
                                descripcion
                            </label>
                            <input
                                value={data.descripcion_documento_d}
                                onChange={(e) =>
                                    setData(
                                        "descripcion_documento_d",
                                        e.target.value
                                    )
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                id="descripcion_documento_d"
                                type="text"
                                placeholder=""
                            />
                            <InputError
                                message={errors.descripcion_documento_d}
                                className="mt-.5"
                            />
                        </div>
                        <div className="w-1/6 px-3 mb-6 md:mb-0">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="fecha_documento_d"
                            >
                                Fecha deL DOCUMENTO
                            </label>
                            <input
                                value={data.fecha_documento_d}
                                onChange={(e) =>
                                    setData("fecha_documento_d", e.target.value)
                                }
                                type="date"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                id="fecha_documento_d"
                            />
                            <InputError
                                message={errors.fecha_documento_d}
                                className="mt-.5"
                            />
                        </div>
                        <div className="w-1/4 px-3">
                            <label
                                htmlFor="dropzone-file_docext"
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                                documento de validacion
                            </label>

                            <input
                                name="documento_d"
                                onChange={(e) => {
                                    setData("documento_d", e.target.files[0]);
                                }}
                                id="dropzone-file_docext"
                                type="file"
                                className="
                    text-sm text-white border rounded-full border-white hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600
               file:py-3 file:px-3
              file:rounded-full file:border-0
              
              file:text-md file:font-semibold  file:text-white
              file:bg-blue-600 
              hover:file:cursor-pointer hover:file:opacity-90 w-full "
                            />

                            <InputError
                                message={errors.documento_d}
                                className="mt-.5 flex justify-end"
                            />
                        </div>
                    </div>

                    <div className="flex">
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
                                    <path d="M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"></path>
                                </svg>
                                GUARDAR
                            </span>
                        </PrimaryButton>
                        <button
                            onClick={() => setEditingDoc(false) && reset()}
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
                <div className="-mx-3 md:flex mb-2">
                    <div className="w-1/5 px-3">
                        <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                            nombre
                        </label>
                        <input
                            disabled
                            defaultValue={documentoDat.t_nombre_documento_d}
                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                            type="text"
                            placeholder=""
                        />
                    </div>
                    <div className="w-2/5 px-3">
                        <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                            descripcion
                        </label>
                        <input
                            disabled
                            defaultValue={documentoDat.descripcion_documento_d}
                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                            type="text"
                            placeholder=""
                        />
                    </div>
                    <div className="w-1/6 px-3 mb-6 md:mb-0">
                        <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                            Fecha deL DOCUMENTO
                        </label>
                        <input
                            disabled
                            defaultValue={documentoDat.fecha_documento_d}
                            type="date"
                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                        />
                    </div>
                    <div className="w-1/4 px-3">
                        <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                            documento de validacion
                        </label>

                        <input
                            disabled
                            defaultValue={documentoDat.documento_d}
                            type="text"
                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DocumentoData;
