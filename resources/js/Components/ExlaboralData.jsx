import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/inertia-react";

function ExlaboralData({ exlaboralDat }) {
    const [editingExl, setEditingExl] = useState(false);
    // console.log("exlaboralDat.exlabprivada.empresa_elpr")
    // console.log(exlaboralDat.exlabprivada.empresa_elpr)
    // console.log("exlaboralDat.exlabpublica.dependencia_elpu")
    // console.log(exlaboralDat.exlabpublica.dependencia_elpu)
    // console.log("exlaboralDat.exlabpublica.tipo_elpu")
    // console.log(exlaboralDat.exlabpublica.tipo_elpu)
    // console.log("exlaboralDat.exlabpublica.num_tipo_elpu")
    // console.log(exlaboralDat.exlabpublica.num_tipo_elpu)

    console.log(exlaboralDat);
    let est_empresa_elpr = "";
    let est_dependencia_elpu = "";
    let est_tipo_elpu = "";
    let est_num_tipo_elpu = "";
    if (exlaboralDat.exlabprivada) {
        est_empresa_elpr = exlaboralDat.exlabprivada.empresa_elpr;
    } else {
        est_empresa_elpr = "";
    }
    if (exlaboralDat.exlabpublica) {
        est_dependencia_elpu = exlaboralDat.exlabpublica.dependencia_elpu;
        est_tipo_elpu = exlaboralDat.exlabpublica.tipo_elpu;
        est_num_tipo_elpu = exlaboralDat.exlabpublica.num_tipo_elpu;
    } else {
        est_dependencia_elpu = "";
        est_tipo_elpu = "";
        est_num_tipo_elpu = "";
    }
    const { data, setData, put, processing, reset, errors } = useForm({
        cargo_desempeniado_el: exlaboralDat.cargo_desempeniado_el,
        fecha_inicio_el: exlaboralDat.fecha_inicio_el,
        fecha_culminacion_el: exlaboralDat.fecha_culminacion_el,
        t_lugar_ex_el: exlaboralDat.t_lugar_ex_el,

        // empresa_elpr:exlaboralDat.exlabprivada.empresa_elpr,

        // dependencia_elpu:exlaboralDat.exlabpublica.dependencia_elpu,
        // tipo_elpu:exlaboralDat.exlabpublica.tipo_elpu,
        // num_tipo_elpu:exlaboralDat.exlabpublica.num_tipo_elpu,

        // exlabprivada:exlaboralDat.exlabprivada,

        // exlabpublica:exlaboralDat.exlabpublica,

        empresa_elpr: est_empresa_elpr,

        dependencia_elpu: est_dependencia_elpu,
        tipo_elpu: est_tipo_elpu,
        num_tipo_elpu: est_num_tipo_elpu,

        // empresa_elpr:exlaboralDat.exlabprivada,

        // dependencia_elpu:exlaboralDat.exlabpublica,
        // tipo_elpu:exlaboralDat.exlabpublica,
        // num_tipo_elpu:exlaboralDat.exlabpublica,
    });
    const handleDestroyExl = (e) => {
        e.preventDefault();
        Swal.fire({
            title: `¿Estás seguro?`,
            text: `Se eliminara el registro de su experiencia laboral:  ${
                data.t_lugar_ex_el != "" ? data.t_lugar_ex_el : "(No definido)"
            }, de manera permanente`,
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, bórralo!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route("exlaboral.destroy", exlaboralDat.id), {
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
    const exlaboralEdit = (e) => {
        e.preventDefault();

        put(route("exlaboral.update", exlaboralDat.id), {
            preserveScroll: true,
            onSuccess: () => setEditingExl(false),
        });
    };
    return (
        <div className="bg-transparent shadow-md rounded border border-white px-7 pt-5 pb-5 mb-4 flex flex-col">
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
                            onClick={() => setEditingExl(true)}
                        >
                            Editar
                        </button>
                        {/* <Dropdown.Link
                            as="button"
                            href={route("exlaboral.destroy", exlaboralDat.id)}
                            method="delete"
                            preserveScroll={true}
                        >
                            Eliminar
                        </Dropdown.Link> */}
                        <button
                            onClick={handleDestroyExl}
                            className="block w-full px-4 py-2 text-left font-bold text-sm leading-5 text-gray-700 hover:bg-red-500 hover:text-white transition duration-150 ease-in-out"
                        >
                            Eliminar
                        </button>
                    </Dropdown.Content>
                </Dropdown>
            </div>
            {editingExl ? (
                <form onSubmit={exlaboralEdit} encType="multipart/form-data">
                    <div>
                        <div className="-mx-3 md:flex mb-2">
                            <div className=" w-1/5 px-3">
                                <div className=" items-center ml-1">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2 ">
                                        administracion
                                    </label>
                                </div>
                                {/* <div className="flex my-4 justify-between">
                        <div className="flex items-center">
                            <input checked={data.t_lugar_ex_el=="PUBLICA" ? true : false} onChange={e=>setData('t_lugar_ex_el',e.target.value)} id="t_lugar_ex_el" type="radio" value="PUBLICA" name="t_lugar_ex_el" className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="t_lugar_ex_el" className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">PUBLICA</label>
                        </div>
                        <div className="flex items-center">
                            <input checked={data.t_lugar_ex_el=="PRIVADA" ? true : false} onChange={e=>setData('t_lugar_ex_el',e.target.value)} id="t_lugar_ex_el-2" type="radio" value="PRIVADA" name="t_lugar_ex_el" className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="t_lugar_ex_el-2" className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">PRIVADA</label>
                        </div>
                        </div> */}
                                <input
                                    disabled
                                    value={
                                        data.t_lugar_ex_el
                                            ? data.t_lugar_ex_el
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setData("t_lugar_ex_el", e.target.value)
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                    id="cargo_desempeniado_el"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                            <div className="w-2/5 px-3">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    CARGO DESEMPEÑADO
                                </label>
                                <input
                                    value={
                                        data.cargo_desempeniado_el
                                            ? data.cargo_desempeniado_el
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setData(
                                            "cargo_desempeniado_el",
                                            e.target.value
                                        )
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                    id="cargo_desempeniado_el"
                                    type="text"
                                    placeholder=""
                                />
                                <InputError
                                    message={errors.cargo_desempeniado_el}
                                    className="mt-.5"
                                />
                            </div>
                            <div className="w-1/5 px-3 mb-6 md:mb-0">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    Fecha de INICIO
                                </label>
                                <input
                                    value={
                                        data.fecha_inicio_el
                                            ? data.fecha_inicio_el
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setData(
                                            "fecha_inicio_el",
                                            e.target.value
                                        )
                                    }
                                    type="date"
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3 "
                                    id="fecha_inicio_el"
                                />
                                <InputError
                                    message={errors.fecha_inicio_el}
                                    className="mt-.5"
                                />
                            </div>
                            <div className="w-1/5 px-3 mb-6 md:mb-0">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    Fecha de culminacion
                                </label>
                                <input
                                    value={
                                        data.fecha_culminacion_el
                                            ? data.fecha_culminacion_el
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setData(
                                            "fecha_culminacion_el",
                                            e.target.value
                                        )
                                    }
                                    type="date"
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3 "
                                    id="fecha_culminacion_el"
                                />
                                <InputError
                                    message={errors.fecha_culminacion_el}
                                    className="mt-.5"
                                />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-2">
                            {data.t_lugar_ex_el == "PRIVADA" ? (
                                <div className="w-full px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        empresa
                                    </label>
                                    <input
                                        value={
                                            data.empresa_elpr
                                                ? data.empresa_elpr
                                                : ""
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "empresa_elpr",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                        id="empresa_elpr"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            ) : null}
                            {data.t_lugar_ex_el == "PUBLICA" ? (
                                <>
                                    <div className="w-4/6 px-3">
                                        <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                            DEPENDENCIA
                                        </label>
                                        <input
                                            value={
                                                data.dependencia_elpu
                                                    ? data.dependencia_elpu
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "dependencia_elpu",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                            id="dependencia_elpu"
                                            type="text"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="w-1/6 px-3 mb-6 md:mb-0">
                                        <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                            tipo
                                        </label>

                                        <select
                                            value={
                                                data.tipo_elpu
                                                    ? data.tipo_elpu
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "tipo_elpu",
                                                    e.target.value
                                                )
                                            }
                                            id="tipo_elpu"
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 text-sm rounded py-1 px-4 mb-3 font-medium"
                                            name="tipo_elpu"
                                        >
                                            <option value="">
                                                -Seleccione-
                                            </option>
                                            <option value="RESOLUCION">
                                                RESOLUCION - R
                                            </option>
                                            <option value="MEMORANDUM">
                                                MEMORANDUM - M
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-1/6 px-3">
                                        <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                            N° (R) (M)
                                        </label>
                                        <input
                                            value={
                                                data.num_tipo_elpu
                                                    ? data.num_tipo_elpu
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "num_tipo_elpu",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                            id="num_tipo_elpu"
                                            type="text"
                                            placeholder=""
                                        />
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <InputError message={errors.message} className="mt-2" />
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
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                                </svg>
                                GUARDAR
                            </span>
                        </PrimaryButton>
                        <button
                            onClick={() => setEditingExl(false) && reset()}
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
                        <div className=" w-1/5 px-3">
                            <div className=" items-center ml-1">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2 ">
                                    administracion
                                </label>
                            </div>
                            <div className="flex my-4 justify-between">
                                <div className="flex items-center">
                                    <input
                                        disabled
                                        checked={
                                            exlaboralDat.t_lugar_ex_el ==
                                            "PUBLICA"
                                                ? true
                                                : false
                                        }
                                        type="radio"
                                        value="PUBLICA"
                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        PUBLICA
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        disabled
                                        checked={
                                            exlaboralDat.t_lugar_ex_el ==
                                            "PRIVADA"
                                                ? true
                                                : false
                                        }
                                        type="radio"
                                        value="PRIVADA"
                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300">
                                        PRIVADA
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5 px-3">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                CARGO DESEMPEÑADO
                            </label>
                            <input
                                disabled
                                value={
                                    exlaboralDat.cargo_desempeniado_el
                                        ? exlaboralDat.cargo_desempeniado_el
                                        : ""
                                }
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                id="cargo_desempeniado_el"
                                type="text"
                                placeholder=""
                            />
                        </div>
                        <div className="w-1/5 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Fecha de INICIO
                            </label>
                            <input
                                disabled
                                value={
                                    exlaboralDat.fecha_inicio_el
                                        ? exlaboralDat.fecha_inicio_el
                                        : ""
                                }
                                type="date"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3 "
                                id="fecha_inicio_el"
                            />
                        </div>
                        <div className="w-1/5 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Fecha de culminacion
                            </label>
                            <input
                                disabled
                                value={
                                    exlaboralDat.fecha_culminacion_el
                                        ? exlaboralDat.fecha_culminacion_el
                                        : ""
                                }
                                type="date"
                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3 "
                                id="fecha_culminacion_el"
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        {exlaboralDat.t_lugar_ex_el == "PRIVADA" ? (
                            <div className="w-full px-3">
                                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                    empresa
                                </label>
                                <input
                                    disabled
                                    value={
                                        exlaboralDat.exlabprivada.empresa_elpr
                                            ? exlaboralDat.exlabprivada
                                                  .empresa_elpr
                                            : ""
                                    }
                                    className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                    id="empresa_elpr"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        ) : null}
                        {exlaboralDat.t_lugar_ex_el == "PUBLICA" ? (
                            <>
                                <div className="w-4/6 px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        DEPENDENCIA
                                    </label>
                                    <input
                                        disabled
                                        value={
                                            exlaboralDat.exlabpublica
                                                .dependencia_elpu
                                                ? exlaboralDat.exlabpublica
                                                      .dependencia_elpu
                                                : ""
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                        id="dependencia_elpu"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                                <div className="w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        tipo
                                    </label>

                                    <input
                                        disabled
                                        value={
                                            exlaboralDat.exlabpublica.tipo_elpu
                                                ? exlaboralDat.exlabpublica
                                                      .tipo_elpu
                                                : ""
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                        id="num_tipo_elpu"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                                <div className="w-1/6 px-3">
                                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2">
                                        N° (R) (M)
                                    </label>
                                    <input
                                        disabled
                                        value={
                                            exlaboralDat.exlabpublica
                                                .num_tipo_elpu
                                                ? exlaboralDat.exlabpublica
                                                      .num_tipo_elpu
                                                : ""
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-1 px-4 mb-3"
                                        id="num_tipo_elpu"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                            </>
                        ) : null}
                    </div>
                </>
            )}
        </div>
    );
}

export default ExlaboralData;
