import React from "react";
import moment from "moment/moment";
import "moment/locale/es";

function Resol_indiv({ resolucionesycontratoData, personalData }) {
    console.log(resolucionesycontratoData);
    resolucionesycontratoData.sort((a, b) => {
        return new Date(a.vigencia_res) - new Date(b.vigencia_res);
    });

    return (
        <>
            {resolucionesycontratoData.map(
                (resolucionesycontratoDat, index) => (
                    <div
                        className="text-xs"
                        style={{ marginTop: "12.4px" }}
                        key={resolucionesycontratoDat.id}
                    >
                        <div
                            className="absolute font-bold mb-2"
                            style={{ marginLeft: "-20px" }}
                        >
                            {index + 1}
                        </div>
                        <div className="flex font-bold justify-between my-1">
                            <div>{resolucionesycontratoDat.cod_res}</div>
                            <div>
                                FECHA DEL DOCUMENTO:{" "}
                                {resolucionesycontratoDat.fecha_dic_res ? (
                                    moment(
                                        resolucionesycontratoDat.fecha_dic_res,
                                        "YYYY-MM-DD"
                                    ).format("DD/MM/YYYY")
                                ) : (
                                    <>&nbsp;</>
                                )}
                            </div>
                        </div>
                        {resolucionesycontratoDat.mostrar ? (
                            <div className="font-bold mb-1">SE RESUELVE:</div>
                        ) : (
                            <div className="font-bold mb-1">&nbsp;</div>
                        )}
                        <div
                            className="border border-black h-24 rounded-md p-2 "
                            style={{ marginBottom: "6px" }}
                        >
                            {resolucionesycontratoDat.des_art_pri_res}
                        </div>
                        <div>
                            <div className="flex ">
                                <div className="w-56">VIGENCIA:</div>
                                <div className="font-bold">
                                    {resolucionesycontratoDat.vigencia_res ? (
                                        moment(
                                            resolucionesycontratoDat.vigencia_res,
                                            "YYYY-MM-DD"
                                        ).format("DD/MM/YYYY")
                                    ) : (
                                        <>&nbsp;</>
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-56">
                                    CATEGORIA ALCANZADO(A):
                                </div>
                                <div className="font-bold">
                                    {resolucionesycontratoDat.categoria_alcanz_res ? (
                                        resolucionesycontratoDat.categoria_alcanz_res
                                    ) : (
                                        <>&nbsp;</>
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-56">NIVEL ALCANZADO(A):</div>
                                <div className="font-bold">
                                    {resolucionesycontratoDat.nivel_alcanz_res ? (
                                        resolucionesycontratoDat.nivel_alcanz_res
                                    ) : (
                                        <>&nbsp;</>
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-56">ANTIGUEDAD:</div>
                                <div className="font-bold">
                                    {resolucionesycontratoDat.antiguedad_in_res ? (
                                        (moment.locale("es"),
                                        moment(
                                            resolucionesycontratoDat.antiguedad_in_res,
                                            "YYYY-MM-DD"
                                        ).format("DD [de] MMMM [de] YYYY"))
                                    ) : (
                                        <></>
                                    )}
                                    {resolucionesycontratoDat.antiguedad_sa_res ? (
                                        ` al ${
                                            (moment.locale("es"),
                                            moment(
                                                resolucionesycontratoDat.antiguedad_sa_res,
                                                "YYYY-MM-DD"
                                            ).format("DD [de] MMMM [de] YYYY"))
                                        }`
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-56">CONDICION:</div>
                                <div className="font-bold">
                                    {resolucionesycontratoDat.condicion_res ? (
                                        resolucionesycontratoDat.condicion_res
                                    ) : (
                                        <>&nbsp;</>
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-56">
                                    {personalData[0].situacion == "DOCENTE"
                                        ? "FACULTAD: "
                                        : "DEPENDENCIA: "}
                                </div>
                                <div className="font-bold">
                                    {resolucionesycontratoDat.dependencia_res ? (
                                        resolucionesycontratoDat.dependencia_res
                                    ) : (
                                        <>&nbsp;</>
                                    )}
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="w-56">
                                    {resolucionesycontratoDat.campo_extra ? (
                                        resolucionesycontratoDat.campo_extra
                                    ) : (
                                        <>&nbsp;</>
                                    )}
                                </div>

                                <div className="font-bold">
                                    {resolucionesycontratoDat.data_campo_extra ? (
                                        resolucionesycontratoDat.data_campo_extra
                                    ) : (
                                        <>&nbsp;</>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
}

export default Resol_indiv;
