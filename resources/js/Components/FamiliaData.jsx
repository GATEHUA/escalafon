import React from 'react'

function FamiliaData({familiaDat}) {
  return (
    <div>
      <div className="bg-white shadow-md border border-sky-500 rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
              <div className="-mx-3 md:flex mb-2">
                
                
                <div className="w-1/4  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="t_relacion_f">
                    tipo de relacion
                  </label>
                  
                  <div id="t_relacion_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded   px-4 mb-3 font-medium' name="t_relacion_f">
                  {familiaDat.t_relacion_f}
                  </div>
                  
                </div>
                <div className="w-1/2  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="apellidos_nombres_f">
                    apellidos y nombre(s)
                  </label>
                  <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3">
                    {familiaDat.apellidos_nombres_f}
                    </div>
                    </div>
                <div className="w-1/4  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tipo_documento_f">
                    tipo de documento
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <div id="tipo_documento_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded   px-4 mb-3 font-medium' name="tipo_documento_f">
                   {familiaDat.tipo_documento_f}
                   </div>
                 
                </div>
                
              </div>
              <div className="-mx-3 md:flex mb-2">
                {familiaDat.tipo_documento_f=='DNI'?<div className="w-1/6  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="dni_f">
                    D.N.I.
                  </label>
                  <input value={data.dni_f} onChange={e=>setData('dni_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3" id="dni_f" type="text" placeholder=""/>
                  <InputError message={errors.dni_f} className="mt-.5" />
                </div>: null}
                
                {familiaDat.tipo_documento_f=='CARNET DE EXTRANJERIA'?<div className="w-1/6  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="carnet_extranjeria_f">
                    CARNET DE EXTRANJERIA
                  </label>
                  
                  <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3">
                    {familiaDat.carnet_extranjeria_f}
                    </div>
                </div>: null}
                
                {familiaDat.tipo_documento_f=='PARTIDA DE NACIMIENTO'?<div className="w-1/6  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="partida_nacimiento_f">
                    partida de nacimiento
                  </label>
                  <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3">
                  {familiaDat.partida_nacimiento_f}
                  </div>
                </div>: null}

                {familiaDat.tipo_documento_f=='OTRO DOCUMENTO'?<div className="w-1/6  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="otro_documento_f">
                    OTO DOCUMENTO
                  </label>
                  <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3">
                    {familiaDat.otro_documento_f}
                  </div>
                </div>: null}

                <div className="w-1/6  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_nacimiento_f">
                    Fecha de nacimiento
                  </label>
                  
                  <div className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3 '>
                    {familiaDat.fecha_nacimiento_f}
                    </div>
                </div>
                <div className=" w-1/6  px-1">
                      <div className=" items-center ml-1">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="estado_v_m_f">
                        vive
                      </label>
                      </div>
                      <div className="flex my-4 justify-around">
                      {familiaDat.estado_v_m_f}
                      </div>
                </div>
                <div className="w-1/6  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="genero_f">
                    genero
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <div className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded   px-4 mb-3 font-medium' name="genero_f">
                    {familiaDat.genero_f}
                  </div>
                </div>
                <div className="w-1/6  px-1 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="estado_civil_f">
                    estado civil
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <div id="estado_civil_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded   px-4 mb-3 font-medium' name="estado_civil_f">
                    {familiaDat.estado_civil_f}
                  </div>
                 
                </div>
                <div className="w-1/6  px-1">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nacionalidad_f">
                    nacionalidad
                  </label>
                  
                  <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded   px-4 mb-3" id="nacionalidad_f">
                    {familiaDat.nacionalidad_f}
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default FamiliaData