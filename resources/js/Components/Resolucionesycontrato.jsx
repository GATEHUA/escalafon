import React, { useState } from 'react'
import Dropdown from '@/Components/Dropdown'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import {useForm, usePage} from '@inertiajs/inertia-react'

function Resolucionesycontrato({resolucionesycontratoDat}) {
  return (
    <div className="border border-sky-500 bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
        <div className="flex justify-end">
            <Dropdown >
                                <Dropdown.Trigger>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    {/* <button
                                        className='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-100 transition duration-150 ease-in-out'
                                        onClick={ ()=> setEditingNed(true)}
                                    >
                                       Edit     
                                    </button> */}
                                    <Dropdown.Link
                                    as='button'
                                    href={route('resolucionesycontrato.edit',resolucionesycontratoDat.id)}
                                    method='get'
                                    className="text-black"
                                    >
                                      Editar
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                    as='button'
                                    href={route('resolucionesycontrato.destroy',resolucionesycontratoDat.id)}
                                    method='delete'
                                    >
                                      Eliminar
                                    </Dropdown.Link>
                                   
                                                                      
                                </Dropdown.Content>
                            </Dropdown>
                            </div>
          <div className="-mx-3 md:flex mb-2">
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    tipo
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  
                
                  <input disabled defaultValue={resolucionesycontratoDat.tipo_res} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="cod_res" type="text" placeholder=""/>
                  
                </div>
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                    N° de RESOLUCION
                  </label>
               
                  <input disabled defaultValue={resolucionesycontratoDat.cod_res} type="text" placeholder="" className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                  
                </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                    Fecha deL DOCUMENTO
                  </label>
                
               
                  <input disabled defaultValue={resolucionesycontratoDat.fecha_dic_res} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '   />
                  
                </div>
                <div className="w-1/4 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">documento de validacion</label>
                    
          
                  <input disabled defaultValue={resolucionesycontratoDat.documento_val_res} type="text" placeholder="" className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                  
                                
                    </div>
                
              </div>
              <div className="-mx-3 md:flex ">
                <div className="w-2/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                    SE RESUELVE (ARTICULO)
                  </label>
                  <textarea disabled rows="8" defaultValue={resolucionesycontratoDat.des_art_pri_res} className="hover:bg-gray-300 w-full bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3" id="des_art_pri_res" type="text" placeholder=""></textarea>
                  
                  
                </div>
                <div className="w-3/5">
                  <div className="flex ">
                  <div className="w-1/3 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  vigencia
                  </label>
                  
                  <input disabled defaultValue={resolucionesycontratoDat.vigencia_res} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '   />
                  
                  </div>
                  <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    categoria alcanzada(o)
                  </label>
                  
                  <input disabled defaultValue={resolucionesycontratoDat.categoria_alcanz_res} type="text" placeholder="" className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                  
                  </div>
                  <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    nivel alcanzada(o)
                  </label>
                  
                  <input disabled defaultValue={resolucionesycontratoDat.nivel_alcanz_res} type="text" placeholder="" className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                  
                  </div>
                  </div>
                  <div className="flex ">
                  <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    antiguedad desde
                  </label>
                  
                  <input disabled defaultValue={resolucionesycontratoDat.antiguedad_in_res} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '   />
                  
                  </div>
                  <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  antiguedad hasta
                  </label>
                 
                  <input disabled defaultValue={resolucionesycontratoDat.antiguedad_sa_res} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '   />
                  
                  </div>
                  <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    condicion
                  </label>
                 
                  <input disabled defaultValue={resolucionesycontratoDat.condicion_res} type="text" placeholder="" className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                  
                  </div>
                  <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    dependencia
                  </label>
                 
                  <input disabled defaultValue={resolucionesycontratoDat.dependencia_res} type="text" placeholder="" className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                  
                  </div>
                  </div>
                  <div className="flex ">
                  
                  <div className="w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    observaciones
                  </label>
                 
                  <input disabled defaultValue={resolucionesycontratoDat.observacion_res} type="text" placeholder="" className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"/>
                  
                  </div>
                  </div>
                  
                </div>
                
              </div>

          </div>
  )
}

export default Resolucionesycontrato