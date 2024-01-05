import React from "react";

const TableComponent = ({ data, clickFun }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>company</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length > 0 ? data.map((row) => (
                        <tr key={row.id} onClick={() => { console.log(row.id); clickFun(row) }}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.company.name}</td>
                        </tr>
                    )) : (
                        <div></div>
                    )
                }
            </tbody>
        </table>

    )

}

export default TableComponent;