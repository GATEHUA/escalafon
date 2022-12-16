import React, { useState } from 'react'
import Dropdown from '@/Components/Dropdown'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import {useForm, usePage} from '@inertiajs/inertia-react'




function NeducativoData({neducativoDat}) {
//   const [editingNed, setEditingNed] = useState(false)
//   const {data, setData,post, processing, reset, errors} = useForm({
//     nivel_educativo_ne: neducativoDat.nivel_educativo_ne,
//     etapa_ne: neducativoDat.etapa_ne,
//     nombre_institucion_ne: neducativoDat.nombre_institucion_ne,
//     descripcion_ne: neducativoDat.descripcion_ne,
//     fecha_culminacion_ne: neducativoDat.fecha_culminacion_ne,
//     documento_val_ne: neducativoDat.documento_val_ne,
//     _method: 'put',
//   })
// console.log(data.documento_val_ne);
//   const neducativoEdit = (e)=>{
//     e.preventDefault()
//     console.log('neducativoDat.id')
//     console.log(neducativoDat.id)
//     post(route('neducativo.update',neducativoDat.id),{onSuccess: ()=>setEditingNed(false)})
//   }
  return (
    <div className="bg-white border border-sky-500 shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
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
                                    href={route('neducativo.edit',neducativoDat.id)}
                                    method='get'
                                    className="text-black"
                                    >
                                      Editar
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                    as='button'
                                    href={route('neducativo.destroy',neducativoDat.id)}
                                    method='delete'
                                    preserveScroll={true}
                                    >
                                      Eliminar
                                    </Dropdown.Link>
                                   
                                                                      
                                </Dropdown.Content>
                            </Dropdown>
                            </div>

          <div className="-mx-3 md:flex mb-2">
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                    tipo
                  </label>
                  
                  <input disabled value={neducativoDat.nivel_educativo_ne!==null?neducativoDat.nivel_educativo_ne:""} type="text" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '   />
                  
                  </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    ETAPA
                  </label>
                  <input disabled value={neducativoDat.etapa_ne!==null?neducativoDat.etapa_ne:""} type="text" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '   />
                  
                  </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                    Fecha de culminacion
                  </label>
                  <input disabled value={neducativoDat.fecha_culminacion_ne!==null?neducativoDat.fecha_culminacion_ne:""} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '  id="fecha_culminacion_ne" />
                  </div>
                <div className="w-1/4 px-3">
                <label  className="uppercase tracking-wide text-black text-xs font-bold mb-2">documento de validacion</label>
                    
                        
                <input disabled value={neducativoDat.documento_val_ne!==null?neducativoDat.documento_val_ne:""} type="text" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '   />
                  
                                
                    </div>
                
              </div>
              <div className="-mx-3 md:flex mb-2">
              
                {neducativoDat.nivel_educativo_ne=="PRIMARIA"||neducativoDat.nivel_educativo_ne=="SECUNDARIA"?<>
                <div className="w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    NOMBRE DE LA INSTITUCION
                  </label>
                  <input disabled value={neducativoDat.nombre_institucion_ne!==null?neducativoDat.nombre_institucion_ne:""} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" type="text" placeholder=""/>
                  </div></>:<>
                <div className="w-1/2 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    NOMBRE DE LA INSTITUCION
                  </label>
                  <input disabled value={neducativoDat.nombre_institucion_ne!==null?neducativoDat.nombre_institucion_ne:""} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" type="text" placeholder=""/>
                  </div>
                <div className="w-1/2 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    DESCRIPCION
                  </label>
                  <input disabled value={neducativoDat.descripcion_ne!==null?neducativoDat.descripcion_ne:""} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"  type="text" placeholder=""/>
                  
                </div>
                </>}
                
                
              </div>
              {/* </> */}

            {/* // } */}
              

          </div>
  )
}

export default NeducativoData