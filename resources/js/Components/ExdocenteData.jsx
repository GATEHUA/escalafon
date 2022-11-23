import React, { useState } from 'react'
import Dropdown from '@/Components/Dropdown'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import {useForm, usePage} from '@inertiajs/inertia-react'

function ExdocenteData({exdocenteDat}) {
    const [editingExd, setEditingExd] = useState(false)
  const {data, setData, put, processing, reset, errors} = useForm({
    institucion_ed : exdocenteDat.institucion_ed,
    catedra_ed : exdocenteDat.catedra_ed,
    categoria_ed : exdocenteDat.categoria_ed,
    regimen_pensionario_ed : exdocenteDat.regimen_pensionario_ed,
    fecha_inicio_ed: exdocenteDat.        fecha_inicio_ed,
    fecha_culminacion_ed : exdocenteDat.fecha_culminacion_ed,
  })
  const exdocenteEdit = (e)=>{
    e.preventDefault()
    console.log('exdocenteDat.id')
    console.log(exdocenteDat.id)
    put(route('exdocente.update',exdocenteDat.id),{onSuccess: ()=>setEditingExd(false)})
  }
  return (
    
                <div className="bg-white shadow-md border border-sky-500 rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
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
                                    <button
                                        className='block w-full px-4 py-2 text-left font-bold text-sm leading-5 text-gray-700 hover:bg-gray-500 hover:text-white focus:bg-gray-100 transition duration-150 ease-in-out'
                                        onClick={ ()=> setEditingExd(true)}
                                    >
                                       Editar     
                                    </button>
                                    <Dropdown.Link
                                    as='button'
                                    href={route('exdocente.destroy',exdocenteDat.id)}
                                    method='delete'
                                    >
                                      Eliminar
                                    </Dropdown.Link>
                                                                      
                                </Dropdown.Content>
                            </Dropdown>
            </div>
                     {editingExd?<>
                        <form onSubmit={exdocenteEdit} encType="multipart/form-data">
             <div className="-mx-3 md:flex mb-2">
              <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    CATEDRA
                  </label>
                  <input value={data.catedra_ed?data.catedra_ed:""} onChange={e=>setData('catedra_ed',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="catedra_ed" type="text" placeholder=""/>
                 
                </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
              CATEGORIA
              </label>
              
              <select value={data.categoria_ed?data.categoria_ed:""} onChange={e=>setData('categoria_ed',e.target.value)} id="categoria_ed" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-1 px-4 mb-3 font-medium' name="categoria_ed">
                <option value="">-Seleccione-</option>
                <option value="J. PRACTICA">J. PRACTICA</option>
                <option value="AUXILIAR">AUXILIAR</option>
                <option value="ASOCIADO">ASOCIADO</option>
                <option value="PRINCIPAL">PRINCIPAL</option>
                <option value="OTRO">OTRO</option>
              </select>
             
            </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                >
                    Fecha de INICIO
                  </label>
                  <input value={data.fecha_inicio_ed?data.fecha_inicio_ed:""} onChange={e=>setData('fecha_inicio_ed',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '  id="fecha_inicio_ed" />
                  </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    Fecha de culminacion
                  </label>
                  <input value={data.fecha_culminacion_ed?data.fecha_culminacion_ed:""} onChange={e=>setData('fecha_culminacion_ed',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '  id="fecha_culminacion_ed" />
                 
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                
                
                
                <div className="w-4/6 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  NOMBRE DE LA INSTITUCION 
                </label>
                <input value={data.institucion_ed?data.institucion_ed:""} onChange={e=>setData('institucion_ed',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="institucion_ed" type="text" placeholder=""/>
           
              </div>
              
            <div className="w-2/6 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                regimen Pensionario (DESCRIPCION - OPCIONAL)
                </label>
                <input value={data.regimen_pensionario_ed?data.regimen_pensionario_ed:""} onChange={e=>setData('regimen_pensionario_ed',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="regimen_pensionario_ed" type="text" placeholder=""/>
             
              </div>
              
            
                
                
              </div>
              <InputError message={errors.message} className='mt-2'/>
        
              <div className="flex">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-blue-600 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"></path></svg>
                   GUARDAR
                    </span>
                    
              </PrimaryButton>
              <button  onClick={()=>setEditingExd(false) && reset()} className="ml-4 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-red-600 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                    >
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125 73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z"></path></svg>
                    CANCELAR
                    </span>
              </button>
              
            </div>
          </form></>:<><div className="-mx-3 md:flex mb-2">
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                           catedra
                         </label>
                         <input disabled defaultValue={exdocenteDat.catedra_ed} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="catedra_ed" type="text" placeholder=""/>
                  
                        
                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                         CATEGORIA
                         </label>
                         
                       
                         <input disabled defaultValue={exdocenteDat.categoria_ed} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 ' />
                 

                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                           FECHA DE INICIO
                         </label>
                         
                     
                         <input disabled defaultValue={exdocenteDat.fecha_inicio_ed} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '  id="fecha_inicio_ed" />
                 

                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                           FECHA DE CULMINACION
                         </label>
                         
                         
                         <input disabled defaultValue={exdocenteDat.fecha_culminacion_ed} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '  id="fecha_culminacion_ed" />
                  


                     </div>
                     
                 </div>
                 
                 <div className='-mx-3 md:flex mb-2'>
                 <div className="w-1/2 px-3 mb-6 md:mb-0">
                  
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                         NOMBRE DE LA INSTITUCION
                         </label>
                         
                      
                         <input disabled defaultValue={exdocenteDat.institucion_ed} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="institucion_ed" type="text" placeholder=""/>
                

                     </div>
                     <div className="w-1/2 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >                   
                         REGIMEN PENSIONARIO
                         </label>
                         
                         
                         <input disabled defaultValue={exdocenteDat.regimen_pensionario_ed} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="regimen_pensionario_ed" type="text" placeholder=""/>
                
                    
                     </div>
                 </div></>}
            </div>

  )
}

export default ExdocenteData