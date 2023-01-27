import React from "react";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

function NoEdit({ userData }) {
    Swal.fire({
        title: `Personal!!`,
        text: `Usuario: ${userData}, el sitio fue creado de esta manera para poder proteger la información de los usuarios, por favor regrese a finalizar su formulario si aún no a terminado`,
        icon: "warning",
        showCancelButton: false,
        showDenyButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Regresar",
        denyButtonText: `Salir del formulario`,
    }).then((result) => {
        if (result.isConfirmed) {
            Inertia.get(route("personal.create"));
            // window.location.reload();
        } else if (result.isDenied) {
            Inertia.post(route("logout"));
        }
    });
    // console.log(userData);
    return <div></div>;
}

export default NoEdit;
