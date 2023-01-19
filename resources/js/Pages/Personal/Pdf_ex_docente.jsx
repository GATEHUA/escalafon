import React from 'react'

function Pdf_ex_docente({exdocenteData}) {
  return (
    <>{exdocenteData.map(exdocenteDat=>
        <div key={exdocenteDat.id} className="mb-2">
          <div>
    <table className="w-full border-collapse border-x border-t border-black ">
<thead>
<tr>
  
  <th className="border w-2/12 border-black">CATEDRA</th>
  <th className="border w-4/12 border-black">CATEGORIA</th>
  <th className="border w-2/12 border-black">FECHA DE INICIO</th>
  <th className="border w-3/12 border-black">FECHA DE CULMINACION</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border-x border-t border-black">{exdocenteDat.catedra_ed?exdocenteDat.catedra_ed:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{exdocenteDat.categoria_ed?exdocenteDat.categoria_ed:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{exdocenteDat.fecha_inicio_ed?exdocenteDat.fecha_inicio_ed:<>&nbsp;</>}</td>
  <td className="border-x border-t border-black">{exdocenteDat.fecha_culminacion_ed?exdocenteDat.fecha_culminacion_ed:<>&nbsp;</>}</td>
  
   </tr>

</tbody>
</table>
<table className="w-full border-collapse border-x border-t border-black ">
<thead>
<tr>
  
  <th className="border w-8/12 border-black">NOMBRE DE LA INSTITUCION</th>
  <th className="border w-4/12 border-black">REGIMEN PENSIONARIO</th>

</tr>
</thead>
<tbody>
<tr>
<td className="border border-black">{exdocenteDat.institucion_ed?exdocenteDat.institucion_ed:<>&nbsp;</>}</td>
  <td className="border border-black">{exdocenteDat.regimen_pensionario_ed?exdocenteDat.regimen_pensionario_ed:<>&nbsp;</>}</td>
   </tr>

</tbody>
</table>



   
    </div>
        </div>)}</>
  )
}

export default Pdf_ex_docente