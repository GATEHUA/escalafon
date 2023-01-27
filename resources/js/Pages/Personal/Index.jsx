import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
import { includes } from "lodash";

const Index = ({ auth, personal, files }) => {
    const [search, setSearch] = useState("");
    const [dateElect, setDateElect] = useState("");
    const [scolumn, setScolumn] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const personnalTot = personal;
    const [results, setResults] = useState(personnalTot);
    const [tt, setTt] = useState("");

    // let date = new Date("2022-01-01");
    // let utcDate = new Date(
    //     date.getUTCFullYear(),
    //     date.getUTCMonth(),
    //     date.getUTCDate()
    // );
    // console.log(
    //     utcDate.toLocaleDateString("es-PE", {
    //         year: "numeric",
    //         month: "numeric",
    //         day: "numeric",
    //     })
    // );

    // console.log(startDate);

    // var date = "2022-02-03";
    // var newFormat =
    //     date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
    // console.log(newFormat); // "01/01/2022"

    // console.log(personal);

    // const handleSearch = (event) => {
    //     setSearch(event.target.value);
    //     let filteredResults = personal.filter((item) => {
    //         return (
    //             (new Date(item.fecha_Ingreso_undac) >= new Date(startDate) &&
    //                 new Date(item.fecha_Ingreso_undac) <= new Date(endDate)) &&
    //             Object.values(item).some(
    //                 (value) =>
    //                     value &&
    //                     value
    //                         .toString()
    //                         .toLowerCase()
    //                         .includes(search.toLowerCase())
    //             )
    //         );
    //     });
    //     setResults(filteredResults);
    // };

    useEffect(() => {
        setResults(personal);
    }, [personal]);
    const handleDeleteS = (e) => {
        // route("personal.destroy", person.id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
        let filteredResults = personal.filter((item) => {
            return Object.values(item).some(
                (value) =>
                    value &&
                    value
                        .toString()
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase())
            );
        });
        setResults(filteredResults);
    };

    const asd = ["ACTIVO", "NOMBRADO", null].map((x) => {
        return x ? x.toLocaleLowerCase() : "";
    });
    // const num = 5465;
    // console.log(typeof num.toString());
    // console.log(asd);
    // const x = ["qw", "ada", "wddsa"].map((x) => console.log(x));
    const handleSearch2 = (e) => {
        // setSearch(e.target.value);
        const searchWords = search.split(" ");
        let filteredResults = personal.filter((obj) => {
            let valMin = Object.values(obj).map((x) => {
                return x ? x.toString().toLocaleLowerCase() : "";
            });
            let valMinBus = searchWords.map((x) => {
                return x ? x.toString().toLocaleLowerCase() : "";
            });
            return valMinBus.every((x) => valMin.includes(x));
        });
        setResults(filteredResults);
    };

    // console.log(results);

    // const filteredData = personal.filter((row) =>
    //     Object.values(row).some(
    //         (value) =>
    //             value &&
    //             value.toString().toLowerCase().includes(search.toLowerCase())
    //     )
    // );

    const handleFilterDate = (e) => {
        var date1 = new Date(endDate);
        var date2 = new Date(startDate);

        // Calcular la diferencia en años
        var diffInYears = date1.getFullYear() - date2.getFullYear();

        // Calcular la diferencia en meses
        var diffInMonths = date1.getMonth() - date2.getMonth();

        // Calcular la diferencia en días
        var diffInDays = date1.getDate() - date2.getDate();

        //Verificar si la diferencia en días es negativa
        if (diffInDays < 0) {
            diffInDays += new Date(
                date1.getFullYear(),
                date1.getMonth(),
                0
            ).getDate();
            diffInMonths--;
        }

        //Verificar si la diferencia en meses es negativa
        if (diffInMonths < 0) {
            diffInMonths += 12;
            diffInYears--;
        }

        setTt(
            diffInYears + " a. " + diffInMonths + " m. " + diffInDays + " d."
        );
        if (date1 >= date2) {
            console.log(
                diffInYears +
                    " a. " +
                    diffInMonths +
                    " m. " +
                    diffInDays +
                    " d."
            );
        }

        e.preventDefault();
        if (search == "") {
            if (dateElect == "INGRESO") {
                let filteredData = personal.filter((person) => {
                    // console.log(fecha.fecha_Ingreso_undac);
                    return (
                        person.fecha_Ingreso_undac >= startDate &&
                        person.fecha_Ingreso_undac <= endDate
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "") {
                setResults(personal);
            } else if (dateElect == "NOMBRAMIENTO") {
                let filteredData = personal.filter((person) => {
                    // console.log(fecha.fecha_Ingreso_undac);
                    return (
                        person.nombra_fecha >= startDate &&
                        person.nombra_fecha <= endDate
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "NACIEMIENTO") {
                let filteredData = personal.filter((person) => {
                    // console.log(fecha.fecha_Ingreso_undac);
                    return (
                        person.fecha_nacimiento >= startDate &&
                        person.fecha_nacimiento <= endDate
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "JUBILACION") {
                let filteredData = personal.filter((person) => {
                    // console.log(fecha.fecha_Ingreso_undac);
                    return (
                        person.fecha_jubilacion >= startDate &&
                        person.fecha_jubilacion <= endDate
                    );
                });
                setResults(filteredData);
            }
        } else {
            if (dateElect == "INGRESO") {
                let filteredData = personal.filter((person) => {
                    // console.log(fecha.fecha_Ingreso_undac);
                    return (
                        person.fecha_Ingreso_undac >= startDate &&
                        person.fecha_Ingreso_undac <= endDate &&
                        Object.values(person).some(
                            (value) =>
                                value &&
                                value
                                    .toString()
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "") {
            } else if (dateElect == "NOMBRAMIENTO") {
                let filteredData = personal.filter((person) => {
                    // console.log(fecha.fecha_Ingreso_undac);
                    return (
                        person.nombra_fecha >= startDate &&
                        person.nombra_fecha <= endDate &&
                        Object.values(person).some(
                            (value) =>
                                value &&
                                value
                                    .toString()
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "NACIEMIENTO") {
                let filteredData = personal.filter((person) => {
                    // console.log(fecha.fecha_Ingreso_undac);
                    return (
                        person.fecha_nacimiento >= startDate &&
                        person.fecha_nacimiento <= endDate &&
                        Object.values(person).some(
                            (value) =>
                                value &&
                                value
                                    .toString()
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "JUBILACION") {
                let filteredData = personal.filter((person) => {
                    // console.log(fecha.fecha_Ingreso_undac);
                    return (
                        person.fecha_jubilacion >= startDate &&
                        person.fecha_jubilacion <= endDate &&
                        Object.values(person).some(
                            (value) =>
                                value &&
                                value
                                    .toString()
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                    );
                });
                setResults(filteredData);
            }
        }
    };

    // Crear objetos de fecha para las dos fechas

    // var date1 = new Date("2023-01-03");
    // var date2 = new Date("2022-09-03");

    // var diffInMilliseconds = date1 - date2;

    // var diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    // console.log("Diferencia en días: " + diffInDays);

    // Crear objetos de fecha para las dos fechas

    // console.log(
    //     personal.map((person) => console.log(person.fecha_Ingreso_undac))
    // );

    // const filteredData = personal.filter((row) => {
    //     Object.values(row).some((value) => {
    //         value &&
    //             value.toString().toLowerCase().includes(search.toLowerCase());
    //     });
    // });

    // const filteredData = personal.filter((row) => {
    //     return Object.values(row).some((value) => {
    //         return (
    //             value &&
    //             value.toString().toLowerCase().includes(search.toLowerCase())
    //         );
    //     });
    // });

    // const filteredData = personal.filter((row) => {
    //     return Object.values(row).some((value) => {
    //         return value
    //             ? value.toString().toLowerCase().includes(search.toLowerCase())
    //             : false;
    //     });
    // });

    // const filteredData = personal.filter((row) => {
    //     // Divide el valor de búsqueda en palabras
    //     const searchWords = search.toLowerCase().split(" ");

    //     // Verifica si alguna de las palabras de búsqueda está incluida en el valor de alguna de las columnas
    //     return Object.values(row).some((value) => {
    //         if (!value) {
    //             return false;
    //         }

    //         // Divide el valor de la columna en palabras
    //         const valueWords = value.toString().toLowerCase().split(" ");

    //         // Verifica si alguna de las palabras de búsqueda está incluida en el valor de la columna
    //         return searchWords.some((searchWord) =>
    //             valueWords.includes(searchWord)
    //         );
    //     });
    // });

    return (
        <AuthenticatedLayout auth={auth}>
            <div className=" p-3 ">
                <div className="flex justify-between">
                    <div>
                        <button
                            className="inline-flex h-10 items-center text-white fondo-princ border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            //className="border h-10 rounded-lg inline-flex items-center border-gray-300 text-white "
                            type="button"
                            onClick={() => setScolumn(!scolumn)}
                        >
                            <svg
                                className="mr-2 w-3 h-3"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"></path>
                            </svg>
                            Mostrar Columnas
                            <svg
                                className="ml-2 w-3 h-3"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>

                        <>
                            <ul
                                className={
                                    scolumn
                                        ? " bg-gray-50 absolute z-10 rounded-lg overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 dark:text-gray-200"
                                        : "hidden"
                                }
                            >
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="checkbox-item-11"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="checkbox-item-11"
                                            className="ml-2 w-full text-sm font-medium text-white rounded dark:text-gray-300"
                                        >
                                            Bonnie Green
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="checkbox-item-12"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="checkbox-item-12"
                                            className="ml-2 w-full text-sm font-medium text-white rounded dark:text-gray-300"
                                        >
                                            Jese Leos
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="checkbox-item-13"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="checkbox-item-13"
                                            className="ml-2 w-full text-sm font-medium text-white rounded dark:text-gray-300"
                                        >
                                            Michael Gough
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="checkbox-item-14"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="checkbox-item-14"
                                            className="ml-2 w-full text-sm font-medium text-white rounded dark:text-gray-300"
                                        >
                                            Robert Wall
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="checkbox-item-15"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="checkbox-item-15"
                                            className="ml-2 w-full text-sm font-medium text-white rounded dark:text-gray-300"
                                        >
                                            Joseph Mcfall
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="checkbox-item-16"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            htmlFor="checkbox-item-16"
                                            className="ml-2 w-full text-sm font-medium text-white rounded dark:text-gray-300"
                                        >
                                            Leslie Livingston
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input
                                            id="checkbox-item-17"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            for="checkbox-item-17"
                                            className="ml-2 w-full text-sm font-medium text-white rounded dark:text-gray-300"
                                        >
                                            Roberta Casas
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </>
                    </div>

                    <div className="flex pb-2 justify-around items-center ">
                        <select
                            value={dateElect}
                            onChange={(e) => setDateElect(e.target.value)}
                            id="estado"
                            className="mr-1 bg-transparent  hover:border-blue-600 w-full  text-white border border-white rounded  "
                            name="estado"
                        >
                            <option value="">-Seleccione Fecha-</option>
                            <option value="INGRESO">INGRESO</option>
                            <option value="NOMBRAMIENTO">NOMBRAMIENTO</option>
                            <option value="NACIEMIENTO">NACIEMIENTO</option>
                            <option value="JUBILACION">JUBILACION</option>
                        </select>
                        <p className="text-white">:</p>
                        <input
                            type="date"
                            value={startDate}
                            className="mx-1 fondo-princ  hover:border-blue-600 w-full bg-transparent text-white border border-white rounded  "
                            id="fecha_inicio"
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <p className="text-white">-</p>
                        <input
                            type="date"
                            className="ml-1 fondo-princ  hover:border-blue-600 w-full bg-transparent text-white border border-white rounded  "
                            id="fecha_final"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <button
                            onClick={handleFilterDate}
                            class="relative top-0 right-0 p-2.5 text-sm font-medium text-white fondo-princ rounded-r-lg border border-white hover:bg-blue-600   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className="pb-4  dark:bg-gray-900">
                        <label htmlFor="table-search" className="">
                            Search
                        </label>
                        <button
                            onClick={handleSearch2}
                            class="relative top-0 right-0 p-2.5 text-sm font-medium text-white fondo-princ rounded-r-lg border border-white hover:bg-blue-600   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </button>
                        <div className="relative">
                            <div className="flex   absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-white dark:text-gray-400"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearch}
                                className="placeholder-gray-400 hover:border-blue-600 fondo-princ block p-2 pl-10 w-80 text-sm text-white bg-transparent rounded-lg border border-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Buscar en la tabla"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="fondo-princ-table overflow-auto relative shadow-md sm:rounded-lg"
                    style={{ height: "80vh" }}
                >
                    <table>
                        <thead className="">
                            <tr className="bg-gray-700 sticky top-0 text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400">
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        ACCIONES
                                    </div>
                                </th>
                                <th className="py-3 px-6">
                                    <div className="flex items-center">
                                        FECHA&nbsp;DE&nbsp;INGRESO{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        FECHA&nbsp;DE&nbsp;NOMBRAMIENTO
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        condicion{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        situacion{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        foto{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        estado{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        fecha_jubilacion{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        nombres{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        apellido_paterno{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        apellido_materno{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        genero{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        fecha_nacimiento{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        pais{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        departamento{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        provincia{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        distrito{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        tipo_documento{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        dni{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        carnet_extranjeria{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        partida_nacimiento{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        otro_documento{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        regimen_pensionario{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        nombre_afp{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        ruc{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        estado_civil{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        domicilio_actual{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        distrito_domicilio{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        provincia_domicilio{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        departamento_domicilio{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        email{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        telefono_fijo{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        telefono_celular{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        codigo{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        val_dni{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        regimen_laboral{" "}
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-1 w-3 h-3"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {results.map((person) => (
                                <tr
                                    className=" text-xs text-center border-b dark:bg-gray-800 dark:border-gray-700 fondo-princ-table-body dark:hover:bg-gray-600"
                                    key={person.id}
                                >
                                    <td
                                        scope="row"
                                        className="py-3 px-6 text-center"
                                    >
                                        <div className="flex item-center justify-center">
                                            <Link
                                                method="get"
                                                href={route(
                                                    "personal.edit",
                                                    person.id
                                                )}
                                                className="w-4 mr-2 text-white hover:text-green-500 hover:scale-110 hover:cursor-pointer"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                    />
                                                </svg>
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: `¿Estás seguro?`,
                                                        text: `Se eliminara el registro de ${person.apellido_paterno} ${person.apellido_materno} ${person.nombres} de manera permanente`,
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        cancelButtonText:
                                                            "Cancelar",
                                                        confirmButtonColor:
                                                            "#3085d6",
                                                        cancelButtonColor:
                                                            "#d33",
                                                        confirmButtonText:
                                                            "¡Sí, bórralo!",
                                                    }).then((result) => {
                                                        if (
                                                            result.isConfirmed
                                                        ) {
                                                            Inertia.delete(
                                                                route(
                                                                    "personal.destroy",
                                                                    person.id
                                                                )
                                                            );
                                                            Swal.fire(
                                                                "¡Eliminado!",
                                                                "Su registro ha sido eliminado",
                                                                "success"
                                                            );
                                                            // window.location.reload();
                                                        }
                                                    });
                                                }}
                                                className="w-4 mr-2 text-white hover:text-red-500 hover:scale-110 hover:cursor-pointer"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </button>

                                            {/* <Link
                                                as="button"
                                                href={route(
                                                    "personal.destroy",
                                                    person.id
                                                )}
                                                // onClick={() =>
                                                //     window.location.reload()
                                                // }
                                                method="delete"
                                                className="w-4 mr-2 text-white hover:text-red-500 hover:scale-110 hover:cursor-pointer"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </Link> */}
                                        </div>
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.fecha_Ingreso_undac}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.nombra_fecha}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.condicion}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.situacion}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src={
                                                person.foto
                                                    ? `${files}fotoPer/${person.foto}`
                                                    : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`
                                            }
                                            alt=""
                                        />
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.estado}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.fecha_jubilacion}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.nombres}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.apellido_paterno}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.apellido_materno}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.genero}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.fecha_nacimiento}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.pais}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.departamento}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.provincia}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.distrito}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.tipo_documento}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.dni}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.carnet_extranjeria}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.partida_nacimiento}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.otro_documento}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.regimen_pensionario}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.nombre_afp}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.ruc}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.estado_civil}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.domicilio_actual}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.distrito_domicilio}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.provincia_domicilio}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.departamento_domicilio}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.email}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.telefono_fijo}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.telefono_celular}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.codigo}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.val_dni}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.regimen_laboral}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="relative w-full">
                <input
                    type="search"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search for city or address"
                    required
                />
                <button
                    type="submit"
                    class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
