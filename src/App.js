import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import './App.css';

function App() {
  const [users] = useState([
    { id: 1, name: "kissa", role: "tank" },
    { id: 2, name: "koira", role: "healer" },
  ]);

  return (
    <div>
      <h1>Hello!</h1>
      <UserList users={users} />
      <Form />
    </div>
  );
}

export default App;
