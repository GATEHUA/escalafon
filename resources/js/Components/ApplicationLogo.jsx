import React from "react";

export default function ApplicationLogo({ className }) {
    return (
        <img
            style={{ borderRadius: "40%" }}
            className={className}
            src="https://extranet.undac.edu.pe/img/undac.png"
            alt=""
        />
    );
}
