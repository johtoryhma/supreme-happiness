import { BigHead } from "@bigheads/core";
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
        User is {user.name} and looks like this:
        <BigHead
          accessory={user.avatar.accessory}
          body={user.avatar.body}
          circleColor={user.avatar.circleColor}
          clothing={user.avatar.clothing}
          clothingColor={user.avatar.clothingColor}
          eyebrows={user.avatar.eyebrows}
          eyes={user.avatar.eyes}
          facialHair={user.avatar.facialHair}
          graphic={user.avatar.graphic}
          hair={user.avatar.hair}
          hairColor={user.avatar.hairColor}
          hat={user.avatar.hat}
          hatColor={user.avatar.hatColor}
          lashes={user.avatar.lashes}
          lipColor={user.avatar.lipColor}
          mask="true"
          mouth={user.avatar.mouth}
          skinTone={user.avatar.skinTone}
        />
      </div>
    </i>
  );
};

export default UserName;
