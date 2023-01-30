import React from "react";
import moment from "moment/moment";

function Pdf_nivel_educativo({ neducativoData }) {
    return (
        <>
            {neducativoData.map((neducativoDat) => (
                <div key={neducativoDat.id} className="mb-2">
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
                                    <td className="border border-black">
                                        {neducativoDat.nivel_educativo_ne ? (
                                            neducativoDat.nivel_educativo_ne
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </td>
                                    <td className="border border-black">
                                        {neducativoDat.etapa_ne ? (
                                            neducativoDat.etapa_ne
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </td>
                                    <td className="border border-black">
                                        {neducativoDat.fecha_culminacion_ne ? (
                                            moment(
                                                neducativoDat.fecha_culminacion_ne,
                                                "YYYY-MM-DD"
                                            ).format("DD/MM/YYYY")
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </td>
                                    <td className="border  border-black">
                                        {neducativoDat.nombre_institucion_ne ? (
                                            neducativoDat.nombre_institucion_ne
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {neducativoDat.nivel_educativo_ne == "PRIMARIA" ||
                        neducativoDat.nivel_educativo_ne ==
                            "SECUNDARIA" ? null : (
                            <>
                                <table className="w-full border-collapse border-x  border-black ">
                                    <thead>
                                        <tr>
                                            <th className="border-x border-b w-1/6   border-black">
                                                DESCRIPCION
                                            </th>
                                            <th className="border-l border-b font-normal w-5/6   border-black">
                                                {neducativoDat.descripcion_ne ? (
                                                    neducativoDat.descripcion_ne
                                                ) : (
                                                    <>&nbsp;</>
                                                )}
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* <tbody>
<tr>
    <td className="border  border-black"></td>
 
</tr>

</tbody> */}
                                </table>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Pdf_nivel_educativo;
