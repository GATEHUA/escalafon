import React from 'react'
import Dropdown from '@/Components/Dropdown'

function DocumentoData({documentoDat}) {
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
                                    {/* <button
                                        className='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-100 transition duration-150 ease-in-out'
                                        onClick={ ()=> setEditingNed(true)}
                                    >
                                       Edit     
                                    </button> */}
                                    <Dropdown.Link
                                    as='button'
                                    href={route('documento.edit',documentoDat.id)}
                                    method='get'
                                    className="text-black"
                                    >
                                      Editar
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                    as='button'
                                    href={route('documento.destroy',documentoDat.id)}
                                    method='delete'
                                    >
                                      Eliminar
                                    </Dropdown.Link>
                                   
                                                                      
                                </Dropdown.Content>
                            </Dropdown>
                            </div>
              <div className="-mx-3 md:flex mb-2">
              <div className="w-1/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    nombre
                  </label>
                  <input disabled defaultValue={documentoDat.t_nombre_documento_d} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3"  type="text" placeholder=""/>
                  </div>
                <div className="w-2/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    descripcion
                  </label>
                  <input disabled defaultValue={documentoDat.descripcion_documento_d} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" type="text" placeholder=""/>
                  </div>
                <div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                    Fecha deL DOCUMENTO
                  </label>
                  <input disabled defaultValue={documentoDat.fecha_documento_d} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '   />
                   </div>
                <div className="w-1/4 px-3">
                <label  className="uppercase tracking-wide text-black text-xs font-bold mb-2">documento de validacion</label>

                   <input disabled defaultValue={documentoDat.documento_d} type="text" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 '  />
                   
                        
                                                  
                    </div>
                
              </div>

          </div>
  )
}

export default DocumentoData