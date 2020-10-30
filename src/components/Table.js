import React from "react";

function Table(props) {
    return (

    <tbody>
      <tr>
        
        <td>{props.employees.name}</td>
        <td>{props.employees.image}</td>
        <td>{props.employees.phoneNumber}</td>
        <td>{props.employees.Email}</td>
        <td>{props.employees.birthDate}</td>
      </tr>
      
    </tbody>

    );
}

export default Table;