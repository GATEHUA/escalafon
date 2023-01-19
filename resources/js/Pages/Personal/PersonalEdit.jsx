import React, { useState, useRef } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Swal from "sweetalert2";

function PersonalEdit({ auth, personalData, img, file }) {
    console.log(img);
    const [avatar, setAvatar] = useState(img);
    const [nuevo, setNuevo] = useState("flex");
    const [nuevo2, setNuevo2] = useState("none");
    const [most, setMost] = useState(true);
    const [bgImage, setBgImage] = useState(false);
    const [popup, setPopup] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route("personal.store"), {
            // preserveScroll: true,
            onSuccess: () => {
                reset();
                setAvatar("");
                cambionew();
            },
        });
    };
    const familia = (e) => {
        e.preventDefault();
        // console.log(data)
        post(route("familia.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    //     function blank(){
    //       setData('nivel_educativo_ne',"")
    //       setData('etapa_ne',"")
    // setData('nombre_institucion_ne',"")
    // setData('descripcion_ne',"")
    // setData('fecha_culminacion_ne',"")
    // setData('documento_val_ne',"")
    //     }
    const neducativo = (e) => {
        e.preventDefault();

        post(route("neducativo.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
        // await blank();
        //  Inertia.reload({ only: ['neducativoData','errors'] })
        // setData('fecha_Ingreso_undac',e.target.value)
    };
    const exlaboral = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("exlaboral.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const exdocente = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("exdocente.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const otrotrabajo = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("otrotrabajo.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const resolucionesycontrato = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("resolucionesycontrato.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const documento = (e) => {
        e.preventDefault();
        post(route("documento.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const cambionew = () => {
        setNuevo("none");
        setNuevo2("inline");
        setMost(false);
    };

    function cambionew2() {
        setNuevo("flex");
        setNuevo2("none");
        setMost(true);
    }
    const inputRefFoto = useRef();
    const fotoPerfil = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
            e.preventDefault();
            setAvatar(e.target.result);
        };
        setData("foto", e.target.files[0]);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
        setBgImage(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setBgImage(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsDataURL(e.dataTransfer.files[0]);
        reader.onload = (e) => {
            e.preventDefault();
            setAvatar(e.target.result);
        };
        setData("foto", e.dataTransfer.files[0]);
    };

    let est_administrativo_t = "";
    let est_dependencia = "";
    let est_nivel_remunerativo = "";
    let est_docente_t = "";
    let est_dedicacion_t = "";
    let est_facultad = "";
    let est_escuela = "";
    let est_horas_d = "";

    if (personalData[0].administrativo) {
        est_administrativo_t = personalData[0].administrativo.administrativo_t;
        est_dependencia = personalData[0].administrativo.dependencia;
        est_nivel_remunerativo =
            personalData[0].administrativo.nivel_remunerativo;
    } else {
        est_administrativo_t = "";
        est_dependencia = "";
        est_nivel_remunerativo = "";
    }
    if (personalData[0].docente) {
        est_docente_t = personalData[0].docente.docente_t;
        est_dedicacion_t = personalData[0].docente.dedicacion_t;
        est_facultad = personalData[0].docente.facultad;
        est_escuela = personalData[0].docente.escuela;
        est_horas_d = personalData[0].docente.horas_d;
    } else {
        est_docente_t = "";
        est_dedicacion_t = "";
        est_facultad = "";
        est_escuela = "";
        est_horas_d = "";
    }

    const { data, setData, post, processing, reset, errors } = useForm({
        fecha_Ingreso_undac: personalData[0].fecha_Ingreso_undac,
        nombra_fecha: personalData[0].nombra_fecha,
        condicion: personalData[0].condicion,
        situacion: personalData[0].situacion,
        foto: personalData[0].foto,
        estado: personalData[0].estado,
        fecha_jubilacion: personalData[0].fecha_jubilacion,
        nombres: personalData[0].nombres,
        apellido_paterno: personalData[0].apellido_paterno,
        apellido_materno: personalData[0].apellido_materno,
        genero: personalData[0].genero,
        fecha_nacimiento: personalData[0].fecha_nacimiento,
        pais: personalData[0].pais,
        departamento: personalData[0].departamento,
        provincia: personalData[0].provincia,
        distrito: personalData[0].distrito,
        tipo_documento: personalData[0].tipo_documento,
        dni: personalData[0].dni,
        carnet_extranjeria: personalData[0].carnet_extranjeria,
        partida_nacimiento: personalData[0].partida_nacimiento,
        otro_documento: personalData[0].otro_documento,
        regimen_pensionario: personalData[0].regimen_pensionario,
        nombre_afp: personalData[0].nombre_afp,
        ruc: personalData[0].ruc,
        estado_civil: personalData[0].estado_civil,
        domicilio_actual: personalData[0].domicilio_actual,
        distrito_domicilio: personalData[0].distrito_domicilio,
        provincia_domicilio: personalData[0].provincia_domicilio,
        departamento_domicilio: personalData[0].departamento_domicilio,
        email: personalData[0].email,
        telefono_fijo: personalData[0].telefono_fijo,
        telefono_celular: personalData[0].telefono_celular,
        codigo: personalData[0].codigo,
        val_dni: personalData[0].val_dni,
        regimen_laboral: personalData[0].regimen_laboral,
        administrativo_t: est_administrativo_t,
        dependencia: est_dependencia,
        nivel_remunerativo: est_nivel_remunerativo,
        docente_t: est_docente_t,
        dedicacion_t: est_dedicacion_t,
        facultad: est_facultad,
        escuela: est_escuela,
        horas_d: est_horas_d,
        _method: "put",
    });
    console.log(personalData[0].id);

    const PersonalEdit = (e) => {
        e.preventDefault();
        post(route("personal.update", personalData[0].id), {
            preserveScroll: true,
        });
        Swal.fire({
            icon: "success",
            title: "Datos actualizados correctamente",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    console.log(file);
    return (
        <AuthenticatedLayout auth={auth}>
            <div className="p-6 rounded-lg">
                <div className="flex justify-end">
                    {/* <a href={file}>la imagen ;</a> */}
                    <a
                        href={route("personal.extraedit", personalData[0].id)}
                        className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-600  to-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    >
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 fondo-princ opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 fondo-princ opacity-10 group-hover:translate-x-0"></span>
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
                                <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
                            </svg>
                            EDITAR DATOS ADICIONALES
                        </span>
                    </a>
                </div>
                <div className="border-2 border-white p-4 mb-4 rounded-lg">
                    <form onSubmit={PersonalEdit} encType="multipart/form-data">
                        <div className="fondo-princ shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                            <div className="-mx-3 md:flex mb-4">
                                <div className="w-1/3 px-3 flex md:mb-0">
                                    <div className="w-2/3 pr-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-1"
                                            htmlFor="fecha_Ingreso_undac"
                                        >
                                            Fecha de ingreso a la undac
                                        </label>
                                        <input
                                            autoFocus
                                            value={data.fecha_Ingreso_undac}
                                            onChange={(e) =>
                                                setData(
                                                    "fecha_Ingreso_undac",
                                                    e.target.value
                                                )
                                            }
                                            type="date"
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-2 px-4 "
                                            id="fecha_Ingreso_undac"
                                        />
                                        <InputError
                                            message={errors.fecha_Ingreso_undac}
                                            className="mt-.5"
                                        />
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-1"
                                            htmlFor="nombra_fecha"
                                        >
                                            Fecha de nombramiento
                                        </label>
                                        <input
                                            value={data.nombra_fecha}
                                            onChange={(e) =>
                                                setData(
                                                    "nombra_fecha",
                                                    e.target.value
                                                )
                                            }
                                            type="date"
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-2 px-4 "
                                            id="nombra_fecha"
                                        />
                                        <InputError
                                            message={errors.nombra_fecha}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="w-1/3 px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="codigo"
                                        >
                                            codigo
                                        </label>
                                        <input
                                            value={data.codigo}
                                            onChange={(e) =>
                                                setData(
                                                    "codigo",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="codigo"
                                            type="text"
                                            placeholder="opcional"
                                        />
                                        <InputError
                                            message={errors.codigo}
                                            className="mt-.5"
                                        />
                                    </div>
                                </div>

                                <div className="w-1/6 px-3">
                                    <div className="items-center">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                            htmlFor="inline-2-radioS2"
                                        >
                                            situacion
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <div className="flex items-center ">
                                            <input
                                                checked={
                                                    data.situacion ==
                                                    "ADMINISTRATIVO"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "situacion",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-2-radioS2"
                                                type="radio"
                                                value="ADMINISTRATIVO"
                                                name="inline-radio-groupSit"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-2-radioS2"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                ADMINISTRATIVO
                                            </label>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <input
                                                checked={
                                                    data.situacion == "DOCENTE"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "situacion",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-radioS1"
                                                type="radio"
                                                value="DOCENTE"
                                                name="inline-radio-groupSit"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-radioS1"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                DOCENTE
                                            </label>
                                        </div>
                                    </div>
                                    <InputError
                                        message={errors.situacion}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="w-1/6 px-3">
                                    <div className="items-center">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                            htmlFor="inline-radioC1"
                                        >
                                            CONDICION
                                        </label>
                                    </div>
                                    <div className="my-3">
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.condicion == "NOMBRADO"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "condicion",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-radioC1"
                                                type="radio"
                                                value="NOMBRADO"
                                                name="inline-radio-groupCon"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-radioC1"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                NOMBRADO
                                            </label>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <input
                                                checked={
                                                    data.condicion ==
                                                    "CONTRATADO"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "condicion",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-2-radioC2"
                                                type="radio"
                                                value="CONTRATADO"
                                                name="inline-radio-groupCon"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-2-radioC2"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                CONTRATADO
                                            </label>
                                        </div>
                                        {data.situacion == "ADMINISTRATIVO" ? (
                                            <>
                                                <div className="flex items-center mt-2">
                                                    <input
                                                        checked={
                                                            data.condicion ==
                                                            "CAS"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "condicion",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-checked-radioC3"
                                                        type="radio"
                                                        value="CAS"
                                                        name="inline-radio-groupCon"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-checked-radioC3"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        CAS
                                                    </label>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                    <InputError
                                        message={errors.condicion}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="flex w-1/3 px-3">
                                    <label
                                        htmlFor="dropzone-file"
                                        className=" mr-12 uppercase tracking-wide text-white text-xs font-bold mb-2"
                                    >
                                        Foto actual
                                    </label>
                                    <div className="mr-4">
                                        <img
                                            src={avatar}
                                            style={{ maxWidth: "112px" }}
                                            className=" h-32 rounded-lg"
                                            alt=""
                                        />
                                    </div>
                                    {/* <div
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        htmlFor="dropzone-file"
                                        className={
                                            bgImage
                                                ? "w-28 h-32 flex flex-col justify-center items-center bg-gray-300 rounded-lg border-2 border-gray-400 border-dashed cursor-pointer dark:hover:bg-bray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                                : "w-28 h-32 flex flex-col justify-center items-center bg-transparent rounded-lg border-2 border-gray-400 border-dashed dark:hover:bg-bray-300 dark:bg-gray-700 hover:border-blue-600 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        }
                                    >
                                        <div className="flex flex-col justify-center items-center">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    inputRefFoto.current.click();
                                                }}
                                                className="flex flex-col justify-center items-center w-28 h-32 text-sm text-gray-500 dark:text-gray-400"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    fill="none"
                                                    className="mb-4 w-10 h-10 text-gray-400"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 16a4 4 0 0 1-.88-7.903A5 5 0 1 1 15.9 6h.1a5 5 0 0 1 1 9.9M15 13l-3-3m0 0-3 3m3-3v12"
                                                    />
                                                </svg>
                                                Añadir Foto de Perfil
                                            </button>
                                        </div>

                                        <input
                                            name="foto"
                                            // onChange={(e)=>{setData('foto',e.target.files[0]); setAvatar(URL.createObjectURL(e.target.files[0]))}}
                                            onChange={(e) => {
                                                fotoPerfil(e);
                                            }}
                                            ref={inputRefFoto}
                                            id="dropzone-file"
                                            type="file"
                                            className=""
                                        />
                                    </div> */}
                                    <div
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        htmlFor="dropzone-file"
                                        className={
                                            bgImage
                                                ? "w-28 h-32 flex flex-col justify-center items-center fondo-foto-perfil rounded-lg border-2 border-white border-dashed cursor-pointer dark:hover:bg-bray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                                : "w-28 h-32 flex flex-col justify-center items-center bg-transparent rounded-lg border-2 border-white border-dashed dark:hover:bg-bray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        }
                                    >
                                        <div className="flex flex-col justify-center rounded-lg fondo-foto-perfil items-center">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    inputRefFoto.current.click();
                                                }}
                                                className="flex flex-col justify-center items-center w-28 h-32 text-sm text-white dark:text-gray-400"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    fill="none"
                                                    className="mb-4 w-10 h-10 text-white"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 16a4 4 0 0 1-.88-7.903A5 5 0 1 1 15.9 6h.1a5 5 0 0 1 1 9.9M15 13l-3-3m0 0-3 3m3-3v12"
                                                    />
                                                </svg>
                                                Añadir Foto de Perfil
                                            </button>
                                        </div>

                                        <input
                                            name="foto"
                                            // onChange={(e)=>{setData('foto',e.target.files[0]); setAvatar(URL.createObjectURL(e.target.files[0]))}}
                                            onChange={(e) => {
                                                fotoPerfil(e);
                                            }}
                                            ref={inputRefFoto}
                                            id="dropzone-file"
                                            type="file"
                                            className=""
                                        />
                                    </div>
                                    <InputError
                                        message={errors.foto}
                                        className="mt-.5 flex justify-end"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                {data.situacion == "DOCENTE" ? (
                                    <>
                                        <div className="w-1/4 px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="facultad"
                                            >
                                                facultad
                                            </label>
                                            <input
                                                value={data.facultad}
                                                onChange={(e) =>
                                                    setData(
                                                        "facultad",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                                id="facultad"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={errors.facultad}
                                                className="mt-.5"
                                            />
                                        </div>

                                        <div className="w-1/4 px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="escuela"
                                            >
                                                escuela
                                            </label>
                                            <input
                                                value={data.escuela}
                                                onChange={(e) =>
                                                    setData(
                                                        "escuela",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                                id="escuela"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={errors.escuela}
                                                className="mt-.5"
                                            />
                                        </div>
                                    </>
                                ) : null}
                                {data.situacion == "ADMINISTRATIVO" ? (
                                    <>
                                        <div className="w-1/2 px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="dependencia"
                                            >
                                                dependencia
                                            </label>
                                            <input
                                                value={
                                                    data.dependencia
                                                        ? data.dependencia
                                                        : null
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "dependencia",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                                id="dependencia"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={errors.dependencia}
                                                className="mt-.5"
                                            />
                                        </div>
                                    </>
                                ) : null}

                                <div className="w-1/4 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="estado"
                                    >
                                        estado
                                    </label>
                                    {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                    <select
                                        value={data.estado ? data.estado : ""}
                                        onChange={(e) =>
                                            setData("estado", e.target.value)
                                        }
                                        id="estado"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium"
                                        name="estado"
                                    >
                                        <option value="">-Seleccione-</option>
                                        <option value="ACTIVO">ACTIVO</option>
                                        <option value="CESADO">CESADO</option>
                                        <option value="FALLECIDO">
                                            FALLECIDO
                                        </option>
                                    </select>
                                    <InputError
                                        message={errors.estado}
                                        className="mt-.5"
                                    />
                                </div>

                                {data.estado == "CESADO" ||
                                data.estado == "FALLECIDO" ? (
                                    <div className="w-1/4 px-3 mb-6 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="fecha_jubilacion"
                                        >
                                            Fecha de jubilacion
                                        </label>
                                        <input
                                            value={data.fecha_jubilacion}
                                            onChange={(e) =>
                                                setData(
                                                    "fecha_jubilacion",
                                                    e.target.value
                                                )
                                            }
                                            type="date"
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 "
                                            id="fecha_jubilacion"
                                        />
                                        <InputError
                                            message={errors.fecha_jubilacion}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}
                            </div>

                            {data.situacion == "DOCENTE" ? (
                                <>
                                    <h3 className="uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                        {data.situacion}
                                    </h3>
                                    <div className="flex">
                                        <div className="mb-2 w-full pr-3">
                                            <div className=" items-center ">
                                                <label
                                                    className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                                    htmlFor="inline-radio-D"
                                                >
                                                    categoria
                                                </label>
                                            </div>
                                            <div className="flex my-4 justify-between">
                                                <div className="flex items-center ">
                                                    <input
                                                        checked={
                                                            data.docente_t ==
                                                            "J. PRACTICA"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "docente_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e-radio-D"
                                                        type="radio"
                                                        value="J. PRACTICA"
                                                        name="inline-radio-group-Doc"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e-radio-D"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        J. PRACTICA
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        checked={
                                                            data.docente_t ==
                                                            "AUXILIAR"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "docente_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e2-radio-D"
                                                        type="radio"
                                                        value="AUXILIAR"
                                                        name="inline-radio-group-Doc"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e2-radio-D"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        AUXILIAR
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        checked={
                                                            data.docente_t ==
                                                            "ASOCIADO"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "docente_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e3-radio-D"
                                                        type="radio"
                                                        value="ASOCIADO"
                                                        name="inline-radio-group-Doc"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e3-radio-D"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        ASOCIADO
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        checked={
                                                            data.docente_t ==
                                                            "PRINCIPAL"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "docente_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e4-radio-D"
                                                        type="radio"
                                                        value="PRINCIPAL"
                                                        name="inline-radio-group-Doc"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e4-radio-D"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        PRINCIPAL
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        checked={
                                                            data.docente_t ==
                                                            "DCU"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "docente_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e4-radio-D-2"
                                                        type="radio"
                                                        value="DCU"
                                                        name="inline-radio-group-Doc"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e4-radio-D-2"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        DCU
                                                    </label>
                                                </div>
                                            </div>
                                            <InputError
                                                message={errors.docente_t}
                                                className="mt-.5"
                                            />
                                        </div>
                                        {/* <div className="w-1/6 px-3">
                  <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="docente_t_nivel">
                    nivel de categoria
                  </label>
                  <input value={data.docente_t_nivel} onChange={e=>setData('docente_t_nivel',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="docente_t_nivel" type="text" placeholder=""/>
                  <InputError message={errors.docente_t_nivel} className="mt-.5" />
                </div> */}
                                    </div>

                                    <div className="-mx-3 md:flex mb-2">
                                        <div className=" w-3/5 pr-3 ml-3">
                                            <div className=" items-center ml-1">
                                                <label
                                                    className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                                    htmlFor="inline-radio-D"
                                                >
                                                    DEDICACION
                                                </label>
                                            </div>
                                            {data.docente_t == "DCU" ? (
                                                <div className="flex my-4 justify-around">
                                                    <div className="flex items-center ">
                                                        <input
                                                            checked={
                                                                data.dedicacion_t ==
                                                                "B1"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "dedicacion_t",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id="inline-radio-D-dcu1"
                                                            type="radio"
                                                            value="B1"
                                                            name="inline-radio-group-D-dcu"
                                                            className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-radio-D-dcu1"
                                                            className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                                        >
                                                            B1
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center ">
                                                        <input
                                                            checked={
                                                                data.dedicacion_t ==
                                                                "B2"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "dedicacion_t",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id="inline-2-radio-D-dcu2"
                                                            type="radio"
                                                            value="B2"
                                                            name="inline-radio-group-D-dcu"
                                                            className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-2-radio-D-dcu2"
                                                            className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                                        >
                                                            B2
                                                        </label>
                                                    </div>

                                                    <InputError
                                                        message={
                                                            errors.dedicacion_t
                                                        }
                                                        className="mt-.5"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex my-4 justify-between">
                                                    <div className="flex items-center ">
                                                        <input
                                                            checked={
                                                                data.dedicacion_t ==
                                                                "DEDICACION EXCLUSIVA"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "dedicacion_t",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id="inline-radio-D"
                                                            type="radio"
                                                            value="DEDICACION EXCLUSIVA"
                                                            name="inline-radio-group-D"
                                                            className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-radio-D"
                                                            className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                                        >
                                                            DEDICACION EXCLUSIVA
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center ">
                                                        <input
                                                            checked={
                                                                data.dedicacion_t ==
                                                                "TIEMPO COMPLETO"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "dedicacion_t",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id="inline-2-radio-D"
                                                            type="radio"
                                                            value="TIEMPO COMPLETO"
                                                            name="inline-radio-group-D"
                                                            className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-2-radio-D"
                                                            className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                                        >
                                                            TIEMPO COMPLETO
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center ">
                                                        <input
                                                            checked={
                                                                data.dedicacion_t ==
                                                                "TIEMPO PARCIAL"
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    "dedicacion_t",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id="inline-checked-radio-D"
                                                            type="radio"
                                                            value="TIEMPO PARCIAL"
                                                            name="inline-radio-group-D"
                                                            className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                        />
                                                        <label
                                                            htmlFor="inline-checked-radio-D"
                                                            className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                                        >
                                                            TIEMPO PARCIAL
                                                        </label>
                                                    </div>
                                                    <InputError
                                                        message={
                                                            errors.dedicacion_t
                                                        }
                                                        className="mt-.5"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-1/5 px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="regimen_laboral"
                                            >
                                                regimen laboral
                                            </label>
                                            <input
                                                value={data.regimen_laboral}
                                                onChange={(e) =>
                                                    setData(
                                                        "regimen_laboral",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                                id="regimen_laboral"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={errors.regimen_laboral}
                                                className="mt-.5"
                                            />
                                        </div>

                                        <div className="w-1/5 px-3 ">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="horas_d"
                                            >
                                                HORAS
                                            </label>
                                            <input
                                                value={data.horas_d}
                                                onChange={(e) =>
                                                    setData(
                                                        "horas_d",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                                id="horas_d"
                                                type="time"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={errors.horas_d}
                                                className="mt-.5"
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : null}
                            {data.situacion == "ADMINISTRATIVO" ? (
                                <>
                                    <h3 className="uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                        {data.situacion ? data.situacion : null}
                                    </h3>
                                    <div className="flex">
                                        <div className="mb-2 w-full pr-3">
                                            <div className=" items-center ml-1">
                                                <label
                                                    className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                                    htmlFor="inline-radio-D"
                                                >
                                                    categoria
                                                </label>
                                            </div>
                                            <div className="flex my-4 justify-between">
                                                <div className="flex items-center ">
                                                    <input
                                                        checked={
                                                            data.administrativo_t ==
                                                            "PROFESIONAL"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "administrativo_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e-radio-A1"
                                                        type="radio"
                                                        value="PROFESIONAL"
                                                        name="inline-radio-group-Adm"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e-radio-A1"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        PROFESIONAL
                                                    </label>
                                                </div>
                                                <div className="flex items-center ">
                                                    <input
                                                        checked={
                                                            data.administrativo_t ==
                                                            "TECNICO"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "administrativo_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e-radio-A2"
                                                        type="radio"
                                                        value="TECNICO"
                                                        name="inline-radio-group-Adm"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e-radio-A2"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        TECNICO
                                                    </label>
                                                </div>
                                                <div className="flex items-center ">
                                                    <input
                                                        checked={
                                                            data.administrativo_t ==
                                                            "AUXILIAR"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "administrativo_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e-radio-A3"
                                                        type="radio"
                                                        value="AUXILIAR"
                                                        name="inline-radio-group-Adm"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e-radio-A3"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        AUXILIAR
                                                    </label>
                                                </div>
                                                <div className="flex items-center ">
                                                    <input
                                                        checked={
                                                            data.administrativo_t ==
                                                            "FUNCIONARIO"
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "administrativo_t",
                                                                e.target.value
                                                            )
                                                        }
                                                        id="inline-e-radio-A4"
                                                        type="radio"
                                                        value="FUNCIONARIO"
                                                        name="inline-radio-group-Adm"
                                                        className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="inline-e-radio-A4"
                                                        className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                                    >
                                                        FUNCIONARIO
                                                    </label>
                                                </div>
                                            </div>
                                            <InputError
                                                message={
                                                    errors.administrativo_t
                                                }
                                                className="mt-.5"
                                            />
                                        </div>
                                        {/* <div className="w-1/6 px-3">
                  <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="administrativo_t_nivel">
                    nivel de categoria
                  </label>
                  <input value={data.administrativo_t_nivel} onChange={e=>setData('administrativo_t_nivel',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="administrativo_t_nivel" type="text" placeholder=""/>
                  <InputError message={errors.administrativo_t_nivel} className="mt-.5" />
                </div> */}
                                    </div>
                                    <div className="-mx-3 md:flex mb-2">
                                        <div className=" w-4/5 pr-3 ml-3">
                                            <div className=" items-center ml-1">
                                                <label
                                                    className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                                    htmlFor="inline-radio-Adm"
                                                >
                                                    NIVEL
                                                </label>
                                            </div>
                                            {data.administrativo_t ==
                                            "FUNCIONARIO" ? (
                                                <>
                                                    <div className="flex my-4 justify-between">
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "1"
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-radio-Adm"
                                                                type="radio"
                                                                value="1"
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                1
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "2"
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-2-radio-Adm"
                                                                type="radio"
                                                                value="2"
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-2-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                2
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "3"
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-checked-radio-Adm"
                                                                type="radio"
                                                                value="3"
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-checked-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                3
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "4"
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-4-radio-Adm"
                                                                type="radio"
                                                                value="4"
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-4-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                4
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "5"
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-5-radio-Adm"
                                                                type="radio"
                                                                value="5"
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-5-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                5
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <InputError
                                                        message={
                                                            errors.nivel_remunerativo
                                                        }
                                                        className="mt-.5"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <div className="flex my-4 justify-between">
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "A."
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-radio-Adm"
                                                                type="radio"
                                                                value="A."
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                A.
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "B."
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-2-radio-Adm"
                                                                type="radio"
                                                                value="B."
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-2-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                B.
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "C."
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-checked-radio-Adm"
                                                                type="radio"
                                                                value="C."
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-checked-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                C.
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "D."
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-4-radio-Adm"
                                                                type="radio"
                                                                value="D."
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-4-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                D.
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "E."
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-5-radio-Adm"
                                                                type="radio"
                                                                value="E."
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-5-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                E.
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center ">
                                                            <input
                                                                checked={
                                                                    data.nivel_remunerativo ==
                                                                    "F."
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "nivel_remunerativo",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id="inline-7-radio-Adm"
                                                                type="radio"
                                                                value="F."
                                                                name="inline-radio-group-Adm2"
                                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="inline-7-radio-Adm"
                                                                className="uppercase ml-4 text-sm font-medium text-white dark:text-gray-300"
                                                            >
                                                                F.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <InputError
                                                        message={
                                                            errors.nivel_remunerativo
                                                        }
                                                        className="mt-.5"
                                                    />
                                                </>
                                            )}
                                        </div>
                                        <div className="w-1/5 px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="regimen_laboral"
                                            >
                                                regimen laboral
                                            </label>
                                            <input
                                                value={data.regimen_laboral}
                                                onChange={(e) =>
                                                    setData(
                                                        "regimen_laboral",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                                id="regimen_laboral"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={errors.regimen_laboral}
                                                className="mt-.5"
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <div className="fondo-princ shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                            <h3 className="uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                DATOS PERSONALES
                            </h3>

                            <div className="-mx-3 md:flex mb-2">
                                <div className="w-1/4 px-3 mb-6 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="apellido_paterno"
                                    >
                                        Apellido Paterno
                                    </label>
                                    <input
                                        value={data.apellido_paterno}
                                        onChange={(e) =>
                                            setData(
                                                "apellido_paterno",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="apellido_paterno"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.apellido_paterno}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/4 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="apellido_materno"
                                    >
                                        Apellido Materno
                                    </label>
                                    <input
                                        value={data.apellido_materno}
                                        onChange={(e) =>
                                            setData(
                                                "apellido_materno",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="apellido_materno"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.apellido_materno}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/2 flex ">
                                    <div className="w-2/3 px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="nombres"
                                        >
                                            Nombres
                                        </label>
                                        <input
                                            value={data.nombres}
                                            onChange={(e) =>
                                                setData(
                                                    "nombres",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="nombres"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.nombres}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="w-1/3 px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="genero"
                                        >
                                            Genero
                                        </label>
                                        {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                        <select
                                            onChange={(e) =>
                                                setData(
                                                    "genero",
                                                    e.target.value
                                                )
                                            }
                                            id="genero"
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium"
                                            name="genero"
                                        >
                                            <option value="">
                                                -Seleccione-
                                            </option>
                                            <option value="MASCULINO">
                                                MASCULINO
                                            </option>
                                            <option value="FEMENINO">
                                                FEMENINO
                                            </option>
                                            <option value="OTRO">OTRO</option>
                                        </select>
                                        <InputError
                                            message={errors.genero}
                                            className="mt-.5"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="-mx-3 md:flex mb-2">
                                <div className="w-1/5 px-3 mb-6 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="fecha_nacimiento"
                                    >
                                        Fecha de nacimiento
                                    </label>
                                    <input
                                        value={data.fecha_nacimiento}
                                        onChange={(e) =>
                                            setData(
                                                "fecha_nacimiento",
                                                e.target.value
                                            )
                                        }
                                        type="date"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 "
                                        id="fecha_nacimiento"
                                    />
                                    <InputError
                                        message={errors.fecha_nacimiento}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/5 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="pais"
                                    >
                                        país
                                    </label>
                                    <input
                                        value={data.pais}
                                        onChange={(e) =>
                                            setData("pais", e.target.value)
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="pais"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.pais}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/5 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="departamento"
                                    >
                                        departamento
                                    </label>
                                    <input
                                        value={data.departamento}
                                        onChange={(e) =>
                                            setData(
                                                "departamento",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="departamento"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.departamento}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/5 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="provincia"
                                    >
                                        provincia
                                    </label>
                                    <input
                                        value={data.provincia}
                                        onChange={(e) =>
                                            setData("provincia", e.target.value)
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="provincia"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.provincia}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/5 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="distrito"
                                    >
                                        distrito
                                    </label>
                                    <input
                                        value={data.distrito}
                                        onChange={(e) =>
                                            setData("distrito", e.target.value)
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="distrito"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.distrito}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>

                            <div className="-mx-3 md:flex mb-2">
                                <div className="w-1/4 px-3 mb-6 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="tipo_documento"
                                    >
                                        tipo de documento
                                    </label>
                                    {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                    <select
                                        value={data.tipo_documento}
                                        onChange={(e) =>
                                            setData(
                                                "tipo_documento",
                                                e.target.value
                                            )
                                        }
                                        id="tipo_documento"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium"
                                        name="tipo_documento"
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
                                    <InputError
                                        message={errors.tipo_documento}
                                        className="mt-.5"
                                    />
                                </div>
                                {data.tipo_documento == "DNI" ? (
                                    <div className="w-1/4 px-3 mb-6 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="dni_f"
                                        >
                                            D.N.I.
                                        </label>
                                        <input
                                            value={data.dni_f}
                                            onChange={(e) =>
                                                setData("dni_f", e.target.value)
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="dni_f"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.dni}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}

                                {data.tipo_documento ==
                                "CARNET DE EXTRANJERIA" ? (
                                    <div className="w-1/4 px-3 mb-6 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="carnet_extranjeria"
                                        >
                                            CARNET DE EXTRANJERIA
                                        </label>
                                        <input
                                            value={data.carnet_extranjeria}
                                            onChange={(e) =>
                                                setData(
                                                    "carnet_extranjeria",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="carnet_extranjeria"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.carnet_extranjeria}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}

                                {data.tipo_documento ==
                                "PARTIDA DE NACIMIENTO" ? (
                                    <div className="w-1/4 px-3 mb-6 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="partida_nacimiento"
                                        >
                                            partida de nacimiento
                                        </label>
                                        <input
                                            value={data.partida_nacimiento}
                                            onChange={(e) =>
                                                setData(
                                                    "partida_nacimiento",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="partida_nacimiento"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.partida_nacimiento}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}

                                {data.tipo_documento == "OTRO DOCUMENTO" ? (
                                    <div className="w-1/4 px-3 mb-6 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="otro_documento_f"
                                        >
                                            OTO DOCUMENTO
                                        </label>
                                        <input
                                            value={data.otro_documento}
                                            onChange={(e) =>
                                                setData(
                                                    "otro_documento_f",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="otro_documento_f"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.otro_documento}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}

                                {/* <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="dni">
                    D.N.I.
                  </label>
                  <input value={data.dni} onChange={e=>setData('dni',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="dni" type="text" placeholder=""/>
                  <InputError message={errors.dni} className="mt-.5" />
                </div>
                
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="carnet_extranjeria">
                    CARNET DE EXTRANGERIA
                  </label>
                  <input value={data.carnet_extranjeria} onChange={e=>setData('carnet_extranjeria',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="carnet_extranjeria" type="text" placeholder=""/>
                  <InputError message={errors.carnet_extranjeria} className="mt-.5" />
                </div>
                
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="  ">
                    CARNET DE IDENTIDAD
                  </label>
                  <input value={data.carnet_identidad} onChange={e=>setData('carnet_identidad',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3" id="carnet_identidad" type="text" placeholder=""/>
                  <InputError message={errors.carnet_identidad} className="mt-.5" />
                </div> */}
                                <div className="w-1/4 px-3">
                                    <label
                                        htmlFor="dropzone-file_P"
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                    >
                                        documento de validacion
                                    </label>

                                    <input
                                        name="val_dni"
                                        onChange={(e) => {
                                            setData(
                                                "val_dni",
                                                e.target.files[0]
                                            );
                                        }}
                                        id="dropzone-file_P"
                                        type="file"
                                        className="
                  text-sm text-white border rounded-full border-gray-200 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600
             file:py-3 file:px-3
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-blue-600 
            hover:file:cursor-pointer hover:file:opacity-90 w-full "
                                    />

                                    <InputError
                                        message={errors.val_dni}
                                        className="mt-.5 flex justify-end"
                                    />
                                </div>
                                <div className="w-1/4 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="title"
                                    >
                                        R.U.C.
                                    </label>
                                    <input
                                        value={data.ruc}
                                        onChange={(e) =>
                                            setData("ruc", e.target.value)
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="title"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.ruc}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>

                            <div className="-mx-3 md:flex mb-2 ">
                                <div className="w-full px-3">
                                    <div className="items-center">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                            htmlFor="inline-e-radio"
                                        >
                                            estado civil
                                        </label>
                                    </div>
                                    <div className="flex my-4 justify-between">
                                        <div className="flex items-center ">
                                            <input
                                                checked={
                                                    data.estado_civil ==
                                                    "SOLTERO(A)"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "estado_civil",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-e-radio"
                                                type="radio"
                                                value="SOLTERO(A)"
                                                name="inline-radio-group2"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-e-radio"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                SOLTERO(A)
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.estado_civil ==
                                                    "CASADO(A)"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "estado_civil",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-e2-radio"
                                                type="radio"
                                                value="CASADO(A)"
                                                name="inline-radio-group2"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-e2-radio"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                CASADO(A)
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.estado_civil ==
                                                    "VIUDO(A)"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "estado_civil",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-e3-radio"
                                                type="radio"
                                                value="VIUDO(A)"
                                                name="inline-radio-group2"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-e3-radio"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                VIUDO(A)
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.estado_civil ==
                                                    "DIVORCIADO(A)"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "estado_civil",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-e4-radio"
                                                type="radio"
                                                value="DIVORCIADO(A)"
                                                name="inline-radio-group2"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-e4-radio"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                DIVORCIADO(A)
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.estado_civil ==
                                                    "CONCUBINO(A)"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "estado_civil",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-e5-radio"
                                                type="radio"
                                                value="CONCUBINO(A)"
                                                name="inline-radio-group2"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-e5-radio"
                                                className="uppercase ml-3 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                CONCUBINO(A)
                                            </label>
                                        </div>
                                    </div>
                                    <InputError
                                        message={errors.estado_civil}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>

                            <div className="-mx-3 md:flex mb-3">
                                <div className="md:w-full px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="domicilio_actual"
                                    >
                                        domicilio actual
                                    </label>
                                    <input
                                        value={data.domicilio_actual}
                                        onChange={(e) =>
                                            setData(
                                                "domicilio_actual",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="domicilio_actual"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.domicilio_actual}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>

                            <div className="-mx-3 md:flex mb-2">
                                <div className="w-1/3 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="distrito_actual"
                                    >
                                        distrito actual
                                    </label>
                                    <input
                                        value={data.distrito_domicilio}
                                        onChange={(e) =>
                                            setData(
                                                "distrito_domicilio",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="distrito_actual"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.distrito_domicilio}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/3 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="provincia_actual"
                                    >
                                        provincia actual
                                    </label>
                                    <input
                                        value={data.provincia_domicilio}
                                        onChange={(e) =>
                                            setData(
                                                "provincia_domicilio",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="provincia_actual"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.provincia_domicilio}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/3 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="departamaneto_actual"
                                    >
                                        departamaneto actual
                                    </label>
                                    <input
                                        value={data.departamento_domicilio}
                                        onChange={(e) =>
                                            setData(
                                                "departamento_domicilio",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="departamaneto_actual"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.departamento_domicilio}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>

                            <div className="-mx-3 md:flex mb-2">
                                <div className="w-1/3 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="distrito_actual"
                                    >
                                        N° de Telefono Fijo
                                    </label>
                                    <input
                                        value={data.telefono_fijo}
                                        onChange={(e) =>
                                            setData(
                                                "telefono_fijo",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="distrito_actual"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.telefono_fijo}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/3 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="provincia_actual"
                                    >
                                        N° de Celular
                                    </label>
                                    <input
                                        value={data.telefono_celular}
                                        onChange={(e) =>
                                            setData(
                                                "telefono_celular",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="provincia_actual"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.telefono_celular}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="w-1/3 px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="departamaneto_actual"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="departamaneto_actual"
                                        type="email"
                                        placeholder="tu_correo@email.com"
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                <div className=" w-1/2 px-3">
                                    <div className=" items-center ml-1">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                            htmlFor="inline-radio"
                                        >
                                            regimen pensionario
                                        </label>
                                    </div>
                                    <div className="flex my-4 justify-between">
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.regimen_pensionario ==
                                                    "19990"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "regimen_pensionario",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-radio"
                                                type="radio"
                                                value="19990"
                                                name="inline-radio-group"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-radio"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                19990
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.regimen_pensionario ==
                                                    "20530"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "regimen_pensionario",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-2-radio"
                                                type="radio"
                                                value="20530"
                                                name="inline-radio-group"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-2-radio"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                20530
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.regimen_pensionario ==
                                                    "AFP"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "regimen_pensionario",
                                                        e.target.value
                                                    )
                                                }
                                                id="inline-checked-radio"
                                                type="radio"
                                                value="AFP"
                                                name="inline-radio-group"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="inline-checked-radio"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                AFP
                                            </label>
                                        </div>
                                    </div>
                                    <InputError
                                        message={errors.regimen_pensionario}
                                        className="mt-.5"
                                    />
                                </div>

                                {data.regimen_pensionario == "AFP" ? (
                                    <div className="w-1/2 px-2  md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="company"
                                        >
                                            NOMBRE DE LA AFP
                                        </label>
                                        <input
                                            value={data.nombre_afp}
                                            onChange={(e) =>
                                                setData(
                                                    "nombre_afp",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3"
                                            id="company"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.nombre_afp}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex justify-center">
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
                        </div>
                    </form>
                </div>
                <Link
                    href={route("personal.vistaPdf", personalData[0].id)}
                    method="get"
                    style={{ background: "red" }}
                    className="ml-4 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300  rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-red-600 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                        <svg
                            className="relative w-5 h-5 mr-2 text-white"
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            version="1.1"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.156 9.211c-0.213-0.21-0.686-0.321-1.406-0.331-0.487-0.005-1.073 0.038-1.69 0.124-0.276-0.159-0.561-0.333-0.784-0.542-0.601-0.561-1.103-1.34-1.415-2.197 0.020-0.080 0.038-0.15 0.054-0.222 0 0 0.339-1.923 0.249-2.573-0.012-0.089-0.020-0.115-0.044-0.184l-0.029-0.076c-0.092-0.212-0.273-0.437-0.556-0.425l-0.171-0.005c-0.316 0-0.573 0.161-0.64 0.403-0.205 0.757 0.007 1.889 0.39 3.355l-0.098 0.239c-0.275 0.67-0.619 1.345-0.923 1.94l-0.040 0.077c-0.32 0.626-0.61 1.157-0.873 1.607l-0.271 0.144c-0.020 0.010-0.485 0.257-0.594 0.323-0.926 0.553-1.539 1.18-1.641 1.678-0.032 0.159-0.008 0.362 0.156 0.456l0.263 0.132c0.114 0.057 0.234 0.086 0.357 0.086 0.659 0 1.425-0.821 2.48-2.662 1.218-0.396 2.604-0.726 3.819-0.908 0.926 0.521 2.065 0.883 2.783 0.883 0.128 0 0.238-0.012 0.327-0.036 0.138-0.037 0.254-0.115 0.325-0.222 0.139-0.21 0.168-0.499 0.13-0.795-0.011-0.088-0.081-0.196-0.157-0.271zM3.307 12.72c0.12-0.329 0.596-0.979 1.3-1.556 0.044-0.036 0.153-0.138 0.253-0.233-0.736 1.174-1.229 1.642-1.553 1.788zM7.476 3.12c0.212 0 0.333 0.534 0.343 1.035s-0.107 0.853-0.252 1.113c-0.12-0.385-0.179-0.992-0.179-1.389 0 0-0.009-0.759 0.088-0.759v0zM6.232 9.961c0.148-0.264 0.301-0.543 0.458-0.839 0.383-0.724 0.624-1.29 0.804-1.755 0.358 0.651 0.804 1.205 1.328 1.649 0.065 0.055 0.135 0.111 0.207 0.166-1.066 0.211-1.987 0.467-2.798 0.779v0zM12.952 9.901c-0.065 0.041-0.251 0.064-0.37 0.064-0.386 0-0.864-0.176-1.533-0.464 0.257-0.019 0.493-0.029 0.705-0.029 0.387 0 0.502-0.002 0.88 0.095s0.383 0.293 0.318 0.333v0z"></path>
                            <path d="M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"></path>
                        </svg>
                        GENERAR PDF
                    </span>
                </Link>
            </div>
        </AuthenticatedLayout>
    );
}

export default PersonalEdit;
