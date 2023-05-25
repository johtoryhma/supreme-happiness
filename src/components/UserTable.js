import UserName from "./UserName";
import Role from "./Role";
import "../style/tables.css";

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Joining date</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>
                <UserName user={user} />
              </td>
              <td>
                <Role role={user.role} />
              </td>
              <td>{user.joinDate.format("D.M.YYYY")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
