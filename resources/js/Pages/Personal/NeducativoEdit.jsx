import React from 'react'
import {useForm, usePage} from '@inertiajs/inertia-react'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

function NeducativoEdit({auth,neducativoDataEdit}) {
    const {data, setData,post, processing, reset, errors} = useForm({
        nivel_educativo_ne: neducativoDataEdit.nivel_educativo_ne,
        etapa_ne: neducativoDataEdit.etapa_ne,
        nombre_institucion_ne: neducativoDataEdit.nombre_institucion_ne,
        descripcion_ne: neducativoDataEdit.descripcion_ne,
        fecha_culminacion_ne: neducativoDataEdit.fecha_culminacion_ne,
        documento_val_ne: neducativoDataEdit.documento_val_ne,
        _method: 'put',
      })
      console.log('neducativoDataEdit');
      console.log(neducativoDataEdit);
      const neducativoEdit = (e)=>{
        e.preventDefault()
        post(route('neducativo.update',neducativoDataEdit.id))
      }
  return (
    <AuthenticatedLayout auth={auth}>
        <div className="p-6">
        <div className="bg-white border border-sky-500 shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
        <form onSubmit={neducativoEdit} encType="multipart/form-data">
            
            
            <div className="-mx-3 md:flex mb-2">
              
              
              <div className="w-1/4 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nivel_educativo_ne">
                  tipo
                </label>
               <select value={data.nivel_educativo_ne} onChange={e=>setData('nivel_educativo_ne',e.target.value)} id="nivel_educativo_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-1 px-4 mb-3 font-medium' name="nivel_educativo_ne">
                  <option value="">-Seleccione-</option>
                  <option value="PRIMARIA">PRIMARIA</option>
                  <option value="SECUNDARIA">SECUNDARIA</option>
                  <option value="TECNICO">TECNICO</option>
                  <option value="UNIVERSITARIO">UNIVERSITARIO</option>
                  <option value="MAESTRIA">MAESTRIA</option>
                  <option value="DOCTORADO">DOCTORADO</option>
                  <option value="ESPECIALIDAD">ESPECIALIDAD</option>
                  <option value="OTRO DE MAYOR TRASCENDENCIA">OTRO DE MAYOR TRASCENDENCIA</option>
                </select>
                 </div>
              <div className="w-1/4 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="etapa_ne">
                  ETAPA
                </label>
                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                <select value={data.etapa_ne} onChange={e=>setData('etapa_ne',e.target.value)} id="etapa_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-1 px-4 mb-3 font-medium' name="etapa_ne">
                {data.nivel_educativo_ne=="PRIMARIA"||data.nivel_educativo_ne=="SECUNDARIA"||data.nivel_educativo_ne=="TECNICO"?<>
                    <option value="">-Seleccione-</option>
                    <option value="INCOMPLETA">INCOMPLETA</option>
                    <option value="COMPLETA">COMPLETA</option>
                    </>:null}
                    {data.nivel_educativo_ne=="UNIVERSITARIO"?<>
                    <option value="">-Seleccione-</option>
                    <option value="INCOMPLETA">INCOMPLETA</option>
                    <option value="EGRESADO">EGRESADO</option>
                    <option value="BACHILLER">BACHILLER</option>
                    <option value="TITULADO">TITULADO</option>
                    </>:null}
                    {data.nivel_educativo_ne=="MAESTRIA"||data.nivel_educativo_ne=="DOCTORADO"||data.nivel_educativo_ne=="ESPECIALIDAD"||data.nivel_educativo_ne=="OTRO DE MAYOR TRASCENDENCIA"?<>
                    <option value="">-Seleccione-</option>
                    <option value="INCOMPLETA">INCOMPLETA</option>
                    <option value="EGRESADO">EGRESADO</option>
                    <option value="GRADO">GRADO</option>
                    </>:null}
                </select>
                </div>
              <div className="w-1/4 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Fecha de culminacion
                </label>
                <input value={data.fecha_culminacion_ne} onChange={e=>setData('fecha_culminacion_ne',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3 ' />
                </div>
              <div className="w-1/4 px-3">
              <label htmlFor="dropzone-file_NE" className="uppercase tracking-wide text-black text-xs font-bold mb-2">documento de validacion</label>
                  
              {/* value={asset(`public/documento_val_ne_Per/${data.documento_val_ne}`)} */}
                <input  onChange={(e)=>{setData('documento_val_ne',e.target.files[0])}} type="file" className="
                text-sm text-black border rounded-full border-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600
           file:py-1 file:px-3
          file:rounded-full file:border-0
          
          file:text-md file:font-semibold  file:text-white
          file:bg-blue-600 
          hover:file:cursor-pointer hover:file:opacity-90 w-full " />
                              
                   </div>
              
            </div>
            <div className="-mx-3 md:flex mb-2">
            
              
              {data.nivel_educativo_ne=="PRIMARIA"||data.nivel_educativo_ne=="SECUNDARIA"?<><div className="w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nombre_institucion_ne">
                  NOMBRE DE LA INSTITUCION
                </label>
                <input value={data.nombre_institucion_ne} onChange={e=>setData('nombre_institucion_ne',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="nombre_institucion_ne" type="text" placeholder=""/>
               
               </div></>:<>
              <div className="w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nombre_institucion_ne">
                  NOMBRE DE LA INSTITUCION
                </label>
                <input value={data.nombre_institucion_ne} onChange={e=>setData('nombre_institucion_ne',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="nombre_institucion_ne" type="text" placeholder=""/>
               
               </div>
              <div className="w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="descripcion_ne">
                  DESCRIPCION
                </label>
                <input value={data.descripcion_ne} onChange={e=>setData('descripcion_ne',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="descripcion_ne" type="text" placeholder=""/>
                </div></>}
              
            </div>
            <InputError message={errors.message} className='mt-2'/>
        
        
        
          
        
        <div className="flex">
          <PrimaryButton
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-blue-600 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none"
            >
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"></path></svg>
                GUARDAR
                </span>
                
          </PrimaryButton>
          <a href={route('personal.create')}  className="ml-4 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-red-600 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                >
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"></path></svg>REGRESAR
                </span>
          </a>
          
          
        </div>
        
        
          
         
            
        
          
        </form>
        </div>
        </div>
        
</AuthenticatedLayout>
    
  )
}

export default NeducativoEdit