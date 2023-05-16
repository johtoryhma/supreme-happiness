import { useEffect, useState } from "react";
import "../style/statbox.css";

const Statbox = ({ users, roles }) => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleChange = (e) => {
    let targetRole = e.target.value;
    console.log(targetRole);
    for (let role of roles) {
      if (role.name === targetRole) {
        console.log(role);
        setSelectedRole(role);
      }
    }
  };

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
              {roles.map((role) => {
                return (
                  <option value={role.name} key={role.id}>
                    {role.name}
                  </option>
                );
              })}
            </select>
          </th>
          <td>{selectedRole.count}</td>
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
