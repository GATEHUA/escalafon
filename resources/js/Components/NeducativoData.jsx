import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";

function NeducativoData({ neducativoDat }) {
    const [editingNed, setEditingNed] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        nivel_educativo_ne: neducativoDat.nivel_educativo_ne || "",
        etapa_ne: neducativoDat.etapa_ne || "",
        nombre_institucion_ne: neducativoDat.nombre_institucion_ne || "",
        descripcion_ne: neducativoDat.descripcion_ne || "",
        fecha_culminacion_ne: neducativoDat.fecha_culminacion_ne || "",
        documento_val_ne: neducativoDat.documento_val_ne || "",
        _method: "put",
    });
    console.log("data.documento_val_ne");
    console.log(data.nivel_educativo_ne);
    const handleDestroyNed = (e) => {
        e.preventDefault();
        Swal.fire({
            title: `¿Estás seguro?`,
            text: `Se eliminara el registro de su grado academico:  ${
                data.nivel_educativo_ne != ""
                    ? data.nivel_educativo_ne
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
                Inertia.delete(route("neducativo.destroy", neducativoDat.id), {
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
    const neducativoEdit = (e) => {
        e.preventDefault();
        post(route("neducativo.update", neducativoDat.id), {
            preserveScroll: true,
            onSuccess: () => setEditingNed(false),
        });
    };

    // const {data, setData,post, processing, reset, errors} = useForm({
    //     nivel_educativo_ne: neducativoDataEdit.nivel_educativo_ne,
    //     etapa_ne: neducativoDataEdit.etapa_ne,
    //     nombre_institucion_ne: neducativoDataEdit.nombre_institucion_ne,
    //     descripcion_ne: neducativoDataEdit.descripcion_ne,
    //     fecha_culminacion_ne: neducativoDataEdit.fecha_culminacion_ne,
    //     documento_val_ne: neducativoDataEdit.documento_val_ne,
    //     _method: 'put',
    //   })
    //   console.log('neducativoDataEdit');
    //   console.log(neducativoDataEdit);
    //   const neducativoEdit = (e)=>{
    //     e.preventDefault()
    //     post(route('neducativo.update',neducativoDataEdit.id))
    //   }
    return (
        <div className="bg-transparent border border-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
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
                            onClick={() => setEditingNed(true)}
                        >
                            Editar
                        </button>
                        {/* <Dropdown.Link
                            as="button"
                            href={route("neducativo.edit", neducativoDat.id)}
                            method="get"
                            className="text-white"
                        >
                            Editar
                        </Dropdown.Link> */}
                        {/* <Dropdown.Link
                            as="button"
                            href={route("neducativo.destroy", neducativoDat.id)}
                            method="delete"
                            preserveScroll={true}
                        >
                            Eliminar
                        </Dropdown.Link> */}
                        <button
                            onClick={handleDestroyNed}
                            className="block w-full px-4 py-2 text-left font-bold text-sm leading-5 text-gray-700 hover:bg-red-500 hover:text-white transition duration-150 ease-in-out"
                        >
                            Eliminar
                        </button>
                    </Dropdown.Content>
                </Dropdown>
            </div>

            {editingNed ? (
                <form onSubmit={neducativoEdit} encType="multipart/form-data">
                    <div className="-mx-3 md:flex mb-2">
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="nivel_educativo_ne"
                            >
                                tipo
                            </label>
                            <select
                                value={data.nivel_educativo_ne}
                                onChange={(e) =>
                                    setData(
                                        "nivel_educativo_ne",
                                        e.target.value
                                    )
                                }
                                id="nivel_educativo_ne"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-1 px-4 mb-3 font-medium"
                                name="nivel_educativo_ne"
                            >
                                <option value="">-Seleccione-</option>
                                <option value="PRIMARIA">PRIMARIA</option>
                                <option value="SECUNDARIA">SECUNDARIA</option>
                                <option value="TECNICO">TECNICO</option>
                                <option value="UNIVERSITARIO">
                                    UNIVERSITARIO
                                </option>
                                <option value="MAESTRIA">MAESTRIA</option>
                                <option value="DOCTORADO">DOCTORADO</option>
                                <option value="ESPECIALIDAD">
                                    ESPECIALIDAD
                                </option>
                                <option value="OTRO DE MAYOR TRASCENDENCIA">
                                    OTRO DE MAYOR TRASCENDENCIA
                                </option>
                            </select>
                        </div>
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="etapa_ne"
                            >
                                ETAPA
                            </label>
                            {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                            <select
                                value={data.etapa_ne}
                                onChange={(e) =>
                                    setData("etapa_ne", e.target.value)
                                }
                                id="etapa_ne"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-1 px-4 mb-3 font-medium"
                                name="etapa_ne"
                            >
                                {data.nivel_educativo_ne == "PRIMARIA" ||
                                data.nivel_educativo_ne == "SECUNDARIA" ||
                                data.nivel_educativo_ne == "TECNICO" ? (
                                    <>
                                        <option value="">-Seleccione-</option>
                                        <option value="INCOMPLETA">
                                            INCOMPLETA
                                        </option>
                                        <option value="COMPLETA">
                                            COMPLETA
                                        </option>
                                    </>
                                ) : null}
                                {data.nivel_educativo_ne == "UNIVERSITARIO" ? (
                                    <>
                                        <option value="">-Seleccione-</option>
                                        <option value="INCOMPLETA">
                                            INCOMPLETA
                                        </option>
                                        <option value="EGRESADO">
                                            EGRESADO
                                        </option>
                                        <option value="BACHILLER">
                                            BACHILLER
                                        </option>
                                        <option value="TITULADO">
                                            TITULADO
                                        </option>
                                    </>
                                ) : null}
                                {data.nivel_educativo_ne == "MAESTRIA" ||
                                data.nivel_educativo_ne == "DOCTORADO" ||
                                data.nivel_educativo_ne == "ESPECIALIDAD" ||
                                data.nivel_educativo_ne ==
                                    "OTRO DE MAYOR TRASCENDENCIA" ? (
                                    <>
                                        <option value="">-Seleccione-</option>
                                        <option value="INCOMPLETA">
                                            INCOMPLETA
                                        </option>
                                        <option value="EGRESADO">
                                            EGRESADO
                                        </option>
                                        <option value="GRADO">GRADO</option>
                                    </>
                                ) : null}
                            </select>
                        </div>
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Fecha de culminacion
                            </label>
                            <input
                                value={data.fecha_culminacion_ne}
                                onChange={(e) =>
                                    setData(
                                        "fecha_culminacion_ne",
                                        e.target.value
                                    )
                                }
                                type="date"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                            />
                        </div>
                        <div className="w-1/4 px-3">
                            <label
                                htmlFor="dropzone-file_NE"
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                                documento de validacion
                            </label>

                            {/* value={asset(`public/documento_val_ne_Per/${data.documento_val_ne}`)} */}
                            <input
                                onChange={(e) => {
                                    setData(
                                        "documento_val_ne",
                                        e.target.files[0]
                                    );
                                }}
                                type="file"
                                className="
                    text-sm text-white border rounded-full border-white hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600
               file:py-1 file:px-3
              file:rounded-full file:border-0
              
              file:text-md file:font-semibold  file:text-white
              file:bg-blue-600 
              hover:file:cursor-pointer hover:file:opacity-90 w-full "
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        {data.nivel_educativo_ne == "PRIMARIA" ||
                        data.nivel_educativo_ne == "SECUNDARIA" ? (
                            <>
                                <div className="w-full px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="nombre_institucion_ne"
                                    >
                                        NOMBRE DE LA INSTITUCION
                                    </label>
                                    <input
                                        value={data.nombre_institucion_ne}
                                        onChange={(e) =>
                                            setData(
                                                "nombre_institucion_ne",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                        id="nombre_institucion_ne"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-1/2 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="nombre_institucion_ne"
                                    >
                                        NOMBRE DE LA INSTITUCION
                                    </label>
                                    <input
                                        value={data.nombre_institucion_ne}
                                        onChange={(e) =>
                                            setData(
                                                "nombre_institucion_ne",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                        id="nombre_institucion_ne"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                                <div className="w-1/2 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="descripcion_ne"
                                    >
                                        DESCRIPCION
                                    </label>
                                    <input
                                        value={data.descripcion_ne}
                                        onChange={(e) =>
                                            setData(
                                                "descripcion_ne",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                        id="descripcion_ne"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <InputError message={errors.message} className="mt-2" />

                    <div className="flex">
                        <PrimaryButton className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-blue-600 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
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
                            onClick={() => setEditingNed(false) && reset()}
                            className="ml-4 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-red-600 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                        >
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
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
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                tipo
                            </label>

                            <input
                                disabled
                                value={
                                    neducativoDat.nivel_educativo_ne !== null
                                        ? neducativoDat.nivel_educativo_ne
                                        : ""
                                }
                                type="text"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                            />
                        </div>
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                ETAPA
                            </label>
                            <input
                                disabled
                                value={
                                    neducativoDat.etapa_ne !== null
                                        ? neducativoDat.etapa_ne
                                        : ""
                                }
                                type="text"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                            />
                        </div>
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Fecha de culminacion
                            </label>
                            <input
                                disabled
                                value={
                                    neducativoDat.fecha_culminacion_ne !== null
                                        ? neducativoDat.fecha_culminacion_ne
                                        : ""
                                }
                                type="date"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                                id="fecha_culminacion_ne"
                            />
                        </div>
                        <div className="w-1/4 px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                documento de validacion
                            </label>

                            <input
                                disabled
                                value={
                                    neducativoDat.documento_val_ne !== null
                                        ? neducativoDat.documento_val_ne
                                        : ""
                                }
                                type="text"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3 "
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        {neducativoDat.nivel_educativo_ne == "PRIMARIA" ||
                        neducativoDat.nivel_educativo_ne == "SECUNDARIA" ? (
                            <>
                                <div className="w-full px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        NOMBRE DE LA INSTITUCION
                                    </label>
                                    <input
                                        disabled
                                        value={
                                            neducativoDat.nombre_institucion_ne !==
                                            null
                                                ? neducativoDat.nombre_institucion_ne
                                                : ""
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        NOMBRE DE LA INSTITUCION
                                    </label>
                                    <input
                                        disabled
                                        value={
                                            neducativoDat.nombre_institucion_ne !==
                                            null
                                                ? neducativoDat.nombre_institucion_ne
                                                : ""
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                                <div className="w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        DESCRIPCION
                                    </label>
                                    <input
                                        disabled
                                        value={
                                            neducativoDat.descripcion_ne !==
                                            null
                                                ? neducativoDat.descripcion_ne
                                                : ""
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-1 px-4 mb-3"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
            {/* </> */}

            {/* // } */}
        </div>
    );
}

export default NeducativoData;
