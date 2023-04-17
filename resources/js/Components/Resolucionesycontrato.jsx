import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

function Resolucionesycontrato({ resolucionesycontratoDat, img }) {
    const [editingRes, setEditingRes] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        cod_res: resolucionesycontratoDat.cod_res || "",
        tipo_res: resolucionesycontratoDat.tipo_res || "",
        fecha_dic_res: resolucionesycontratoDat.fecha_dic_res || "",
        des_art_pri_res: resolucionesycontratoDat.des_art_pri_res || "",
        vigencia_res: resolucionesycontratoDat.vigencia_res || "",
        categoria_alcanz_res:
            resolucionesycontratoDat.categoria_alcanz_res || "",
        nivel_alcanz_res: resolucionesycontratoDat.nivel_alcanz_res || "",
        antiguedad_in_res: resolucionesycontratoDat.antiguedad_in_res || "",
        antiguedad_sa_res: resolucionesycontratoDat.antiguedad_sa_res || "",
        condicion_res: resolucionesycontratoDat.condicion_res || "",
        dependencia_res: resolucionesycontratoDat.dependencia_res || "",
        observacion_res: resolucionesycontratoDat.observacion_res || "",
        documento_val_res: resolucionesycontratoDat.documento_val_res || "",
        _method: "put",
    });
    const handleDestroyRes = (e) => {
        e.preventDefault();
        Swal.fire({
            title: `¿Estás seguro?`,
            text: `Se eliminara el registro de su resolucion: ${
                data.tipo_res != "" ? data.tipo_res : "(No definido)"
            }, de manera permanente`,
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, bórralo!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(
                    route(
                        "resolucionesycontrato.destroy",
                        resolucionesycontratoDat.id
                    ),
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
    const resolucionesycontratoEdit = (e) => {
        e.preventDefault();
        post(
            route("resolucionesycontrato.update", resolucionesycontratoDat.id),
            {
                preserveScroll: true,
                onSuccess: () => setEditingRes(false),
            }
        );
    };
    return (
        <div className="border border-white bg-transparent shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
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
                            onClick={() => setEditingRes(true)}
                        >
                            Editar
                        </button>
                        {/* <Dropdown.Link
                            as="button"
                            href={route(
                                "resolucionesycontrato.edit",
                                resolucionesycontratoDat.id
                            )}
                            method="get"
                            className="text-white"
                        >
                            Editar
                        </Dropdown.Link> */}
                        {/* <Dropdown.Link
                            as="button"
                            href={route(
                                "resolucionesycontrato.destroy",
                                resolucionesycontratoDat.id
                            )}
                            method="delete"
                            preserveScroll={true}
                        >
                            Eliminar
                        </Dropdown.Link> */}
                        <button
                            onClick={handleDestroyRes}
                            className="block w-full px-4 py-2 text-left font-bold text-sm leading-5 text-gray-700 hover:bg-red-500 hover:text-white transition duration-150 ease-in-out"
                        >
                            Eliminar
                        </button>
                    </Dropdown.Content>
                </Dropdown>
            </div>
            {editingRes ? (
                <form
                    onSubmit={resolucionesycontratoEdit}
                    encType="multipart/form-data"
                >
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/4 md:px-3">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="tipo_res"
                            >
                                tipo
                            </label>
                            {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                            <select
                                value={data.tipo_res}
                                onChange={(e) =>
                                    setData("tipo_res", e.target.value)
                                }
                                id="tipo_res"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
                                name="tipo_res"
                            >
                                <option value="">-Seleccione-</option>
                                <option value="INGRESO">INGRESO</option>
                                <option value="NOMBRAMIENTO">
                                    NOMBRAMIENTO
                                </option>
                                <option value="RATIFICACION">
                                    RATIFICACION
                                </option>
                                <option value="CONTRATO">CONTRATO</option>
                                <option value="OTRO">OTRO</option>
                            </select>
                            <InputError
                                message={errors.tipo_res}
                                className="mt-.5"
                            />
                        </div>
                        <div className="md:w-1/4 md:px-3">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="cod_res"
                            >
                                N° de RESOLUCION
                            </label>
                            <input
                                value={data.cod_res}
                                onChange={(e) =>
                                    setData("cod_res", e.target.value)
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                id="cod_res"
                                type="text"
                                placeholder=""
                            />
                            <InputError
                                message={errors.cod_res}
                                className="mt-.5"
                            />
                        </div>
                        <div className="md:w-1/4 md:px-3">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="fecha_dic_res"
                            >
                                Fecha deL DOCUMENTO
                            </label>
                            <input
                                value={data.fecha_dic_res}
                                onChange={(e) =>
                                    setData("fecha_dic_res", e.target.value)
                                }
                                type="date"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                id="fecha_dic_res"
                            />
                            <InputError
                                message={errors.fecha_dic_res}
                                className="mt-.5"
                            />
                        </div>
                        <div className="md:w-1/4 md:px-3">
                            <label
                                htmlFor="dropzone-file_res"
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                            >
                                documento de validacion
                            </label>

                            <input
                                name="documento_val_res"
                                onChange={(e) => {
                                    setData(
                                        "documento_val_res",
                                        e.target.files[0]
                                    );
                                }}
                                id="dropzone-file_res"
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
                                message={errors.documento_val_res}
                                className="mt-.5 flex justify-end"
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex ">
                        <div className="md:w-2/5 md:px-3">
                            <label
                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                htmlFor="des_art_pri_res"
                            >
                                SE RESUELVE (ARTICULO)
                            </label>
                            <textarea
                                rows="8"
                                value={data.des_art_pri_res}
                                onChange={(e) =>
                                    setData("des_art_pri_res", e.target.value)
                                }
                                className="hover:border-blue-600 w-full bg-transparent  text-white border border-white rounded py-3 px-4 mb-3"
                                id="des_art_pri_res"
                                type="text"
                                placeholder=""
                            ></textarea>
                            <InputError
                                message={errors.des_art_pri_res}
                                className="mt-.5"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <div className="md:flex ">
                                <div className="md:w-1/3 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="vigencia_res"
                                    >
                                        vigencia
                                    </label>
                                    <input
                                        value={data.vigencia_res}
                                        onChange={(e) =>
                                            setData(
                                                "vigencia_res",
                                                e.target.value
                                            )
                                        }
                                        type="date"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                        id="vigencia_res"
                                    />
                                    <InputError
                                        message={errors.vigencia_res}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/3 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="categoria_alcanz_res"
                                    >
                                        categoria alcanzada(o)
                                    </label>
                                    <input
                                        value={data.categoria_alcanz_res}
                                        onChange={(e) =>
                                            setData(
                                                "categoria_alcanz_res",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="categoria_alcanz_res"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.categoria_alcanz_res}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/3 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="nivel_alcanz_res"
                                    >
                                        nivel alcanzada(o)
                                    </label>
                                    <input
                                        value={data.nivel_alcanz_res}
                                        onChange={(e) =>
                                            setData(
                                                "nivel_alcanz_res",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="nivel_alcanz_res"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.nivel_alcanz_res}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                            <div className="md:flex ">
                                <div className="md:w-1/4 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="antiguedad_in_res"
                                    >
                                        antiguedad desde
                                    </label>
                                    <input
                                        value={data.antiguedad_in_res}
                                        onChange={(e) =>
                                            setData(
                                                "antiguedad_in_res",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="antiguedad_in_res"
                                        type="date"
                                    />
                                    <InputError
                                        message={errors.antiguedad_in_res}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="antiguedad_sa_res"
                                    >
                                        antiguedad hasta
                                    </label>
                                    <input
                                        value={data.antiguedad_sa_res}
                                        onChange={(e) =>
                                            setData(
                                                "antiguedad_sa_res",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="antiguedad_sa_res"
                                        type="date"
                                    />
                                    <InputError
                                        message={errors.antiguedad_sa_res}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="condicion_res"
                                    >
                                        condicion
                                    </label>
                                    <input
                                        value={data.condicion_res}
                                        onChange={(e) =>
                                            setData(
                                                "condicion_res",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="condicion_res"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.condicion_res}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="dependencia_res"
                                    >
                                        dependencia O FACULTAD
                                    </label>
                                    <input
                                        value={data.dependencia_res}
                                        onChange={(e) =>
                                            setData(
                                                "dependencia_res",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="dependencia_res"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.dependencia_res}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-full md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="observacion_res"
                                    >
                                        observaciones
                                    </label>
                                    <input
                                        value={data.observacion_res}
                                        onChange={(e) =>
                                            setData(
                                                "observacion_res",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="observacion_res"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.observacion_res}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

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
                                    <path d="M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"></path>
                                </svg>
                                GUARDAR
                            </span>
                        </PrimaryButton>
                        <button
                            onClick={() => setEditingRes(false) && reset()}
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
                    <div className="-mx-3 md:flex md:mb-2">
                        <div className="md:w-1/4 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                tipo
                            </label>
                            {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}

                            <input
                                disabled
                                defaultValue={resolucionesycontratoDat.tipo_res}
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                id="cod_res"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="md:w-1/4 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                N° de RESOLUCION
                            </label>

                            <input
                                disabled
                                defaultValue={resolucionesycontratoDat.cod_res}
                                type="text"
                                placeholder=""
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                            />
                        </div>
                        <div className="md:w-1/4 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Fecha deL DOCUMENTO
                            </label>

                            <input
                                disabled
                                defaultValue={
                                    resolucionesycontratoDat.fecha_dic_res
                                }
                                type="date"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                            />
                        </div>
                        <div className="md:w-1/4 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                documento de validacion
                            </label>

                            {/* <input
                                disabled
                                defaultValue={
                                    resolucionesycontratoDat.documento_val_res
                                }
                                type="text"
                                placeholder=""
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                            /> */}

                            {resolucionesycontratoDat.documento_val_res ? (
                                <a
                                    href={`${img}documento_val_res_Per/${resolucionesycontratoDat.documento_val_res}`}
                                    target="_blank"
                                    // type="text"
                                    className="hover:border-blue-600 flex bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                >
                                    {resolucionesycontratoDat.documento_val_res}
                                </a>
                            ) : (
                                <input
                                    disabled
                                    value={""}
                                    type="text"
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                />
                            )}
                        </div>
                    </div>
                    <div className="-mx-3 md:flex ">
                        <div className="md:w-2/5 md:px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                SE RESUELVE (ARTICULO)
                            </label>
                            <textarea
                                disabled
                                rows="8"
                                defaultValue={
                                    resolucionesycontratoDat.des_art_pri_res
                                }
                                className="hover:border-blue-600 w-full bg-transparent  text-white border border-white rounded py-3 px-4 mb-3"
                                id="des_art_pri_res"
                                type="text"
                                placeholder=""
                            ></textarea>
                        </div>
                        <div className="md:w-3/5">
                            <div className="md:flex ">
                                <div className="md:w-1/3 md:px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        vigencia
                                    </label>

                                    <input
                                        disabled
                                        defaultValue={
                                            resolucionesycontratoDat.vigencia_res
                                        }
                                        type="date"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                    />
                                </div>
                                <div className="md:w-1/3 md:px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        categoria alcanzada(o)
                                    </label>

                                    <input
                                        disabled
                                        defaultValue={
                                            resolucionesycontratoDat.categoria_alcanz_res
                                        }
                                        type="text"
                                        placeholder=""
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                    />
                                </div>
                                <div className="md:w-1/3 md:px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        nivel alcanzada(o)
                                    </label>

                                    <input
                                        disabled
                                        defaultValue={
                                            resolucionesycontratoDat.nivel_alcanz_res
                                        }
                                        type="text"
                                        placeholder=""
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                    />
                                </div>
                            </div>
                            <div className="md:flex ">
                                <div className="md:w-1/4 md:px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        antiguedad desde
                                    </label>

                                    <input
                                        disabled
                                        defaultValue={
                                            resolucionesycontratoDat.antiguedad_in_res
                                        }
                                        type="date"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        antiguedad hasta
                                    </label>

                                    <input
                                        disabled
                                        defaultValue={
                                            resolucionesycontratoDat.antiguedad_sa_res
                                        }
                                        type="date"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        condicion
                                    </label>

                                    <input
                                        disabled
                                        defaultValue={
                                            resolucionesycontratoDat.condicion_res
                                        }
                                        type="text"
                                        placeholder=""
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        dependencia O FACULTAD
                                    </label>

                                    <input
                                        disabled
                                        defaultValue={
                                            resolucionesycontratoDat.dependencia_res
                                        }
                                        type="text"
                                        placeholder=""
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                    />
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-full md:px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        observaciones
                                    </label>

                                    <input
                                        disabled
                                        defaultValue={
                                            resolucionesycontratoDat.observacion_res
                                        }
                                        type="text"
                                        placeholder=""
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Resolucionesycontrato;
