import React from "react";
import moment from "moment/moment";

function Pdf_familiares_directos({ familiaData }) {
    //   console.log(familiaData)
    //   const list = [ 'h', 'e', 'l', 'l', 'o'];
    // list.map((currElement, index) => {
    //   console.log("The current iteration is: " + index);
    //   console.log("The current element is: " + currElement);
    //    // Retorna "f"

    // });
    const string = "freeCodecamp";

    console.log(string.charAt(0));
    return (
        <>
            {/* {familiaData.map(familiaDat=>
            <div key={familiaDat.id} className="mb-2">
              <div>
        <table className="w-full border-collapse border-x border-t border-black ">
  <thead>
    <tr>
      
      <th className="border w-3/12 border-black">TIPO DE RELACION</th>
      <th className="border w-6/12 border-black">APELLIDOS Y NOMBRE(S)</th>
      <th className="border w-3/12 border-black">{familiaDat.tipo_documento_f?familiaDat.tipo_documento_f:<>&nbsp;</>}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td className="border-x border-t border-black">{familiaDat.t_relacion_f?familiaDat.t_relacion_f:<>&nbsp;</>}</td>
      <td className="border-x border-t border-black">{familiaDat.apellidos_nombres_f?familiaDat.apellidos_nombres_f:<>&nbsp;</>}</td>
      {familiaDat.tipo_documento_f=="DNI"?<td className="border-x border-t border-black">{familiaDat.dni_f?familiaDat.dni_f:<>&nbsp;</>}</td>:null}
      {familiaDat.tipo_documento_f=="CARNET DE EXTRANJERIA"?<td className="border-x border-t border-black">{familiaDat.carnet_extranjeria_f?familiaDat.carnet_extranjeria_f:<>&nbsp;</>}</td>:null}
      {familiaDat.tipo_documento_f=="PARTIDA DE NACIMIENTO"?<td className="border-x border-t border-black">{familiaDat.partida_nacimiento_f?familiaDat.partida_nacimiento_f:<>&nbsp;</>}</td>:null}
      {familiaDat.tipo_documento_f=="OTRO DOCUMENTO"?<td className="border-x border-t border-black">{familiaDat.otro_documento_f?familiaDat.otro_documento_f:<>&nbsp;</>}</td>:null}
    </tr>
   
  </tbody>
</table>
<table className="w-full border-collapse border-x  border-black ">
  <thead>
    <tr>
      
      <th className="border w-3/12 border-black">FECHA DE NACIMIENTO</th>
      <th className="border w-1/12 border-black">VIVE</th>
      <th className="border w-2/12 border-black">GENERO</th>
      <th className="border w-2/12 border-black">ESTADO CIVIL</th>
      <th className="border w-12/12 border-black">NACIONALIDAD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td className="border border-black">{familiaDat.fecha_nacimiento_f?familiaDat.fecha_nacimiento_f:<>&nbsp;</>}</td>
      <td className="border border-black">{familiaDat.estado_v_m_f?familiaDat.estado_v_m_f:<>&nbsp;</>}</td>
      <td className="border border-black">{familiaDat.genero_f?familiaDat.genero_f:<>&nbsp;</>}</td>
      <td className="border border-black">{familiaDat.estado_civil_f?familiaDat.estado_civil_f:<>&nbsp;</>}</td>
      <td className="border border-black">{familiaDat.nacionalidad_f?familiaDat.nacionalidad_f:<>&nbsp;</>}</td>
     
    </tr>
   
  </tbody>
</table>
       
        </div>
            </div>)} */}

            <div className="mb-2">
                <div>
                    {/* <table className="w-full border-collapse border-x border-t border-black ">
  <thead>
    <tr>
    <th className="border border-black">N°</th>
      <th className="border w-3/12 border-black">TIPO DE RELACION</th>
      <th className="border w-5/12 border-black">APELLIDOS Y NOMBRE(S)</th>
      <th className="border w-3/12 border-black">DOCUMENTO</th>
      <th className="border w-1/12 border-black">CODIGO(DI)</th>
    </tr>
  </thead>
  <tbody>
    {familiaData.map((familiaDat,index)=>
      <tr key={familiaDat.id}>
      
      <td className="border-x border-t font-bold border-black">{index+1}</td>
        <td className="border-x border-t border-black">{familiaDat.t_relacion_f?familiaDat.t_relacion_f:<>&nbsp;</>}</td>
        <td className="border-x border-t border-black">{familiaDat.apellidos_nombres_f?familiaDat.apellidos_nombres_f:<>&nbsp;</>}</td>
        <td className="border-x border-t border-black">{familiaDat.tipo_documento_f?familiaDat.tipo_documento_f:<>&nbsp;</>}</td>
        {familiaDat.tipo_documento_f=="DNI"?<td className="border-x border-t border-black">{familiaDat.dni_f?familiaDat.dni_f:<>&nbsp;</>}</td>:null}
        {familiaDat.tipo_documento_f=="CARNET DE EXTRANJERIA"?<td className="border-x border-t border-black">{familiaDat.carnet_extranjeria_f?familiaDat.carnet_extranjeria_f:<>&nbsp;</>}</td>:null}
        {familiaDat.tipo_documento_f=="PARTIDA DE NACIMIENTO"?<td className="border-x border-t border-black">{familiaDat.partida_nacimiento_f?familiaDat.partida_nacimiento_f:<>&nbsp;</>}</td>:null}
        {familiaDat.tipo_documento_f=="OTRO DOCUMENTO"?<td className="border-x border-t border-black">{familiaDat.otro_documento_f?familiaDat.otro_documento_f:<>&nbsp;</>}</td>:null}
      </tr>
    )}
   
  </tbody>
</table> */}
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
                            {familiaData.map((familiaDat, index) => (
                                <tr key={familiaDat.id}>
                                    <td className="border border-black">
                                        {familiaDat.t_relacion_f ? (
                                            familiaDat.t_relacion_f
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </td>
                                    <td className="border border-black">
                                        {familiaDat.apellidos_nombres_f ? (
                                            familiaDat.apellidos_nombres_f
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </td>
                                    <td className="border  border-black">
                                        {familiaDat.fecha_nacimiento_f ? (
                                            moment(
                                                familiaDat.fecha_nacimiento_f,
                                                "YYYY-MM-DD"
                                            ).format("DD/MM/YYYY")
                                        ) : (
                                            <>&nbsp;</>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="mb-2">
              <div>
        <table className="w-full border-collapse border-x border-t border-black ">
  <thead>
    <tr>
   
   
      <th className="border w-1/12 border-black">TIPO RELACION</th>
      <th className="border w-4/12 border-black">APELLIDOS Y NOMBRE(S)</th>
      <th className="border w-1/12 border-black">DOCUMENTO</th>
      <th className="border w-1/12 border-black">CODIGO(DI)</th>
      <th className="border w-1/12 border-black">FECHA DE NACIMIENTO</th>
      <th className="border w-1/12 border-black">VIVE</th>
      <th className="border w-1/12 border-black">SEXO</th>
      <th className="border w-1/12 border-black">E.C.</th>
      <th className="border w-1/12 border-black">NAC.</th>
    </tr>
  </thead>
  <tbody>
    {familiaData.map((familiaDat,index)=>
      <tr key={familiaDat.id}>
      
        <td className="border border-black">{familiaDat.t_relacion_f?familiaDat.t_relacion_f:<>&nbsp;</>}</td>
        <td className="border border-black">{familiaDat.apellidos_nombres_f?familiaDat.apellidos_nombres_f:<>&nbsp;</>}</td>
        <td className="border border-black">{familiaDat.tipo_documento_f?familiaDat.tipo_documento_f:<>&nbsp;</>}</td>
        {familiaDat.tipo_documento_f=="DNI"?<td className="border border-black">{familiaDat.dni_f?familiaDat.dni_f:<>&nbsp;</>}</td>:null}
        {familiaDat.tipo_documento_f=="CARNET DE EXTRANJERIA"?<td className="border border-black">{familiaDat.carnet_extranjeria_f?familiaDat.carnet_extranjeria_f:<>&nbsp;</>}</td>:null}
        {familiaDat.tipo_documento_f=="PARTIDA DE NACIMIENTO"?<td className="border border-black">{familiaDat.partida_nacimiento_f?familiaDat.partida_nacimiento_f:<>&nbsp;</>}</td>:null}
        {familiaDat.tipo_documento_f=="OTRO DOCUMENTO"?<td className="border border-black">{familiaDat.otro_documento_f?familiaDat.otro_documento_f:<>&nbsp;</>}</td>:null}
        <td className="border border-black">{familiaDat.fecha_nacimiento_f?familiaDat.fecha_nacimiento_f:<>&nbsp;</>}</td>
      <td className="border  border-black">{familiaDat.estado_v_m_f?familiaDat.estado_v_m_f:<>&nbsp;</>}</td>
      <td className="border  border-black">{familiaDat.genero_f?familiaDat.genero_f.charAt(0):<>&nbsp;</>}</td>
      <td className="border  border-black">{familiaDat.estado_civil_f?familiaDat.estado_civil_f[0]+familiaDat.estado_civil_f[1].toLowerCase():<>&nbsp;</>}</td>
      <td className="border  border-black">{familiaDat.nacionalidad_f?familiaDat.nacionalidad_f:<>&nbsp;</>}</td>
     
      </tr>
    )}
   
  </tbody>
</table>

<div className='flex text-xs font-bold mt-1'>
ESTADO CIVIL (E.C.): SOLTERO(A) (Sa), CASADO(A) (Ca), VIUDO(A) (Vi), DIVORCIADO(A) (Di),CONCUBINO(A) (Co)
 </div>
 <div className='flex text-xs font-bold mt-1'>
SEXO : MASCULINO (M), FEMENINO (F), OTRO (O) - NACIONALIDAD (NAC.)
 </div>
       
        </div>
            </div> */}
        </>
    );
}

export default Pdf_familiares_directos;
