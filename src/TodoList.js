import { useState, useEffect } from "react";

function ListItem(props) {
  const [edit, setEdit] = useState(props.edit);
  useEffect(() => {
    setEdit(props.edit);
  }, [props.edit])

  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const handleChange = (event) => {
    setValue(event.target.value)
    if(props.onChange && typeof props.onChange === "function") {
      props.onChange(event.target.value)
    }
  }

  return (
    <li onClick={() => setEdit(true)}>
      {
        edit
        ? <input 
            autoFocus
            name="list-input" 
            type="text" 
            value={value}
            onChange={handleChange}
            onBlur={() => setEdit(false)}
            />
        : value
      }
    </li>
  )
}

export default function TodoList(props) {
  const [list, setList] = useState(props.list);

  const handleChange = (idx, v) => {
    let newList = [...list];
    newList[idx] = v
    setList(newList)
  }

  console.log(list)

  return(
    <>
      <h1 id="title">{props.title}</h1>
      <div>
        <ul>
          {
            list.map((item, idx) => 
              <ListItem 
                value={item} key={`list-item-${idx}`}
                onChange={v => handleChange(idx, v)}/>
            )
          }
        </ul>
      </div>
    </>
  )
}