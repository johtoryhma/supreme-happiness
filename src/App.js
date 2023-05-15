import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "kissa", role: "tank" },
    { id: 2, name: "koira", role: "healer" },
  ]);

  /**
   * Adds user to users
   * @param {object} user
   */
  const handleSave = (user) => {
    console.log(users.slice(-1));
    let newUser = { ...user, id: users.slice(-1)[0].id + 1 };
    setUsers(users.concat(newUser));
  };

  return (
    <div>
      <h1>Gamer stats</h1>
      <div className="main-container">
        <div className="list-container">
          <UserList users={users} />
        </div>
        <div className="form-container">
          <Form users={users} save={handleSave} />
        </div>
      </div>
    </div>
  );
}

export default App;
