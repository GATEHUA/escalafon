import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
import { read, utils, writeFileXLSX } from "xlsx";
import fotopred from "../../../../public/Images/foto_predeterminado.webp";

// import XLSX from "xlsx";
// import XLSX from "xlsx";
// import { Collapse } from "react-collapse";

// import { includes } from "lodash";

const Index = ({ auth, personal, files }) => {
    const [search, setSearch] = useState("");
    const [dateElect, setDateElect] = useState("");
    const [scolumn, setScolumn] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    // const personnalTot = personal;
    const [results, setResults] = useState(personal);
    const [tt, setTt] = useState("");
    const [showNe, setShowNe] = useState(false);

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
    // console.log(personal);

    // if (Array.isArray(personal[0].neducativo)) {
    //     console.log("attribute es un arreglo");
    // } else {
    //     console.log("attribute no es un arreglo");
    // }
    //prueba
    //prueba

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
    console.log("personal");
    console.log(personal);
    // personal.forEach((element) => {
    //     let allData = Object.values(element);
    //     function flattenArray(arr) {
    //         return arr.reduce(
    //             (acc, val) =>
    //                 Array.isArray(val)
    //                     ? acc.concat(flattenArray(val))
    //                     : acc.concat(val),
    //             []
    //         );
    //     }
    //     allData = allData.concat(
    //         flattenArray(element.neducativo.map((x) => Object.values(x)))
    //     );
    //     console.log(allData);
    // });

    // for (let index = 0; index < personal.length; index++) {
    //     const allData = Object.values(personal[index]).concat(
    //         personal[index].neducativo.map((x) => Object.values(x))
    //     );
    //     console.log(`allData${index}`);
    //     console.log(allData.flat());
    // }

    // const allData =
    // const data = [
    //     {
    //         name: "Alice",
    //         age: 25,
    //         city: "New York",
    //     },
    //     {
    //         name: "Bob",
    //         age: 30,
    //         city: "Chicago",
    //     },
    //     {
    //         name: "Charlie",
    //         age: 35,
    //         city: "Los Angeles",
    //     },
    //     {
    //         name: "Dave",
    //         age: 40,
    //         city: "New York",
    //     },
    // ];
    // const pruebaMrz2 = data.map((ned) => Object.values(ned));
    // console.log("pruebaMrz1f");
    // console.log(pruebaMrz2.flat());
    // console.log("pruebaMrz2f");
    // console.log([2, 3].concat(pruebaMrz2));
    // console.log("personal[3].administrativo");
    // console.log(personal[3].docente);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        let filteredResults = personal.filter((item) => {
            const allData = Object.values(item).concat(
                item.neducativo &&
                    item.neducativo.map((ned) => Object.values(ned)),
                item.resolucionesycontrato &&
                    item.resolucionesycontrato.map((res) => Object.values(res)),
                item.docente && Object.values(item.docente).flat(),
                item.administrativo && Object.values(item.administrativo).flat()
            );
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

    // const asd = ["ACTIVO", "NOMBRADO", null].map((x) => {
    //     return x ? x.toLocaleLowerCase() : "";
    // });
    // const num = 5465;
    // console.log(typeof num.toString());
    // console.log(asd);
    // const x = ["qw", "ada", "wddsa"].map((x) => console.log(x));

    //modo estricto
    const handleSearch2 = () => {
        // setSearch(e.target.value);
        const searchWords = search.split(/\s*[,;~]\s*/);

        let filteredResults = personal.filter((item) => {
            // let valMin = Object.values(obj).map((x) => {
            //     return x ? x.toString().toLocaleLowerCase() : "";
            // });
            const allData = Object.values(item)
                .concat(
                    item.neducativo &&
                        item.neducativo.map((ned) => Object.values(ned)),
                    item.resolucionesycontrato &&
                        item.resolucionesycontrato.map((res) =>
                            Object.values(res)
                        ),
                    item.docente && Object.values(item.docente).flat(),
                    item.administrativo &&
                        Object.values(item.administrativo).flat()
                )
                .toString()
                .toLocaleLowerCase();
            let valMinBus = searchWords.map((x) => {
                return x ? x.toString().toLocaleLowerCase() : "";
            });
            // console.log("allData2search");
            // console.log(allData);
            // return valMinBus.every((x) => valMin.includes(x));
            // return valMinBus.every((x) => allData.includes(x));
            return valMinBus.every((x) => allData.split(",").includes(x));
            // return valMinBus.every((x) => {
            //     return allData.split(",").some((data) => {
            //         return data.trim().startsWith(x);
            //     });
            // });
        });
        setResults(filteredResults);
    };

    // const handleSearch2 = (e) => {
    //     const searchWords = search.split(" ");
    //     let filteredResults = personal.filter((item) => {
    //         const allData = Object.values(item)
    //             .concat(
    //                 item.neducativo &&
    //                     item.neducativo.map((ned) => Object.values(ned)),
    //                 item.docente && Object.values(item.docente).flat(),
    //                 item.administrativo &&
    //                     Object.values(item.administrativo).flat()
    //             )
    //             .join(",") // unir los valores en una cadena
    //             .toLowerCase();

    //         let valMinBus = searchWords.map((x) => {
    //             return x ? x.toString().toLocaleLowerCase() : "";
    //         });

    //         return valMinBus.every((x) => {
    //             return allData.split(",").some((data) => {
    //                 return data.trim().indexOf(x) !== -1;
    //             });
    //         });
    //     });
    //     setResults(filteredResults);
    // };

    // const handleSearch2 = (e) => {
    //     const searchWords = search.split(" ");
    //     let filteredResults = personal.filter((item) => {
    //         const allData = Object.values(item)
    //             .concat(
    //                 item.neducativo &&
    //                     item.neducativo.map((ned) => Object.values(ned)),
    //                 item.docente && Object.values(item.docente).flat(),
    //                 item.administrativo &&
    //                     Object.values(item.administrativo).flat()
    //             )
    //             .toString()
    //             .toLocaleLowerCase();
    //         const searchRegex = new RegExp(
    //             "\\b" + searchWords.join("\\b|\\b") + "\\b",
    //             "i"
    //         );
    //         return searchRegex.test(allData);
    //     });
    //     setResults(filteredResults);
    // };

    //funka pero probar ...
    // const handleSearch2 = (e) => {
    //     const searchWords = search.split(" ");
    //     let filteredResults = personal.filter((item) => {
    //         const allData = Object.values(item)
    //             .concat(
    //                 item.neducativo &&
    //                     item.neducativo.map((ned) => Object.values(ned)),
    //                 item.docente && Object.values(item.docente).flat(),
    //                 item.administrativo &&
    //                     Object.values(item.administrativo).flat()
    //             )
    //             .join(",") // unir los valores en una cadena
    //             .toLowerCase();

    //         let valMinBus = searchWords.map((x) => {
    //             return x ? x.toString().toLocaleLowerCase() : "";
    //         });

    //         return valMinBus.every((x) => allData.includes(x));
    //     });
    //     setResults(filteredResults);
    // };

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
            } else if (dateElect == "NACIMIENTO") {
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
            const searchWords = search.split(/\s*[,;~]\s*/);
            if (dateElect == "INGRESO") {
                let filteredData = personal.filter((item) => {
                    const allData = Object.values(item)
                        .concat(
                            item.neducativo &&
                                item.neducativo.map((ned) =>
                                    Object.values(ned)
                                ),
                            item.resolucionesycontrato &&
                                item.resolucionesycontrato.map((res) =>
                                    Object.values(res)
                                ),
                            item.docente && Object.values(item.docente).flat(),
                            item.administrativo &&
                                Object.values(item.administrativo).flat()
                        )
                        .toString()
                        .toLocaleLowerCase();
                    // console.log(fecha.fecha_Ingreso_undac);
                    let valMinBus = searchWords.map((x) => {
                        return x ? x.toString().toLocaleLowerCase() : "";
                    });
                    return (
                        item.fecha_Ingreso_undac >= startDate &&
                        item.fecha_Ingreso_undac <= endDate &&
                        valMinBus.every((x) => allData.split(",").includes(x))
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "") {
            } else if (dateElect == "NOMBRAMIENTO") {
                // let filteredData = personal.filter((person) => {
                //     // console.log(fecha.fecha_Ingreso_undac);
                //     return (
                //         person.nombra_fecha >= startDate &&
                //         person.nombra_fecha <= endDate &&
                //         Object.values(person).some(
                //             (value) =>
                //                 value &&
                //                 value
                //                     .toString()
                //                     .toLowerCase()
                //                     .includes(search.toLowerCase())
                //         )
                //     );
                // });
                let filteredData = personal.filter((item) => {
                    const allData = Object.values(item)
                        .concat(
                            item.neducativo &&
                                item.neducativo.map((ned) =>
                                    Object.values(ned)
                                ),
                            item.resolucionesycontrato &&
                                item.resolucionesycontrato.map((res) =>
                                    Object.values(res)
                                ),
                            item.docente && Object.values(item.docente).flat(),
                            item.administrativo &&
                                Object.values(item.administrativo).flat()
                        )
                        .toString()
                        .toLocaleLowerCase();
                    // console.log(fecha.fecha_Ingreso_undac);
                    let valMinBus = searchWords.map((x) => {
                        return x ? x.toString().toLocaleLowerCase() : "";
                    });
                    return (
                        item.nombra_fecha >= startDate &&
                        item.nombra_fecha <= endDate &&
                        valMinBus.every((x) => allData.split(",").includes(x))
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "NACIMIENTO") {
                // let filteredData = personal.filter((person) => {
                //     // console.log(fecha.fecha_Ingreso_undac);
                //     return (
                //         person.fecha_nacimiento >= startDate &&
                //         person.fecha_nacimiento <= endDate &&
                //         Object.values(person).some(
                //             (value) =>
                //                 value &&
                //                 value
                //                     .toString()
                //                     .toLowerCase()
                //                     .includes(search.toLowerCase())
                //         )
                //     );
                // });
                let filteredData = personal.filter((item) => {
                    const allData = Object.values(item)
                        .concat(
                            item.neducativo &&
                                item.neducativo.map((ned) =>
                                    Object.values(ned)
                                ),
                            item.resolucionesycontrato &&
                                item.resolucionesycontrato.map((res) =>
                                    Object.values(res)
                                ),
                            item.docente && Object.values(item.docente).flat(),
                            item.administrativo &&
                                Object.values(item.administrativo).flat()
                        )
                        .toString()
                        .toLocaleLowerCase();
                    // console.log(fecha.fecha_Ingreso_undac);
                    let valMinBus = searchWords.map((x) => {
                        return x ? x.toString().toLocaleLowerCase() : "";
                    });
                    return (
                        item.fecha_nacimiento >= startDate &&
                        item.fecha_nacimiento <= endDate &&
                        valMinBus.every((x) => allData.split(",").includes(x))
                    );
                });
                setResults(filteredData);
            } else if (dateElect == "JUBILACION") {
                // let filteredData = personal.filter((person) => {
                //     // console.log(fecha.fecha_Ingreso_undac);
                //     return (
                //         person.fecha_jubilacion >= startDate &&
                //         person.fecha_jubilacion <= endDate &&
                //         Object.values(person).some(
                //             (value) =>
                //                 value &&
                //                 value
                //                     .toString()
                //                     .toLowerCase()
                //                     .includes(search.toLowerCase())
                //         )
                //     );
                // });
                let filteredData = personal.filter((item) => {
                    const allData = Object.values(item)
                        .concat(
                            item.neducativo &&
                                item.neducativo.map((ned) =>
                                    Object.values(ned)
                                ),
                            item.resolucionesycontrato &&
                                item.resolucionesycontrato.map((res) =>
                                    Object.values(res)
                                ),
                            item.docente && Object.values(item.docente).flat(),
                            item.administrativo &&
                                Object.values(item.administrativo).flat()
                        )
                        .toString()
                        .toLocaleLowerCase();
                    // console.log(fecha.fecha_Ingreso_undac);
                    let valMinBus = searchWords.map((x) => {
                        return x ? x.toString().toLocaleLowerCase() : "";
                    });
                    return (
                        item.fecha_jubilacion >= startDate &&
                        item.fecha_jubilacion <= endDate &&
                        valMinBus.every((x) => allData.split(",").includes(x))
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
    // console.log("results");
    // console.log(results);

    //<----------------------->

    // const exportFile = () => {
    //     const htmlTable = document.getElementById("tabla-datos");
    //     // const wb = XLSX.utils.table_to_book(htmlTable);
    //     const wb = utils.table_to_book(htmlTable);
    //     writeFileXLSX(wb, "table.xlsx");
    // };

    // const dataPrueba123 = [
    //     {
    //         id: "1",
    //         loop: "asd",
    //         asd: "asdsad",
    //         zxcvvv: "xvdzdf",

    //         prueba2: [
    //             {
    //                 id: "1",
    //                 loop: "asd",
    //                 asd: "asdsad",
    //                 zxcvvv: "xvdzdf",
    //                 asdasdchgj213: "asdasd",
    //             },
    //             { id: "12", loop: "asd2", asd: "asdsad2", zxcvvv: "xvdzdf2" },
    //         ],
    //     },
    //     {
    //         id: "2",
    //         loop: "asd2",
    //         asd: "asdsad2",
    //         xzc: "zxczxc",
    //         prueba2: [
    //             {
    //                 id: "12",
    //                 loop: "asd2",
    //                 asd: "asdsad2",
    //                 zxcvvv: "xvdzdf2",
    //             },
    //             {
    //                 id: "12",
    //                 loop: "asd2",
    //                 asd: "asdsad2",
    //                 zxcvvv: "xvdzdf2",
    //             },
    //         ],
    //     },
    // ];

    // const data = [
    //     {
    //         id: 1,
    //         name: "John Doe",
    //         email: "john.doe@example.com",
    //         address: {
    //             street: "123 Main St",
    //             city: "Anytown",
    //             state: "CA",
    //             zip: "12345",
    //         },
    //     },
    //     {
    //         id: 2,
    //         name: "Jane Smith",
    //         email: "jane.smith@example.com",
    //         address: [
    //             {
    //                 street: "456 Oak St1",
    //                 city: "Anytown1",
    //                 state: "CA1",
    //                 zip: "1234567891",
    //             },
    //             {
    //                 street: "456 Oak St2",
    //                 city: "Anytown2",
    //                 state: "CA2",
    //                 zip: "1234567892",
    //             },
    //             {
    //                 street: "456 Oak St3",
    //                 city: "Anytown3",
    //                 state: "CA3",
    //                 zip: "1234567893",
    //             },
    //         ],
    //     },
    // ];
    const neducativo_results = results.flatMap((item) =>
        item.neducativo.map((prueba2Item) => prueba2Item)
    );
    const resoluciones_results = results.flatMap((item) =>
        item.resolucionesycontrato.map((prueba2Item) => prueba2Item)
    );
    console.log(neducativo_results);
    const convertDataPersonal = (data) => {
        const headers = [
            "ID",
            "E-MAIL(USER)",
            "FECHA DE NACIMIENTO",
            "APELLIDO PATERNO",
            "APELLIDO MATERNO",
            "NOMBRES(S)",
            "FECHA DE INGRESO",
            "FECHA DE NOMBRAMIENTO",
            "CONDICION",
            "SITUACION",
            "DOCENTE_CATEGORIA",
            "DOCENTE_DEDICACION",
            "DOCENTE_FACULTAD",
            "DOCENTE_ESCUELA",
            "DOCENTE_HORAS(DIARIAS)",
            "ADMINISTRATIVO_CATEGORIA",
            "ADMINISTRATIVO_NIVEL",
            "ADMINISTRATIVO_DEPENDENCIA",
            "ESTADO",
            "FECHA DE JUBILACION",
            "GENERO",
            "PAIS",
            "DEPARTAMENTO",
            "PROVINCIA",
            "DISTRITO",
            "TIPO DE DOCUMENTO",
            "DNI",
            "REGIMEN PENSIONARIO",
            "NOMBRE DE LA AFP",
            "RUC",
            "ESTADO CIVIL",
            "DOMICILIO ACTUAL",
            "DISTRITO DEL DOMICILIO",
            "PROVINCIA DEL DOMICILIO",
            "DEPARTAMENTO DEL DOMICILIO",
            "EMAIL",
            "TELEFONO FIJO",
            "TELEFONO CELULAR",
            "CODIGO",
            "REGIMEN LABORAL",
        ];
        const rows = data.map((item) => [
            item.id,
            item.user.email,
            item.fecha_nacimiento,
            item.apellido_paterno,
            item.apellido_materno,
            item.nombres,
            item.fecha_Ingreso_undac,
            item.nombra_fecha,
            item.condicion,
            item.situacion,
            item.docente ? item.docente.docente_t : null,
            item.docente ? item.docente.dedicacion_t : null,
            item.docente ? item.docente.facultad : null,
            item.docente ? item.docente.escuela : null,
            item.docente ? item.docente.horas_d : null,
            item.administrativo ? item.administrativo.administrativo_t : null,
            item.administrativo ? item.administrativo.nivel_remunerativo : null,
            item.administrativo ? item.administrativo.dependencia : null,
            item.estado,
            item.fecha_jubilacion,
            item.genero,
            item.pais,
            item.departamento,
            item.provincia,
            item.distrito,
            item.tipo_documento,
            item.dni,
            item.regimen_pensionario,
            item.nombre_afp,
            item.ruc,
            item.estado_civil,
            item.domicilio_actual,
            item.distrito_domicilio,
            item.provincia_domicilio,
            item.departamento_domicilio,
            item.email,
            item.telefono_fijo,
            item.telefono_celular,
            item.codigo,
            item.regimen_laboral,
        ]);

        return [headers, ...rows];
    };
    const convertDataNeducativo = (data) => {
        const headers = [
            "ID",
            "PERSONAL_ID",
            "GRADO",
            "ETAPA",
            "NOMBRE DE LA INSTITUCION",
            "DESCRIPCION",
            "FECHA DE CULMINACION",
            "DOCUMENTO CARGADO",
        ];
        const rows = data.map((item) => [
            item.id ? item.id : null,
            item.personal_id ? item.personal_id : null,
            item.nivel_educativo_ne ? item.nivel_educativo_ne : null,
            item.etapa_ne ? item.etapa_ne : null,
            item.nombre_institucion_ne ? item.nombre_institucion_ne : null,
            item.descripcion_ne ? item.descripcion_ne : null,
            item.fecha_culminacion_ne ? item.fecha_culminacion_ne : null,
            item.documento_val_ne ? item.documento_val_ne : null,
        ]);
        return [headers, ...rows];
    };
    const convertDataResoluciones = (data) => {
        const headers = [
            "ID",
            "PERSONAL_ID",
            "CODIGO",
            "TIPO",
            "FECHA",
            "SE RESUELVE",
            "VIGENCIA",
            "CATEGORIA ALCANZADA",
            "NIVEL ALCANZADO",
            "ANTIGUEDAD DESDE",
            "ANTIGUEDAD HASTA",
            "CONDICION",
            "DEPENDENCIA O FACULTAD",
            "OBSERVACIONES",
            "DOCUMENTO CARGADO",
        ];
        const rows = data.map((item) => [
            item.id ? item.id : null,
            item.personal_id ? item.personal_id : null,
            item.cod_res ? item.cod_res : null,
            item.tipo_res ? item.tipo_res : null,
            item.fecha_dic_res ? item.fecha_dic_res : null,
            item.des_art_pri_res ? item.des_art_pri_res : null,
            item.vigencia_res ? item.vigencia_res : null,
            item.categoria_alcanz_res ? item.categoria_alcanz_res : null,
            item.nivel_alcanz_res ? item.nivel_alcanz_res : null,
            item.antiguedad_in_res ? item.antiguedad_in_res : null,
            item.antiguedad_sa_res ? item.antiguedad_sa_res : null,
            item.condicion_res ? item.condicion_res : null,
            item.dependencia_res ? item.dependencia_res : null,
            item.observacion_res ? item.observacion_res : null,
            item.documento_val_res ? item.documento_val_res : null,
        ]);
        return [headers, ...rows];
    };

    // console.log(convertData(data));

    console.log("asdasd");
    // console.log(PRUEBA2_dataPrueba123);

    // function flattenArray(arr) {
    //     const toReturn = [];
    //     arr.forEach((obj) => {
    //         const flatObject = {};
    //         Object.keys(obj).forEach((key) => {
    //             if (Array.isArray(obj[key])) {
    //                 obj[key].forEach((subObj, index) => {
    //                     Object.keys(subObj).forEach((subKey) => {
    //                         flatObject[`${key}_${index}_${subKey}`] =
    //                             subObj[subKey];
    //                     });
    //                 });
    //             } else {
    //                 flatObject[key] = obj[key];
    //             }
    //         });
    //         toReturn.push(flatObject);
    //     });
    //     return toReturn;
    // }
    // const qwer2qwe = flattenArray(results);

    function flattenData(array) {
        return array.map((obj) => {
            const flattenedObj = {};
            Object.keys(obj).forEach((key) => {
                if (typeof obj[key] === "object" && obj[key] !== null) {
                    Object.keys(obj[key]).forEach((nestedKey) => {
                        flattenedObj[`${key}_${nestedKey}`] =
                            obj[key][nestedKey];
                    });
                } else {
                    flattenedObj[key] = obj[key];
                }
            });
            return flattenedObj;
        });
    }

    // const dasadsadq = flattenData(dataPrueba123);
    // console.log("dasadsadq");
    // console.log(dasadsadq);

    // function flattenObject(ob) {
    //     const toReturn = {};
    //     Object.keys(ob).map((i) => {
    //         if (typeof ob[i] === "object" && ob[i] !== null) {
    //             // console.log(ob[i]);
    //             //ob[person]
    //             const flatObject = flattenObject(ob[i]);
    //             Object.keys(flatObject).map((x) => {
    //                 toReturn[`${i}.${x}`] = flatObject[x];
    //             });
    //         } else {
    //             toReturn[i] = ob[i];
    //         }
    //     });
    //     return toReturn;
    // }
    // const resultsdefine = flattenObject(results);
    // console.log("resultsdefine");

    // console.log(resultsdefine);

    // const exportFile = () => {
    //     const ws = utils.json_to_sheet(results);
    //     const wb = utils.book_new();
    //     utils.book_append_sheet(wb, ws, "Data");

    //     writeFileXLSX(wb, "SheetJSReactAoO.xlsx");
    // };

    const exportFile = () => {
        const wb = utils.book_new();

        // Creamos la primera hoja de cálculo
        const ws1 = utils.json_to_sheet(convertDataPersonal(results));
        utils.book_append_sheet(wb, ws1, "PERSONAL");

        // Creamos la segunda hoja de cálculo
        const ws2 = utils.json_to_sheet(
            convertDataNeducativo(neducativo_results)
        );
        utils.book_append_sheet(wb, ws2, "GRADO ACADEMICO");
        const ws3 = utils.json_to_sheet(
            convertDataResoluciones(resoluciones_results)
        );
        utils.book_append_sheet(wb, ws3, "RESOLUCIONES");

        // Exportamos el libro de trabajo
        writeFileXLSX(wb, "SheetJSReactAoO.xlsx");
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <div className=" p-3 ">
                <div className="flex justify-between items-center">
                    {/* <div>
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
                                            htmlFor="checkbox-item-11"
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
                                            htmlFor="checkbox-item-12"
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
                                            htmlFor="checkbox-item-13"
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
                                            htmlFor="checkbox-item-14"
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
                                            htmlFor="checkbox-item-15"
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
                                            htmlFor="checkbox-item-17"
                                            className="ml-2 w-full text-sm font-medium text-white rounded dark:text-gray-300"
                                        >
                                            Roberta Casas
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </>
                    </div> */}

                    <button
                        // onClick={handlePrint}
                        onClick={exportFile}
                        style={{ background: "green" }}
                        className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300  rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-green-600 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    >
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 sombra border-white border opacity-10 group-hover:translate-x-0"></span>
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
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286 7.4 8H5l2.8 4L5 16h2.4L9 13.714 10.6 16H13l-2.8-4z"></path>
                                </g>
                            </svg>
                            Descargar Excel
                        </span>
                    </button>
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
                            <option value="NACIMIENTO">NACIMIENTO</option>
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
                            className="ml-1 fondo-princ hover:border-blue-600 w-full bg-transparent text-white border border-white rounded  "
                            id="fecha_final"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <button
                            onClick={handleFilterDate}
                            className="relative top-0 right-0 p-2.5 text-sm font-medium text-white fondo-princ rounded-r-lg border border-white hover:bg-blue-600   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
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
                    {/* <div class="relative w-full">
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
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div> */}
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
                                onClick={handleSearch2}
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
                {/* <button onClick={exportFile}>Export to Excel</button> */}

                <div
                    className="fondo-princ-table overflow-auto relative shadow-md sm:rounded-lg"
                    style={{ height: "80vh" }}
                >
                    <table id="tabla-datos">
                        <thead className="">
                            <tr className="bg-gray-700 sticky top-0 text-xs text-white uppercase dark:bg-gray-700 dark:text-gray-400">
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">N°</div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        ACCIONES
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex justify-center items-center">
                                        E-MAIL(USER)
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        fecha de nacimiento
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
                                        Apellidos&nbsp;y&nbsp;nombres{" "}
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
                                <th className="py-3">
                                    <div className="flex items-center">
                                        FECHA&nbsp;DE INGRESO
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
                                        FECHA&nbsp;DE NOMBRAMIENTO
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
                                    <div className="flex items-center justify-center">
                                        Nivel EDUCATIVO
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
                                        fecha de jubilacion
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
                                    <div className="flex items-center justify-center">
                                        RESOLUCIONES
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
                            {results.map((person, index) => (
                                <tr
                                    className=" text-xs text-center border-b dark:bg-gray-800 dark:border-gray-700 fondo-princ-table-body dark:hover:bg-gray-600"
                                    key={person.id}
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

                                            <Link
                                                method="get"
                                                href={route(
                                                    "personal.pdfResoluciones",
                                                    person.id
                                                )}
                                                className="w-16 ml-1 text-white hover:text-blue-500 hover:scale-110 hover:cursor-pointer"
                                            >
                                                <svg
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
                                            </Link>

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
                                        {person.user.email}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.fecha_nacimiento}
                                    </td>
                                    <td
                                        scope="row"
                                        className="capitalize py-4 px-6 font-bold text-white whitespace-nowrap dark:text-white"
                                    >
                                        <div className="justify-center text-center flex items-center">
                                            <img
                                                className="w-10 h-10 rounded-full mr-2"
                                                src={
                                                    person.foto
                                                        ? `${files}fotoPer/${person.foto}`
                                                        : fotopred
                                                }
                                                alt=""
                                            />
                                            {person.apellido_paterno}{" "}
                                            {person.apellido_materno}{" "}
                                            {person.nombres}
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
                                        <div className=" flex justify-center pt-1">
                                            {person.situacion == "DOCENTE" ? (
                                                <table>
                                                    <thead>
                                                        <tr className="bg-gray-800 uppercase text-white">
                                                            <th className="px-4 py-2">
                                                                CATEGORIA
                                                            </th>
                                                            <th className="px-4 py-2">
                                                                DEDICACION
                                                            </th>
                                                            <th className="px-4 py-2">
                                                                FACULTAD
                                                            </th>
                                                            <th className="px-4 py-2">
                                                                ESCUELA
                                                            </th>
                                                            <th className="px-4 py-2">
                                                                HORAS(DIARIAS)
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="border p-1">
                                                                {person.docente
                                                                    ? person
                                                                          .docente
                                                                          .docente_t
                                                                    : " "}
                                                            </td>
                                                            <td className="border p-1">
                                                                {person.docente
                                                                    ? person
                                                                          .docente
                                                                          .dedicacion_t
                                                                    : " "}
                                                            </td>
                                                            <td className="border p-1">
                                                                {person.docente
                                                                    ? person
                                                                          .docente
                                                                          .facultad
                                                                    : " "}
                                                            </td>
                                                            <td className="border p-1 ">
                                                                {person.docente
                                                                    ? person
                                                                          .docente
                                                                          .escuela
                                                                    : " "}
                                                            </td>
                                                            <td className="border p-1">
                                                                {person.docente
                                                                    ? person
                                                                          .docente
                                                                          .horas_d
                                                                    : " "}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ) : null}
                                            {person.situacion ==
                                            "ADMINISTRATIVO" ? (
                                                <table>
                                                    <thead>
                                                        <tr className="bg-gray-800 uppercase text-white">
                                                            <th className="px-4 py-2">
                                                                CATEGORIA
                                                            </th>
                                                            <th className="px-4 py-2">
                                                                NIVEL
                                                            </th>
                                                            <th className="px-4 py-2">
                                                                dependencia
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="border p-1">
                                                                {person.administrativo
                                                                    ? person
                                                                          .administrativo
                                                                          .administrativo_t
                                                                    : " "}
                                                            </td>
                                                            <td className="border p-1">
                                                                {person.administrativo
                                                                    ? person
                                                                          .administrativo
                                                                          .nivel_remunerativo
                                                                    : " "}
                                                            </td>
                                                            <td className="border p-1">
                                                                {person.administrativo
                                                                    ? person
                                                                          .administrativo
                                                                          .dependencia
                                                                    : " "}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ) : null}
                                        </div>
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.estado}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-1 flex justify-center px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {/* <button
                                            onClick={() => setShowNe(!showNe)}
                                        >
                                            Show/Hide Company
                                        </button> */}
                                        {/* <Collapse isOpened={showNe}> */}
                                        {person.neducativo.length > 0 && (
                                            <table>
                                                <thead>
                                                    <tr className="bg-gray-800 uppercase text-white">
                                                        <th className="px-4 py-2">
                                                            tipo
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            etapa
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            institucion
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            descripcion
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            f. culminacion
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            documento
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {person.neducativo.map(
                                                        (ne) => (
                                                            <tr key={ne.id}>
                                                                <td className="border p-1">
                                                                    {
                                                                        ne.nivel_educativo_ne
                                                                    }
                                                                </td>
                                                                <td className="border p-1">
                                                                    {
                                                                        ne.etapa_ne
                                                                    }
                                                                </td>
                                                                <td className="border p-1">
                                                                    {
                                                                        ne.nombre_institucion_ne
                                                                    }
                                                                </td>
                                                                <td className="border p-1 ">
                                                                    {
                                                                        ne.descripcion_ne
                                                                    }
                                                                </td>
                                                                <td className="border p-1">
                                                                    {
                                                                        ne.fecha_culminacion_ne
                                                                    }
                                                                </td>
                                                                <td className="border p-1">
                                                                    {ne.documento_val_ne ? (
                                                                        <a
                                                                            target="_blank"
                                                                            href={`${files}documento_val_ne_Per/${ne.documento_val_ne}`}
                                                                        >
                                                                            Ver
                                                                            Documento
                                                                        </a>
                                                                    ) : (
                                                                        "-"
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        )}
                                        {/* </Collapse> */}

                                        {/* {person.neducativo} */}
                                    </td>

                                    <td
                                        scope="row"
                                        className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.fecha_jubilacion}
                                    </td>
                                    <td
                                        scope="row"
                                        className="py-1 flex justify-center px-6 font-medium text-white whitespace-nowrap dark:text-white"
                                    >
                                        {person.resolucionesycontrato.length >
                                            0 && (
                                            <table>
                                                <thead>
                                                    <tr className="bg-gray-800 uppercase text-white">
                                                        <th className="px-4 py-2">
                                                            CODIGO
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            TIPO
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            FECHA
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            VIGENCIA
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            OBSERVACIONES
                                                        </th>
                                                        <th className="px-4 py-2">
                                                            documento
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {person.resolucionesycontrato.map(
                                                        (re) => (
                                                            <tr key={re.id}>
                                                                <td className="border p-1">
                                                                    {re.cod_res}
                                                                </td>
                                                                <td className="border p-1">
                                                                    {
                                                                        re.tipo_res
                                                                    }
                                                                </td>
                                                                <td className="border p-1">
                                                                    {
                                                                        re.fecha_dic_res
                                                                    }
                                                                </td>
                                                                <td className="border p-1 ">
                                                                    {
                                                                        re.vigencia_res
                                                                    }
                                                                </td>
                                                                <td className="border p-1 ">
                                                                    {
                                                                        re.observacion_res
                                                                    }
                                                                </td>
                                                                <td className="border p-1">
                                                                    {re.documento_val_res ? (
                                                                        <a
                                                                            target="_blank"
                                                                            href={`${files}documento_val_res_Per/${re.documento_val_res}`}
                                                                        >
                                                                            Ver
                                                                            Documento
                                                                        </a>
                                                                    ) : (
                                                                        "-"
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        )}
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
                                        {person.val_dni ? (
                                            <a
                                                target="_blank"
                                                href={`${files}Dni_I_Per/${person.val_dni}`}
                                            >
                                                {person.val_dni}
                                            </a>
                                        ) : (
                                            "-"
                                        )}
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
        </AuthenticatedLayout>
    );
};

export default Index;
