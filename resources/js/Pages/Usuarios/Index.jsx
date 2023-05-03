import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

function Index({ usuarios, auth }) {
    // console.log(usuarios);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState(usuarios);

    const handleSearch = (event) => {
        setSearch(event.target.value);

        let filteredResults = usuarios.filter((item) => {
            const allData = Object.values(item);
            return allData.some(
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
    return (
        <AuthenticatedLayout auth={auth}>
            <div className=" p-3 ">
                <div className="flex justify-end items-center">
                    <div className="pb-2 dark:bg-gray-900 ">
                        <div className="relative flex">
                            {/* <div className="flex   absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div> */}
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearch}
                                className="placeholder-gray-400 right-0 absolute hover:border-blue-600 fondo-princ block p-2  w-80 text-sm text-white bg-transparent rounded-lg border border-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Buscar en la tabla"
                            />
                            <button
                                // onClick={handleSearch2}
                                className="relative top-0 right-0 p-2.5 text-sm font-medium text-white fondo-princ rounded-r-lg border border-white hover:bg-blue-600   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="fondo-princ-table overflow-auto relative shadow-md sm:rounded-lg"
                    style={{ height: "80vh" }}
                >
                    <table id="tabla-datos" className="w-full">
                        <thead>
                            <tr className="bg-gray-700 sticky top-0 text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400">
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        N°
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        ACCIONES
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        NOMBRE DE USUARIO
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        E-MAIL
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        ROL
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        REGISTRADO MEDIANTE
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((usuario, index) => {
                                return (
                                    <tr
                                        className=" text-xs text-center border-b dark:bg-gray-800 dark:border-gray-700 fondo-princ-table-body dark:hover:bg-gray-600"
                                        key={usuario.id}
                                    >
                                        <td
                                            scope="row"
                                            className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                        >
                                            {index + 1}
                                        </td>
                                        <td
                                            scope="row"
                                            className="py-3 px-6 text-center"
                                        >
                                            <div className="flex item-center justify-center">
                                                <Link
                                                    method="get"
                                                    href={route(
                                                        "usuarios.edit",
                                                        usuario.id
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
                                                            text: `Se eliminara el registro de ${usuario.name} y sus datos creados de manera permanente`,
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
                                                                        "usuarios.destroy",
                                                                        usuario.id
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
                                            </div>
                                        </td>
                                        <td
                                            scope="row"
                                            className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                        >
                                            {usuario.name}
                                        </td>
                                        <td
                                            scope="row"
                                            className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                        >
                                            {usuario.email}
                                        </td>
                                        <td
                                            scope="row"
                                            className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                        >
                                            {usuario.rol}
                                        </td>
                                        <td
                                            scope="row"
                                            className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                        >
                                            {usuario.google_id
                                                ? "Gmail"
                                                : "Escalafon"}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
