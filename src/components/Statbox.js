import { useState } from "react";
import "../style/statbox.css";

const Statbox = ({ users, roles }) => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleChange = (e) => {
    let targetRole = e.target.value;

    for (let role of roles) {
      if (role.name === targetRole) {
        setSelectedRole(role);
      }
    }
  };

  const mostCommonRole = () => {
    let mostCommon = { count: 0 };

    for (let role of roles) {
      if (role.count > mostCommon.count) mostCommon = role;
    }

    return mostCommon.name;
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
          <td>{mostCommonRole()}</td>
        </tr>
        <tr>
          <th>
            <select onChange={handleChange}>
              {roles.map((role) => {
                return (
                  <option value={role.name} key={role.id}>
                    {role.name.charAt(0).toUpperCase() + role.name.slice(1)}
                  </option>
                );
              })}
            </select>
            count:
          </th>
          <td>{selectedRole.count}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statbox;
