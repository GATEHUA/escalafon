// import ReactExport from "react-export-excel";
// import JSZip from "jszip";

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

// const data = [
//     {
//         name: "John",
//         age: 25,
//         address: [
//             {
//                 street: "123 Main St",
//                 city: "Los Angeles",
//                 state: "CA",
//                 zip: "90001",
//             },
//             {
//                 street: "1234 Main St",
//                 city: "Los Angeles2 ",
//                 state: "CA  2",
//                 zip: "900012",
//             },
//             {
//                 street: "12345 Main St3",
//                 city: "Los Angeles3",
//                 state: "CA3",
//                 zip: "900013",
//             },
//         ],
//     },
//     {
//         name: "Jane",
//         age: 30,
//         address: {
//             street: "456 Oak Ave",
//             city: "San Francisco",
//             state: "CA",
//             zip: "94110",
//         },
//     },
// ];

// const getAddress = (address) => {
//     if (Array.isArray(address)) {
//         return address
//             .map((a) => `${a.street}, ${a.city}, ${a.state} ${a.zip}`)
//             .join("\n");
//     } else {
//         return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
//     }
// };

// const MyExportedExcel = () => {
//     return (
//         <ExcelFile>
//             <ExcelSheet data={data} name="Sheet 1">
//                 <ExcelColumn label="Name" value="name" />
//                 <ExcelColumn label="Age" value="age" />
//                 <ExcelColumn
//                     label="Street"
//                     value={(col) => getAddress(col.address)}
//                 />
//             </ExcelSheet>
//         </ExcelFile>
//     );
// };

// export default MyExportedExcel;
