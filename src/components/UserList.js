import "../style/userlist.css";
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li className="list-item" key={user.id}>
            {user.name} usually plays {user.role}
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
