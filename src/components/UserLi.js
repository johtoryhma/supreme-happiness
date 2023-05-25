import UserName from "./UserName";

const UserLi = ({ user }) => {
  return (
    <li className="list-item" key={user.id}>
      <UserName user={user} /> usually plays{" "}
      <i className="role-on-list">{user.role}</i>, joined{" "}
      <i className="date-on-list">{user.joinDate.format("D.M.YYYY")}</i>
    </li>
  );
};

export default UserLi;
