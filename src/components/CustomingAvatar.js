import { BigHead } from "@bigheads/core";
import { useState } from "react";
import Slider from "./Slider";

const CustomingAvatar = ({
  avatar,
  handleSaveAvatar,
  handleReturnWithoutSaving,
}) => {
  const [changedAvatar, setChangedAvatar] = useState(avatar);

  const all = {
    accessory: ["none", "roundGlasses", "tinyGlasses", "shaders"],
    body: ["chest", "breasts"],
    clothing: ["naked", "shirt", "dressShirt", "vneck", "tankTop", "dress"],
    clothingColor: ["white", "blue", "black", "green", "red"],
    eyebrows: ["raised", "leftLowered", "serious", "angry", "concerned"],
    eyes: [
      "normal",
      "leftTwitch",
      "happy",
      "content",
      "squint",
      "simple",
      "dizzy",
      "wink",
      "heart",
    ],
    facialHair: ["none", "none2", "none3", "stubble", "mediumBeard"],
    graphic: ["none", "redwood", "gatsby", "vue", "react", "graphQL"],
    hair: [
      "none",
      "long",
      "bun",
      "short",
      "pixie",
      "balding",
      "buzz",
      "afro",
      "bob",
    ],
    hairColor: ["blonde", "orange", "black", "white", "brown", "blue", "pink"],
    hat: ["none", "none2", "none3", "none4", "none5", "beanie", "turban"],
    hatColor: ["white", "blue", "black", "green", "red"],
    lashes: ["true", "false"],
    lipColor: ["red", "purple", "pink", "turqoise", "green"],
    mouth: ["grin", "sad", "openSmile", "lips", "open", "serious", "tongue"],
    skinTone: ["light", "yellow", "brown", "dark", "red", "black"],
  };

  const saveAvatar = () => {
    handleSaveAvatar(changedAvatar);
  };

  return (
    <div className="custom-avatar-container">
      {Object.keys(all).map((key) => {
        return (
          <Slider
            key={key}
            text={key}
            listOfValues={all[key]}
            value={changedAvatar[key]}
            onChange={(changedValue) => {
              let newAvatar = { ...changedAvatar, [key]: changedValue };
              setChangedAvatar(newAvatar);
            }}
          />
        );
      })}

      <BigHead
        accessory={changedAvatar.accessory}
        body={changedAvatar.body}
        circleColor={changedAvatar.circleColor}
        clothing={changedAvatar.clothing}
        clothingColor={changedAvatar.clothingColor}
        eyebrows={changedAvatar.eyebrows}
        eyes={changedAvatar.eyes}
        facialHair={changedAvatar.facialHair}
        graphic={changedAvatar.graphic}
        hair={changedAvatar.hair}
        hairColor={changedAvatar.hairColor}
        hat={changedAvatar.hat}
        hatColor={changedAvatar.hatColor}
        lashes={changedAvatar.lashes}
        lipColor={changedAvatar.lipColor}
        mask={changedAvatar.mask}
        faceMask={changedAvatar.faceMask}
        mouth={changedAvatar.mouth}
        skinTone={changedAvatar.skinTone}
      />

      <button onClick={handleReturnWithoutSaving}>Return without save</button>
      <button onClick={saveAvatar}>Save avatar</button>
    </div>
  );
};

export default CustomingAvatar;
