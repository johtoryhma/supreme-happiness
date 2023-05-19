import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import Statbox from "./components/Statbox";
import Header from "./components/Header";
import "./App.css";
import Header2 from "./components/Header2";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "kissa",
      role: "tank",
      joinDate: new Date(Date.UTC(2012, 11, 12, 3, 0, 0)),
    },
    {
      id: 2,
      name: "koira",
      role: "healer",
      joinDate: new Date(Date.UTC(2015, 8, 1, 3, 0, 0)),
    },
  ]);

  const [roles, setRoles] = useState([
    { name: "tank", id: 1, count: 1 }, // because users have 1
    { name: "healer", id: 2, count: 1 }, // because users have 1
    { name: "dps", id: 3, count: 0 },
    { name: "flex", id: 4, count: 0 },
  ]);

  //useEffect(() => { document.body.style.backgroundColor = 'aquamarine' }, []);

  /**
   * Adds user to users
   * @param {object} user
   */
  const handleSave = (user) => {
    let newUser = {
      ...user,
      id: users.slice(-1)[0].id + 1,
      joinDate: new Date(Date.now()).toISOString(),
    };
    let newRoles = [...roles];
    for (let role of newRoles) {
      if (user.role === role.name) {
        role.count += 1;
        setRoles(newRoles);
      }
    }
    setUsers(users.concat(newUser));
  };

  return (
    <div className="root-container">
      <Header text="Gamer stats" />
      <div className="main-container">
        <div className="form-and-header-container">
          <Header2 text="Join" />
          <div className="form-container">
            <Form users={users} save={handleSave} rolesGiven={roles} />
          </div>
        </div>
        <div className="stats-and-header-container">
          <Header2 text="Stats" />
          <div className="stats-container">
            <Statbox users={users} roles={roles} />
          </div>
        </div>
        <div className="list-container">
          <Header2 text="Users" />
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
