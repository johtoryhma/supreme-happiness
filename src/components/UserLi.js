const UserLi = ({ user }) => {
  let joinDate = new Date(Date.parse(user.joinDate));
  return (
    <li className="list-item" key={user.id}>
      <i className="name-on-list">{user.name}</i> usually plays{" "}
      <i className="role-on-list">{user.role}</i>, joined{" "}
      <i className="date-on-list">{`${joinDate.getDay()}.${joinDate.getMonth()}.${joinDate.getFullYear()}`}</i>
    </li>
  );
};

export default UserLi;
