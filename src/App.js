import { useState } from "react";
import moment from "moment/moment";

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
      joinDate: moment("20121116", "YYYYMMDD"),
      avatar: {
        accessory: "shades",
        body: "chest",
        clothing: "tankTop",
        clothingColor: "black",
        eyebrows: "angry",
        eyes: "wink",
        facialHair: "mediumBeard",
        graphic: "vue",
        hair: "short",
        hairColor: "black",
        hat: "none",
        hatColor: "green",
        lashes: "true",
        lipColor: "purple",
        mask: "true",
        mouth: "open",
        skinTone: "brown",
      },
    },
    {
      id: 2,
      name: "koira",
      role: "healer",
      joinDate: moment("20150801", "YYYYMMDD"),
      avatar: {
        accessory: "roundGlasses",
        body: "breasts",
        clothing: "vneck",
        clothingColor: "red",
        eyebrows: "leftLowered",
        eyes: "dizzy",
        facialHair: "none3",
        graphic: "react",
        hair: "short",
        hairColor: "black",
        hat: "none5",
        hatColor: "green",
        lashes: "true",
        lipColor: "purple",
        mask: "true",
        mouth: "open",
        skinTone: "brown",
      },
    },
  ]);
  // very badly executed:
  const [basicStats, setBasicStats] = useState({
    firstJoinDate: users[0].joinDate,
    latestJoinDate: users[1].joinDate,
  });

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
      joinDate: moment(),
    };
    let newRoles = [...roles];
    for (let role of newRoles) {
      if (user.role === role.name) {
        role.count += 1;
        setRoles(newRoles);
      }
    }
    console.log(users.concat(newUser));
    setUsers(users.concat(newUser));
    setBasicStats({ ...basicStats, latestJoinDate: newUser.joinDate });
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
            <Statbox users={users} roles={roles} basicStats={basicStats} />
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
