import { useState } from "react";

/**
 *
 * @param {function} save function to save form on App
 * @returns
 */
const Form = ({ users, save }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({ name: true, role: true });
  const roles = ["tank", "healer", "dps", "no preference"];

  /**
   * Changes the role and sets custom validity if needed
   * @param {event} event
   */
  const changeRole = (event) => {
    // console.log("Text area has: ", event.target.value);
    let changedRole = event.target.value;
    //.trim();

    if (changedRole === "") {
      event.target.setCustomValidity(
        "At least one character - not only whitespace"
      );
      setErrors({ ...errors, name: true });
    } else {
      event.target.setCustomValidity("");
    }
    setRole(event.target.value);
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

  /**
   * Handles the event, when clicking "Save"-button
   * Checks validity
   * Checks if there is already user with the same name
   * @param {event} event
   */
  const handleSave = (event) => {
    // check for validity
    event.preventDefault();
    console.log(event);

    if (!event.target.form.checkValidity()) {
      console.log("oli vikoja validityssä");
      event.target.form.reportValidity();
    } else {
      console.log("ei ollut vikoja");
      save({ name: name, role: role });
      setName("");
      setRole("");
    }
  };

  return (
    <form noValidate>
      <label>
        Name:
        <input name="name" required value={name} onChange={changeName}></input>
      </label>
      <label>
        Role:
        {/* <input value={role} required onChange={changeRole}></input> */}
        <select required onChange={changeRole}>
          <option key={0} value={role}>
            Select a role
          </option>
          {roles.map((role, index) => {
            return (
              <option key={index} value={role}>
                {role}
              </option>
            );
          })}
        </select>
      </label>
      <button onClick={handleSave}>Save</button>
    </form>
  );
};

export default Form;
