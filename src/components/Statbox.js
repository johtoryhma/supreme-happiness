import { useState } from "react";
import "../style/statbox.css";

const Statbox = ({ users, roles }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const handleChange = () => {};

  return (
    <table>
      <tbody>
        <tr>
          <th>User count:</th>
          <td>{users.length}</td>
        </tr>
        <tr>
          <th>Most popular role:</th>
          <td></td>
        </tr>
        <tr>
          <th>
            <select onChange={handleChange}>
              <option>kissa</option>
            </select>
          </th>
          <td>{selectedRole}</td>
        </tr>
      </tbody>
    </table>
  );
};

/*
<table>
    <tbody>
        <tr>
            <th> lskdjflke </th>
            <td> alkjf </td>
*/

export default Statbox;
