import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const MyComponent = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            address: {
                street: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345",
            },
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            address: [
                {
                    street: "456 Oak St1",
                    city: "Anytown1",
                    state: "CA1",
                    zip: "1234567891",
                },
                {
                    street: "456 Oak St2",
                    city: "Anytown2",
                    state: "CA2",
                    zip: "1234567892",
                },
                {
                    street: "456 Oak St3",
                    city: "Anytown3",
                    state: "CA3",
                    zip: "1234567893",
                },
            ],
        },
    ];

    return (
        <ExcelFile>
            <ExcelSheet data={data} name="My Data">
                <ExcelColumn label="ID" value="id" />
                <ExcelColumn label="Name" value="name" />
                <ExcelColumn label="Email" value="email" />
                <ExcelColumn
                    label="Street"
                    value={(col) => {
                        if (Array.isArray(col.address)) {
                            return col.address
                                .map((addr) => addr.street)
                                .join("\n");
                        } else {
                            return col.address.street;
                        }
                    }}
                />
                <ExcelColumn
                    label="City"
                    value={(col) => {
                        if (Array.isArray(col.address)) {
                            return col.address
                                .map((addr) => addr.city)
                                .join("\n");
                        } else {
                            return col.address.city;
                        }
                    }}
                />
                <ExcelColumn
                    label="State"
                    value={(col) => {
                        if (Array.isArray(col.address)) {
                            return col.address
                                .map((addr) => addr.state)
                                .join("\n");
                        } else {
                            return col.address.state;
                        }
                    }}
                />
                <ExcelColumn
                    label="Zip"
                    value={(col) => {
                        if (Array.isArray(col.address)) {
                            return col.address
                                .map((addr) => addr.zip)
                                .join("\n");
                        } else {
                            return col.address.zip;
                        }
                    }}
                />
            </ExcelSheet>
        </ExcelFile>
    );
};

export default MyComponent;
