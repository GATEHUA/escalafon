import React from 'react'

function Pdf_ex_laboral({exlaboralData}) {
  return (
    <>{exlaboralData.map(exlaboralDat=>
        <div key={exlaboralDat.id} className="mb-2">
          <div>
    <table className="w-full border-collapse border-x border-t border-black ">
<thead>
<tr>
  
  <th className="border w-2/12 border-black">ADMINISTRACION</th>
  <th className="border w-4/12 border-black">CARGO DESEMPEÑADO</th>
  <th className="border w-2/12 border-black">FECHA DE INICIO</th>
  <th className="border w-3/12 border-black">FECHA DE CULMINACION</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border-x border-t border-black">{exlaboralDat.t_lugar_ex_el?exlaboralDat.t_lugar_ex_el:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{exlaboralDat.cargo_desempeniado_el?exlaboralDat.cargo_desempeniado_el:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{exlaboralDat.fecha_inicio_el?exlaboralDat.fecha_inicio_el:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{exlaboralDat.fecha_culminacion_el?exlaboralDat.fecha_culminacion_el:<>&nbsp;</>}</td>
  
   </tr>

</tbody>
</table>
{exlaboralDat.exlabprivada?<table className="w-full border-collapse border-x  border-black ">
<thead>
<tr>
  
<th className="border  border-black">EMPRESA</th>
  

</tr>
</thead>
<tbody>
<tr>
  

<td className="border border-black">{exlaboralDat.exlabprivada.empresa_elpr?exlaboralDat.exlabprivada.empresa_elpr:<>&nbsp;</>}</td>

 
</tr>

</tbody>
</table> :null} 
{exlaboralDat.exlabpublica?<table className="w-full border-collapse border-x  border-black ">
<thead>
<tr>
  
<th className="border  w-4/6 border-black">DEPENDENCIA</th>
<th className="border  w-1/6 border-black">TIPO</th>
<th className="border  w-1/6 border-black">N° (R) (M)</th>
</tr>
</thead>
<tbody>
<tr>
  

<td className="border border-black">{exlaboralDat.exlabpublica.dependencia_elpu?exlaboralDat.exlabpublica.dependencia_elpu:<>&nbsp;</>}</td>
<td className="border border-black">{exlaboralDat.exlabpublica.tipo_elpu?exlaboralDat.exlabpublica.tipo_elpu:<>&nbsp;</>}</td>
<td className="border border-black">{exlaboralDat.exlabpublica.num_tipo_elpu?exlaboralDat.exlabpublica.num_tipo_elpu:<>&nbsp;</>}</td>

 
</tr>

</tbody>
</table> :null} 


   
    </div>
        </div>)}</>
  )
}

export default Pdf_ex_laboral