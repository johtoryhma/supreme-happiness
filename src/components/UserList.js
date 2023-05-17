import "../style/userlist.css";
import UserLi from "./UserLi";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <ul>
        {users.map((user) => {
          return <UserLi key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
