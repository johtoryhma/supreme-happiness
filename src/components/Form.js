import { useState } from "react";

/**
 *
 * @param {function} save function to save form on App
 * @returns
 */
const Form = ({ users, save }) => {
  const roles = [
    { value: "", text: "Select a role" },
    { value: "tank", text: "tank" },
    { value: "healer", text: "healer" },
    { value: "dps", text: "dps" },
    { value: "no preference", text: "no preference" },
  ];
  const [name, setName] = useState("");
  const [role, setRole] = useState(roles[0].value);

  /**
   * Changes the role and sets custom validity if needed
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
      console.log("oli vikoja validityssä");
      event.target.reportValidity();
    } else {
      console.log("ei ollut vikoja");
      save({ name: name, role: role });
      setName("");
      setRole(roles[0].value);
      event.target.reset();
    }
  };

  return (
    <form noValidate onSubmit={handleSave}>
      <label>
        Name:
        <input name="name" required value={name} onChange={changeName}></input>
      </label>
      <label>
        Role:
        <select required onChange={changeRole}>
          {roles.map((role, index) => {
            return (
              <option key={index} value={role.value}>
                {role.text}
              </option>
            );
          })}
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
