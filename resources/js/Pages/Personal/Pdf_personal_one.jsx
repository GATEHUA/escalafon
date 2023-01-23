import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Pdf_familiares_directos from "./Pdf_familiares_directos";
import Pdf_nivel_educativo from "./Pdf_nivel_educativo";
import Pdf_ex_laboral from "./Pdf_ex_laboral";
import Pdf_ex_docente from "./Pdf_ex_docente";
import Pdf_otro_trabajo from "./Pdf_otro_trabajo";
import Swal from "sweetalert2";

function Pdf_personal_one({
    auth,
    personalData,
    img,
    documentoData,
    exdocenteData,
    exlaboralData,
    familiaData,
    neducativoData,
    otrotrabajoData,
    resolucionesycontratoData,
}) {
    // const responsiveAlert = () => {
    //     let width = "30%";
    //     if (window.innerWidth < 768) {
    //         width = "90%";
    //     }
    //     Swal.fire({
    //         title: "Cargando...",
    //         html: `<svg class="loading-spinner" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>`,
    //         showConfirmButton: false,
    //         allowEscapeKey: false,
    //         allowOutsideClick: false,
    //         width: width,
    //         // className: "responsive-alert",
    //     });
    // };
    // responsiveAlert();
    const qwerty = [1, 2, 5, 7, 8, 6, 4];
    const qwerty2 = [];
    for (let index = 0; index < qwerty.length; index++) {
        qwerty2[index] = qwerty[index];
    }
    console.log("qwerty2");
    console.log(qwerty2);
    const componentRef = useRef();
    const [totalnovo, setTotalnovo] = useState([]);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        // header: () => null,
        pageStyle: `
          @page {
            margin: 1.2cm 1.4cm;
          }
        `,
    });
    // console.log(Date.now())
    // const timereal=Date.now();
    // const formatDate = (timereal) => {
    //   const options = { year: "numeric", month: "long", day: "numeric"}
    //   return new Date(timereal).toLocaleDateString(undefined, options)
    // }

    const timeReal = new Date(Date.now()).toLocaleDateString("es-PE", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    // console.log(Date.parse(personalData[0].nombra_fecha))
    // console.log(new Date(Date.parse(personalData[0].nombra_fecha)).toLocaleDateString('es-PE', { year: "numeric", month: "numeric", day: "numeric"}))

    const orden = [];
    console.log(neducativoData);
    const novoneducativoData = neducativoData.map((e, index) => {
        // novo={...e, }
        // console.log(e.nivel_educativo_ne)
        if (e.nivel_educativo_ne == "PRIMARIA") {
            const x = 1;
            var identyval = { identy: x };
        } else if (e.nivel_educativo_ne == "SECUNDARIA") {
            const x = 2;
            var identyval = { identy: x };
        } else if (e.nivel_educativo_ne == "TECNICO") {
            const x = 3;
            var identyval = { identy: x };
        } else if (e.nivel_educativo_ne == "UNIVERSITARIO") {
            const x = 4;
            var identyval = { identy: x };
        } else if (e.nivel_educativo_ne == "MAESTRIA") {
            const x = 5;
            var identyval = { identy: x };
        } else if (e.nivel_educativo_ne == "DOCTORADO") {
            const x = 6;
            var identyval = { identy: x };
        } else if (e.nivel_educativo_ne == "ESPECIALIDAD") {
            const x = 7;
            var identyval = { identy: x };
        } else if (e.nivel_educativo_ne == "  OTRO DE MAYOR TRASCENDENCIA") {
            const x = 8;
            var identyval = { identy: x };
        }

        const novo = { ...e, ...identyval };
        return novo;
    });

    console.log("novoneducativoData");
    console.log(novoneducativoData);
    novoneducativoData.sort((a, b) => {
        if (a.identy < b.identy) {
            return -1;
        } else if (a.identy > b.identy) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(novoneducativoData);
    //className='bg-red-400 flex justify-center' style={{height:"2244px"}}
    return (
        <div className="font-sans">
            <div ref={componentRef}>
                <div className="bg-white">
                    <div className="flex justify-between mb-3">
                        <img
                            style={{ width: "100px", height: "100px" }}
                            src="https://undac.edu.pe/wp-content/uploads/elementor/thumbs/cropped-undac-otxjxjp3hh6yj3evud6f4g667rmvghjh2tp91gonu8.png"
                        />

                        <div className="pt-5">
                            <h1 className="font-bold justify-center flex  ">
                                UNIVERSIDAD NACIONAL DANIEL ALCIDES CARRIÓN
                            </h1>
                            <p className="font-bold justify-center flex ">
                                UNIDAD DE RECURSOS HUMANOS
                            </p>
                            <p className="font-bold justify-center flex ">
                                SUB UNIDAD DE ESCALAFON
                            </p>
                        </div>
                        <div>
                            {img ? (
                                <img
                                    className="border border-black"
                                    src={img}
                                    alt=""
                                    style={{ width: "95px", height: "95px" }}
                                />
                            ) : null}
                            <p className="flex justify-center text-xs font-bold mt-1">
                                FOTO
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mb-3">
                        <p className="font-bold justify-center flex ">
                            FICHA DE REGISTRO PERSONAL
                        </p>
                    </div>
                    {/* <div className="flex justify-between mb-4">
         <div className="flex">
         <div className="flex font-bold mr-2">
            FACULTAD: 

          </div>
          <div className="flex">
         {personalData[0].facultad?personalData[0].facultad:<>&nbsp;</>}

          </div>
         </div>

          <div className="flex">
          <div className="flex font-bold mr-2">
            ESCUELA: 
          </div>
          <div className="flex">
          {personalData[0].escuela?personalData[0].escuela:<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}

          </div>
          </div>
        </div> */}
                    {/* <div className="flex">
         <div className="flex font-bold mr-2">
            FECHA DE INGRESO A LA UNDAC: 

          </div>
          <div className="flex">
         {personalData[0].fecha_Ingreso_undac?personalData[0].fecha_Ingreso_undac:<>&nbsp;</>}

          </div>
         </div> */}
                    {/* <div className="flex">
         <div className="flex font-bold mr-2">
           ESTADO 

          </div>
          <div className="flex">
         {personalData[0].estado}

          </div>
         </div> */}

                    {/* <div className="flex justify-between mb-4">
        
          <div className="flex">
          <div className="flex font-bold mr-2">
            CODIGO: 
          </div>
          <p className="flex">
          {personalData[0].codigo?personalData[0].codigo:   <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>     }

          </p>
          </div>
        </div> */}
                    <div className="p-2 mb-4 text-xs border-black rounded-md border-2">
                        <div className="flex mb-2 justify-between">
                            <div className="flex">
                                <div className="uppercase flex font-bold  mr-3">
                                    situacion:
                                </div>
                                <div className="flex">
                                    {/* {personalData[0].condicion} */}
                                    <div className="mr-1">ADMINISTRATIVO</div>
                                    {personalData[0].situacion ==
                                    "ADMINISTRATIVO" ? (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-1 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-2 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    )}
                                    <div className="mr-1">DOCENTE</div>
                                    {personalData[0].situacion == "DOCENTE" ? (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-1 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-2 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="uppercase flex font-bold mr-3">
                                    condicion:
                                </div>
                                <div className="flex">
                                    {/* {personalData[0].condicion} */}
                                    <div className="mr-1">NOMBRADO</div>
                                    {personalData[0].condicion == "NOMBRADO" ? (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-1 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-2 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    )}
                                    <div className="mr-1">CONTRATADO</div>
                                    {personalData[0].condicion ==
                                    "CONTRATADO" ? (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-1 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-2 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    )}
                                    <div className="mr-2">CAS</div>
                                    {personalData[0].condicion == "CAS" ? (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-1 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            style={{ marginTop: "-2px" }}
                                            className="relative w-4 h-4 mr-2 text-black"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className="uppercase flex font-bold  mr-3">
                                    fecha de ingreso:
                                </div>
                                <div>
                                    {personalData[0].fecha_Ingreso_undac ? (
                                        new Date(
                                            Date.parse(
                                                personalData[0]
                                                    .fecha_Ingreso_undac
                                            )
                                        ).toLocaleDateString("es-PE", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })
                                    ) : (
                                        <>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="uppercase flex font-bold  mr-3">
                                    fecha de nombramiento:
                                </div>
                                <div>
                                    {personalData[0].nombra_fecha ? (
                                        new Date(
                                            Date.parse(
                                                personalData[0].nombra_fecha
                                            )
                                        ).toLocaleDateString("es-PE", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })
                                    ) : (
                                        <>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            {personalData[0].administrativo ? (
                                <div className=" w-full border-black rounded-md border">
                                    <div className="p-2">
                                        <div className="flex font-bold justify-center text-center mr-2 mb-2">
                                            ADMINISTRATIVO
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            {/* <div className="uppercase flex font-bold">
             categoria:
          </div> */}
                                            {/* {personalData[0].condicion} */}
                                            <div className="mr-2">AUXILIAR</div>
                                            {personalData[0].administrativo
                                                .administrativo_t ==
                                            "AUXILIAR" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}

                                            <div className="mr-2">TECNICO</div>
                                            {personalData[0].administrativo
                                                .administrativo_t ==
                                            "TECNICO" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}
                                            <div className="mr-2">
                                                PROFESIONAL
                                            </div>
                                            {personalData[0].administrativo
                                                .administrativo_t ==
                                            "PROFESIONAL" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}

                                            <div className="mr-2">
                                                FUNCIONARIO
                                            </div>
                                            {personalData[0].administrativo
                                                .administrativo_t ==
                                            "FUNCIONARIO" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}
                                            {/* <div className="uppercase flex font-bold">
             nivel de categoria:
          </div>
          <div className="flex">
         {personalData[0].administrativo.administrativo_t_nivel?personalData[0].administrativo.administrativo_t_nivel:<>&nbsp;</>}

          </div> */}
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            {/* {personalData[0].condicion} */}
                                            <div className="uppercase flex font-bold">
                                                NIVEL:
                                            </div>
                                            {personalData[0].administrativo
                                                .administrativo_t ==
                                            "FUNCIONARIO" ? (
                                                <>
                                                    <div className="mr-2">
                                                        1
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "1" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        2
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "2" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        3
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "3" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        4
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "4" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        5
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "5" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    <div className="mr-2">
                                                        A.
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "A." ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        B.
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "B." ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        C.
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "C." ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        D.
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "D." ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        E.
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "E." ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        F.
                                                    </div>
                                                    {personalData[0]
                                                        .administrativo
                                                        .nivel_remunerativo ==
                                                    "F." ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                        <div className="flex">
                                            <div className="uppercase flex font-bold">
                                                DEPENDENCIA:
                                            </div>
                                            <div className="ml-2">
                                                {personalData[0].administrativo
                                                    .dependencia ? (
                                                    personalData[0]
                                                        .administrativo
                                                        .dependencia
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}

                            {personalData[0].docente ? (
                                <div className=" w-full border-black rounded-md border">
                                    <div className="p-2">
                                        <div className="flex font-bold justify-center text-center mr-2 mb-2">
                                            DOCENTE
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            {/* {personalData[0].condicion} */}
                                            {/* <div className="uppercase flex font-bold">
             categoria:
          </div> */}
                                            <div className="mr-2">
                                                J. PRACTICA
                                            </div>
                                            {personalData[0].docente
                                                .docente_t == "J. PRACTICA" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-1 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}
                                            <div className="mr-2">AUXILIAR</div>
                                            {personalData[0].docente
                                                .docente_t == "AUXILIAR" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-1 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}

                                            <div className="mr-2">ASOCIADO</div>
                                            {personalData[0].docente
                                                .docente_t == "ASOCIADO" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-1 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}
                                            <div className="mr-2">
                                                PRINCIPAL
                                            </div>
                                            {personalData[0].docente
                                                .docente_t == "PRINCIPAL" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-1 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}
                                            <div className="mr-2">DCU</div>
                                            {personalData[0].docente
                                                .docente_t == "DCU" ? (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-1 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    style={{
                                                        marginTop: "-2px",
                                                    }}
                                                    className="relative w-4 h-4 mr-2 text-black"
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                </svg>
                                            )}
                                            {/* <div className="uppercase flex font-bold">
             nivel de categoria:
          </div>
          <div className="flex">
         {personalData[0].docente.docente_t_nivel?personalData[0].docente.docente_t_nivel:<>&nbsp;</>}

          </div> */}
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            {/* {personalData[0].condicion} */}
                                            <div className="uppercase flex font-bold">
                                                DEDICACION:
                                            </div>
                                            {personalData[0].docente
                                                .docente_t == "DCU" ? (
                                                <>
                                                    <div className="mr-2">
                                                        B1
                                                    </div>
                                                    {personalData[0].docente
                                                        .dedicacion_t ==
                                                    "B1" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        B2
                                                    </div>
                                                    {personalData[0].docente
                                                        .dedicacion_t ==
                                                    "B2" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    <div className="mr-2">
                                                        D.E.
                                                    </div>
                                                    {personalData[0].docente
                                                        .dedicacion_t ==
                                                    "DEDICACION EXCLUSIVA" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                    <div className="mr-2">
                                                        T.C.
                                                    </div>
                                                    {personalData[0].docente
                                                        .dedicacion_t ==
                                                    "TIEMPO COMPLETO" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}

                                                    <div className="mr-2">
                                                        T.P.
                                                    </div>
                                                    {personalData[0].docente
                                                        .dedicacion_t ==
                                                    "TIEMPO PARCIAL" ? (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            style={{
                                                                marginTop:
                                                                    "-2px",
                                                            }}
                                                            className="relative w-4 h-4 mr-2 text-black"
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 1024 1024"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                                                        </svg>
                                                    )}
                                                </>
                                            )}
                                            <div className="uppercase flex font-bold">
                                                N° Hrs:
                                            </div>
                                            <div className="flex">
                                                {personalData[0].docente
                                                    .horas_d ? (
                                                    personalData[0].docente
                                                        .horas_d
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="uppercase flex font-bold">
                                                facultad:
                                            </div>
                                            <div className="ml-2">
                                                {personalData[0].docente
                                                    .facultad ? (
                                                    personalData[0].docente
                                                        .facultad
                                                ) : (
                                                    <>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </>
                                                )}
                                            </div>

                                            <div className="uppercase flex font-bold">
                                                ESCUELA:
                                            </div>
                                            <div className="ml-2">
                                                {personalData[0].docente
                                                    .escuela ? (
                                                    personalData[0].docente
                                                        .escuela
                                                ) : (
                                                    <>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="uppercase text-sm flex font-bold mb-4 ">
                        DATOS PERSONALES
                    </div>

                    <div className="text-xs text-center w-full border-black rounded-md border-2 mb-4 ">
                        <div className="p-2">
                            <div>
                                <table className="w-full border-collapse border  border-black mb-2">
                                    <thead>
                                        <tr>
                                            <th className="border w-1/3 border-black">
                                                APELLIDO PATERNO
                                            </th>
                                            <th className="border w-1/3 border-black">
                                                APELLIDO MATERNO
                                            </th>
                                            <th className="border w-1/3 border-black">
                                                NOMBRES
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black">
                                                {personalData[0]
                                                    .apellido_paterno ? (
                                                    personalData[0]
                                                        .apellido_paterno
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0]
                                                    .apellido_materno ? (
                                                    personalData[0]
                                                        .apellido_materno
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0].nombres ? (
                                                    personalData[0].nombres
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <div className='mb-2'>
          <div className=" border-collapse grid grid-cols-3">
  <div className='font-bold border-black border'>APELLIDO PATERNO</div>
  <div className='font-bold border-black  border'>APELLIDO MATERNO</div>
  <div className='font-bold border-black  border'>NOMBRES</div>
  <div className='border-black border'>{personalData[0].apellido_paterno}</div>
  <div className='border-black   border'>{personalData[0].apellido_materno}</div>
  <div className='border-black   border'>{personalData[0].nombres}</div>
</div>
       
        </div> */}
                            <div>
                                <table className="w-full border-collapse border  border-black mb-2">
                                    <thead>
                                        <tr>
                                            <th className="border border-black">
                                                FECHA DE NACIMIENTO
                                            </th>
                                            <th className="border border-black">
                                                PAIS
                                            </th>
                                            <th className="border border-black">
                                                DEPARTAMENTO
                                            </th>
                                            <th className="border border-black">
                                                PROVINCIA
                                            </th>
                                            <th className="border border-black">
                                                DISTRITO
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black">
                                                {personalData[0]
                                                    .fecha_nacimiento ? (
                                                    new Date(
                                                        Date.parse(
                                                            personalData[0]
                                                                .fecha_nacimiento
                                                        )
                                                    ).toLocaleDateString(
                                                        "es-PE",
                                                        {
                                                            year: "numeric",
                                                            month: "numeric",
                                                            day: "numeric",
                                                        }
                                                    )
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0].pais ? (
                                                    personalData[0].pais
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0]
                                                    .departamento ? (
                                                    personalData[0].departamento
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0].provincia ? (
                                                    personalData[0].provincia
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0].distrito ? (
                                                    personalData[0].distrito
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className="w-full border-collapse border border-black mb-2">
                                    <thead>
                                        <tr>
                                            <th className="border w-1/3 border-black">
                                                {personalData[0].tipo_documento}
                                            </th>
                                            <th className="border w-1/3 border-black">
                                                R.U.C.
                                            </th>
                                            <th className="border w-1/3 border-black">
                                                ESTADO CIVIL
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {personalData[0].tipo_documento ==
                                            "DNI" ? (
                                                <>
                                                    <td className="border border-black">
                                                        {personalData[0].dni ? (
                                                            personalData[0].dni
                                                        ) : (
                                                            <>&nbsp;</>
                                                        )}
                                                    </td>
                                                </>
                                            ) : null}
                                            {personalData[0].tipo_documento ==
                                            "CARNET DE EXTRANJERIA" ? (
                                                <>
                                                    <td className="border border-black">
                                                        {personalData[0]
                                                            .carnet_extranjeria ? (
                                                            personalData[0]
                                                                .carnet_extranjeria
                                                        ) : (
                                                            <>&nbsp;</>
                                                        )}
                                                    </td>
                                                </>
                                            ) : null}
                                            {personalData[0].tipo_documento ==
                                            "PARTIDA DE NACIMIENTO" ? (
                                                <>
                                                    <td className="border border-black">
                                                        {personalData[0]
                                                            .partida_nacimiento ? (
                                                            personalData[0]
                                                                .partida_nacimiento
                                                        ) : (
                                                            <>&nbsp;</>
                                                        )}
                                                    </td>
                                                </>
                                            ) : null}
                                            {personalData[0].tipo_documento ==
                                            "OTRO DOCUMENTO" ? (
                                                <>
                                                    <td className="border border-black">
                                                        {personalData[0]
                                                            .otro_documento ? (
                                                            personalData[0]
                                                                .otro_documento
                                                        ) : (
                                                            <>&nbsp;</>
                                                        )}
                                                    </td>
                                                </>
                                            ) : null}
                                            <td className="border border-black">
                                                {personalData[0].ruc ? (
                                                    personalData[0].ruc
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0]
                                                    .estado_civil ? (
                                                    personalData[0].estado_civil
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div></div>
                            {/* <div className="flex justify-between mb-2">
      
    
        <div className="uppercase flex font-bold">
        ESTADO CIVIL: 
          </div>
        <div className='mr-2'>SOLTERO(A)</div>
        {personalData[0].estado_civil=="SOLTERO(A)"?<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>:<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>}
        <div className='mr-2'>CASADO(A)</div>
        {personalData[0].estado_civil=="CASADO(A)"?<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>:<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>}
        <div className='mr-2'>VIUDO(A)</div>
        {personalData[0].estado_civil=="VIUDO(A)"?<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>:<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>}
        <div className='mr-2'>DIVORCIADO(A)</div>
        {personalData[0].estado_civil=="DIVORCIADO(A)"?<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>:<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>}
        <div className='mr-2'>CONCUBINO(A)</div>
        {personalData[0].estado_civil=="CONCUBINO(A)"?<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>:<svg style={{marginTop:"-2px"}} className="relative w-4 h-4 mr-2 text-black" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>}
        
       

         </div> */}
                            <div className="width-full mb-2">
                                <div className="border border-black grid grid-flow-row-dense grid-cols-3 ">
                                    <div className=" font-bold  border-r border-black  ">
                                        DOMICILIO ACTUAL
                                    </div>
                                    <div className="col-span-2 ">
                                        {personalData[0].domicilio_actual}
                                    </div>
                                    <div className=" font-bold border-y border-r border-black ">
                                        DISTRITO{" "}
                                    </div>
                                    <div className=" font-bold border-r border-y border-black">
                                        PROVINCIA{" "}
                                    </div>
                                    <div className=" font-bold border-y border-black ">
                                        DEPARTAMENTO{" "}
                                    </div>
                                    <div className="border-r border-black">
                                        {personalData[0].distrito_domicilio ? (
                                            personalData[0].distrito_domicilio
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </div>
                                    <div className="border-r border-black">
                                        {personalData[0].provincia_domicilio ? (
                                            personalData[0].provincia_domicilio
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </div>
                                    <div className="">
                                        {personalData[0]
                                            .departamento_domicilio ? (
                                            personalData[0]
                                                .departamento_domicilio
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <table className="w-full border-collapse border border-black mb-2">
                                    <thead>
                                        <tr>
                                            <th className="border w-1/3 border-black">
                                                N° DE TELEFONO FIJO
                                            </th>
                                            <th className="border w-1/3 border-black">
                                                N° DE CELULAR
                                            </th>
                                            <th className="border w-1/3 border-black">
                                                E-MAIL
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-black">
                                                {personalData[0]
                                                    .telefono_fijo ? (
                                                    personalData[0]
                                                        .telefono_fijo
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0]
                                                    .telefono_celular ? (
                                                    personalData[0]
                                                        .telefono_celular
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                            <td className="border border-black">
                                                {personalData[0].email ? (
                                                    personalData[0].email
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <table className="w-full border-collapse border border-black mb-2">
  <thead>
    <tr>
      
      <th className="border w-1/3 border-black">REGIMEN PENSIONARIO</th>
      <th className="border w-1/3 border-black">NOMBRE DE LA AFP</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td className="border border-black">{personalData[0].regimen_pensionario?personalData[0].regimen_pensionario:<>&nbsp;</>}</td>
      <td className="border border-black">{personalData[0].nombre_afp?personalData[0].nombre_afp:<>&nbsp;</>}</td>
      </tr>
   
  </tbody>
</table> */}
                                <div className="width-full mb-2">
                                    <div className=" grid grid-cols-4 ">
                                        <div className=" font-bold  border border-black  ">
                                            REGIMEN PENSIONARIO
                                        </div>
                                        <div className="  border-black border-r border-y">
                                            {personalData[0]
                                                .regimen_pensionario ? (
                                                personalData[0]
                                                    .regimen_pensionario
                                            ) : (
                                                <>&nbsp;</>
                                            )}
                                        </div>
                                        {personalData[0].regimen_pensionario ==
                                        "AFP" ? (
                                            <>
                                                <div className=" font-bold border-y border-r border-black ">
                                                    NOMBRE(AFP){" "}
                                                </div>
                                                <div className=" border-r border-y border-black">
                                                    {personalData[0]
                                                        .nombre_afp ? (
                                                        personalData[0]
                                                            .nombre_afp
                                                    ) : (
                                                        <>&nbsp;</>
                                                    )}
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uppercase text-sm flex font-bold mb-4 ">
                        familiares directos
                    </div>
                    <div className="text-xs text-center w-full border-black rounded-md border-2 mb-4 ">
                        <div className="p-2">
                            {familiaData[0] ? (
                                <Pdf_familiares_directos
                                    familiaData={familiaData}
                                />
                            ) : (
                                <div className="mb-2">
                                    <div>
                                        <table className="w-full border-collapse border-x  border-black ">
                                            <thead>
                                                <tr>
                                                    <th className="border w-2/12 border-black">
                                                        {" "}
                                                        PARENTEZCO
                                                    </th>
                                                    <th className="border w-7/12 border-black">
                                                        APELLIDOS Y NOMBRE(S)
                                                    </th>
                                                    <th className="border w-3/12 border-black">
                                                        FECHA DE NACIMIENTO
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border  border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="uppercase text-sm flex font-bold mb-4 ">
                        nivel educativo
                    </div>
                    <div className="text-xs text-center w-full border-black rounded-md border-2 mb-4 ">
                        <div className="p-2">
                            {neducativoData[0] ? (
                                <Pdf_nivel_educativo
                                    neducativoData={novoneducativoData}
                                />
                            ) : (
                                <div className="mb-2">
                                    <div>
                                        <table className="w-full border-collapse border-x border-t border-black ">
                                            <thead>
                                                <tr>
                                                    <th className="border w-2/12 border-black">
                                                        TIPO
                                                    </th>
                                                    <th className="border w-2/12 border-black">
                                                        ETAPA
                                                    </th>
                                                    <th className="border w-3/12 border-black">
                                                        FECHA DE CULMINACION
                                                    </th>
                                                    <th className="border w-5/12  border-black">
                                                        NOMBRE DE LA INSTITUCION
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border-x border-t border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border-x border-t border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border-x border-t border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border-x  border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table className="w-full border-collapse border-x  border-black ">
                                            <thead>
                                                <tr>
                                                    {/* <th className="border  w-1/2 border-black">NOMBRE DE LA INSTITUCION</th> */}
                                                    <th className="border w-1/6   border-black">
                                                        DESCRIPCION
                                                    </th>
                                                    <th className="border-l border-y font-normal w-5/6   border-black">
                                                        {<>&nbsp;</>}
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* <div className="uppercase flex font-bold mb-4 ">
          EXPERIENCIA LABORAL
          </div>
          <div className="text-xs text-center w-full border-black rounded-md border-2 mb-4 ">
          <div className="p-2">
          {exlaboralData[0]?<Pdf_ex_laboral exlaboralData={exlaboralData}/>:
          
          <div className="mb-2">
          <div>
    <table className="w-full border-collapse border-x border-t border-black ">
<thead>
<tr>
  
  <th className="border w-2/12 border-black">ADMINISTRACION</th>
  <th className="border w-4/12 border-black">CARGO DESEMPEÑADO</th>
  <th className="border w-2/12 border-black">FECHA DE INICIO</th>
  <th className="border w-3/12 border-black">FECHA DE CULMINACION</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border-x border-t border-black">Publica - Privada</td>
  <td className="border-x border-t border-black">{<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{<>&nbsp;</>}</td>
  
   </tr>

</tbody>
</table>
<table className="w-full border-collapse border-x  border-black ">
<thead>
<tr>
  
<th className="border  border-black">EMPRESA</th>
  

</tr>
</thead>
<tbody>
<tr>
  

<td className="border-x border-t border-black">{<>&nbsp;</>}</td>

 
</tr>

</tbody>
</table> 
<table className="w-full border-collapse border-x  border-black ">
<thead>
<tr>
  
<th className="border  w-4/6 border-black">DEPENDENCIA</th>
<th className="border  w-1/6 border-black">TIPO</th>
<th className="border  w-1/6 border-black">N° (R) (M)</th>
</tr>
</thead>
<tbody>
<tr>
  

<td className="border border-black">{<>&nbsp;</>}</td>
<td className="border border-black">{<>&nbsp;</>}</td>
<td className="border border-black">{<>&nbsp;</>}</td>

 
</tr>

</tbody>
</table>


   
    </div>
        </div>

          }
            
          </div>
          </div>
          <div className="uppercase flex font-bold mb-4 ">
          EXPERIENCIA DOCENTE
          </div>
          <div className="text-xs text-center w-full border-black rounded-md border-2 mb-4 ">
          <div className="p-2">
          {exdocenteData[0]?<Pdf_ex_docente exdocenteData={exdocenteData}/>:
          
          <div className="mb-2">
          <div>
    <table className="w-full border-collapse border-x border-t border-black ">
<thead>
<tr>
  
  <th className="border w-2/12 border-black">CATEDRA</th>
  <th className="border w-4/12 border-black">CATEGORIA</th>
  <th className="border w-2/12 border-black">FECHA DE INICIO</th>
  <th className="border w-3/12 border-black">FECHA DE CULMINACION</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border-x border-t border-black">{<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{<>&nbsp;</>}</td>
  
   </tr>

</tbody>
</table>
<table className="w-full border-collapse border-x border-t border-black ">
<thead>
<tr>
  
  <th className="border w-8/12 border-black">NOMBRE DE LA INSTITUCION</th>
  <th className="border w-4/12 border-black">REGIMEN PENSIONARIO</th>

</tr>
</thead>
<tbody>
<tr>
<td className="border border-black">{<>&nbsp;</>}</td>
  <td className="border border-black">{<>&nbsp;</>}</td>
   </tr>

</tbody>
</table>



   
    </div>
        </div>

          }
            
          </div>
          </div> */}
                    <div className="uppercase text-sm flex font-bold mb-4 ">
                        A LA FECHA LABORA EN OTRA INSTITUCION
                    </div>
                    <div className="text-xs text-center w-full border-black rounded-md border-2 mb-4 ">
                        <div className="p-2">
                            {otrotrabajoData[0] ? (
                                <Pdf_otro_trabajo
                                    otrotrabajoData={otrotrabajoData}
                                />
                            ) : (
                                <div className="mb-2">
                                    <div>
                                        <table className="w-full border-collapse border-x border-t border-black ">
                                            <thead>
                                                <tr>
                                                    <th className="border w-1/12 border-black">
                                                        ESTADO
                                                    </th>
                                                    <th className="border w-4/12 border-black">
                                                        CARGO DESEMPEÑADO
                                                    </th>
                                                    <th className="border w-3/12 border-black">
                                                        HORA DE ENTRADA
                                                    </th>
                                                    <th className="border w-3/12 border-black">
                                                        HORA DE SALIDA
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border-x border-t border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border-x border-t border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border-x border-t border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border-x border-t border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table className="w-full border-collapse border-x border-t border-black ">
                                            <thead>
                                                <tr>
                                                    <th className="border w-2/3 border-black">
                                                        NOMBRE DE LA INSTITUCION
                                                    </th>
                                                    <th className="border w-1/3 border-black">
                                                        FRECUENCIA DIARIA
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                    <td className="border border-black">
                                                        {<>&nbsp;</>}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="px-8 pt-2 text-xs font-semibold">
                        Declaro que la información contenida en el presente
                        documento es plenamente valida y tiene carácter de
                        declaración jurada, encontradose sujeto a una
                        verificación siguiente.
                    </p>
                    <div className="flex justify-around mt-16">
                        <div>
                            <div className="border-2 border-black w-20 h-24"></div>
                            <div className="font-bold text-xs text-center mt-2">
                                Huella{" "}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-sm">
                                Cerro de Pasco, {timeReal}
                            </div>
                            <div className="border-b-2 border-black w-full mt-16"></div>
                            <div className="text-center  text-sm font-bold ">
                                Firma
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='bg-white flex justify-center' style={{height:"1122px"}} >
        <img className="w-28 h-32" src="https://undac.edu.pe/wp-content/uploads/elementor/thumbs/cropped-undac-otxjxjp3hh6yj3evud6f4g667rmvghjh2tp91gonu8.png"/>
        <h1>{personalData[0].condicion}</h1>
        </div> */}
            </div>
            <button className="button" onClick={handlePrint}>
                Print this out!
            </button>
        </div>
    );
}

export default Pdf_personal_one;
