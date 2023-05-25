import { BigHead } from "@bigheads/core";
import { useEffect, useRef, useState } from "react";

const UserName = ({ user }) => {
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const cardRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setClicked(false);
      setShow(false);
    }
  };

  useEffect(() => {
    console.log("clicked?", clicked);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [clicked]);

  const handleClicked = (event) => {
    setClicked(true);
  };

  const showCard = (e) => {
    const cardRect = cardRef.current.getBoundingClientRect();
    setCardPosition({
      top: 0 - cardRect.height,
    });
    setShow(true);
  };

  const hideCard = () => {
    setShow(false);
  };

  return (
    <i
      className="name-on-list"
      onClick={handleClicked}
      onMouseEnter={showCard}
      onMouseLeave={hideCard}
    >
      {user.name.length > 15 ? user.name.slice(0, 15) + "..." : user.name}
      <div
        ref={cardRef}
        className="user-card"
        style={
          clicked || show
            ? {
                visibility: "visible",
                top: cardPosition.top,
                left: cardPosition.left,
              }
            : {}
        }
      >
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
