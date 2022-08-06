import { useState, useEffect } from "react";


export default function ControlledComponent(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue])

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  )
}
