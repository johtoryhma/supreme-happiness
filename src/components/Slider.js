import { useState } from "react";

const Slider = ({ text, value, onChange, listOfValues }) => {
  const [changedValue, setChangedValue] = useState(listOfValues.indexOf(value));

  const handleChange = (e) => {
    setChangedValue(e.target.value);
    onChange(listOfValues[e.target.value]);
  };

  return (
    <label>
      {text}{" "}
      <input
        type="range"
        min="0"
        max={listOfValues.length - 1}
        value={changedValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default Slider;
