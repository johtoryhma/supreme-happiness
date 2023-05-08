import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  const [users] = useState([
    { id: 1, name: "kissa", role: "tank" },
    { id: 2, name: "koira", role: "healer" },
  ]);

  return (
    <div>
      <h1>Hello!</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
