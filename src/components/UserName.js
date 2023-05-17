import { useState } from "react";

const UserName = ({ user }) => {
  const [show, setShow] = useState(false);

  return (
    <i
      className="name-on-list"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {user.name}
      <div className="user-card" style={show ? { visibility: "visible" } : {}}>
        User is {user.name} and looks like this ?
      </div>
    </i>
  );
};

export default UserName;
