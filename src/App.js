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
    { name: "tank", id: 1, count: 0 },
    { name: "healer", id: 2, count: 0 },
    { name: "dps", id: 3, count: 0 },
    { name: "flex", id: 4, count: 0 },
  ]);

  useEffect(() => {
    userService.getAll().then((initialUsers) => {
      // list of users mapped
      let newUsers = initialUsers.map((iUser) => {
        return {
          ...iUser,
          joinDate: moment(iUser.joinDate),
        };
      });
      setUsers(newUsers);
      //console.log(initialUsers);

      // set basic stats according to users
      if (newUsers.length > 0) {
        let firstDate = newUsers[0].joinDate;
        let lastDate = newUsers[0].joinDate;

        for (let user of newUsers) {
          if (user.joinDate.isBefore(firstDate)) {
            firstDate = user.joinDate;
          } else if (lastDate.isBefore(user.joinDate)) {
            lastDate = user.joinDate;
          }
        }

        setBasicStats({
          firstJoinDate: firstDate,
          latestJoinDate: lastDate,
        });
      } else {
        setBasicStats({
          firstJoinDate: moment(),
          latestJoinDate: moment(),
        });
      }

      let roleCounts = { tank: 0, healer: 0, dps: 0, flex: 0 };
      for (let user of newUsers) {
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
    // TODO: wtf?
    // eslint-disable-next-line
  }, []);

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
