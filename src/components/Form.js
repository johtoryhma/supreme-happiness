import { useState } from "react";
import "../style/form.css";
import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../modules/getRandomOptions.ts";
import CustomingAvatar from "./CustomingAvatar";

/**
 *
 * @param {function} save function to save form on App
 * @returns
 */
const Form = ({ users, save, rolesGiven }) => {
  const roles = [{ value: "", name: "Select a role", id: 0 }].concat(
    rolesGiven.map((role) => {
      return {
        ...role,
        value: role.name,
      };
    })
  );
  const [name, setName] = useState("");
  const [role, setRole] = useState(roles[0].value);
  const [avatar, setAvatar] = useState(getRandomOptions());
  const [customingAvatar, setCustomingAvatar] = useState(false);

  /**
   * Changes the role and sets   custom validity if needed
   * @param {event} event
   */
  const changeRole = (event) => {
    let changedRole = event.target.value;

    setRole(changedRole);
  };

  /**
   * Changes the name and sets custom validity if needed
   * @param {*} event
   */
  const changeName = (event) => {
    let changedName = event.target.value.trim();

    // if name is empty or is already in users
    if (changedName === "") {
      event.target.setCustomValidity(
        "At least one character - not only whitespace"
      );
    } else if (isAlreadyInUsers(changedName)) {
      event.target.setCustomValidity("The name is already in use");
    } else {
      event.target.setCustomValidity("");
    }
    setName(event.target.value);
  };

  /**
   * If the name is in the users-list, returns true
   * @param {String} givenName
   * @returns true if name is in the list, else false
   */
  function isAlreadyInUsers(givenName) {
    for (let user of users) {
      if (user.name === givenName) {
        return true;
      }
    }
    return false;
  }

  const handleSaveAvatar = (changedAvatar) => {
    console.log("Form:", changedAvatar);
    setAvatar(changedAvatar);
    setCustomingAvatar(false);
  };

  /**
   * Handles the event, when clicking "Save"-button
   * Checks validity
   * Checks if there is already user with the same name
   * @param {event} event
   */
  const handleSave = (event) => {
    // check for validity
    event.preventDefault();

    if (!event.target.checkValidity()) {
      event.target.reportValidity();
    } else {
      save({ name: name, role: role, avatar: avatar });
      setName("");
      setRole(roles[0].value);
      setAvatar(getRandomOptions());
      event.target.reset();
    }
  };

  return (
    <form noValidate onSubmit={handleSave}>
      <label>
        Name:
        <input
          name="name"
          required
          value={name}
          onChange={changeName}
          autoComplete="off"
          maxLength={25}
        ></input>
      </label>
      <select required onChange={changeRole}>
        {roles.map((role) => {
          return (
            <option key={role.id} value={role.value}>
              {role.name}
            </option>
          );
        })}
      </select>
      <div>
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
        <div className="avatar-buttons-container">
          <button
            className="avatar-button"
            type="button"
            onClick={() => setAvatar(getRandomOptions())}
          >
            Random Avatar
          </button>
          <button
            className="avatar-button"
            type="button"
            onClick={() => {
              setCustomingAvatar(true);
            }}
          >
            Customize Avatar
          </button>
          {customingAvatar && (
            <CustomingAvatar
              avatar={avatar}
              handleSaveAvatar={handleSaveAvatar}
              handleReturnWithoutSaving={() => setCustomingAvatar(false)}
            />
          )}
        </div>
      </div>
      <button id="save-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default Form;
