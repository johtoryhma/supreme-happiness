import { useState } from "react";

/**
 *
 * @param {function} save function to save form on App
 * @returns
 */
const Form = ({ users, save }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const changeRole = (event) => {
    console.log("Text area has: ", event.target.value);
    setRole(event.target.value);
  };

  /**
   * Changes the name and sets custom validity if needed
   * @param {*} event
   */
  const changeName = (event) => {
    let changedName = event.target.value.trim();

    // if name empty
    if (changedName == "") {
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

  /**
   * Handles the event, when clicking "Save"-button
   * Checks validity
   * Checks if there is already user with the same name
   * @param {event} event
   */
  const handleSave = (event) => {
    event.preventDefault();
    // check for validity
    event.target.form.reportValidity();
    console.log(event);

    //save(user);
  };

  return (
    <form>
      <label>
        Name:
        <input name="name" required value={name} onChange={changeName}></input>
      </label>
      <label>
        Role:
        <input value={role} onChange={changeRole}></input>
      </label>
      <button onClick={handleSave}>Save</button>
    </form>
  );
};

export default Form;
