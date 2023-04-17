import moment from "moment";
function Pie_pag_resolucion({ numHojas }) {
    const numeros = Array.from(Array(numHojas), (_, i) => i + 1);

    console.log(numeros);
    const altura = numHojas * 1065.8269059;
    return (
        <div
            style={{
                position: "relative",
                height: `${altura}`,
                boxSizing: "border-box",
                margin: "auto",
                width: "100%",
            }}
        >
            {numeros.map((item, index) => {
                const posicion = (index + 1) * 1065.8269059 - 13.5;
                return (
                    <div
                        className="w-full"
                        // style={{
                        //
                        //     // marginTop: "12px",
                        // }}
                        style={{
                            position: "absolute",
                            top: `${posicion}px`,
                            pageBreakAfter: "always",
                            zIndex: 9,
                            // "@media print": {
                            //     position: "absolute",
                            //     top: `${posicion}px`,
                            //     pageBreakAfter: "always",
                            //     zIndex: 9,
                            // },

                            // marginTop: "12px",
                        }}
                        key={item}
                    >
                        <div
                            className="flex w-full justify-between border-black border-t"
                            style={{
                                fontSize: "0.6rem",
                                lineHeight: ".85rem",
                            }}
                        >
                            <div className="flex">
                                <div className="font-bold">Fuente:</div>
                                <div>&nbsp;UNDAC/LEGAJO/ESCALAFON</div>
                            </div>
                            <div className="font-bold">SISMAXCE</div>
                            <div>Fecha: {moment().format("DD/MM/YYYY")}</div>
                            <div>Hora: {moment().format("HH:mm:ss")}</div>
                            <div>
                                Página {item} de {numHojas}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Pie_pag_resolucion;
