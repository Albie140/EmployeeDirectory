import React from "react";
import "./Table.css";

function Table(props) {
    return (

    <tbody>
      <tr>
        <td>{props.employees.name}</td>
        <td><img src={props.employees.image} width="100" height="100" alt="employee img"/></td>
        <td>{props.employees.phoneNumber}</td>
        <td>{props.employees.Email}</td>
        <td>{props.employees.birthDate}</td>
      </tr>
      
    </tbody>

    );
}

export default Table;