import React, { useRef, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";
import FamiliaData from "@/Components/FamiliaData";
import NeducativoData from "@/Components/NeducativoData";
import ExlaboralData from "@/Components/ExlaboralData";
import ExdocenteData from "@/Components/ExdocenteData";
import Resolucionesycontrato from "@/Components/Resolucionesycontrato";
import DocumentoData from "@/Components/DocumentoData";
import OtrotrabajoData from "@/Components/OtrotrabajoData";
import Swal from "sweetalert2";
import PdfContent from "./PdfContent";
import fotopred from "../../../../public/Images/foto_predeterminado.webp";

function PersonalEditExtra({
    auth,
    personalData,
    documentoData,
    exdocenteData,
    exlaboralData,
    familiaData,
    neducativoData,
    otrotrabajoData,
    resolucionesycontratoData,
    img,
}) {
    console.log("resolucionesycontratoData");

    console.log(resolucionesycontratoData);
    // console.log(img);
    // const [campex, setCampex] = useState(false);
    const { data, setData, post, processing, reset, errors, progress } =
        useForm({
            fecha_Ingreso_undac: "",
            nombra_fecha: "",
            situacion: "ADMINISTRATIVO",
            docente_t: "J. PRACTICA",
            dedicacion_t: "DEDICACION EXCLUSIVA",
            horas_d: "",
            administrativo_t: "PROFESIONAL",
            nivel_remunerativo: "A.",
            condicion: "NOMBRADO",
            foto: "",
            // facultad:'',
            tipo_documento: "DNI",
            dni: "",
            carnet_extranjeria: "",
            partida_nacimiento: "",
            otro_documento: "",
            // escuela:'',
            estado: "",
            fecha_jubilacion: "",
            nombres: "",
            apellido_paterno: "",
            apellido_materno: "",
            genero: "",
            fecha_nacimiento: "",
            pais: "",
            departamento: "",
            provincia: "",
            distrito: "",

            regimen_pensionario: "19990",
            nombre_afp: "",
            ruc: "",
            estado_civil: "SOLTERO(A)",
            domicilio_actual: "",
            distrito_domicilio: "",
            provincia_domicilio: "",
            departamento_domicilio: "",
            email: "",
            telefono_fijo: "",
            telefono_celular: "",
            codigo: "",
            val_dni: "",
            regimen_laboral: "",
            // administrativo_t_nivel: '',
            // docente_t_nivel: '',
            dependencia: "",
            facultad: "",
            escuela: "",
            //FAMILIARES
            t_relacion_f: "",
            apellidos_nombres_f: "",
            tipo_documento_f: "DNI",
            dni_f: "",
            carnet_extranjeria_f: "",
            partida_nacimiento_f: "",
            otro_documento_f: "",
            genero_f: "",
            fecha_nacimiento_f: "",
            estado_civil_f: "",
            estado_v_m_f: "SI",
            nacionalidad_f: "",
            //NIVEL EDUCATIVO
            nivel_educativo_ne: "",
            etapa_ne: "",
            nombre_institucion_ne: "",
            descripcion_ne: "",
            fecha_culminacion_ne: "",
            documento_val_ne: "",
            //EXPERIENCIA LABORAL
            cargo_desempeniado_el: "",
            fecha_inicio_el: "",
            fecha_culminacion_el: "",
            t_lugar_ex_el: "PUBLICA",
            //PRIVADA
            empresa_elpr: "",
            //PUBLICA
            dependencia_elpu: "",
            tipo_elpu: "",
            num_tipo_elpu: "",
            //EXPERIENCIA DOCENTE
            institucion_ed: "",
            catedra_ed: "",
            categoria_ed: "",
            regimen_pensionario_ed: "",
            fecha_inicio_ed: "",
            fecha_culminacion_ed: "",
            //RESOLUCIONES   :
            cod_res: "",
            tipo_res: "",
            fecha_dic_res: "",
            des_art_pri_res: "",
            vigencia_res: "",
            categoria_alcanz_res: "",
            nivel_alcanz_res: "",
            antiguedad_in_res: "",
            antiguedad_sa_res: "",
            condicion_res: "",
            dependencia_res: "",
            observacion_res: "",
            documento_val_res: "",
            mostrar: true,
            campo_extra: "",
            data_campo_extra: "",
            //OTRO TRABAJO
            estado_ot: "SI",
            cargo_ot: "",
            nombre_institucion_ot: "",
            frecuencia_diaria_ot: "",
            hora_entrada_ot: "",
            hora_salida_ot: "",
            //DOCUMENTO EXTRA
            t_nombre_documento_d: "",
            descripcion_documento_d: "",
            documento_d: "",
            fecha_documento_d: "",
        });
    console.log("resolucionesycontratoDat");
    console.log(resolucionesycontratoData);
    console.log("data.mostrar");
    console.log(data.mostrar);
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
        post(route("familia.storeUpdate", personalData[0].id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
        // Swal.fire({
        //     icon: "success",
        //     title: "Datos del familiar almacenados correctamente",
        //     showConfirmButton: false,
        //     timer: 1500,
        //     // iconColor: "green",
        // });
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
        post(route("neducativo.storeUpdate", personalData[0].id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
        // await blank();
        //  Inertia.reload({ only: ['neducativoData','errors'] })
        // setData('fecha_Ingreso_undac',e.target.value)
    };
    const exlaboral = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("exlaboral.storeUpdate", personalData[0].id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const exdocente = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("exdocente.storeUpdate", personalData[0].id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const otrotrabajo = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("otrotrabajo.storeUpdate", personalData[0].id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const resolucionesycontrato = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("resolucionesycontrato.storeUpdate", personalData[0].id), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };
    const documento = (e) => {
        e.preventDefault();
        post(route("documento.storeUpdate", personalData[0].id), {
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
    // console.log("personalData[0].foto");
    // console.log(personalData[0].foto);

    return (
        <AuthenticatedLayout auth={auth}>
            <div className="md:p-6 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                    <h3 className="uppercase tracking-wide mb-4 pt-4 text-white md:text-xl text-base  font-bold ">
                        Escalafon - Hoja de registro
                    </h3>
                    <Link
                        method="get"
                        href={route("personal.edit", personalData[0].id)}
                        className="box-border relative z-30 inline-flex  items-center justify-center w-auto md:px-3  md:py-3 px-2 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-600  to-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    >
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                <path d="M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"></path>
                            </svg>
                            EDITAR DATOS PRINCIPALES
                        </span>
                    </Link>
                </div>
                <div className="fondo-princ text-white text-center items-center text-sm uppercase shadow-md rounded px-7 pt-2 pb-2 mb-4 md:flex ">
                    <p className="mr-2 font-bold">Datos adicionales de:</p>
                    <p>{`${
                        personalData[0].apellido_paterno
                            ? personalData[0].apellido_paterno
                            : ""
                    } ${
                        personalData[0].apellido_materno
                            ? personalData[0].apellido_materno
                            : ""
                    } ${
                        personalData[0].nombres ? personalData[0].nombres : ""
                    }`}</p>
                    <div className="flex justify-center">
                        <img
                            className="md:ml-5 w-10 h-10 rounded-full"
                            src={
                                personalData[0].foto
                                    ? `${img}fotoPer/${personalData[0].foto}`
                                    : fotopred
                            }
                            alt=""
                        />
                    </div>
                </div>

                <div className="fondo-princ p-4 mb-4 rounded-lg">
                    <form onSubmit={familia} encType="multipart/form-data">
                        <div className="sombrao rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                            <h3 className="text-center md:text-left uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                FAMILIARES DIRECTOS
                            </h3>
                            <div className="-mx-3 md:flex md:mb-2">
                                <div className="md:w-1/4 md:px-3 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="t_relacion_f"
                                    >
                                        tipo de relacion
                                    </label>
                                    {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                    <select
                                        value={data.t_relacion_f}
                                        onChange={(e) =>
                                            setData(
                                                "t_relacion_f",
                                                e.target.value
                                            )
                                        }
                                        id="t_relacion_f"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
                                        name="t_relacion_f"
                                    >
                                        <option value="">-Seleccione-</option>
                                        <option value="PADRE">PADRE</option>
                                        <option value="MADRE">MADRE</option>
                                        <option value="CONYUGE">CONYUGE</option>
                                        <option value="HIJO">HIJO</option>
                                    </select>
                                    <InputError
                                        message={errors.t_relacion_f}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/2 md:px-3 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="apellidos_nombres_f"
                                    >
                                        apellidos y nombre(s)
                                    </label>
                                    <input
                                        value={data.apellidos_nombres_f}
                                        onChange={(e) =>
                                            setData(
                                                "apellidos_nombres_f",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="apellidos_nombres_f"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.apellidos_nombres_f}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="tipo_documento_f"
                                    >
                                        tipo de documento
                                    </label>
                                    {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                    <select
                                        value={data.tipo_documento_f}
                                        onChange={(e) =>
                                            setData(
                                                "tipo_documento_f",
                                                e.target.value
                                            )
                                        }
                                        id="tipo_documento_f"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
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
                                    <InputError
                                        message={errors.tipo_documento_f}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex md:mb-2">
                                {data.tipo_documento_f == "DNI" ? (
                                    <div className="md:w-1/6 md:px-3 md:mb-0">
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
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                            id="dni_f"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.dni_f}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}

                                {data.tipo_documento_f ==
                                "CARNET DE EXTRANJERIA" ? (
                                    <div className="md:w-1/6 md:px-3 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="carnet_extranjeria_f"
                                        >
                                            CARNET DE EXTRANJERIA
                                        </label>
                                        <input
                                            value={data.carnet_extranjeria_f}
                                            onChange={(e) =>
                                                setData(
                                                    "carnet_extranjeria_f",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                            id="carnet_extranjeria_f"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={
                                                errors.carnet_extranjeria_f
                                            }
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}

                                {data.tipo_documento_f ==
                                "PARTIDA DE NACIMIENTO" ? (
                                    <div className="md:w-1/6 md:px-3 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="partida_nacimiento_f"
                                        >
                                            partida de nacimiento
                                        </label>
                                        <input
                                            value={data.partida_nacimiento_f}
                                            onChange={(e) =>
                                                setData(
                                                    "partida_nacimiento_f",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                            id="partida_nacimiento_f"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={
                                                errors.partida_nacimiento_f
                                            }
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}

                                {data.tipo_documento_f == "OTRO DOCUMENTO" ? (
                                    <div className="md:w-1/6 md:px-3 md:mb-0">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="otro_documento_f"
                                        >
                                            OTO DOCUMENTO
                                        </label>
                                        <input
                                            value={data.otro_documento_f}
                                            onChange={(e) =>
                                                setData(
                                                    "otro_documento_f",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                            id="otro_documento_f"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.otro_documento_f}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}

                                <div className="md:w-1/6 md:px-3 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="fecha_nacimiento_f"
                                    >
                                        Fecha de nacimiento
                                    </label>
                                    <input
                                        value={data.fecha_nacimiento_f}
                                        onChange={(e) =>
                                            setData(
                                                "fecha_nacimiento_f",
                                                e.target.value
                                            )
                                        }
                                        type="date"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                        id="fecha_nacimiento_f"
                                    />
                                    <InputError
                                        message={errors.fecha_nacimiento_f}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className=" md:w-1/6 md:px-3">
                                    <div className=" items-center ml-1">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                            htmlFor="estado_v_m_f"
                                        >
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
                                                id="estado_v_m_f"
                                                type="radio"
                                                value="SI"
                                                name="estado_v_m_f"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="estado_v_m_f"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
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
                                                id="estado_v_m_f_2"
                                                type="radio"
                                                value="NO"
                                                name="estado_v_m_f"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="estado_v_m_f_2"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                NO
                                            </label>
                                        </div>
                                    </div>
                                    <InputError
                                        message={errors.estado_v_m_f}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/6 md:px-3 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="genero_f"
                                    >
                                        genero
                                    </label>
                                    {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                    <select
                                        value={data.genero_f}
                                        onChange={(e) =>
                                            setData("genero_f", e.target.value)
                                        }
                                        id="genero_f"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
                                        name="genero_f"
                                    >
                                        <option value="">-Seleccione-</option>
                                        <option value="MASCULINO">
                                            MASCULINO
                                        </option>
                                        <option value="FEMENINO">
                                            FEMENINO
                                        </option>
                                        <option value="OTRO">OTRO</option>
                                    </select>
                                    <InputError
                                        message={errors.genero_f}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/6 md:px-3 md:mb-0">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="estado_civil_f"
                                    >
                                        estado civil
                                    </label>
                                    {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                    <select
                                        value={data.estado_civil_f}
                                        onChange={(e) =>
                                            setData(
                                                "estado_civil_f",
                                                e.target.value
                                            )
                                        }
                                        id="estado_civil_f"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
                                        name="estado_civil_f"
                                    >
                                        <option value="">-Seleccione-</option>
                                        <option value="SOLTERO(A)">
                                            SOLTERO(A)
                                        </option>
                                        <option value="CASADO(A)">
                                            CASADO(A)
                                        </option>
                                        <option value="VIUDO(A)">
                                            VIUDO(A)
                                        </option>
                                        <option value="DIVORCIADO(A)">
                                            DIVORCIADO(A)
                                        </option>
                                        <option value="CONCUBINO(A)">
                                            CONCUBINO(A)
                                        </option>
                                        SOLTERO(A)
                                    </select>
                                    <InputError
                                        message={errors.estado_civil_f}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="md:w-1/6 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="nacionalidad_f"
                                    >
                                        nacionalidad
                                    </label>
                                    <input
                                        value={data.nacionalidad_f}
                                        onChange={(e) =>
                                            setData(
                                                "nacionalidad_f",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="nacionalidad_f"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.nacionalidad_f}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                            <></>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <PrimaryButton
                                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-green-600 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                                disabled={processing}
                            >
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                    AGREGAR
                                </span>
                            </PrimaryButton>
                            {/* <div className="w-8"></div> */}
                            {/* <button
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-red-300 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                    // disabled = {processing}
                    onClick={()=>setPopup(false)}
                    type="button"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"></path></svg>
                    CERRAR
                    </span>
              </button> */}
                        </div>
                    </form>

                    {familiaData.map((familiaDat) => (
                        //    <div key={familiaDat.id}>
                        //    <div className="sombra border-white border shadow-md border border-sky-500 rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                        //            <div className="-mx-3 md:flex mb-2">

                        //              <div className="w-1/4 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="t_relacion_f">
                        //                  tipo de relacion
                        //                </label>

                        //                <div id="t_relacion_f" className='hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded h-7 py-1 px-4 font-medium' name="t_relacion_f">
                        //                {familiaDat.t_relacion_f}
                        //                </div>

                        //              </div>
                        //              <div className="w-1/2 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="apellidos_nombres_f">
                        //                  apellidos y nombre(s)
                        //                </label>
                        //                <div className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded h-7 py-1 px-4 mb-3">
                        //                  {familiaDat.apellidos_nombres_f}
                        //                  </div>
                        //                  </div>
                        //              <div className="w-1/4 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="tipo_documento_f">
                        //                  tipo de documento
                        //                </label>
                        //                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                        //                <div id="tipo_documento_f" className='hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded h-7 py-1 px-4 mb-3 font-medium' name="tipo_documento_f">
                        //                 {familiaDat.tipo_documento_f}
                        //                 </div>

                        //              </div>

                        //            </div>
                        //            <div className="-mx-3 md:flex mb-2">
                        //              {familiaDat.tipo_documento_f=='DNI'?<div className="w-1/6 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="dni_f">
                        //                  D.N.I.
                        //                </label>
                        //                <div className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded h-7 py-1 px-4 mb-3" id="dni_f" type="text" placeholder="">
                        //                {familiaDat.dni_f}
                        //                </div>

                        //              </div>: null}

                        //              {familiaDat.tipo_documento_f=='CARNET DE EXTRANJERIA'?<div className="w-1/6 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="carnet_extranjeria_f">
                        //                  CARNET DE EXTRANJERIA
                        //                </label>

                        //                <div className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded h-7 py-1 px-4 mb-3">
                        //                  {familiaDat.carnet_extranjeria_f}
                        //                  </div>
                        //              </div>: null}

                        //              {familiaDat.tipo_documento_f=='PARTIDA DE NACIMIENTO'?<div className="w-1/6 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="partida_nacimiento_f">
                        //                  partida de nacimiento
                        //                </label>
                        //                <div className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded h-7 py-1 px-4 mb-3">
                        //                {familiaDat.partida_nacimiento_f}
                        //                </div>
                        //              </div>: null}

                        //              {familiaDat.tipo_documento_f=='OTRO DOCUMENTO'?<div className="w-1/6 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="otro_documento_f">
                        //                  OTO DOCUMENTO
                        //                </label>
                        //                <div className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded h-7 py-1 px-4 mb-3">
                        //                  {familiaDat.otro_documento_f}
                        //                </div>
                        //              </div>: null}

                        //              <div className="w-1/6 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="fecha_nacimiento_f">
                        //                  Fecha de nacimiento
                        //                </label>

                        //                <div className='hover:border-blue-600 w-full bg-transparent text-white border border-white rounded h-7 py-1 px-4 mb-3 '>
                        //                  {familiaDat.fecha_nacimiento_f}
                        //                  </div>
                        //              </div>
                        //              <div className=" w-1/6 px-3">
                        //                    <div className=" items-center ml-1">
                        //                    <label className="uppercase tracking-wide text-white text-xs font-bold mb-2 " htmlFor="estado_v_m_f">
                        //                      vive
                        //                    </label>
                        //                    </div>
                        //                    <div className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded h-7 py-1 px-4 mb-3">
                        //                    {familiaDat.estado_v_m_f}
                        //                    </div>
                        //              </div>
                        //              <div className="w-1/6 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="genero_f">
                        //                  genero
                        //                </label>
                        //                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                        //                <div className='hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded h-7 py-1 px-4 mb-3 font-medium' name="genero_f">
                        //                  {familiaDat.genero_f}
                        //                </div>
                        //              </div>
                        //              <div className="w-1/6 px-3 mb-6 md:mb-0">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="estado_civil_f">
                        //                  estado civil
                        //                </label>
                        //                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                        //                <div id="estado_civil_f" className='hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded h-7 py-1 px-4 mb-3 font-medium' name="estado_civil_f">
                        //                  {familiaDat.estado_civil_f}
                        //                </div>

                        //              </div>
                        //              <div className="w-1/6 px-3">
                        //                <label className="uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="nacionalidad_f">
                        //                  nacionalidad
                        //                </label>

                        //                <div className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded h-7 py-1 px-4 mb-3" id="nacionalidad_f">
                        //                  {familiaDat.nacionalidad_f}
                        //                </div>
                        //              </div>
                        //            </div>
                        //        </div>
                        //  </div>
                        <FamiliaData
                            key={familiaDat.id}
                            familiaDat={familiaDat}
                        />
                    ))}
                </div>
                <div className="fondo-princ p-4 mb-4 rounded-lg">
                    <form onSubmit={neducativo} encType="multipart/form-data">
                        <div className="sombrao rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                            <h3 className="uppercase text-center md:text-left tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                NIVEL EDUCATIVO de usted
                            </h3>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/4 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="nivel_educativo_ne"
                                    >
                                        tipo
                                    </label>
                                    {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                    <select
                                        value={data.nivel_educativo_ne}
                                        onChange={(e) =>
                                            setData(
                                                "nivel_educativo_ne",
                                                e.target.value
                                            )
                                        }
                                        id="nivel_educativo_ne"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
                                        name="nivel_educativo_ne"
                                    >
                                        <option value="">-Seleccione-</option>
                                        <option value="PRIMARIA">
                                            PRIMARIA
                                        </option>
                                        <option value="SECUNDARIA">
                                            SECUNDARIA
                                        </option>
                                        <option value="TECNICO">TECNICO</option>
                                        <option value="UNIVERSITARIO">
                                            UNIVERSITARIO
                                        </option>
                                        <option value="MAESTRIA">
                                            MAESTRIA
                                        </option>
                                        <option value="DOCTORADO">
                                            DOCTORADO
                                        </option>
                                        <option value="ESPECIALIDAD">
                                            ESPECIALIDAD
                                        </option>
                                        <option value="OTRO DE MAYOR TRASCENDENCIA">
                                            OTRO DE MAYOR TRASCENDENCIA
                                        </option>
                                    </select>
                                    <InputError
                                        message={errors.nivel_educativo_ne}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="etapa_ne"
                                    >
                                        ETAPA
                                    </label>
                                    {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                                    <select
                                        value={data.etapa_ne}
                                        onChange={(e) =>
                                            setData("etapa_ne", e.target.value)
                                        }
                                        id="etapa_ne"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
                                        name="etapa_ne"
                                    >
                                        {data.nivel_educativo_ne ==
                                            "PRIMARIA" ||
                                        data.nivel_educativo_ne ==
                                            "SECUNDARIA" ||
                                        data.nivel_educativo_ne == "TECNICO" ? (
                                            <>
                                                <option value="">
                                                    -Seleccione-
                                                </option>
                                                <option value="INCOMPLETA">
                                                    INCOMPLETA
                                                </option>
                                                <option value="COMPLETA">
                                                    COMPLETA
                                                </option>
                                            </>
                                        ) : null}
                                        {data.nivel_educativo_ne ==
                                        "UNIVERSITARIO" ? (
                                            <>
                                                <option value="">
                                                    -Seleccione-
                                                </option>
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
                                        {data.nivel_educativo_ne ==
                                            "MAESTRIA" ||
                                        data.nivel_educativo_ne ==
                                            "DOCTORADO" ||
                                        data.nivel_educativo_ne ==
                                            "ESPECIALIDAD" ||
                                        data.nivel_educativo_ne ==
                                            "OTRO DE MAYOR TRASCENDENCIA" ||
                                        data.nivel_educativo_ne == "" ? (
                                            <>
                                                <option value="">
                                                    -Seleccione-
                                                </option>
                                                <option value="INCOMPLETA">
                                                    INCOMPLETA
                                                </option>
                                                <option value="EGRESADO">
                                                    EGRESADO
                                                </option>
                                                <option value="GRADO">
                                                    GRADO
                                                </option>
                                            </>
                                        ) : null}
                                    </select>
                                    <InputError
                                        message={errors.etapa_ne}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3 ">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="fecha_culminacion_ne"
                                    >
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
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                        id="fecha_culminacion_ne"
                                    />
                                    <InputError
                                        message={errors.fecha_culminacion_ne}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3">
                                    <label
                                        htmlFor="dropzone-file_NE"
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                    >
                                        documento de validacion (max 11mb)
                                    </label>

                                    <input
                                        name="documento_val_ne"
                                        onChange={(e) => {
                                            setData(
                                                "documento_val_ne",
                                                e.target.files[0]
                                            );
                                        }}
                                        id="dropzone-file_NE"
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
                                        message={errors.documento_val_ne}
                                        className="mt-.5 flex justify-end"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                {data.nivel_educativo_ne == "PRIMARIA" ||
                                data.nivel_educativo_ne == "SECUNDARIA" ? (
                                    <>
                                        <div className="w-full md:px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="nombre_institucion_ne"
                                            >
                                                NOMBRE DE LA INSTITUCION
                                            </label>
                                            <input
                                                value={
                                                    data.nombre_institucion_ne
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "nombre_institucion_ne",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                                id="nombre_institucion_ne"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={
                                                    errors.nombre_institucion_ne
                                                }
                                                className="mt-.5"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="md:w-1/2 md:px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="nombre_institucion_ne"
                                            >
                                                NOMBRE DE LA INSTITUCION
                                            </label>
                                            <input
                                                value={
                                                    data.nombre_institucion_ne
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "nombre_institucion_ne",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                                id="nombre_institucion_ne"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={
                                                    errors.nombre_institucion_ne
                                                }
                                                className="mt-.5"
                                            />
                                        </div>
                                        <div className="md:w-1/2 md:px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="descripcion_ne"
                                            >
                                                DESCRIPCION (MENCION -
                                                ESPECIALIZACION)
                                            </label>
                                            <input
                                                value={data.descripcion_ne}
                                                onChange={(e) =>
                                                    setData(
                                                        "descripcion_ne",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                                id="descripcion_ne"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={errors.descripcion_ne}
                                                className="mt-.5"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div style={{ color: "white" }}>
                            {" "}
                            Nota: Los documentos subidos al formulario deben de
                            traerse legalizados a la oficina de escalafon para
                            colocarlos en su legajo y sean validados
                            correctamente; DOCUMENTO DE VALIDACION (campo donde
                            puede subir el archivo escaneado, preferentemente en
                            pdf)
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <PrimaryButton
                                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                                disabled={processing}
                            >
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                    AGREGAR
                                </span>
                            </PrimaryButton>
                            {/* <div className="w-8"></div> */}
                            {/* <button
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-red-300 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                    // disabled = {processing}
                    onClick={()=>setPopup(false)}
                    type="button"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"></path></svg>
                    CERRAR
                    </span>
              </button> */}
                        </div>
                    </form>
                    {neducativoData.map((neducativoDat) => (
                        <NeducativoData
                            key={neducativoDat.id}
                            img={img}
                            neducativoDat={neducativoDat}
                        />
                    ))}
                </div>

                <div className="fondo-princ p-4 mb-4 rounded-lg">
                    <form onSubmit={exlaboral} encType="multipart/form-data">
                        <div className="sombrao rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                            <h3 className="text-center md:text-start uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                EXPERIENCIA LABORAL
                            </h3>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/5 md:px-3">
                                    <div className=" items-center ml-1">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                            htmlFor="t_lugar_ex_el"
                                        >
                                            &nbsp;
                                        </label>
                                    </div>
                                    <div className="flex my-4 justify-between">
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.t_lugar_ex_el ==
                                                    "PUBLICA"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "t_lugar_ex_el",
                                                        e.target.value
                                                    )
                                                }
                                                id="t_lugar_ex_el"
                                                type="radio"
                                                value="PUBLICA"
                                                name="t_lugar_ex_el"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="t_lugar_ex_el"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                PUBLICA
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                checked={
                                                    data.t_lugar_ex_el ==
                                                    "PRIVADA"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "t_lugar_ex_el",
                                                        e.target.value
                                                    )
                                                }
                                                id="t_lugar_ex_el-2"
                                                type="radio"
                                                value="PRIVADA"
                                                name="t_lugar_ex_el"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="t_lugar_ex_el-2"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                PRIVADA
                                            </label>
                                        </div>
                                    </div>
                                    <InputError
                                        message={errors.t_lugar_ex_el}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-2/5 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="cargo_desempeniado_el"
                                    >
                                        CARGO DESEMPEÑADO
                                    </label>
                                    <input
                                        value={data.cargo_desempeniado_el}
                                        onChange={(e) =>
                                            setData(
                                                "cargo_desempeniado_el",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="cargo_desempeniado_el"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.cargo_desempeniado_el}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/5 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="fecha_inicio_el"
                                    >
                                        Fecha de INICIO
                                    </label>
                                    <input
                                        value={data.fecha_inicio_el}
                                        onChange={(e) =>
                                            setData(
                                                "fecha_inicio_el",
                                                e.target.value
                                            )
                                        }
                                        type="date"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                        id="fecha_inicio_el"
                                    />
                                    <InputError
                                        message={errors.fecha_inicio_el}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/5 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="fecha_culminacion_el"
                                    >
                                        Fecha de culminacion
                                    </label>
                                    <input
                                        value={data.fecha_culminacion_el}
                                        onChange={(e) =>
                                            setData(
                                                "fecha_culminacion_el",
                                                e.target.value
                                            )
                                        }
                                        type="date"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
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
                                    <div className="w-full md:px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="empresa_elpr"
                                        >
                                            empresa
                                        </label>
                                        <input
                                            value={data.empresa_elpr}
                                            onChange={(e) =>
                                                setData(
                                                    "empresa_elpr",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                            id="empresa_elpr"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.empresa_elpr}
                                            className="mt-.5"
                                        />
                                    </div>
                                ) : null}
                                {data.t_lugar_ex_el == "PUBLICA" ? (
                                    <>
                                        <div className="md:w-4/6 md:px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="dependencia_elpu"
                                            >
                                                DEPENDENCIA
                                            </label>
                                            <input
                                                value={data.dependencia_elpu}
                                                onChange={(e) =>
                                                    setData(
                                                        "dependencia_elpu",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                                id="dependencia_elpu"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={
                                                    errors.dependencia_elpu
                                                }
                                                className="mt-.5"
                                            />
                                        </div>
                                        <div className="md:w-1/6 md:px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="tipo_elpu"
                                            >
                                                tipo
                                            </label>

                                            <select
                                                value={data.tipo_elpu}
                                                onChange={(e) =>
                                                    setData(
                                                        "tipo_elpu",
                                                        e.target.value
                                                    )
                                                }
                                                id="tipo_elpu"
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
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
                                            <InputError
                                                message={errors.tipo_elpu}
                                                className="mt-.5"
                                            />
                                        </div>
                                        <div className="md:w-1/6 md:px-3">
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="num_tipo_elpu"
                                            >
                                                N° (R) (M)
                                            </label>
                                            <input
                                                value={data.num_tipo_elpu}
                                                onChange={(e) =>
                                                    setData(
                                                        "num_tipo_elpu",
                                                        e.target.value
                                                    )
                                                }
                                                className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                                id="num_tipo_elpu"
                                                type="text"
                                                placeholder=""
                                            />
                                            <InputError
                                                message={errors.num_tipo_elpu}
                                                className="mt-.5"
                                            />
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <PrimaryButton
                                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                                disabled={processing}
                            >
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                    AGREGAR
                                </span>
                            </PrimaryButton>
                        </div>
                    </form>
                    <div>
                        {exlaboralData.map((exlaboralDat) => (
                            <ExlaboralData
                                key={exlaboralDat.id}
                                exlaboralDat={exlaboralDat}
                            />
                        ))}
                    </div>
                </div>

                {personalData[0].situacion == "DOCENTE" ||
                auth.user.rol !== "USUARIO" ? (
                    <div className="fondo-princ p-4 mb-4 rounded-lg">
                        <form
                            onSubmit={exdocente}
                            encType="multipart/form-data"
                        >
                            <div className="sombrao rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                                <h3 className="text-center md:text-start uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                    EXPERIENCIA DOCENTE
                                </h3>
                                <div className="-mx-3 md:flex md:mb-2">
                                    <div className="md:w-1/4 md:px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="catedra_ed"
                                        >
                                            AREA (CURSO DICTADO)
                                        </label>
                                        <input
                                            value={data.catedra_ed}
                                            onChange={(e) =>
                                                setData(
                                                    "catedra_ed",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                            id="catedra_ed"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.catedra_ed}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="md:w-1/4 md:px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="categoria_ed"
                                        >
                                            CATEGORIA
                                        </label>

                                        <select
                                            value={data.categoria_ed}
                                            onChange={(e) =>
                                                setData(
                                                    "categoria_ed",
                                                    e.target.value
                                                )
                                            }
                                            id="categoria_ed"
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white text-sm rounded py-3 px-4 mb-3 font-medium"
                                            name="categoria_ed"
                                        >
                                            <option value="">
                                                -Seleccione-
                                            </option>
                                            <option value="J. PRACTICA">
                                                J. PRACTICA
                                            </option>
                                            <option value="AUXILIAR">
                                                AUXILIAR
                                            </option>
                                            <option value="ASOCIADO">
                                                ASOCIADO
                                            </option>
                                            <option value="PRINCIPAL">
                                                PRINCIPAL
                                            </option>
                                            <option value="OTRO">OTRO</option>
                                        </select>
                                        <InputError
                                            message={errors.categoria_ed}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="md:w-1/4 md:px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="fecha_inicio_ed"
                                        >
                                            Fecha de INICIO
                                        </label>
                                        <input
                                            value={data.fecha_inicio_ed}
                                            onChange={(e) =>
                                                setData(
                                                    "fecha_inicio_ed",
                                                    e.target.value
                                                )
                                            }
                                            type="date"
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                            id="fecha_inicio_ed"
                                        />
                                        <InputError
                                            message={errors.fecha_inicio_ed}
                                            className="mt-.5"
                                        />
                                    </div>
                                    <div className="md:w-1/4 md:px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="fecha_culminacion_ed"
                                        >
                                            Fecha de culminacion
                                        </label>
                                        <input
                                            value={data.fecha_culminacion_ed}
                                            onChange={(e) =>
                                                setData(
                                                    "fecha_culminacion_ed",
                                                    e.target.value
                                                )
                                            }
                                            type="date"
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                            id="fecha_culminacion_ed"
                                        />
                                        <InputError
                                            message={
                                                errors.fecha_culminacion_ed
                                            }
                                            className="mt-.5"
                                        />
                                    </div>
                                </div>
                                <div className="-mx-3 md:flex mb-2">
                                    <div className="md:w-4/6 md:px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="institucion_ed"
                                        >
                                            NOMBRE DE LA INSTITUCION
                                        </label>
                                        <input
                                            value={data.institucion_ed}
                                            onChange={(e) =>
                                                setData(
                                                    "institucion_ed",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                            id="institucion_ed"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={errors.institucion_ed}
                                            className="mt-.5"
                                        />
                                    </div>

                                    <div className="md:w-2/6 md:px-3">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                            htmlFor="regimen_pensionario_ed"
                                        >
                                            regimen Pensionario (DESCRIPCION -
                                            OPCIONAL)
                                        </label>
                                        <input
                                            value={data.regimen_pensionario_ed}
                                            onChange={(e) =>
                                                setData(
                                                    "regimen_pensionario_ed",
                                                    e.target.value
                                                )
                                            }
                                            className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                            id="regimen_pensionario_ed"
                                            type="text"
                                            placeholder=""
                                        />
                                        <InputError
                                            message={
                                                errors.regimen_pensionario_ed
                                            }
                                            className="mt-.5"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:justify-start justify-center">
                                <PrimaryButton
                                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                                    disabled={processing}
                                >
                                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                        AGREGAR
                                    </span>
                                </PrimaryButton>
                            </div>
                        </form>
                        <div>
                            {exdocenteData.map((exdocenteDat) => (
                                <ExdocenteData
                                    key={exdocenteDat.id}
                                    exdocenteDat={exdocenteDat}
                                />
                            ))}
                        </div>
                    </div>
                ) : null}
                {/* {personalData[0].situacion == "ADMINISTRATIVO" ||
                personalData[0].id <= 5 ? ( */}
                <div className="fondo-princ p-4 mb-4 rounded-lg">
                    <form
                        onSubmit={resolucionesycontrato}
                        encType="multipart/form-data"
                    >
                        <div className="sombrao rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                            <h3 className="uppercase text-center md:text-start tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                RESOLUCIONES (OPCIONAL)
                            </h3>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/4 md:px-3 ">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="tipo_res"
                                    >
                                        tipo
                                    </label>
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
                                        <option value="CONTRATO">
                                            CONTRATO
                                        </option>
                                        <option value="OTRO">OTRO</option>
                                    </select>
                                    <InputError
                                        message={errors.tipo_res}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/4 md:px-3 ">
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
                                <div className="md:w-1/4 md:px-3 ">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="fecha_dic_res"
                                    >
                                        Fecha deL DOCUMENTO
                                    </label>
                                    <input
                                        value={data.fecha_dic_res}
                                        onChange={(e) =>
                                            setData(
                                                "fecha_dic_res",
                                                e.target.value
                                            )
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
                                <div className="md:w-1/4 md:px-3 ">
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
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <label
                                                className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                                htmlFor="des_art_pri_res"
                                            >
                                                SE RESUELVE (ARTICULO)
                                            </label>

                                            <input
                                                id="mostrar"
                                                type="checkbox"
                                                checked={data.mostrar}
                                                onChange={(e) =>
                                                    setData(
                                                        "mostrar",
                                                        e.target.checked
                                                    )
                                                }
                                                className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                        </div>
                                        {/* <label
                                            className="uppercase tracking-wide text-white text-xs font-bold"
                                            htmlFor="campex"
                                        >
                                            añadir campo extra
                                            <input
                                                id="campex"
                                                type="checkbox"
                                                checked={campex}
                                                onChange={(e) =>
                                                    setCampex(e.target.checked)
                                                }
                                                className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                        </label> */}
                                    </div>
                                    <textarea
                                        rows="8"
                                        value={data.des_art_pri_res}
                                        onChange={(e) =>
                                            setData(
                                                "des_art_pri_res",
                                                e.target.value
                                            )
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
                                                value={
                                                    data.categoria_alcanz_res
                                                }
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
                                                message={
                                                    errors.categoria_alcanz_res
                                                }
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
                                                message={
                                                    errors.nivel_alcanz_res
                                                }
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
                                                message={
                                                    errors.antiguedad_in_res
                                                }
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
                                                message={
                                                    errors.antiguedad_sa_res
                                                }
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
                            {/* {campex && ( */}
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/3 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="campo_extra"
                                    >
                                        CAMPO EXTRA(TITULO)
                                    </label>
                                    <input
                                        value={data.campo_extra}
                                        onChange={(e) =>
                                            setData(
                                                "campo_extra",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="campo_extra"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.campo_extra}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-3/4 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="data_campo_extra"
                                    >
                                        CAMPO EXTRA(DESCRIPCION)
                                    </label>
                                    <input
                                        value={data.data_campo_extra}
                                        onChange={(e) =>
                                            setData(
                                                "data_campo_extra",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="data_campo_extra"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.data_campo_extra}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                            {/* )} */}
                        </div>
                        <div style={{ color: "white" }}>
                            {" "}
                            Nota: Este campo no es obligatorio, pero nos ayudara
                            a poder contar con las resoluciones que no estan en
                            su legajo (especialmete el de ingreso), los campos
                            requeridos son el tipo y DOCUMENTO DE VALIDACION
                            (campo donde puede subir el archivo escaneado,
                            preferentemente en pdf)
                        </div>
                        <div className="flex md:justify-between justify-center items-center">
                            <PrimaryButton
                                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                                disabled={processing}
                            >
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                    AGREGAR
                                </span>
                            </PrimaryButton>
                            <a
                                target="_blank"
                                href={route(
                                    "personal.pdfResoluciones",
                                    personalData[0].id
                                )}
                                style={{ background: "red" }}
                                className="m-8 mb-8 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300  rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-red-600 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
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
                                    Previsualizar informe escalafonario
                                </span>
                            </a>
                        </div>
                    </form>
                    <div>
                        {resolucionesycontratoData.map(
                            (resolucionesycontratoDat) => (
                                <Resolucionesycontrato
                                    key={resolucionesycontratoDat.id}
                                    img={img}
                                    resolucionesycontratoDat={
                                        resolucionesycontratoDat
                                    }
                                />
                            )
                        )}
                    </div>
                </div>
                {/* ) : null} */}
                {/* {auth.user.id <= 5 ? ( */}
                <div className="fondo-princ p-4 mb-4 rounded-lg">
                    <form onSubmit={documento} encType="multipart/form-data">
                        <div className="sombrao rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                            <h3 className="md:text-left text-center uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                documentos extra
                            </h3>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/5 md:px-3">
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
                                <div className="md:w-2/5 md:px-3">
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
                                <div className="md:w-1/6 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="fecha_documento_d"
                                    >
                                        Fecha deL DOCUMENTO
                                    </label>
                                    <input
                                        value={data.fecha_documento_d}
                                        onChange={(e) =>
                                            setData(
                                                "fecha_documento_d",
                                                e.target.value
                                            )
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
                                <div className="md:w-1/4 md:px-3">
                                    <label
                                        htmlFor="dropzone-file_docext"
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                    >
                                        documento de validacion
                                    </label>

                                    <input
                                        name="documento_d"
                                        onChange={(e) => {
                                            setData(
                                                "documento_d",
                                                e.target.files[0]
                                            );
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
                        </div>

                        <div className="flex md:justify-start justify-center">
                            <PrimaryButton
                                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                                disabled={processing}
                            >
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                    AGREGAR
                                </span>
                            </PrimaryButton>
                        </div>
                    </form>
                    <div>
                        {documentoData.map((documentoDat) => (
                            <DocumentoData
                                key={documentoDat.id}
                                documentoDat={documentoDat}
                                img={img}
                            />
                        ))}
                    </div>
                </div>
                {/* ) : null} */}
                <div className="fondo-princ p-4 mb-4 rounded-lg">
                    <form onSubmit={otrotrabajo} encType="multipart/form-data">
                        <div className="sombrao rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                            <h3 className="text-center md:text-left uppercase tracking-wide text-white border-b border-gray-400 text-xm font-bold mb-3">
                                Actualmente LABORA EN OTRA INSTITUCION
                            </h3>
                            <div className="-mx-3 md:flex md:mb-2">
                                <div className=" md:w-1/5 md:px-3">
                                    <div className=" items-center ml-1">
                                        <label
                                            className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
                                            htmlFor="estado_ot"
                                        >
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
                                                    setData(
                                                        "estado_ot",
                                                        e.target.value
                                                    )
                                                }
                                                id="estado_ot"
                                                type="radio"
                                                value="SI"
                                                name="estado_ot"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="estado_ot"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
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
                                                    setData(
                                                        "estado_ot",
                                                        e.target.value
                                                    )
                                                }
                                                id="estado_ot-2"
                                                type="radio"
                                                value="NO"
                                                name="estado_ot"
                                                className="hover:border-blue-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="estado_ot-2"
                                                className="uppercase ml-2 text-sm font-medium text-white dark:text-gray-300"
                                            >
                                                NO
                                            </label>
                                        </div>
                                    </div>
                                    <InputError
                                        message={errors.t_lugar_ex_el}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-2/5 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="cargo_ot"
                                    >
                                        CARGO DESEMPEÑADO
                                    </label>
                                    <input
                                        value={data.cargo_ot}
                                        onChange={(e) =>
                                            setData("cargo_ot", e.target.value)
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="cargo_ot"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.cargo_ot}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/5 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="hora_entrada_ot"
                                    >
                                        hora de entrada
                                    </label>
                                    <input
                                        value={data.hora_entrada_ot}
                                        onChange={(e) =>
                                            setData(
                                                "hora_entrada_ot",
                                                e.target.value
                                            )
                                        }
                                        type="time"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                        id="hora_entrada_ot"
                                    />
                                    <InputError
                                        message={errors.hora_entrada_ot}
                                        className="mt-.5"
                                    />
                                </div>
                                <div className="md:w-1/5 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="hora_salida_ot"
                                    >
                                        hora de salida
                                    </label>
                                    <input
                                        value={data.hora_salida_ot}
                                        onChange={(e) =>
                                            setData(
                                                "hora_salida_ot",
                                                e.target.value
                                            )
                                        }
                                        type="time"
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3 "
                                        id="hora_salida_ot"
                                    />
                                    <InputError
                                        message={errors.hora_salida_ot}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-4/6 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="nombre_institucion_ot"
                                    >
                                        nombre de la institucion
                                    </label>
                                    <input
                                        value={data.nombre_institucion_ot}
                                        onChange={(e) =>
                                            setData(
                                                "nombre_institucion_ot",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="nombre_institucion_ot"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.nombre_institucion_ot}
                                        className="mt-.5"
                                    />
                                </div>

                                <div className="md:w-2/6 md:px-3">
                                    <label
                                        className="uppercase tracking-wide text-white text-xs font-bold mb-2"
                                        htmlFor="frecuencia_diaria_ot"
                                    >
                                        FRECUENCIA DIARIA
                                    </label>
                                    <input
                                        value={data.frecuencia_diaria_ot}
                                        onChange={(e) =>
                                            setData(
                                                "frecuencia_diaria_ot",
                                                e.target.value
                                            )
                                        }
                                        className="hover:border-blue-600 w-full bg-transparent text-white border border-white rounded py-3 px-4 mb-3"
                                        id="frecuencia_diaria_ot"
                                        type="text"
                                        placeholder=""
                                    />
                                    <InputError
                                        message={errors.frecuencia_diaria_ot}
                                        className="mt-.5"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex md:justify-start justify-center">
                            <PrimaryButton
                                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                                disabled={processing}
                            >
                                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                    AGREGAR
                                </span>
                            </PrimaryButton>
                        </div>
                    </form>
                    {otrotrabajoData.map((otrotrabajoDat) => (
                        <OtrotrabajoData
                            key={otrotrabajoDat.id}
                            otrotrabajoDat={otrotrabajoDat}
                        />
                    ))}
                </div>
                {/* <Link
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
                </Link> */}
            </div>
            <PdfContent
                auth={auth}
                personalData={personalData}
                documentoData={documentoData}
                exdocenteData={exdocenteData}
                exlaboralData={exlaboralData}
                familiaData={familiaData}
                neducativoData={neducativoData}
                otrotrabajoData={otrotrabajoData}
                resolucionesycontratoData={resolucionesycontratoData}
                img={img}
            />
        </AuthenticatedLayout>
    );
}

export default PersonalEditExtra;
