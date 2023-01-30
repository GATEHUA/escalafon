import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
// import classNames from "classnames";
import Swal from "sweetalert2";

function FlashMessage() {
    const { flash } = usePage().props;

    useEffect(() => {
        flash.message &&
            Swal.fire("Excelente!!", `${flash.message}`, "success");
    }, []);

    return <></>;
}

export default FlashMessage;
