import React from "react";
import ExcelExport from "react-export-excel";

const MyComponent = () => {
    const data = [
        {
            name: "John",
            age: 25,
            address: [
                {
                    street: "123 Main St",
                    city: "Los Angeles",
                    state: "CA",
                    zip: "90001",
                },
                {
                    street: "1234 Main St",
                    city: "Los Angeles2 ",
                    state: "CA  2",
                    zip: "900012",
                },
                {
                    street: "12345 Main St3",
                    city: "Los Angeles3",
                    state: "CA3",
                    zip: "900013",
                },
            ],
        },
        {
            name: "Jane",
            age: 30,
            address: {
                street: "456 Oak Ave",
                city: "San Francisco",
                state: "CA",
                zip: "94110",
            },
        },
    ];

    const ExcelFile = ExcelExport.ExcelFile;
    const ExcelSheet = ExcelExport.ExcelSheet;
    const ExcelColumn = ExcelExport.ExcelColumn;

    const getAddressValue = (row, key) => {
        if (Array.isArray(row.address)) {
            return row.address.map((a) => a[key]).join(", ");
        } else {
            return row.address[key];
        }
    };

    const addressKeys = ["street", "city", "state", "zip"];

    return (
        <div>
            <h1>Myasd Data</h1>
            <ExcelFile
                element={<button>Export to Excel</button>}
                filename="my_data"
            >
                <ExcelSheet data={data} name="My Data">
                    <ExcelColumn label="Name" value="name" />
                    <ExcelColumn label="Age" value="age" />
                    {addressKeys.map((key) => (
                        <ExcelColumn
                            key={key}
                            label={`Address ${key}`}
                            value={(row) => getAddressValue(row, key)}
                        />
                    ))}
                </ExcelSheet>
            </ExcelFile>
        </div>
    );
};

export default MyComponent;
