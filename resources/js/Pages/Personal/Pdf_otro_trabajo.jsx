import React from 'react'

function Pdf_otro_trabajo({otrotrabajoData}) {
  return (
    <>{otrotrabajoData.map(otrotrabajoDat=>
        <div key={otrotrabajoDat.id} className="mb-2">
          <div>
    <table className="w-full border-collapse border-x border-t border-black ">
<thead>
<tr>
  
  <th className="border w-1/12 border-black">ESTADO</th>
  <th className="border w-4/12 border-black">CARGO DESEMPEÑADO</th>
  <th className="border w-3/12 border-black">HORA DE ENTRADA</th>
  <th className="border w-3/12 border-black">HORA DE SALIDA</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border-x border-t border-black">{otrotrabajoDat.estado_ot?otrotrabajoDat.estado_ot:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{otrotrabajoDat.cargo_ot?otrotrabajoDat.cargo_ot:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{otrotrabajoDat.hora_entrada_ot?otrotrabajoDat.hora_entrada_ot:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{otrotrabajoDat.hora_salida_ot?otrotrabajoDat.hora_salida_ot:<>&nbsp;</>}</td>
  
   </tr>

</tbody>
</table>
<table className="w-full border-collapse border-x border-t border-black ">
<thead>
<tr>
  
  <th className="border w-2/3 border-black">NOMBRE DE LA INSTITUCION</th>
  <th className="border w-1/3 border-black">FRECUENCIA DIARIA</th>

</tr>
</thead>
<tbody>
<tr>
<td className="border border-black">{otrotrabajoDat.nombre_institucion_ot?otrotrabajoDat.nombre_institucion_ot:<>&nbsp;</>}</td>
  <td className="border border-black">{otrotrabajoDat.frecuencia_diaria_ot?otrotrabajoDat.frecuencia_diaria_ot:<>&nbsp;</>}</td>
   </tr>

</tbody>
</table>



   
    </div>
        </div>)}</>
  )
}

export default Pdf_otro_trabajo