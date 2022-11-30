import React, { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm , Head} from '@inertiajs/inertia-react'
import FamiliaData from '@/Components/FamiliaData'
import NeducativoData from '@/Components/NeducativoData'
import ExlaboralData from '@/Components/ExlaboralData'
import ExdocenteData from '@/Components/ExdocenteData'
import Resolucionesycontrato from '@/Components/Resolucionesycontrato'
import DocumentoData from '@/Components/DocumentoData'
import OtrotrabajoData from '@/Components/OtrotrabajoData'
// import ExlaboralData from '@/Components/ExlaboralData'
// import MUIDataTable from "mui-datatables"
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import FamiliaData from '@/Components/FamiliaData'
//import Documento from "../../../../storage/app/public/documento_val_ne_Per"

// const muiCache = createCache({
// 	"key": "mui",
// 	"prepend": false
// });

// // import Personal from '@/Components/Personal'

// const options = {
  
//   responsive:"standard",
//   draggableColumns: {
//     enabled: true
//   },
    
// };


// const columns = [
  
//   {
//     name: "EDITAR",
//     options: {
      
//       customBodyRender: (value, tableMeta, updateValue) => {
//         return (
//           <div className="flex justify-center">
//           <button onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)} className="p-2 bg-green-600 rounded-xl hover:rounded-3xl hover:bg-green-700 transition-all duration-300 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//             </svg>
//           </button>
//           </div>
//         );
//       }
//     }
//   },
//   {
//     name: "user.name",
//     label: "USUARIO",
//     options: {
//      hint:"Creador del Registro",
//      filter: true,
//      sort: true,
     
//     }
//    },
//   {
//    name: "fecha_Ingreso_undac",
//    label: "INGRESO A LA UNDAC",
//    options: {
//     filter: true,
//     sort: true,
//    }
//   },
//   {
//    name: "condicion",
//    label: "CONDICION",
//    options: {
//     filter: true,
//     sort: true,
    
//    }
//   },
//   {
//     name: "foto",
//     label: "FOTO",
//     options: {
//      hint:"Foto del Personal",
//      filter: true,
//      sort: true,
//     }
//    },
//   {
//    name: "nombres",
//    label: "NOMBRES",
//    options: {
//     filter: true,
//     sort: true,
//    }
//   },
//   {
//    name: "apellido_paterno",
//    label: "APELLIDO PATERNO",
//    options: {
//     filter: true,
//     sort: true,
//    }
//   },
//   {
//     name: "apellido_materno",
//     label: "APELLIDO MATERNO",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "fecha_nacimiento",
//     label: "FECHA DE NACIMIENTO",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "pais",
//     label: "PAIS",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "departamento",
//     label: "DEPARTAMENTO",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "provincia",
//     label: "PROVINCIA",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "distrito",
//     label: "DISTRITO",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "dni",
//     label: "D.N.I",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "carnet_extranjeria",
//     label: "CARNET DE EXTRANJERIA",
//     options: {
//      filter: true,
//      sort: true,
//      display:false,
//     }
//    },
//    {
//     name: "regimen_pensionario",
//     label: "REGIMEN PENSIONARIO",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "nombre_afp",
//     label: "NOMBRE DE LA AFP",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "ruc",
//     label: "RUC",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "estado_civil",
//     label: "ESTADO CIVIL",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "domicilio_actual",
//     label: "DOMICILIO ACTUAL",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "distrito_domicilio",
//     label: "DISTRITO A.",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "provincia_domicilio",
//     label: "PROVINCIA A.",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "departamento_domicilio",
//     label: "DEPARTAMENTO A.",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "email",
//     label: "E-MAIL",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "telefono_fijo",
//     label: "N° DE TELEFONO FIJO",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },
//    {
//     name: "telefono_celular",
//     label: "N° DE CELULAR",
//     options: {
//      filter: true,
//      sort: true,
//     }
//    },



//  ];


const Create=({auth,personalData,documentoData,exdocenteData,exlaboralData,familiaData,neducativoData,otrotrabajoData,resolucionesycontratoData}) => {
  // const getMuiTheme = () => createTheme({
  //   components: {
  //     // MUIDataTable: {
  //     //   styleOverrides: {
  //     //     root: {
  //     //       background: '#E2E8F0',
  //     //       // border:'1px solid red',
  //     //       borderRadius:"200px"
  //     //     },
  //     //     paper: {
  //     //       boxShadow: 'none',
  //     //     },
  //     //     head:{
  //     //       borderRadius: "100px 100px 0 0"
  //     //     }
  //     //   },
  //     // },
      
  //     MuiToolbar: {
  //       styleOverrides: {
  //         root: {
  //           background: '#E2E8F0',
  //         },
  //       },
  //     },
  //     MuiTableCell: {
  //       styleOverrides: {
  //         root:{
  //           padding: '2px',
  //           textAlign: 'center',
  //           // borderRadius:"5px 5px 0 0",
  //           alignItems: 'center'
  //         },
  //         head: {
  //           borderRight:'2px solid #E2E8F0',
  //           backgroundColor: '#6c7ae0',
  //           color:'#fff'
  //         },
  //         body:{
  //           color:'#2a3338',
  //           background: '#E2E8F0'
  //         }
  //       },
  //     },
  //     // MUIDataTableSelectCell: {
  //     //   styleOverrides: {
  //     //     headerCell: {
  //     //       backgroundColor: 'blue',
  //     //     },
  //     //   },
  //     // },
  //     // MUIDataTableBodyCell: {
  //     //   styleOverrides:{
  //     //     root: {
  //     //         backgroundColor: "#FF0000"
  //     //     }
  //     //   }
  //     // },
  //     MuiTableFooter: {
  //       styleOverrides: {
  //         root: {
  //           '& .MuiToolbar-root': {
  //             backgroundColor: '#6c7ae0',
  //             borderRadius:"10px",
  //             color:'#fff',
  //             // padding: '5px',
  //             marginBottom: '10px',
  //             marginTop: '10px',
  //             marginRight: '10px',
  //           },
  //           background: '#E2E8F0',
  //         },
  //       },
  //     },
  //   },
  // })

    const [avatar,setAvatar] = useState();
    const [nuevo,setNuevo] =useState("flex");
    const [nuevo2,setNuevo2] =useState("none");
    const [most,setMost] = useState(true);
    const [popup,setPopup] = useState(false);
    const {data, setData, post, processing, reset, errors} = useForm({
        fecha_Ingreso_undac:'',
        nombra_fecha:'',
        situacion: 'ADMINISTRATIVO',
        docente_t: 'J. PRACTICA',
        dedicacion_t: 'DEDICACION EXCLUSIVA',
        horas_d: '',
        administrativo_t:'PROFESIONAL',
        nivel_remunerativo: 'A.',
        condicion: 'NOMBRADO',
        foto: '',
        // facultad:'',
        tipo_documento:'DNI',
        dni: '',
        carnet_extranjeria: '',
        partida_nacimiento:'',
        otro_documento:'',
        // escuela:'',
        estado:'',
        fecha_jubilacion:'',
        nombres: '',
        apellido_paterno:'',
        apellido_materno:'',
        genero:'',
        fecha_nacimiento:'',
        pais: '',
        departamento: '',
        provincia: '',
        distrito: '',
        
      
        regimen_pensionario:'19990',
        nombre_afp: '',
        ruc: '',
        estado_civil: 'SOLTERO(A)',
        domicilio_actual: '',
        distrito_domicilio:'',
        provincia_domicilio:'',
        departamento_domicilio:'',
        email: '',
        telefono_fijo: '',
        telefono_celular: '',
        codigo: '',
        val_dni: '',
        regimen_laboral: '',
        // administrativo_t_nivel: '',
        // docente_t_nivel: '',
        dependencia:'',
        facultad:'',
        escuela:'',
        //FAMILIARES
        t_relacion_f: '',
        apellidos_nombres_f: '',
        tipo_documento_f:'DNI',
        dni_f: '',
        carnet_extranjeria_f: '',
        partida_nacimiento_f: '',
        otro_documento_f: '',
        genero_f: '',
        fecha_nacimiento_f: '',
        estado_civil_f: '',
        estado_v_m_f: 'SI',
        nacionalidad_f: '',
        //NIVEL EDUCATIVO
        nivel_educativo_ne: '',
        etapa_ne: '',
        nombre_institucion_ne: '',
        descripcion_ne: '',
        fecha_culminacion_ne: '',
        documento_val_ne: '',
        //EXPERIENCIA LABORAL
        cargo_desempeniado_el:'',
        fecha_inicio_el: '',
        fecha_culminacion_el: '',
        t_lugar_ex_el:'PUBLICA',
          //PRIVADA
        empresa_elpr:'',
          //PUBLICA
        dependencia_elpu:'',
        tipo_elpu:'',
        num_tipo_elpu:'',
        //EXPERIENCIA DOCENTE
        institucion_ed : '',
        catedra_ed : '',
        categoria_ed : '',
        regimen_pensionario_ed : '',
        fecha_inicio_ed: '',
        fecha_culminacion_ed : '',
        //RESOLUCIONES   :    
        cod_res : '',
        tipo_res : '',
        fecha_dic_res : '',
        des_art_pri_res : '',
        vigencia_res : '',
        categoria_alcanz_res : '',
        nivel_alcanz_res : '',
        antiguedad_in_res : '',
        antiguedad_sa_res : '',
        condicion_res : '',
        dependencia_res : '',
        observacion_res : '',
        documento_val_res : '',
        //OTRO TRABAJO
        estado_ot : 'SI',
        cargo_ot : '',
        nombre_institucion_ot : '',
        frecuencia_diaria_ot : '',
        hora_entrada_ot : '',
        hora_salida_ot : '',
        //DOCUMENTO EXTRA
        t_nombre_documento_d : '',
        descripcion_documento_d : '',
        documento_d : '',
        fecha_documento_d : '',
    });
    // function flattenObject(ob) {
    //   const toReturn = {};
    //   Object.keys(ob).map(i => {
    //     if (typeof ob[i] === 'object' && ob[i] !== null) {

    //       const flatObject = flattenObject(ob[i]);
    //       Object.keys(flatObject).map(x => {
    //         toReturn[`${i}.${x}`] = flatObject[x];
    //       });
    //     } else {
    //       toReturn[i] = ob[i];
    //     }
    //   });
    //   return toReturn;
    // }
    // console.log("personal");
    // console.log(personalData);

    // console.log("otrotrabajoData");
    // console.log(otrotrabajoData);

    // console.log("exlaboralData");
    // console.log(exlaboralData);

    
    // const personalFil = personal.map(f=>flattenObject(f));
    
    
    // const cerrarVentana =()=>{
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve(setPopup(false));
    //     }, 1500);
    //   });
    // }

    const submit = (e)=>{
        e.preventDefault()
        post(route('personal.store'),{onSuccess: ()=>{reset();setAvatar('');cambionew()}})
    }
    const familia = (e)=>{
      e.preventDefault()
      // console.log(data)
      post(route('familia.store'),{onSuccess: ()=>reset()})
    }
    const neducativo = (e)=>{
      e.preventDefault()
      console.log(data)
      post(route('neducativo.store'),{onSuccess: ()=>reset()})
    }
    const exlaboral = (e)=>{
      e.preventDefault()
      console.log(data)
      post(route('exlaboral.store'),{onSuccess: ()=>reset()})
    }
    const exdocente = (e)=>{
      e.preventDefault()
      console.log(data)
      post(route('exdocente.store'),{onSuccess: ()=>reset()})
    }
    const otrotrabajo = (e)=>{
      e.preventDefault()
      console.log(data)
      post(route('otrotrabajo.store'),{onSuccess: ()=>reset()})
    }
    const resolucionesycontrato = (e)=>{
      e.preventDefault()
      console.log(data)
      post(route('resolucionesycontrato.store'),{onSuccess: ()=>reset()})
    }
    const documento = (e)=>{
      e.preventDefault()
      post(route('documento.store'),{onSuccess: ()=>reset()})
  }

  const cambionew = ()=>{
    setNuevo("none");
    setNuevo2("inline")
    setMost(false)
  }

  function cambionew2(){
    setNuevo("flex");
    setNuevo2("none")
    setMost(true)
  }
  // console.log(data.documento_val_ne);
  console.log("personalData");
  console.log(personalData[0]);
  return (
    <AuthenticatedLayout auth={auth}>
        <Head title='Personal'/>  
        {/* {popup&& */}
          {/* <div style={{zIndex:'10000',background:'rgba(0,0,0,0.5'}} className="absolute bg-red h-fit w-fit inset-0 p-10 shadow-2xl  "> */}
          <div className='bg-amber-400'>
          {/* className="bg-gray-200 p-6 rounded-lg"  */}
          <div className="bg-slate-400 p-6 rounded-lg">
            <div className="flex justify-between">
            <h3 className='uppercase tracking-wide text-black text-xl border-b border-gray-400 font-bold '>Escalafon - Hoja de registro</h3>
            {most?<button  onClick={cambionew}
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-600  to-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none">
            

                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.707 17.707 13.414 12 7.707 6.293 6.293 7.707 10.586 12l-4.293 4.293zM15 6h2v12h-2z"></path></svg>
                    DETALLES DEL ULTIMO REGISTRO
                    </span>
            </button>:<button  onClick={cambionew2}
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-cyan-600  to-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none">
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd"></path></svg>
                    NUEVO 
                    </span>
            </button>}
            </div>
            {personalData[0].apellido_paterno===undefined&&!most?
              <div className="bg-white font-bold text-sm text-center uppercase shadow-md rounded px-7 py-3 mb-2 flex " style={{color:'red'}}>
                Su cuenta, No tiene ningun registro ingresado.
           </div>
            :
              null
            }
            {!most?
            <div className="bg-gray-200 font-bold text-sm text-center uppercase shadow-md rounded px-7 pt-5 pb-5 mb-4 flex ">
           
            {`Datos adicionales de:
            ${personalData[0].apellido_paterno?personalData[0].apellido_paterno:""} ${personalData[0].apellido_materno?personalData[0].apellido_materno:""} ${personalData[0].nombres?personalData[0].nombres:""}`} 
          </div>
             
          :null}
          <div style={{display:nuevo}} className="bg-gray-200 p-4 mb-4 rounded-lg">
            <form  onSubmit={submit} encType="multipart/form-data">
          
          <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          <div className="-mx-3 md:flex mb-4">
                <div className="w-1/3 px-3 flex md:mb-0">
                <div className="w-2/3 pr-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-1" htmlFor="fecha_Ingreso_undac">
                    Fecha de ingreso a la undac
                  </label>
                  <input autoFocus value={data.fecha_Ingreso_undac} onChange={e=>setData('fecha_Ingreso_undac',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-2 px-4 '  id="fecha_Ingreso_undac" />
                  <InputError message={errors.fecha_Ingreso_undac} className="mt-.5" />
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-1" htmlFor="nombra_fecha">
                    Fecha de nombramiento
                  </label>
                  <input value={data.nombra_fecha} onChange={e=>setData('nombra_fecha',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-2 px-4 '  id="nombra_fecha" />
                  <InputError message={errors.nombra_fecha} className="mt-.5" /> 
                </div>
                <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="codigo">
                  codigo
                  </label>
                  <input value={data.codigo} onChange={e=>setData('codigo',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="codigo" type="text" placeholder="opcional"/>
                  <InputError message={errors.codigo} className="mt-.5" />
                </div>
                  
                </div>
                
                
                <div className="w-1/6 px-3">
                    <div className="items-center">
                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="inline-2-radioS2">
                      situacion
                    </label>
                    </div>
                    <div className="my-3">
                      
                      <div className="flex items-center ">
                          <input checked={data.situacion=="ADMINISTRATIVO" ? true : false} onChange={e=>setData('situacion',e.target.value)} id="inline-2-radioS2" type="radio" value="ADMINISTRATIVO" name="inline-radio-groupSit" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-2-radioS2" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">ADMINISTRATIVO</label>
                      </div>
                      <div className="flex items-center mt-2">
                          <input checked={data.situacion=="DOCENTE" ? true : false} onChange={e=>setData('situacion',e.target.value)} id="inline-radioS1" type="radio" value="DOCENTE" name="inline-radio-groupSit" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-radioS1" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">DOCENTE</label>
                      </div>
                    </div>
                    <InputError message={errors.situacion} className="mt-.5" />
                </div>
                <div className="w-1/6 px-3">
                    <div className="items-center">
                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="inline-radioC1">
                      CONDICION
                    </label>
                    </div>
                    <div className="my-3">
                      <div className="flex items-center">
                          <input checked={data.condicion=="NOMBRADO" ? true : false} onChange={e=>setData('condicion',e.target.value)} id="inline-radioC1" type="radio" value="NOMBRADO" name="inline-radio-groupCon" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-radioC1" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">NOMBRADO</label>
                      </div>
                      <div className="flex items-center mt-2">
                          <input checked={data.condicion=="CONTRATADO" ? true : false} onChange={e=>setData('condicion',e.target.value)} id="inline-2-radioC2" type="radio" value="CONTRATADO" name="inline-radio-groupCon" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-2-radioC2" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">CONTRATADO</label>
                      </div>
                      {data.situacion=='ADMINISTRATIVO'?<><div className="flex items-center mt-2">
                          <input checked={data.condicion=="CAS" ? true : false} onChange={e=>setData('condicion',e.target.value)} id="inline-checked-radioC3" type="radio" value="CAS" name="inline-radio-groupCon" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-checked-radioC3" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">CAS</label>
                      </div></>:null}
                      
                    </div>
                    <InputError message={errors.condicion} className="mt-.5" />
                </div>
                
                <div className="flex w-1/3 px-3">
                <label htmlFor="dropzone-file" className=" mr-12 uppercase tracking-wide text-black text-xs font-bold mb-2">Foto actual</label>
                <div className='mr-4'>
                
                  <img src={avatar} style={{maxWidth:'112px'}} className=' h-32 rounded-lg' alt="" />
                  </div>
                    <label htmlFor="dropzone-file" className="w-28 h-32 flex flex-col justify-center items-center bg-gray-200 rounded-lg border-2 border-gray-400 border-dashed cursor-pointer dark:hover:bg-bray-300 dark:bg-gray-700 hover:bg-gray-300 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          fill="none"
                          className="mb-3 w-10 h-10 text-gray-400"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 0 1-.88-7.903A5 5 0 1 1 15.9 6h.1a5 5 0 0 1 1 9.9M15 13l-3-3m0 0-3 3m3-3v12"
                          />
                        </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Añadir Imagen</p>
                        </div>
                        <input name='foto' onChange={(e)=>{setData('foto',e.target.files[0]); setAvatar(URL.createObjectURL(e.target.files[0]))}} id="dropzone-file" type="file" className="hidden" />
                    </label>                
                    <InputError message={errors.foto} className="mt-.5 flex justify-end" />    
                </div>
                
                
          </div>
          <div className="-mx-3 md:flex mb-2">
                
          {data.situacion=='DOCENTE'?<>
          <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="facultad">
                    facultad
                  </label>
                  <input value={data.facultad} onChange={e=>setData('facultad',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="facultad" type="text" placeholder=""/>
                  <InputError message={errors.facultad} className="mt-.5" />
                </div>
                
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="escuela">
                    escuela
                  </label>
                  <input value={data.escuela} onChange={e=>setData('escuela',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="escuela" type="text" placeholder=""/>
                  <InputError message={errors.escuela} className="mt-.5" />
                </div></>:null}
                {data.situacion=='ADMINISTRATIVO'?<>
                <div className="w-1/2 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="dependencia">
                    dependencia
                  </label>
                  <input value={data.dependencia} onChange={e=>setData('dependencia',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="dependencia" type="text" placeholder=""/>
                  <InputError message={errors.dependencia} className="mt-.5" />
                </div></>:null}

                
                
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="estado">
                    estado
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select onChange={e=>setData('estado',e.target.value)} id="estado" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="estado">
                    <option value="">-Seleccione-</option>
                    <option value="ACTIVO">ACTIVO</option>
                    <option value="CESADO">CESADO</option>
                    <option value="FALLECIDO">FALLECIDO</option>
                  </select>
                  <InputError message={errors.estado} className="mt-.5" />
                </div>


                {data.estado=='CESADO'||data.estado=='FALLECIDO'
                ?<div className="w-1/4 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_jubilacion">
                  Fecha de jubilacion
                </label>
                <input value={data.fecha_jubilacion} onChange={e=>setData('fecha_jubilacion',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_jubilacion" />
                <InputError message={errors.fecha_jubilacion} className="mt-.5" />
              </div>
              :null}
                
                
              
                
              </div>
          

          

              {data.situacion=='DOCENTE'?<>
              <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>{data.situacion}</h3>
              <div className="flex">
                <div className="mb-2 w-full pr-3">
                 <div className=" items-center ">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="inline-radio-D">
                        categoria
                      </label>
                      </div>
                <div className="flex my-4 justify-between">
                      <div className="flex items-center ">
                          <input checked={data.docente_t=="J. PRACTICA" ? true : false} onChange={e=>setData('docente_t',e.target.value)} id="inline-e-radio-D" type="radio" value="J. PRACTICA" name="inline-radio-group-Doc" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e-radio-D" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">J. PRACTICA</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.docente_t=="AUXILIAR" ? true : false} onChange={e=>setData('docente_t',e.target.value)} id="inline-e2-radio-D" type="radio" value="AUXILIAR" name="inline-radio-group-Doc" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e2-radio-D" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">AUXILIAR</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.docente_t=="ASOCIADO" ? true : false} onChange={e=>setData('docente_t',e.target.value)} id="inline-e3-radio-D" type="radio" value="ASOCIADO" name="inline-radio-group-Doc" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e3-radio-D" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">ASOCIADO</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.docente_t=="PRINCIPAL" ? true : false} onChange={e=>setData('docente_t',e.target.value)} id="inline-e4-radio-D" type="radio" value="PRINCIPAL" name="inline-radio-group-Doc" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e4-radio-D" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">PRINCIPAL</label>
                      </div>  
                      <div className="flex items-center">
                          <input checked={data.docente_t=="DCU" ? true : false} onChange={e=>setData('docente_t',e.target.value)} id="inline-e4-radio-D-2" type="radio" value="DCU" name="inline-radio-group-Doc" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e4-radio-D-2" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">DCU</label>
                      </div>  
                </div>
                <InputError message={errors.docente_t} className="mt-.5" />
              </div>
              {/* <div className="w-1/6 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="docente_t_nivel">
                    nivel de categoria
                  </label>
                  <input value={data.docente_t_nivel} onChange={e=>setData('docente_t_nivel',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="docente_t_nivel" type="text" placeholder=""/>
                  <InputError message={errors.docente_t_nivel} className="mt-.5" />
                </div> */}
              </div>

              <div className="-mx-3 md:flex mb-2">
                <div className=" w-3/5 pr-3 ml-3">
                      <div className=" items-center ml-1">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="inline-radio-D">
                        DEDICACION
                      </label>
                      </div>
                     {data.docente_t=='DCU'
                     ?
                     <div className="flex my-4 justify-around">
                     <div className="flex items-center ">
                         <input checked={data.dedicacion_t=="B1" ? true : false} onChange={e=>setData('dedicacion_t',e.target.value)} id="inline-radio-D-dcu1" type="radio" value="B1" name="inline-radio-group-D-dcu" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                         <label htmlFor="inline-radio-D-dcu1" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">B1</label>
                     </div>
                     <div className="flex items-center ">
                         <input checked={data.dedicacion_t=="B2" ? true : false} onChange={e=>setData('dedicacion_t',e.target.value)} id="inline-2-radio-D-dcu2" type="radio" value="B2" name="inline-radio-group-D-dcu" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                         <label htmlFor="inline-2-radio-D-dcu2" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">B2</label>
                     </div>
                  
                     <InputError message={errors.dedicacion_t} className="mt-.5" />
               
                     </div>
                     : <div className="flex my-4 justify-between">
                      <div className="flex items-center ">
                          <input checked={data.dedicacion_t=="DEDICACION EXCLUSIVA" ? true : false} onChange={e=>setData('dedicacion_t',e.target.value)} id="inline-radio-D" type="radio" value="DEDICACION EXCLUSIVA" name="inline-radio-group-D" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-radio-D" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">DEDICACION EXCLUSIVA</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.dedicacion_t=="TIEMPO COMPLETO" ? true : false} onChange={e=>setData('dedicacion_t',e.target.value)} id="inline-2-radio-D" type="radio" value="TIEMPO COMPLETO" name="inline-radio-group-D" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-2-radio-D" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">TIEMPO COMPLETO</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.dedicacion_t=="TIEMPO PARCIAL" ? true : false} onChange={e=>setData('dedicacion_t',e.target.value)} id="inline-checked-radio-D" type="radio" value="TIEMPO PARCIAL" name="inline-radio-group-D" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-checked-radio-D" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">TIEMPO PARCIAL</label>
                      </div>
                      <InputError message={errors.dedicacion_t} className="mt-.5" />
                
                      </div>}
                      </div>
                <div className="w-1/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="regimen_laboral">
                    regimen laboral
                  </label>
                  <input value={data.regimen_laboral} onChange={e=>setData('regimen_laboral',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="regimen_laboral" type="text" placeholder=""/>
                  <InputError message={errors.regimen_laboral} className="mt-.5" />
                </div>
                
                <div className="w-1/5 px-3 ">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="horas_d">
                    HORAS
                  </label>
                  <input value={data.horas_d} onChange={e=>setData('horas_d',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="horas_d" type="time" placeholder=""/>
                  <InputError message={errors.horas_d} className="mt-.5" />
                </div>
              </div>
              </>:null}
              {data.situacion=='ADMINISTRATIVO'?<>
              <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>{data.situacion}</h3>
              <div className="flex">
              <div className="mb-2 w-full pr-3">
              <div className=" items-center ml-1">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="inline-radio-D">
                        categoria
                      </label>
                      </div>
              <div className="flex my-4 justify-between">
                      <div className="flex items-center ">
                          <input checked={data.administrativo_t=="PROFESIONAL" ? true : false} onChange={e=>setData('administrativo_t',e.target.value)} id="inline-e-radio-A1" type="radio" value="PROFESIONAL" name="inline-radio-group-Adm" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e-radio-A1" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">PROFESIONAL</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.administrativo_t=="TECNICO" ? true : false} onChange={e=>setData('administrativo_t',e.target.value)} id="inline-e-radio-A2" type="radio" value="TECNICO" name="inline-radio-group-Adm" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e-radio-A2" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">TECNICO</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.administrativo_t=="AUXILIAR" ? true : false} onChange={e=>setData('administrativo_t',e.target.value)} id="inline-e-radio-A3" type="radio" value="AUXILIAR" name="inline-radio-group-Adm" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e-radio-A3" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">AUXILIAR</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.administrativo_t=="FUNCIONARIO" ? true : false} onChange={e=>setData('administrativo_t',e.target.value)} id="inline-e-radio-A4" type="radio" value="FUNCIONARIO" name="inline-radio-group-Adm" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e-radio-A4" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">FUNCIONARIO</label>
                      </div>
                </div>
                <InputError message={errors.administrativo_t} className="mt-.5" />
              </div>
              {/* <div className="w-1/6 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="administrativo_t_nivel">
                    nivel de categoria
                  </label>
                  <input value={data.administrativo_t_nivel} onChange={e=>setData('administrativo_t_nivel',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="administrativo_t_nivel" type="text" placeholder=""/>
                  <InputError message={errors.administrativo_t_nivel} className="mt-.5" />
                </div> */}
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className=" w-4/5 pr-3 ml-3">
                      <div className=" items-center ml-1">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="inline-radio-Adm">
                        NIVEL
                      </label>
                      </div>
                      {data.administrativo_t=="FUNCIONARIO"?<><div className="flex my-4 justify-between">
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="1" ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-radio-Adm" type="radio" value="1" name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="2" ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-2-radio-Adm" type="radio" value="2" name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-2-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="3" ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-checked-radio-Adm" type="radio" value="3" name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-checked-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="4" ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-4-radio-Adm" type="radio" value="4" name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-4-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="5" ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-5-radio-Adm" type="radio" value="5" name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-5-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
                      </div>
                  
                      </div>
                      <InputError message={errors.nivel_remunerativo} className="mt-.5" />
                      </>:
                      
                      <><div className="flex my-4 justify-between">
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="A." ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-radio-Adm" type="radio" value="A." name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">A.</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="B." ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-2-radio-Adm" type="radio" value="B." name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-2-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">B.</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="C." ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-checked-radio-Adm" type="radio" value="C." name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-checked-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">C.</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="D." ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-4-radio-Adm" type="radio" value="D." name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-4-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">D.</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="E." ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-5-radio-Adm" type="radio" value="E." name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-5-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">E.</label>
                      </div>
                      <div className="flex items-center ">
                          <input checked={data.nivel_remunerativo=="F." ? true : false} onChange={e=>setData('nivel_remunerativo',e.target.value)} id="inline-7-radio-Adm" type="radio" value="F." name="inline-radio-group-Adm2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-7-radio-Adm" className="uppercase ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">F.</label>
                      </div>
                      </div>
                      <InputError message={errors.nivel_remunerativo} className="mt-.5" />
                      </>
                      
                      
                      }
                </div>
                <div className="w-1/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="regimen_laboral">
                    regimen laboral
                  </label>
                  <input value={data.regimen_laboral} onChange={e=>setData('regimen_laboral',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="regimen_laboral" type="text" placeholder=""/>
                  <InputError message={errors.regimen_laboral} className="mt-.5" />
                </div>
              </div>
              </>: null}

              
              
          </div>
            
            <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
            <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>DATOS PERSONALES</h3>
              
              <div className="-mx-3 md:flex mb-2">
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="apellido_paterno">
                    Apellido Paterno
                  </label>
                  <input value={data.apellido_paterno} onChange={e=>setData('apellido_paterno',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="apellido_paterno" type="text" placeholder=""/>
                  <InputError message={errors.apellido_paterno} className="mt-.5" />
                </div>
                
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="apellido_materno">
                    Apellido Materno
                  </label>
                  <input value={data.apellido_materno} onChange={e=>setData('apellido_materno',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="apellido_materno" type="text" placeholder=""/>
                  <InputError message={errors.apellido_materno} className="mt-.5" />
                </div>
                
                <div className="w-1/2 flex ">
                <div className="w-2/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nombres">
                    Nombres
                  </label>
                  <input value={data.nombres} onChange={e=>setData('nombres',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="nombres" type="text" placeholder=""/>
                  <InputError message={errors.nombres} className="mt-.5" />
                </div>
                <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="genero">
                    Genero
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select onChange={e=>setData('genero',e.target.value)} id="genero" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="genero">
                    <option value="">-Seleccione-</option>
                    <option value="MASCULINO">MASCULINO</option>
                    <option value="FEMENINO">FEMENINO</option>
                    <option value="OTRO">OTRO</option>
                  </select>
                  <InputError message={errors.genero} className="mt-.5" />
                </div>
                </div>
                
              </div>

              <div className="-mx-3 md:flex mb-2">
                <div className="w-1/5 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_nacimiento">
                    Fecha de nacimiento
                  </label>
                  <input value={data.fecha_nacimiento} onChange={e=>setData('fecha_nacimiento',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_nacimiento" />
                  <InputError message={errors.fecha_nacimiento} className="mt-.5" />
                </div>
                
                <div className="w-1/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="pais">
                    país
                  </label>
                  <input value={data.pais} onChange={e=>setData('pais',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="pais" type="text" placeholder=""/>
                  <InputError message={errors.pais} className="mt-.5" />
                </div>
                
                <div className="w-1/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="departamento">
                    departamento
                  </label>
                  <input value={data.departamento} onChange={e=>setData('departamento',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="departamento" type="text" placeholder=""/>
                  <InputError message={errors.departamento} className="mt-.5" />
                </div>
                
                <div className="w-1/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="provincia">
                    provincia
                  </label>
                  <input value={data.provincia} onChange={e=>setData('provincia',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="provincia" type="text" placeholder=""/>
                  <InputError message={errors.provincia} className="mt-.5" />
                </div>
                
                <div className="w-1/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="distrito">
                    distrito
                  </label>
                  <input value={data.distrito} onChange={e=>setData('distrito',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="distrito" type="text" placeholder=""/>
                  <InputError message={errors.distrito} className="mt-.5" />
                </div>
                
              </div>

              <div className="-mx-3 md:flex mb-2">
              <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tipo_documento">
                    tipo de documento
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select value={data.tipo_documento} onChange={e=>setData('tipo_documento',e.target.value)} id="tipo_documento" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="tipo_documento">
                    <option value="DNI">DNI</option>
                    <option value="CARNET DE EXTRANJERIA">CARNET DE EXTRANJERIA</option>
                    <option value="PARTIDA DE NACIMIENTO">PARTIDA DE NACIMIENTO</option>
                    <option value="OTRO DOCUMENTO">OTRO DOCUMENTO</option>
                  </select>
                  <InputError message={errors.tipo_documento} className="mt-.5" />
                </div>
                {data.tipo_documento=='DNI'?<div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="dni_f">
                    D.N.I.
                  </label>
                  <input value={data.dni_f} onChange={e=>setData('dni_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="dni_f" type="text" placeholder=""/>
                  <InputError message={errors.dni} className="mt-.5" />
                </div>: null}
                
                {data.tipo_documento=='CARNET DE EXTRANJERIA'?<div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="carnet_extranjeria">
                    CARNET DE EXTRANJERIA
                  </label>
                  <input value={data.carnet_extranjeria} onChange={e=>setData('carnet_extranjeria',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="carnet_extranjeria" type="text" placeholder=""/>
                  <InputError message={errors.carnet_extranjeria} className="mt-.5" />
                </div>: null}
                
                {data.tipo_documento=='PARTIDA DE NACIMIENTO'?<div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="partida_nacimiento">
                    partida de nacimiento
                  </label>
                  <input value={data.partida_nacimiento} onChange={e=>setData('partida_nacimiento',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="partida_nacimiento" type="text" placeholder=""/>
                  <InputError message={errors.partida_nacimiento} className="mt-.5" />
                </div>: null}

                {data.tipo_documento=='OTRO DOCUMENTO'?<div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="otro_documento_f">
                    OTO DOCUMENTO
                  </label>
                  <input value={data.otro_documento} onChange={e=>setData('otro_documento_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="otro_documento_f" type="text" placeholder=""/>
                  <InputError message={errors.otro_documento} className="mt-.5" />
                </div>: null}
                
                {/* <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="dni">
                    D.N.I.
                  </label>
                  <input value={data.dni} onChange={e=>setData('dni',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="dni" type="text" placeholder=""/>
                  <InputError message={errors.dni} className="mt-.5" />
                </div>
                
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="carnet_extranjeria">
                    CARNET DE EXTRANGERIA
                  </label>
                  <input value={data.carnet_extranjeria} onChange={e=>setData('carnet_extranjeria',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="carnet_extranjeria" type="text" placeholder=""/>
                  <InputError message={errors.carnet_extranjeria} className="mt-.5" />
                </div>
                
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="  ">
                    CARNET DE IDENTIDAD
                  </label>
                  <input value={data.carnet_identidad} onChange={e=>setData('carnet_identidad',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="carnet_identidad" type="text" placeholder=""/>
                  <InputError message={errors.carnet_identidad} className="mt-.5" />
                </div> */}
                <div className="w-1/4 px-3">
                <label htmlFor="dropzone-file_P" className="uppercase tracking-wide text-black text-xs font-bold mb-2">documento de validacion</label>
                    
                        
                  <input name='val_dni' onChange={(e)=>{setData('val_dni',e.target.files[0])}} id="dropzone-file_P" type="file" className="
                  text-sm text-black border rounded-full border-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600
             file:py-3 file:px-3
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-blue-600 
            hover:file:cursor-pointer hover:file:opacity-90 w-full " />
                                
                    <InputError message={errors.val_dni} className="mt-.5 flex justify-end" />    
                </div>
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
                    R.U.C.
                  </label>
                  <input value={data.ruc} onChange={e=>setData('ruc',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder=""/>
                  <InputError message={errors.ruc} className="mt-.5" />
                </div>
                
              </div>

              

              <div className="-mx-3 md:flex mb-2 ">
                <div className="w-full px-3">
                    <div className="items-center">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="inline-e-radio">
                        estado civil
                      </label>
                    </div>
                    <div className="flex my-4 justify-between">
                      <div className="flex items-center ">
                          <input checked={data.estado_civil=="SOLTERO(A)" ? true : false} onChange={e=>setData('estado_civil',e.target.value)} id="inline-e-radio" type="radio" value="SOLTERO(A)" name="inline-radio-group2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e-radio" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SOLTERO(A)</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.estado_civil=="CASADO(A)" ? true : false} onChange={e=>setData('estado_civil',e.target.value)} id="inline-e2-radio" type="radio" value="CASADO(A)" name="inline-radio-group2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e2-radio" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">CASADO(A)</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.estado_civil=="VIUDO(A)" ? true : false} onChange={e=>setData('estado_civil',e.target.value)} id="inline-e3-radio" type="radio" value="VIUDO(A)" name="inline-radio-group2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e3-radio" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">VIUDO(A)</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.estado_civil=="DIVORCIADO(A)" ? true : false} onChange={e=>setData('estado_civil',e.target.value)} id="inline-e4-radio" type="radio" value="DIVORCIADO(A)" name="inline-radio-group2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e4-radio" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">DIVORCIADO(A)</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.estado_civil=="CONCUBINO(A)" ? true : false} onChange={e=>setData('estado_civil',e.target.value)} id="inline-e5-radio" type="radio" value="CONCUBINO(A)" name="inline-radio-group2" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-e5-radio" className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">CONCUBINO(A)</label>
                      </div>
                    </div>
                    <InputError message={errors.estado_civil} className="mt-.5" />
                </div>
                
              </div>

              <div className="-mx-3 md:flex mb-3">
                <div className="md:w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="domicilio_actual">
                  domicilio actual
                  </label>
                  <input value={data.domicilio_actual} onChange={e=>setData('domicilio_actual',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="domicilio_actual" type="text" placeholder=""/>
                  <InputError message={errors.domicilio_actual} className="mt-.5" />
                </div>
                
              </div>

              <div className="-mx-3 md:flex mb-2">
                <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="distrito_actual">
                    distrito actual
                  </label>
                  <input value={data.distrito_domicilio} onChange={e=>setData('distrito_domicilio',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="distrito_actual" type="text" placeholder=""/>
                  <InputError message={errors.distrito_domicilio} className="mt-.5" />
                </div>
                
                <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="provincia_actual">
                    provincia actual
                  </label>
                  <input value={data.provincia_domicilio} onChange={e=>setData('provincia_domicilio',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="provincia_actual" type="text" placeholder=""/>
                  <InputError message={errors.provincia_domicilio} className="mt-.5" />
                </div>
                
                <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="departamaneto_actual">
                    departamaneto actual
                  </label>
                  <input value={data.departamento_domicilio} onChange={e=>setData('departamento_domicilio',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="departamaneto_actual" type="text" placeholder=""/>
                  <InputError message={errors.departamento_domicilio} className="mt-.5" />
                </div>
                
              </div>

              <div className="-mx-3 md:flex mb-2">
                <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="distrito_actual">
                    N° de Telefono Fijo
                  </label>
                  <input value={data.telefono_fijo} onChange={e=>setData('telefono_fijo',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="distrito_actual" type="text" placeholder=""/>
                  <InputError message={errors.telefono_fijo} className="mt-.5" />
                </div>
                
                <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="provincia_actual">
                  N° de Celular
                  </label>
                  <input value={data.telefono_celular} onChange={e=>setData('telefono_celular',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="provincia_actual" type="text" placeholder=""/>
                  <InputError message={errors.telefono_celular} className="mt-.5" />
                </div>
                
                <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="departamaneto_actual">
                    E-mail
                  </label>
                  <input value={data.email} onChange={e=>setData('email',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="departamaneto_actual" type="email" placeholder="tu_correo@email.com"/>
                  <InputError message={errors.email} className="mt-.5" />
                </div>
                
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className=" w-1/2 px-3">
                      <div className=" items-center ml-1">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="inline-radio">
                        regimen pensionario
                      </label>
                      </div>
                      <div className="flex my-4 justify-between">
                      <div className="flex items-center">
                          <input checked={data.regimen_pensionario=="19990" ? true : false} onChange={e=>setData('regimen_pensionario',e.target.value)} id="inline-radio" type="radio" value="19990" name="inline-radio-group" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-radio" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">19990</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.regimen_pensionario=="20530" ? true : false} onChange={e=>setData('regimen_pensionario',e.target.value)} id="inline-2-radio" type="radio" value="20530" name="inline-radio-group" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-2-radio" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">20530</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.regimen_pensionario=="AFP" ? true : false} onChange={e=>setData('regimen_pensionario',e.target.value)} id="inline-checked-radio" type="radio" value="AFP" name="inline-radio-group" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="inline-checked-radio" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">AFP</label>
                      </div>
                      </div>
                      <InputError message={errors.regimen_pensionario} className="mt-.5" />
                </div>
                 
                {data.regimen_pensionario=='AFP'?<div className="w-1/2 px-2  md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                    NOMBRE DE LA AFP
                  </label>
                  <input value={data.nombre_afp} onChange={e=>setData('nombre_afp',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder=""/>
                  <InputError message={errors.nombre_afp} className="mt-.5" />
                </div>:null}
                
                
                
              </div>
            </div>
            <div className="flex justify-center">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 ring-offset-blue-200 focus:ring-blue-600 hover:ring-offset-blue-500 ease focus:outline-none"
                    disabled = {processing}
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 176h256v112H384V176zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"></path></svg>
                    GUARDAR
                    </span>
                    
              </PrimaryButton>
              {/* <div className="w-8"></div> */}
              {/* <button
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-red-300 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                    // disabled = {processing}
                    onClick={()=>setPopup(false)}
                    type="button"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"></path></svg>
                    CERRAR
                    </span>
              </button> */}
            </div>
            </form>
          </div>
          <div style={{display:nuevo2}}> 
          <div className="bg-gray-200 p-4 mb-4 rounded-lg">
          <form onSubmit={familia} encType="multipart/form-data">
          
          <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>FAMILIARES DIRECTOS</h3>
              <div className="-mx-3 md:flex mb-2">
                
                
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="t_relacion_f">
                    tipo de relacion
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select value={data.t_relacion_f} onChange={e=>setData('t_relacion_f',e.target.value)} id="t_relacion_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="t_relacion_f">
                    <option value="">-Seleccione-</option>
                    <option value="PADRE">PADRE</option>
                    <option value="MADRE">MADRE</option>
                    <option value="CONYUGE">CONYUGE</option>
                    <option value="HIJO">HIJO</option>
                  </select>
                  <InputError message={errors.t_relacion_f} className="mt-.5" />
                </div>
                <div className="w-1/2 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="apellidos_nombres_f">
                    apellidos y nombre(s)
                  </label>
                  <input value={data.apellidos_nombres_f} onChange={e=>setData('apellidos_nombres_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="apellidos_nombres_f" type="text" placeholder=""/>
                  <InputError message={errors.apellidos_nombres_f} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tipo_documento_f">
                    tipo de documento
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select value={data.tipo_documento_f} onChange={e=>setData('tipo_documento_f',e.target.value)} id="tipo_documento_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="tipo_documento_f">
                    <option value="DNI">DNI</option>
                    <option value="CARNET DE EXTRANJERIA">CARNET DE EXTRANJERIA</option>
                    <option value="PARTIDA DE NACIMIENTO">PARTIDA DE NACIMIENTO</option>
                    <option value="OTRO DOCUMENTO">OTRO DOCUMENTO</option>
                  </select>
                  <InputError message={errors.tipo_documento_f} className="mt-.5" />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
              
                {data.tipo_documento_f=='DNI'?<div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="dni_f">
                    D.N.I.
                  </label>
                  <input value={data.dni_f} onChange={e=>setData('dni_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="dni_f" type="text" placeholder=""/>
                  <InputError message={errors.dni_f} className="mt-.5" />
                </div>: null}
                
                {data.tipo_documento_f=='CARNET DE EXTRANJERIA'?<div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="carnet_extranjeria_f">
                    CARNET DE EXTRANJERIA
                  </label>
                  <input value={data.carnet_extranjeria_f} onChange={e=>setData('carnet_extranjeria_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="carnet_extranjeria_f" type="text" placeholder=""/>
                  <InputError message={errors.carnet_extranjeria_f} className="mt-.5" />
                </div>: null}
                
                {data.tipo_documento_f=='PARTIDA DE NACIMIENTO'?<div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="partida_nacimiento_f">
                    partida de nacimiento
                  </label>
                  <input value={data.partida_nacimiento_f} onChange={e=>setData('partida_nacimiento_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="partida_nacimiento_f" type="text" placeholder=""/>
                  <InputError message={errors.partida_nacimiento_f} className="mt-.5" />
                </div>: null}

                {data.tipo_documento_f=='OTRO DOCUMENTO'?<div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="otro_documento_f">
                    OTO DOCUMENTO
                  </label>
                  <input value={data.otro_documento_f} onChange={e=>setData('otro_documento_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="otro_documento_f" type="text" placeholder=""/>
                  <InputError message={errors.otro_documento_f} className="mt-.5" />
                </div>: null}

                <div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_nacimiento_f">
                    Fecha de nacimiento
                  </label>
                  <input value={data.fecha_nacimiento_f} onChange={e=>setData('fecha_nacimiento_f',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_nacimiento_f" />
                  <InputError message={errors.fecha_nacimiento_f} className="mt-.5" />
                </div>
                <div className=" w-1/6 px-3">
                      <div className=" items-center ml-1">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="estado_v_m_f">
                        vive
                      </label>
                      </div>
                      <div className="flex my-4 justify-around">
                      <div className="flex items-center">
                          <input checked={data.estado_v_m_f=="SI" ? true : false} onChange={e=>setData('estado_v_m_f',e.target.value)} id="estado_v_m_f" type="radio" value="SI" name="estado_v_m_f" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="estado_v_m_f" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SI</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.estado_v_m_f=="NO" ? true : false} onChange={e=>setData('estado_v_m_f',e.target.value)} id="estado_v_m_f_2" type="radio" value="NO" name="estado_v_m_f" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="estado_v_m_f_2" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">NO</label>
                      </div>
                      </div>
                      <InputError message={errors.estado_v_m_f} className="mt-.5" />
                </div>
                <div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="genero_f">
                    genero
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select value={data.genero_f} onChange={e=>setData('genero_f',e.target.value)} id="genero_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="genero_f">
                    <option value="">-Seleccione-</option>
                    <option value="MASCULINO">MASCULINO</option>
                    <option value="FEMENINO">FEMENINO</option>
                    <option value="OTRO">OTRO</option>
                  </select>
                  <InputError message={errors.genero_f} className="mt-.5" />
                </div>
                <div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="estado_civil_f">
                    estado civil
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select value={data.estado_civil_f} onChange={e=>setData('estado_civil_f',e.target.value)} id="estado_civil_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="estado_civil_f">
                    <option value="">-Seleccione-</option>
                    <option value="SOLTERO(A)">SOLTERO(A)</option>
                    <option value="CASADO(A)">CASADO(A)</option>
                    <option value="VIUDO(A)">VIUDO(A)</option>
                    <option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
                    <option value="CONCUBINO(A)">CONCUBINO(A)</option>SOLTERO(A)
                  </select>
                  <InputError message={errors.estado_civil_f} className="mt-.5" />
                </div>

                
                <div className="w-1/6 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nacionalidad_f">
                    nacionalidad
                  </label>
                  <input value={data.nacionalidad_f} onChange={e=>setData('nacionalidad_f',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="nacionalidad_f" type="text" placeholder=""/>
                  <InputError message={errors.nacionalidad_f} className="mt-.5" />
                </div>
                
              </div>
              <>
               
                
              </>
          </div>
            
           
              
         
            <div className="flex">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-green-600 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    disabled = {processing}
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg>
                    AGREGAR
                    </span>
                    
              </PrimaryButton>
              {/* <div className="w-8"></div> */}
              {/* <button
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-red-300 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                    // disabled = {processing}
                    onClick={()=>setPopup(false)}
                    type="button"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"></path></svg>
                    CERRAR
                    </span>
              </button> */}
            </div>
          </form>
          
            {familiaData.map(familiaDat=>
          //    <div key={familiaDat.id}>
          //    <div className="bg-white shadow-md border border-sky-500 rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          //            <div className="-mx-3 md:flex mb-2">
                       
                       
          //              <div className="w-1/4 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="t_relacion_f">
          //                  tipo de relacion
          //                </label>
                         
          //                <div id="t_relacion_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="t_relacion_f">
          //                {familiaDat.t_relacion_f}
          //                </div>
                         
          //              </div>
          //              <div className="w-1/2 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="apellidos_nombres_f">
          //                  apellidos y nombre(s)
          //                </label>
          //                <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded h-7 py-1 px-4 mb-3">
          //                  {familiaDat.apellidos_nombres_f}
          //                  </div>
          //                  </div>
          //              <div className="w-1/4 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tipo_documento_f">
          //                  tipo de documento
          //                </label>
          //                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
          //                <div id="tipo_documento_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 mb-3 font-medium' name="tipo_documento_f">
          //                 {familiaDat.tipo_documento_f}
          //                 </div>
                        
          //              </div>
                       
          //            </div>
          //            <div className="-mx-3 md:flex mb-2">
          //              {familiaDat.tipo_documento_f=='DNI'?<div className="w-1/6 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="dni_f">
          //                  D.N.I.
          //                </label>
          //                <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded h-7 py-1 px-4 mb-3" id="dni_f" type="text" placeholder="">
          //                {familiaDat.dni_f}
          //                </div>
                         
          //              </div>: null}
                       
          //              {familiaDat.tipo_documento_f=='CARNET DE EXTRANJERIA'?<div className="w-1/6 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="carnet_extranjeria_f">
          //                  CARNET DE EXTRANJERIA
          //                </label>
                         
          //                <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded h-7 py-1 px-4 mb-3">
          //                  {familiaDat.carnet_extranjeria_f}
          //                  </div>
          //              </div>: null}
                       
          //              {familiaDat.tipo_documento_f=='PARTIDA DE NACIMIENTO'?<div className="w-1/6 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="partida_nacimiento_f">
          //                  partida de nacimiento
          //                </label>
          //                <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded h-7 py-1 px-4 mb-3">
          //                {familiaDat.partida_nacimiento_f}
          //                </div>
          //              </div>: null}
       
          //              {familiaDat.tipo_documento_f=='OTRO DOCUMENTO'?<div className="w-1/6 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="otro_documento_f">
          //                  OTO DOCUMENTO
          //                </label>
          //                <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded h-7 py-1 px-4 mb-3">
          //                  {familiaDat.otro_documento_f}
          //                </div>
          //              </div>: null}
       
          //              <div className="w-1/6 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_nacimiento_f">
          //                  Fecha de nacimiento
          //                </label>
                         
          //                <div className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded h-7 py-1 px-4 mb-3 '>
          //                  {familiaDat.fecha_nacimiento_f}
          //                  </div>
          //              </div>
          //              <div className=" w-1/6 px-3">
          //                    <div className=" items-center ml-1">
          //                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="estado_v_m_f">
          //                      vive
          //                    </label>
          //                    </div>
          //                    <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded h-7 py-1 px-4 mb-3">
          //                    {familiaDat.estado_v_m_f}
          //                    </div>
          //              </div>
          //              <div className="w-1/6 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="genero_f">
          //                  genero
          //                </label>
          //                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
          //                <div className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 mb-3 font-medium' name="genero_f">
          //                  {familiaDat.genero_f}
          //                </div>
          //              </div>
          //              <div className="w-1/6 px-3 mb-6 md:mb-0">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="estado_civil_f">
          //                  estado civil
          //                </label>
          //                {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
          //                <div id="estado_civil_f" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 mb-3 font-medium' name="estado_civil_f">
          //                  {familiaDat.estado_civil_f}
          //                </div>
                        
          //              </div>
          //              <div className="w-1/6 px-3">
          //                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nacionalidad_f">
          //                  nacionalidad
          //                </label>
                         
          //                <div className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded h-7 py-1 px-4 mb-3" id="nacionalidad_f">
          //                  {familiaDat.nacionalidad_f}
          //                </div>
          //              </div>
          //            </div>
          //        </div>
          //  </div> 
          <FamiliaData key={familiaDat.id} familiaDat={familiaDat}/>
            )}
          
          </div>
          <div className="bg-gray-200 p-4 mb-4 rounded-lg">
          <form onSubmit={neducativo} encType="multipart/form-data">
          
          <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>NIVEL EDUCATIVO</h3>
              <div className="-mx-3 md:flex mb-2">
                
                
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nivel_educativo_ne">
                    tipo
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select value={data.nivel_educativo_ne} onChange={e=>setData('nivel_educativo_ne',e.target.value)} id="nivel_educativo_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="nivel_educativo_ne">
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
                  <InputError message={errors.nivel_educativo_ne} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="etapa_ne">
                    ETAPA
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select value={data.etapa_ne} onChange={e=>setData('etapa_ne',e.target.value)} id="etapa_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="etapa_ne">
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
                  <InputError message={errors.etapa_ne} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_culminacion_ne">
                    Fecha de culminacion
                  </label>
                  <input value={data.fecha_culminacion_ne} onChange={e=>setData('fecha_culminacion_ne',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_culminacion_ne" />
                  <InputError message={errors.fecha_culminacion_ne} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3">
                <label htmlFor="dropzone-file_NE" className="uppercase tracking-wide text-black text-xs font-bold mb-2">documento de validacion</label>
                    
                        
                  <input name='documento_val_ne' onChange={(e)=>{setData('documento_val_ne',e.target.files[0])}} id="dropzone-file_NE" type="file" className="
                  text-sm text-black border rounded-full border-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600
             file:py-3 file:px-3
            file:rounded-full file:border-0
            
            file:text-md file:font-semibold  file:text-white
            file:bg-blue-600 
            hover:file:cursor-pointer hover:file:opacity-90 w-full " />
                                
                    <InputError message={errors.documento_val_ne} className="mt-.5 flex justify-end" />    
                </div>
                
              </div>
              <div className="-mx-3 md:flex mb-2">
              
              {data.nivel_educativo_ne=="PRIMARIA"||data.nivel_educativo_ne=="SECUNDARIA"?<><div className="w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nombre_institucion_ne">
                    NOMBRE DE LA INSTITUCION
                  </label>
                  <input value={data.nombre_institucion_ne} onChange={e=>setData('nombre_institucion_ne',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="nombre_institucion_ne" type="text" placeholder=""/>
                  <InputError message={errors.nombre_institucion_ne} className="mt-.5" />
                </div>
                </>:<>
              <div className="w-1/2 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nombre_institucion_ne">
                    NOMBRE DE LA INSTITUCION
                  </label>
                  <input value={data.nombre_institucion_ne} onChange={e=>setData('nombre_institucion_ne',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="nombre_institucion_ne" type="text" placeholder=""/>
                  <InputError message={errors.nombre_institucion_ne} className="mt-.5" />
                </div>
                <div className="w-1/2 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="descripcion_ne">
                    DESCRIPCION
                  </label>
                  <input value={data.descripcion_ne} onChange={e=>setData('descripcion_ne',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="descripcion_ne" type="text" placeholder=""/>
                  <InputError message={errors.descripcion_ne} className="mt-.5" />
                </div>
              </>
              }
                

                
              </div>

          </div>
            
           
              
         
            <div className="flex">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    disabled = {processing}
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg>
                    AGREGAR
                    </span>
                    
              </PrimaryButton>
              {/* <div className="w-8"></div> */}
              {/* <button
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-red-300 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                    // disabled = {processing}
                    onClick={()=>setPopup(false)}
                    type="button"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"></path></svg>
                    CERRAR
                    </span>
              </button> */}
            </div>
          </form>
          {/* <div>
            {neducativoData.map(neducativoDat=>
            <div key={neducativoDat.id}>
              <div className="bg-white shadow-md border border-sky-500 rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                     <div className="-mx-3 md:flex mb-2">
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nivel_educativo_ne">
                           tipo de grado
                         </label>
                         
                         <div id="nivel_educativo_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="nivel_educativo_ne">
                         {neducativoDat.nivel_educativo_ne}
                         </div>
                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="etapa_ne">
                           etapa
                         </label>
                         
                         <div id="etapa_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="etapa_ne">
                         {neducativoDat.etapa_ne}
                         </div>
                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_culminacion_ne">
                           FECHA DE CULMINACION
                         </label>
                         
                         <div id="fecha_culminacion_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="fecha_culminacion_ne">
                         {neducativoDat.fecha_culminacion_ne}
                         </div>
                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="documento_val_ne">
                         DOCUMENTO DE VALIDACION
                         </label>
                         
                         <a id="documento_val_ne" href={neducativoDat.documento_val_ne} className='' name="documento_val_ne">
                         {neducativoDat.documento_val_ne}
                         </a>
                         
                     </div>
                 </div>
                 <div className="-mx-3 md:flex mb-2">
                     <div className="w-1/2 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nombre_institucion_ne">
                         NOMBRE DE LA INSTITUCION
                         </label>
                         
                         <div id="nombre_institucion_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="nombre_institucion_ne">
                         {neducativoDat.nombre_institucion_ne}
                         </div>
                     </div>
                     <div className="w-1/2 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="descripcion_ne">                   
                          DESCRIPCION
                         </label>
                         
                         <div id="descripcion_ne" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="descripcion_ne">
                         {neducativoDat.descripcion_ne}
                         </div>
                     </div>
                    
                 </div>
            </div>
            </div>
              )}
          </div> */}
          {neducativoData.map(neducativoDat=>
            <NeducativoData key={neducativoDat.id} neducativoDat={neducativoDat}/>
            )}
          </div>
           {/* //EXPERIENCIA LABORAL
cargo_desempeniado_el:'',fecha_inicio_el: '',fecha_culminacion_el: '',t_lugar_ex_el:'',
          //PRIVADA
          empresa_elpr:'',
          //PUBLICA
            dependencia_elpu:'',tipo_elpu:'',num_tipo_elpu:'',*/}
          <div className="bg-gray-200 p-4 mb-4 rounded-lg">
          <form onSubmit={exlaboral} encType="multipart/form-data">
          <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>EXPERIENCIA LABORAL</h3>
              <div className="-mx-3 md:flex mb-2">
              <div className=" w-1/5 px-3">
                      <div className=" items-center ml-1">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="t_lugar_ex_el">
                        administracion
                      </label>
                      </div>
                      <div className="flex my-4 justify-between">
                      <div className="flex items-center">
                          <input checked={data.t_lugar_ex_el=="PUBLICA" ? true : false} onChange={e=>setData('t_lugar_ex_el',e.target.value)} id="t_lugar_ex_el" type="radio" value="PUBLICA" name="t_lugar_ex_el" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="t_lugar_ex_el" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">PUBLICA</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.t_lugar_ex_el=="PRIVADA" ? true : false} onChange={e=>setData('t_lugar_ex_el',e.target.value)} id="t_lugar_ex_el-2" type="radio" value="PRIVADA" name="t_lugar_ex_el" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="t_lugar_ex_el-2" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">PRIVADA</label>
                      </div>
                      </div>
                      <InputError message={errors.t_lugar_ex_el} className="mt-.5" />
                </div>
                <div className="w-2/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="cargo_desempeniado_el">
                    CARGO DESEMPEÑADO
                  </label>
                  <input value={data.cargo_desempeniado_el} onChange={e=>setData('cargo_desempeniado_el',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="cargo_desempeniado_el" type="text" placeholder=""/>
                  <InputError message={errors.cargo_desempeniado_el} className="mt-.5" />
                </div>
                <div className="w-1/5 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_inicio_el">
                    Fecha de INICIO
                  </label>
                  <input value={data.fecha_inicio_el} onChange={e=>setData('fecha_inicio_el',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_inicio_el" />
                  <InputError message={errors.fecha_inicio_el} className="mt-.5" />
                </div>
                <div className="w-1/5 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_culminacion_el">
                    Fecha de culminacion
                  </label>
                  <input value={data.fecha_culminacion_el} onChange={e=>setData('fecha_culminacion_el',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_culminacion_el" />
                  <InputError message={errors.fecha_culminacion_el} className="mt-.5" />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                {data.t_lugar_ex_el=="PRIVADA"?<div className="w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="empresa_elpr">
                    empresa
                  </label>
                  <input value={data.empresa_elpr} onChange={e=>setData('empresa_elpr',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="empresa_elpr" type="text" placeholder=""/>
                  <InputError message={errors.empresa_elpr} className="mt-.5" />
                </div>:null}
                {data.t_lugar_ex_el=="PUBLICA"?
                <>
                <div className="w-4/6 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="dependencia_elpu">
                  DEPENDENCIA
                </label>
                <input value={data.dependencia_elpu} onChange={e=>setData('dependencia_elpu',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="dependencia_elpu" type="text" placeholder=""/>
                <InputError message={errors.dependencia_elpu} className="mt-.5" />
              </div>
              <div className="w-1/6 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tipo_elpu">
                tipo
              </label>
              
              <select value={data.tipo_elpu} onChange={e=>setData('tipo_elpu',e.target.value)} id="tipo_elpu" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="tipo_elpu">
                <option value="">-Seleccione-</option>
                <option value="RESOLUCION">RESOLUCION - R</option>
                <option value="MEMORANDUM">MEMORANDUM - M</option>
              </select>
              <InputError message={errors.tipo_elpu} className="mt-.5" />
            </div>
            <div className="w-1/6 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="num_tipo_elpu">
                  N° (R) (M)
                </label>
                <input value={data.num_tipo_elpu} onChange={e=>setData('num_tipo_elpu',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="num_tipo_elpu" type="text" placeholder=""/>
                <InputError message={errors.num_tipo_elpu} className="mt-.5" />
              </div>
            </>
              :null}
                
                
              </div>

          </div>
            <div className="flex">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    disabled = {processing}
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg>
                    AGREGAR
                    </span>
                    
              </PrimaryButton>
              
            </div>
          </form>
          <div>
            {exlaboralData.map(exlaboralDat=>
              <ExlaboralData key={exlaboralDat.id} exlaboralDat={exlaboralDat}/>)}
           
            {/* {exlaboralData.map(exlaboralDat=>
              <ExlaboralData key={exlaboralDat.id} exlaboralDat={exlaboralDat}/>)}
           */}
          </div>
          </div>
          {/* //EXPERIENCIA DOCENTE
        institucion_ed : '',catedra_ed : '',categoria_ed : '',regimen_pensionario_ed : '',
fecha_inicio_ed: '',fecha_culminacion_ed : '', */}
          <div className="bg-gray-200 p-4 mb-4 rounded-lg">
          <form onSubmit={exdocente} encType="multipart/form-data">
          <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>EXPERIENCIA DOCENTE</h3>
              <div className="-mx-3 md:flex mb-2">
              <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="catedra_ed">
                    CATEDRA
                  </label>
                  <input value={data.catedra_ed} onChange={e=>setData('catedra_ed',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="catedra_ed" type="text" placeholder=""/>
                  <InputError message={errors.catedra_ed} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
              <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="categoria_ed">
              CATEGORIA
              </label>
              
              <select value={data.categoria_ed} onChange={e=>setData('categoria_ed',e.target.value)} id="categoria_ed" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="categoria_ed">
                <option value="">-Seleccione-</option>
                <option value="J. PRACTICA">J. PRACTICA</option>
                <option value="AUXILIAR">AUXILIAR</option>
                <option value="ASOCIADO">ASOCIADO</option>
                <option value="PRINCIPAL">PRINCIPAL</option>
                <option value="OTRO">OTRO</option>
              </select>
              <InputError message={errors.categoria_ed} className="mt-.5" />
            </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_inicio_ed">
                    Fecha de INICIO
                  </label>
                  <input value={data.fecha_inicio_ed} onChange={e=>setData('fecha_inicio_ed',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_inicio_ed" />
                  <InputError message={errors.fecha_inicio_ed} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_culminacion_ed">
                    Fecha de culminacion
                  </label>
                  <input value={data.fecha_culminacion_ed} onChange={e=>setData('fecha_culminacion_ed',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_culminacion_ed" />
                  <InputError message={errors.fecha_culminacion_ed} className="mt-.5" />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                
                
                
                <div className="w-4/6 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="institucion_ed">
                  NOMBRE DE LA INSTITUCION 
                </label>
                <input value={data.institucion_ed} onChange={e=>setData('institucion_ed',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="institucion_ed" type="text" placeholder=""/>
                <InputError message={errors.institucion_ed} className="mt-.5" />
              </div>
              
            <div className="w-2/6 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="regimen_pensionario_ed">
                regimen Pensionario (DESCRIPCION - OPCIONAL)
                </label>
                <input value={data.regimen_pensionario_ed} onChange={e=>setData('regimen_pensionario_ed',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="regimen_pensionario_ed" type="text" placeholder=""/>
                <InputError message={errors.regimen_pensionario_ed} className="mt-.5" />
              </div>
              
            
                
                
              </div>

          </div>
            <div className="flex">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    disabled = {processing}
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg>
                    AGREGAR
                    </span>
                    
              </PrimaryButton>
              
            </div>
          </form>
          <div>
            {/* {exdocenteData.map(exdocenteDat=>
              <div key={exdocenteDat.id}>
                <div className="bg-white shadow-md border border-sky-500 rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
                     <div className="-mx-3 md:flex mb-2">
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="catedra_ed">
                           catedra
                         </label>
                         
                         <div id="catedra_ed" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="catedra_ed">
                         {exdocenteDat.catedra_ed}
                         </div>
                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="categoria_ed">
                         CATEGORIA
                         </label>
                         
                         <div id="categoria_ed" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="categoria_ed">
                         {exdocenteDat.categoria_ed}
                         </div>
                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_inicio_ed">
                           FECHA DE INICIO
                         </label>
                         
                         <div id="fecha_inicio_ed" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="fecha_inicio_ed">
                         {exdocenteDat.fecha_inicio_ed}
                         </div>
                     </div>
                     <div className="w-1/4 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_culminacion_ed">
                           FECHA DE CULMINACION
                         </label>
                         
                         <div id="fecha_culminacion_ed" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="fecha_culminacion_ed">
                         {exdocenteDat.fecha_culminacion_ed}
                         </div>
                     </div>
                     
                 </div>
                 
                 <div className='-mx-3 md:flex mb-2'>
                 <div className="w-1/2 px-3 mb-6 md:mb-0">
                  
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="institucion_ed">
                         NOMBRE DE LA INSTITUCION
                         </label>
                         
                         <div id="institucion_ed" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="institucion_ed">
                         {exdocenteDat.institucion_ed}
                         </div>
                     </div>
                     <div className="w-1/2 px-3 mb-6 md:mb-0">
                         <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="regimen_pensionario_ed">                   
                         REGIMEN PENSIONARIO
                         </label>
                         
                         <div id="regimen_pensionario_ed" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded h-7 py-1 px-4 font-medium' name="regimen_pensionario_ed">
                         {exdocenteDat.regimen_pensionario_ed}
                         </div>
                     </div>
                 </div>
            </div>
              </div>)} */}
              {exdocenteData.map(exdocenteDat=>
                <ExdocenteData key={exdocenteDat.id} exdocenteDat={exdocenteDat}/>)}
          </div>
          </div>
          {/* RESOLUCIONES->cod_res : '',tipo_res : '',fecha_dic_res : '',des_art_pri_res : '',
        vigencia_res : '',categoria_alcanz_res : '',nivel_alcanz_res : '',
        antiguedad_in_res : '',antiguedad_sa_res : '',condicion_res : '',
        dependencia_res : '',observacion_res : '',documento_val_res : '', */}
        <div className="bg-gray-200 p-4 mb-4 rounded-lg">
          <form onSubmit={resolucionesycontrato} encType="multipart/form-data">
          
          <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>RESOLUCIONES</h3>
              <div className="-mx-3 md:flex mb-2">
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="tipo_res">
                    tipo
                  </label>
                  {/* <input value={data.genero} onChange={e=>setData('genero',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="genero" type="text" placeholder=""/> */}
                  <select value={data.tipo_res} onChange={e=>setData('tipo_res',e.target.value)} id="tipo_res" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 text-sm rounded py-3 px-4 mb-3 font-medium' name="tipo_res">
                    <option value="">-Seleccione-</option>
                    <option value="INGRESO">INGRESO</option>
                    <option value="NOMBRAMIENTO">NOMBRAMIENTO</option>
                    <option value="RATIFICACION">RATIFICACION</option>
                    <option value="CONTRATO">CONTRATO</option>
                    <option value="OTRO">OTRO</option>
                  </select>
                  <InputError message={errors.tipo_res} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="cod_res">
                    N° de RESOLUCION
                  </label>
                  <input value={data.cod_res} onChange={e=>setData('cod_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="cod_res" type="text" placeholder=""/>
                  <InputError message={errors.cod_res} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_dic_res">
                    Fecha deL DOCUMENTO
                  </label>
                  <input value={data.fecha_dic_res} onChange={e=>setData('fecha_dic_res',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_dic_res" />
                  <InputError message={errors.fecha_dic_res} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3">
                <label htmlFor="dropzone-file_res" className="uppercase tracking-wide text-black text-xs font-bold mb-2">documento de validacion</label>
                    
                        
                  <input name='documento_val_res' onChange={(e)=>{setData('documento_val_res',e.target.files[0])}} id="dropzone-file_res" type="file" className="
                  text-sm text-black border rounded-full border-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600
             file:py-3 file:px-3
            file:rounded-full file:border-0
            
            file:text-md file:font-semibold  file:text-white
            file:bg-blue-600 
            hover:file:cursor-pointer hover:file:opacity-90 w-full " />
                                
                    <InputError message={errors.documento_val_res} className="mt-.5 flex justify-end" />    
                </div>
                
              </div>
              <div className="-mx-3 md:flex ">
                <div className="w-2/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="des_art_pri_res">
                    SE RESUELVE (ARTICULO)
                  </label>
                  <textarea rows="8" value={data.des_art_pri_res} onChange={e=>setData('des_art_pri_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3" id="des_art_pri_res" type="text" placeholder=""></textarea>
                  <InputError message={errors.des_art_pri_res} className="mt-.5" />
                </div>
                <div className="w-3/5">
                  <div className="flex ">
                  <div className="w-1/3 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="vigencia_res">
                  vigencia
                  </label>
                  <input value={data.vigencia_res} onChange={e=>setData('vigencia_res',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="vigencia_res" />
                  <InputError message={errors.vigencia_res} className="mt-.5" />
                </div>
                  <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="categoria_alcanz_res">
                    categoria alcanzada(o)
                  </label>
                  <input value={data.categoria_alcanz_res} onChange={e=>setData('categoria_alcanz_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="categoria_alcanz_res" type="text" placeholder=""/>
                  <InputError message={errors.categoria_alcanz_res} className="mt-.5" />
                  </div>
                  <div className="w-1/3 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nivel_alcanz_res">
                    nivel alcanzada(o)
                  </label>
                  <input value={data.nivel_alcanz_res} onChange={e=>setData('nivel_alcanz_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="nivel_alcanz_res" type="text" placeholder=""/>
                  <InputError message={errors.nivel_alcanz_res} className="mt-.5" />
                  </div>
                  </div>
                  <div className="flex ">
                  <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="antiguedad_in_res">
                    antiguedad desde
                  </label>
                  <input value={data.antiguedad_in_res} onChange={e=>setData('antiguedad_in_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="antiguedad_in_res" type="date"/>
                  <InputError message={errors.antiguedad_in_res} className="mt-.5" />
                  </div>
                  <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="antiguedad_sa_res">
                  antiguedad hasta
                  </label>
                  <input value={data.antiguedad_sa_res} onChange={e=>setData('antiguedad_sa_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="antiguedad_sa_res" type="date"/>
                  <InputError message={errors.antiguedad_sa_res} className="mt-.5" />
                  </div>
                  <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="condicion_res">
                    condicion
                  </label>
                  <input value={data.condicion_res} onChange={e=>setData('condicion_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="condicion_res" type="text" placeholder=""/>
                  <InputError message={errors.condicion_res} className="mt-.5" />
                  </div>
                  <div className="w-1/4 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="dependencia_res">
                    dependencia
                  </label>
                  <input value={data.dependencia_res} onChange={e=>setData('dependencia_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="dependencia_res" type="text" placeholder=""/>
                  <InputError message={errors.dependencia_res} className="mt-.5" />
                  </div>
                  </div>
                  <div className="flex ">
                  
                  <div className="w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="observacion_res">
                    observaciones
                  </label>
                  <input value={data.observacion_res} onChange={e=>setData('observacion_res',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="observacion_res" type="text" placeholder=""/>
                  <InputError message={errors.observacion_res} className="mt-.5" />
                  </div>
                  </div>
                  
                </div>
                
              </div>

          </div>
            
           
              
         
            <div className="flex">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    disabled = {processing}
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg>
                    AGREGAR
                    </span>
                    
              </PrimaryButton>
              {/* <div className="w-8"></div> */}
              {/* <button
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-red-300 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                    // disabled = {processing}
                    onClick={()=>setPopup(false)}
                    type="button"
                >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"></path></svg>
                    CERRAR
                    </span>
              </button> */}
            </div>
          </form>
          <div>
            
              {resolucionesycontratoData.map(resolucionesycontratoDat=>
                <Resolucionesycontrato key={resolucionesycontratoDat.id} resolucionesycontratoDat={resolucionesycontratoDat}/>)}
          </div>
          </div>
          {/* DOCUMENTO EXTRA
        t_nombre_documento_d : '',descripcion_documento_d : '',documento_d : '',
        fecha_documento_d : '', */ }
        <div className="bg-gray-200 p-4 mb-4 rounded-lg">
          <form onSubmit={documento} encType="multipart/form-data">
          
          <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>documentos extra</h3>
              <div className="-mx-3 md:flex mb-2">
              <div className="w-1/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="t_nombre_documento_d">
                    nombre
                  </label>
                  <input value={data.t_nombre_documento_d} onChange={e=>setData('t_nombre_documento_d',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="t_nombre_documento_d" type="text" placeholder=""/>
                  <InputError message={errors.t_nombre_documento_d} className="mt-.5" />
                </div>
                <div className="w-2/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="descripcion_documento_d">
                    descripcion
                  </label>
                  <input value={data.descripcion_documento_d} onChange={e=>setData('descripcion_documento_d',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="descripcion_documento_d" type="text" placeholder=""/>
                  <InputError message={errors.descripcion_documento_d} className="mt-.5" />
                </div>
                <div className="w-1/6 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="fecha_documento_d">
                    Fecha deL DOCUMENTO
                  </label>
                  <input value={data.fecha_documento_d} onChange={e=>setData('fecha_documento_d',e.target.value)} type="date" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="fecha_documento_d" />
                  <InputError message={errors.fecha_documento_d} className="mt-.5" />
                </div>
                <div className="w-1/4 px-3">
                <label htmlFor="dropzone-file_docext" className="uppercase tracking-wide text-black text-xs font-bold mb-2">documento de validacion</label>
                    
                        
                  <input name='documento_d' onChange={(e)=>{setData('documento_d',e.target.files[0])}} id="dropzone-file_docext" type="file" className="
                  text-sm text-black border rounded-full border-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600
             file:py-3 file:px-3
            file:rounded-full file:border-0
            
            file:text-md file:font-semibold  file:text-white
            file:bg-blue-600 
            hover:file:cursor-pointer hover:file:opacity-90 w-full " />
                                
                    <InputError message={errors.documento_d} className="mt-.5 flex justify-end" />    
                </div>
                
              </div>

          </div>
            
           
              
         
            <div className="flex">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    disabled = {processing}
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg>
                    AGREGAR
                    </span>
                    
              </PrimaryButton>
            </div>
          </form>
          <div>
            {documentoData.map(documentoDat=>
              <DocumentoData key={documentoDat.id} documentoDat={documentoDat}/>)}
          </div>
          </div>
{/* 
        //OTRO TRABAJO
        estado_ot : '',cargo_ot : '',nombre_institucion_ot : '',frecuencia_diaria_ot : '',
      hora_entrada_ot : '',hora_salida_ot : '',*/}
          <div className="bg-gray-200 p-4 mb-4 rounded-lg">
          <form onSubmit={otrotrabajo} encType="multipart/form-data">
          <div className="bg-white shadow-md rounded px-7 pt-5 pb-5 mb-4 flex flex-col">
          <h3 className='uppercase tracking-wide text-black border-b border-gray-400 text-xm font-bold mb-3'>A LA FECHA LABORA EN OTRA INSTITUCION</h3>
              <div className="-mx-3 md:flex mb-2">
              <div className=" w-1/5 px-3">
                      <div className=" items-center ml-1">
                      <label className="uppercase tracking-wide text-black text-xs font-bold mb-2 " htmlFor="estado_ot">
                        ESTADO
                      </label>
                      </div>
                      <div className="flex my-4 justify-between">
                      <div className="flex items-center">
                          <input checked={data.estado_ot=="SI" ? true : false} onChange={e=>setData('estado_ot',e.target.value)} id="estado_ot" type="radio" value="SI" name="estado_ot" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="estado_ot" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">SI</label>
                      </div>
                      <div className="flex items-center">
                          <input checked={data.estado_ot=="NO" ? true : false} onChange={e=>setData('estado_ot',e.target.value)} id="estado_ot-2" type="radio" value="NO" name="estado_ot" className="hover:bg-gray-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor="estado_ot-2" className="uppercase ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">NO</label>
                      </div>
                      </div>
                      <InputError message={errors.t_lugar_ex_el} className="mt-.5" />
                </div>
                <div className="w-2/5 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="cargo_ot">
                    CARGO DESEMPEÑADO
                  </label>
                  <input value={data.cargo_ot} onChange={e=>setData('cargo_ot',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="cargo_ot" type="text" placeholder=""/>
                  <InputError message={errors.cargo_ot} className="mt-.5" />
                </div>
                <div className="w-1/5 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="hora_entrada_ot">
                    hora de entrada
                  </label>
                  <input value={data.hora_entrada_ot} onChange={e=>setData('hora_entrada_ot',e.target.value)} type="time" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="hora_entrada_ot" />
                  <InputError message={errors.hora_entrada_ot} className="mt-.5" />
                </div>
                <div className="w-1/5 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="hora_salida_ot">
                    hora de salida
                  </label>
                  <input value={data.hora_salida_ot} onChange={e=>setData('hora_salida_ot',e.target.value)} type="time" className='hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 '  id="hora_salida_ot" />
                  <InputError message={errors.hora_salida_ot} className="mt-.5" />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                
                

                <div className="w-4/6 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="nombre_institucion_ot">
                  nombre de la institucion
                </label>
                <input value={data.nombre_institucion_ot} onChange={e=>setData('nombre_institucion_ot',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="nombre_institucion_ot" type="text" placeholder=""/>
                <InputError message={errors.nombre_institucion_ot} className="mt-.5" />
              </div>
              
            <div className="w-2/6 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="frecuencia_diaria_ot">
                  FRECUENCIA DIARIA
                </label>
                <input value={data.frecuencia_diaria_ot} onChange={e=>setData('frecuencia_diaria_ot',e.target.value)} className="hover:bg-gray-300 w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="frecuencia_diaria_ot" type="text" placeholder=""/>
                <InputError message={errors.frecuencia_diaria_ot} className="mt-.5" />
              </div>
            
                
                
              </div>

          </div>
            <div className="flex">
              <PrimaryButton
                    className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-700 rounded-md cursor-pointer group ring-offset-2 ring-2 focus:ring-green-600 ring-indigo-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
                    disabled = {processing}
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                    <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path></svg>
                    AGREGAR
                    </span>
                    
              </PrimaryButton>
              
            </div>
          </form>
          {otrotrabajoData.map(otrotrabajoDat=>
            <OtrotrabajoData key={otrotrabajoDat.id} otrotrabajoDat={otrotrabajoDat}/>)}
          </div>
          </div>
          
  {personalData[0]!==1 ?  <Link href={route('personal.vistaPdf',personalData[0].id)} method='get' style={{background:"red"}} className="ml-4 box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-2 my-3 overflow-hidden font-bold text-white transition-all duration-300  rounded-md cursor-pointer group ring-offset-2 ring-2 ring-indigo-300 focus:ring-red-600 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none"
                >
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  <svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.156 9.211c-0.213-0.21-0.686-0.321-1.406-0.331-0.487-0.005-1.073 0.038-1.69 0.124-0.276-0.159-0.561-0.333-0.784-0.542-0.601-0.561-1.103-1.34-1.415-2.197 0.020-0.080 0.038-0.15 0.054-0.222 0 0 0.339-1.923 0.249-2.573-0.012-0.089-0.020-0.115-0.044-0.184l-0.029-0.076c-0.092-0.212-0.273-0.437-0.556-0.425l-0.171-0.005c-0.316 0-0.573 0.161-0.64 0.403-0.205 0.757 0.007 1.889 0.39 3.355l-0.098 0.239c-0.275 0.67-0.619 1.345-0.923 1.94l-0.040 0.077c-0.32 0.626-0.61 1.157-0.873 1.607l-0.271 0.144c-0.020 0.010-0.485 0.257-0.594 0.323-0.926 0.553-1.539 1.18-1.641 1.678-0.032 0.159-0.008 0.362 0.156 0.456l0.263 0.132c0.114 0.057 0.234 0.086 0.357 0.086 0.659 0 1.425-0.821 2.48-2.662 1.218-0.396 2.604-0.726 3.819-0.908 0.926 0.521 2.065 0.883 2.783 0.883 0.128 0 0.238-0.012 0.327-0.036 0.138-0.037 0.254-0.115 0.325-0.222 0.139-0.21 0.168-0.499 0.13-0.795-0.011-0.088-0.081-0.196-0.157-0.271zM3.307 12.72c0.12-0.329 0.596-0.979 1.3-1.556 0.044-0.036 0.153-0.138 0.253-0.233-0.736 1.174-1.229 1.642-1.553 1.788zM7.476 3.12c0.212 0 0.333 0.534 0.343 1.035s-0.107 0.853-0.252 1.113c-0.12-0.385-0.179-0.992-0.179-1.389 0 0-0.009-0.759 0.088-0.759v0zM6.232 9.961c0.148-0.264 0.301-0.543 0.458-0.839 0.383-0.724 0.624-1.29 0.804-1.755 0.358 0.651 0.804 1.205 1.328 1.649 0.065 0.055 0.135 0.111 0.207 0.166-1.066 0.211-1.987 0.467-2.798 0.779v0zM12.952 9.901c-0.065 0.041-0.251 0.064-0.37 0.064-0.386 0-0.864-0.176-1.533-0.464 0.257-0.019 0.493-0.029 0.705-0.029 0.387 0 0.502-0.002 0.88 0.095s0.383 0.293 0.318 0.333v0z"></path><path d="M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z"></path></svg>
        GENERAR PDF
                </span>
          </Link>:null}
          
          </div>
          
        </div>
        {/* }*/}
        
        {/* <div className='mt-6 bg-indigo-400 rounded-lg divide-y-4 shadow-lg'>
                {
                    personal.map( person =>
                        <div key={person.id}>
                          <div className='flex justify-between items-center'>
              <div>
                  <span className="text-white">{person.user.email}</span>
                  <br />
                  <span className="text-white">{person.user.name}</span>
                  {/* <small className="ml-2 text-sm text-white">{dayjs(personal.created_at).fromNow()}</small> */}
              {/* </div>
          </div> */}
                  
                      {/* // <p className="mt-4 text-lg text-white">{person.condicion}</p>
                      // <p className="mt-4 text-white">{person.fecha_nacimiento}</p>
        
                        </div>
                 )}
            </div> */}

      {/* <div className="bg-gray-200 mx-auto max-w-7xl bg-white lg:px-5 shadow-2xl my-5">
      <button onClick={()=>setPopup(!popup)} className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 my-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-700 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
<span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
<span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
<span className="relative z-20 flex items-center text-sm">
<svg className="relative w-5 h-5 mr-2 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
CREAR REGISTRO
</span>
</button>
</div> */}
        {/* <CacheProvider value={muiCache}>
              <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable 
                  // className="p-4"
                  title={"REGISTRO ESCALAFONARIO"}
                  data={personalFil}
                  columns={columns}
                  options={options}
                />
              </ThemeProvider>
        </CacheProvider> */}
      

      

    </AuthenticatedLayout>
  )
}

export default Create