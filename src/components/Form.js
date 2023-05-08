import { useState } from "react";

const Form = ({ save }) => {
  const [name, setName] = useState("");

  const changeName = (event) => {
    console.log("nimi on nyt: ", event.target.value);
    setName(event.target.value);
  };
  const handleClick = () => {
    // check for validity
    //save(user);
  };

  return (
    <form>
      <label for="name">
        Name
        <input name="name" value={name} onChange={changeName}></input>
      </label>
      <label for="textarea">
        Insert text:
        <input type="text" name="textarea"></input>
      </label>
      <button onClick={handleClick}>Save</button>
    </form>
  );
};

export default Form;
