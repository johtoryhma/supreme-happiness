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
    setUsers(users.concat(user));
  };

  return (
    <div>
      <h1>Hello!</h1>
      <UserList users={users} />
      <Form users={users} save={handleSave} />
    </div>
  );
}

export default App;
