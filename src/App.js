import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import Statbox from "./components/Statbox";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "kissa", role: "tank" },
    { id: 2, name: "koira", role: "healer" },
  ]);

  const [roles, setRoles] = useState([
    { name: "tank", id: 1, count: 1 }, // because users have 1
    { name: "healer", id: 2, count: 1 }, // because users have 1
    { name: "dps", id: 3, count: 0 },
    { name: "no preference", id: 4, count: 0 },
  ]);

  /**
   * Adds user to users
   * @param {object} user
   */
  const handleSave = (user) => {
    //console.log(users.slice(-1));
    let newUser = { ...user, id: users.slice(-1)[0].id + 1 };
    let newRoles = [...roles];
    for (let role of newRoles) {
      if (user.role === role.name) {
        role.count += 1;
        setRoles(newRoles);
      }
    }
    console.log(newRoles);
    setUsers(users.concat(newUser));
  };

  return (
    <div>
      <h1>Gamer stats</h1>
      <div className="main-container">
        <div className="fs-container">
          <div className="form-container">
            <Form users={users} save={handleSave} rolesGiven={roles} />
          </div>
          <div className="stats-container">
            <Statbox users={users} roles={roles} />
          </div>
        </div>
        <div className="list-container">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
