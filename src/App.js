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
      <h1>Hello!</h1>
      <div className="list-container">
        <UserList users={users} />
      </div>
      <Form users={users} save={handleSave} />
    </div>
  );
}

export default App;
