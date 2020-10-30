import React from "react";

function Table(props) {
    return (

    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{props.users.name}</td>
        <td>{props.users.image}</td>
        <td>{props.users.phoneNumber}</td>
        <td>{props.users.Email}</td>
        <td>{props.users.birthDate}</td>
      </tr>
      
    </tbody>

    );
}

export default Table;