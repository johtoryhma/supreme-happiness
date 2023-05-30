import { BigHead } from "@bigheads/core";
import { useState } from "react";

const CustomingAvatar = ({
  avatar,
  handleSaveAvatar,
  handleReturnWithoutSaving,
}) => {
  const [changedAvatar, setChangedAvatar] = useState(avatar);

  const saveAvatar = () => {
    console.log("CustomingAvatar:", changedAvatar);
    handleSaveAvatar(changedAvatar);
  };
  /*   <Slider
  text="Accessory"
  value={avatar.accessory}
  onChange={(changed) =>
    setChangedAvatar({ ...changedAvatar, accessory: changed })
  }
/> */

  return (
    <div className="custom-avatar-container">
      {Object.keys(changedAvatar).map((value) => {
        console.log(value);
        return (
          <label key={value}>
            {value} <input type="range" min="0" max="3" />
          </label>
        );
      })}

      <BigHead
        accessory={avatar.accessory}
        body={avatar.body}
        circleColor={avatar.circleColor}
        clothing={avatar.clothing}
        clothingColor={avatar.clothingColor}
        eyebrows={avatar.eyebrows}
        eyes={avatar.eyes}
        facialHair={avatar.facialHair}
        graphic={avatar.graphic}
        hair={avatar.hair}
        hairColor={avatar.hairColor}
        hat={avatar.hat}
        hatColor={avatar.hatColor}
        lashes={avatar.lashes}
        lipColor={avatar.lipColor}
        mask={avatar.mask}
        faceMask={avatar.faceMask}
        mouth={avatar.mouth}
        skinTone={avatar.skinTone}
      />

      <button onClick={handleReturnWithoutSaving}>Return without save</button>
      <button onClick={saveAvatar}>Save avatar</button>
    </div>
  );
};

export default CustomingAvatar;
