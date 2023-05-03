import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Link } from "@inertiajs/inertia-react";

import logo from "../../../../public/Images/logo_escal.png";
import fotopred from "../../../../public/Images/foto_predeterminado.webp";
import Resol_indiv from "./Resol_indiv";
import Pie_pag_resolucion from "./Pie_pag_resolucion";

function Pdf_Resoluciones({ personalData, resolucionesycontratoData, img }) {
    const [altura, setAltura] = useState(null);
    const componentRef = useRef();

    function handlePrint2() {
        window.print();
    }
    useEffect(() => {
        if (componentRef.current) {
            setAltura(componentRef.current.offsetHeight);
        }
    }, []);
    // const contenedorVista = document.getElementById("contenedorVista");
    // const alturaVista = componentRef.current.offsetHeight;
    console.log(altura);
    // const numHojas = Math.ceil(altura / 1016.6930415);
    const numHojas = Math.ceil(altura / 1065.8269059);

    console.log(numHojas);

    // const alta4 = 1123;
    // const numPag = Math.ceil(alturaVista / alta4);
    // console.log(numPag);
    // const renderFooter = () => (
    //     <div style={{ textAlign: "center", fontSize: "12px" }}>
    //         <p>Pie de página en cada página</p>
    //     </div>
    // );

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,

        // header: () => (
        //     <div style={{ textAlign: "center" }}>
        //         <h1>Este es mi encabezado</h1>
        //     </div>
        // ),
        // footer: () => <div style={{ textAlign: "center" }}>Página 1 de 3</div>,
        // pageStyle: `

        // // .prinsi{
        // //     margin: 14cm 0.6cm 12cm 0.6cm;
        // //     // page-break-after: always;
        // // }`,
        pageStyle: `
          @page {
            margin: 1.0cm 0.5cm .5cm 0.5cm;
          }`,
    });

    return (
        <>
            <div className="flex justify-center">
                <button
                    onClick={handlePrint}
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
                        GENERAR PDF
                    </span>
                </button>
                {/* <button onClick={handlePrint2}>Imprimir</button> */}
                <Link
                    method="get"
                    href={route("personal.index")}
                    className="bg-red-500 m-8 mb-8 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300  rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-red-600 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                >
                    <span className="absolute bg-white bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute bg-white top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                            <path d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"></path>
                        </svg>
                        Regresar
                    </span>
                </Link>
            </div>
            {/* <style>
                    {`@page {
            size: auto;
            margin-top: 50mm;
            margin-bottom: 25mm;
            @top-center {
                content: "Encabezado personalizado";
            }
            @bottom-center {
                content: "Pie de página personalizado";
            }
            }`}
                </style> */}
            <div className="page">
                <div ref={componentRef}>
                    <Pie_pag_resolucion numHojas={numHojas} />

                    <div
                        className="px-6 relative"

                        // style={{
                        //     "@media print": {
                        //         margin: "1.4cm 0.6cm",
                        //     },
                        // }}
                    >
                        <h1 className="font-bold justify-center flex  text-lg">
                            Universidad Nacional Daniel Alcides Carrión
                        </h1>
                        <h1 className="font-bold justify-center flex text-lg  ">
                            SUB UNIDAD - ESCALAFON
                        </h1>
                        <p className=" justify-center flex text-sm">
                            Edificio Estatal N° 04 - San Juan Pampa
                        </p>
                        <p className=" justify-center flex text-sm">
                            RUC N° 20154605046
                        </p>
                        <div className=" justify-center flex  ">
                            <img className="w-20" src={logo} alt="" />
                        </div>
                        <div
                            className="w-full"
                            style={{
                                marginTop: "-20px",
                                marginBottom: "-15px",
                            }}
                        >
                            <p className="font-bold ml-3">
                                {personalData[0].estado}
                            </p>
                            <div className="border border-black bg-gray-100 h-3 rounded-md "></div>
                        </div>
                        <br />
                        <h1 className="font-bold justify-center flex text-xl mb-3">
                            INFORME ESCALAFONARIO
                        </h1>

                        <div
                            className="border-2 border-black rounded-md flex p-3"
                            style={{ minHeight: "6cm" }}
                        >
                            {personalData[0].foto ? (
                                <img
                                    className="w-28 h-36 top-8 relative mr-8"
                                    src={`${img}fotoPer/${personalData[0].foto}`}
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="w-28 h-36 top-8 relative mr-8"
                                    src={fotopred}
                                    alt=""
                                />
                            )}
                            <div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "2.7rem" }}
                                    >
                                        APELLIDOS Y NOMBRES
                                    </p>
                                    <p className=" text-sm w-80">
                                        {personalData[0].apellido_paterno}{" "}
                                        {personalData[0].apellido_materno}{" "}
                                        {personalData[0].nombres}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "9.4rem" }}
                                    >
                                        CODIGO
                                    </p>
                                    <p className=" text-xs w-80">
                                        {personalData[0].codigo}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "10.2rem" }}
                                    >
                                        DNI N°
                                    </p>
                                    <p className=" text-xs w-80">
                                        {personalData[0].dni}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "3.8rem" }}
                                    >
                                        DOMICIOLIO ACTUAL
                                    </p>
                                    <p className=" text-xs w-80">
                                        {personalData[0].domicilio_actual}
                                    </p>
                                </div>
                                {personalData[0].situacion == "DOCENTE" ? (
                                    <>
                                        <div className="flex">
                                            <p
                                                className="font-bold text-xs w-48"
                                                // style={{ marginRight: "8.3rem" }}
                                            >
                                                FACULTAD
                                            </p>
                                            <p className=" text-xs w-80">
                                                {
                                                    personalData[0].docente
                                                        .facultad
                                                }
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p
                                                className="font-bold text-xs w-48"
                                                // style={{ marginRight: "8.8rem" }}
                                            >
                                                ESCUELA
                                            </p>
                                            <p className=" text-xs w-80">
                                                {
                                                    personalData[0].docente
                                                        .escuela
                                                }
                                            </p>
                                        </div>
                                    </>
                                ) : null}
                                {personalData[0].situacion ==
                                "ADMINISTRATIVO" ? (
                                    <>
                                        <div className="flex">
                                            <p
                                                className="font-bold text-xs w-48"
                                                // style={{ marginRight: "6.6rem" }}
                                            >
                                                DEPENDENCIA
                                            </p>
                                            <p className=" text-xs w-80">
                                                {
                                                    personalData[0]
                                                        .administrativo
                                                        .dependencia
                                                }
                                            </p>
                                        </div>
                                    </>
                                ) : null}
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "7.8rem" }}
                                    >
                                        CONDICION
                                    </p>
                                    <p className=" text-xs w-80">
                                        {personalData[0].condicion}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "8rem" }}
                                    >
                                        SITUACION
                                    </p>
                                    <p className=" text-xs w-80">
                                        {personalData[0].situacion}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "1.2rem" }}
                                    >
                                        CATEGORIA ACTUAL
                                    </p>
                                    {personalData[0].situacion ==
                                    "ADMINISTRATIVO" ? (
                                        <p className=" text-xs w-80">
                                            {personalData[0].administrativo
                                                .administrativo_t == "-"
                                                ? " "
                                                : personalData[0].administrativo
                                                      .administrativo_t}{" "}
                                            {personalData[0].administrativo
                                                .administrativo_t == "-" &&
                                            personalData[0].administrativo
                                                .nivel_remunerativo == "-"
                                                ? " "
                                                : "-"}{" "}
                                            {personalData[0].administrativo
                                                .nivel_remunerativo == "-"
                                                ? " "
                                                : personalData[0].administrativo
                                                      .nivel_remunerativo}
                                        </p>
                                    ) : null}
                                    {personalData[0].situacion == "DOCENTE" ? (
                                        <p className="w-80 text-xs">{`${personalData[0].docente.docente_t} - ${personalData[0].docente.dedicacion_t}`}</p>
                                    ) : null}
                                </div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "9.3rem" }}
                                    >
                                        APORTE
                                    </p>
                                    <p className=" text-xs w-80">
                                        {personalData[0].aporte_pensionario}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "4.5rem" }}
                                    >
                                        REGIMEN LABORAL
                                    </p>
                                    <p className=" text-xs w-80">
                                        {personalData[0].regimen_laboral}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p
                                        className="font-bold text-xs w-48"
                                        // style={{ marginRight: "2.5rem" }}
                                    >
                                        REGIMEN PENSIONABLE
                                    </p>
                                    <p className=" text-xs w-80">
                                        {personalData[0].aporte_pensionario}
                                        {personalData[0].nombre_afp
                                            ? ` - ${personalData[0].nombre_afp}`
                                            : null}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="font-bold my-3">DOCUMENTOS FUENTE</div>

                        {resolucionesycontratoData.length == 0 ? (
                            <div className="text-sm">
                                <div
                                    className="absolute font-bold"
                                    style={{ marginLeft: "-20px" }}
                                >
                                    0
                                </div>
                                <div className="flex font-bold justify-between">
                                    <div>CODIGO DE RESOLUCION</div>
                                    <div>
                                        FECHA DEL DOCUMENTO:
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                </div>
                                <div className="font-bold">SE RESUELVE:</div>
                                <div className="border border-black h-24 rounded-md p-2">
                                    ARTICULO DE LA RESOLUCION
                                </div>
                                <div>
                                    <div className="flex">
                                        <div className="w-56">VIGENCIA:</div>
                                        <div className="font-bold">&nbsp;</div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-56">
                                            CATEGORIA ALCANZADO(A):
                                        </div>
                                        <div className="font-bold">&nbsp;</div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-56">
                                            NIVEL ALCANZADO(A):
                                        </div>
                                        <div className="font-bold">&nbsp;</div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-56">ANTIGUEDAD:</div>
                                        <div className="font-bold">&nbsp;</div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-56">CONDICION:</div>
                                        <div className="font-bold">&nbsp;</div>
                                        <div className="flex">
                                            <div className="w-56">
                                                DEPENDENCIA:
                                            </div>
                                            <div className="font-bold">
                                                &nbsp;
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Resol_indiv
                                resolucionesycontratoData={
                                    resolucionesycontratoData
                                }
                                personalData={personalData}
                            />
                        )}
                    </div>
                    <p className="font-bold  mt-6 flex justify-center text-xs">
                        Cabe indicar la información vertida es según su Legajo
                        Personal del(a) recurrente, el mismo que obra en nuestra
                        dependetencia
                    </p>
                    <p className="mt-2 font-bold flex justify-center text-xs">
                        ATENTAMENTE
                    </p>
                </div>
            </div>
        </>
    );
}

export default Pdf_Resoluciones;
