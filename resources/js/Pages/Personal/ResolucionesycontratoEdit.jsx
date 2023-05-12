import React from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function ResolucionesycontratoEdit({ auth, resolucionesycontratoDataEdit }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        cod_res: resolucionesycontratoDataEdit.cod_res,
        tipo_res: resolucionesycontratoDataEdit.tipo_res,
        fecha_dic_res: resolucionesycontratoDataEdit.fecha_dic_res,
        des_art_pri_res: resolucionesycontratoDataEdit.des_art_pri_res,
        vigencia_res: resolucionesycontratoDataEdit.vigencia_res,
        categoria_alcanz_res:
            resolucionesycontratoDataEdit.categoria_alcanz_res,
        nivel_alcanz_res: resolucionesycontratoDataEdit.nivel_alcanz_res,
        antiguedad_in_res: resolucionesycontratoDataEdit.antiguedad_in_res,
        antiguedad_sa_res: resolucionesycontratoDataEdit.antiguedad_sa_res,
        condicion_res: resolucionesycontratoDataEdit.condicion_res,
        dependencia_res: resolucionesycontratoDataEdit.dependencia_res,
        observacion_res: resolucionesycontratoDataEdit.observacion_res,
        documento_val_res: resolucionesycontratoDataEdit.documento_val_res,
        _method: "put",
    });
    const resolucionesycontratoEdit = (e) => {
        e.preventDefault();
        post(
            route(
                "resolucionesycontrato.update",
                resolucionesycontratoDataEdit.id
            )
        );
    };
    return (
        <AuthenticatedLayout auth={auth}>
            <div className="p-6">
                <div className="bg-white border border-sky-500 shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                    <form
                        onSubmit={resolucionesycontratoEdit}
                        encType="multipart/form-data"
                    >
                        <div className="-mx-3 md:flex mb-2">
                            <div className="w-1/4 px-3 mb-6 md:mb-0">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="tipo_res"
                                >
                                    tipo
                                </label>
                                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                <select
                                    value={data.tipo_res}
                                    onChange={(e) =>
                                        setData("tipo_res", e.target.value)
                                    }
                                    id="tipo_res"
                                    className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium"
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
                                    <option value="ASCENSO">ASCENSO</option>
                                    <option value="OTRO">OTRO</option>
                                </select>
                                <InputError
                                    message={errors.tipo_res}
                                    className="mt-.5"
                                />
                            </div>
                            <div className="w-1/4 px-3">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="cod_res"
                                >
                                    DOCUMENTO FUENTE
                                </label>
                                <input
                                    value={data.cod_res}
                                    onChange={(e) =>
                                        setData("cod_res", e.target.value)
                                    }
                                    className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="cod_res"
                                    type="text"
                                    placeholder=""
                                />
                                <InputError
                                    message={errors.cod_res}
                                    className="mt-.5"
                                />
                            </div>
                            <div className="w-1/4 px-3 mb-6 md:mb-0">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                                    className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 "
                                    id="fecha_dic_res"
                                />
                                <InputError
                                    message={errors.fecha_dic_res}
                                    className="mt-.5"
                                />
                            </div>
                            <div className="w-1/4 px-3">
                                <label
                                    htmlFor="dropzone-file_res"
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                  text-sm text-black border rounded-full border-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600
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
                            <div className="w-2/5 px-3">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="des_art_pri_res"
                                >
                                    SE RESUELVE (ARTICULO)
                                </label>
                                <textarea
                                    rows="8"
                                    value={data.des_art_pri_res}
                                    onChange={(e) =>
                                        setData(
                                            "des_art_pri_res",
                                            e.target.value
                                        )
                                    }
                                    className="hover:bg-gray-300 w-full bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="des_art_pri_res"
                                    type="text"
                                    placeholder=""
                                ></textarea>
                                <InputError
                                    message={errors.des_art_pri_res}
                                    className="mt-.5"
                                />
                            </div>
                            <div className="w-3/5">
                                <div className="flex ">
                                    <div className="w-1/3 px-3 mb-6 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                                            className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 "
                                            id="vigencia_res"
                                        />
                                        <InputError
                                            message={errors.vigencia_res}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="w-1/3 px-3">
                                        <label
                                            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                                            className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="categoria_alcanz_res"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={
                                                errors.categoria_alcanz_res
                                            }
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="w-1/3 px-3">
                                        <label
                                            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                                            className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
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
                                <div className="flex ">
                                    <div className="w-1/4 px-3">
                                        <label
                                            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                                            className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="antiguedad_in_res"
                                            type="date"
                                        />
                                        <InputError
                                            message={errors.antiguedad_in_res}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="w-1/4 px-3">
                                        <label
                                            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                                            className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="antiguedad_sa_res"
                                            type="date"
                                        />
                                        <InputError
                                            message={errors.antiguedad_sa_res}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="w-1/4 px-3">
                                        <label
                                            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                                            className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="condicion_res"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.condicion_res}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="w-1/4 px-3">
                                        <label
                                            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                            htmlFor="dependencia_res"
                                        >
                                            dependencia
                                        </label>
                                        <input
                                            value={data.dependencia_res}
                                            onChange={(e) =>
                                                setData(
                                                    "dependencia_res",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
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
                                    <div className="w-full px-3">
                                        <label
                                            className="uppercase tracking-wide text-black text-xs font-bold mb-2"
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
                                            className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
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
                            <a
                                href={route("personal.create")}
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
                                        viewBox="0 0 16 16"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"></path>
                                    </svg>
                                    REGRESAR
                                </span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default ResolucionesycontratoEdit;
