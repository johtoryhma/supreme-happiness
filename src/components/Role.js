const Role = ({ role }) => {
  let color = "black";
  if (role === "tank") {
    color = "darkblue";
  } else if (role === "healer") {
    color = "green";
  } else if (role === "dps") {
    color = "darkred";
  } else if (role === "flex") {
    color = "purple";
  }
  return (
    <i className="role-on-list" style={{ color: color }}>
      {role}
    </i>
  );
};

export default Role;
