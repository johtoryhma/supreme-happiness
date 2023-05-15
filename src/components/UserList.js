import "../style/userlist.css";
import UserLi from "./UserLi";

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <UserLi key={user.id} user={user} />
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
