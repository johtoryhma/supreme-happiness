import { useEffect, useState } from "react";
import moment from "moment/moment";

import Form from "./components/Form";
import Statbox from "./components/Statbox";
import Header from "./components/Header";
import "./App.css";
import Header2 from "./components/Header2";
import UserTable from "./components/UserTable";
import userService from "./services/users";

function App() {
  const [users, setUsers] = useState([]);
  // very badly executed:
  const [basicStats, setBasicStats] = useState({
    firstJoinDate: "", //users[0].joinDate,
    latestJoinDate: "", //users[1].joinDate,
  });

  const [roles, setRoles] = useState([
    { name: "tank", id: 1, count: 0 }, // because users have 1
    { name: "healer", id: 2, count: 0 }, // because users have 1
    { name: "dps", id: 3, count: 0 },
    { name: "flex", id: 4, count: 0 },
  ]);

  useEffect(() => {
    //console.log("use effect!");
    userService.getAll().then((initialUsers) => {
      setUsers(
        initialUsers.map((iUser) => {
          return {
            ...iUser,
            joinDate: moment(iUser.joinDate),
          };
        })
      );
      //console.log(initialUsers);

      // TODO: nyt ei tule oikeasti uusin date latestJoinDateen
      if (initialUsers.length > 0) {
        setBasicStats({
          firstJoinDate: initialUsers[0].joinDate,
          latestJoinDate: initialUsers[0].joinDate,
        });
      } else {
        setBasicStats({
          firstJoinDate: moment(),
          latestJoinDate: moment(),
        });
      }

      let roleCounts = { tank: 0, healer: 0, dps: 0, flex: 0 };
      for (let user of initialUsers) {
        if (user.role === "tank") {
          roleCounts.tank += 1;
        } else if (user.role === "healer") {
          roleCounts.healer += 1;
        } else if (user.role === "dps") {
          roleCounts.dps += 1;
        } else {
          roleCounts.flex += 1;
        }
      }
      let newRoles = [...roles];
      for (let role of newRoles) {
        if (role.name === "tank") {
          role.count = roleCounts.tank;
        } else if (role.name === "healer") {
          role.count = roleCounts.healer;
        } else if (role.name === "dps") {
          role.count = roleCounts.dps;
        } else {
          role.count = roleCounts.flex;
        }
      }
      //console.log(newRoles);
      setRoles(newRoles);
    });
  }, []);
  //useEffect(() => { document.body.style.backgroundColor = 'aquamarine' }, []);

  /**
   * Adds user to users
   * @param {object} user
   */
  const handleSave = (user) => {
    /*     let id = 0;
    if (users.length > 0) {
      id = users.slice(-1)[0].id + 1;
    } */
    let newUser = {
      ...user,
      //id: id,
      joinDate: moment(),
    };
    let newRoles = [...roles];
    for (let role of newRoles) {
      if (user.role === role.name) {
        role.count += 1;
        setRoles(newRoles);
      }
    }

    userService.create(newUser).then((returnedUser) => {
      setUsers(
        users.concat({
          ...returnedUser,
          joinDate: moment(returnedUser.joinDate),
        })
      );
      setBasicStats({ ...basicStats, latestJoinDate: newUser.joinDate });
    });
  };

  return (
    <div className="root-container">
      <Header text="Gamer stats" />
      <div className="main-container">
        <div>
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
        </div>
        <div className="list-and-header-container">
          <Header2 text="Users" />
          <div className="list-container">
            <UserTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
