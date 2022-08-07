import { useState, useEffect } from "react";
import { fetchTodoList, updateTodoList } from "./api";

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

  useEffect(() => {
    fetchTodoList().then(data => setList(data.listItems))
  }, [])

  const handleChange = (idx, v) => {
    let newList = [...list];
    newList[idx] = v
    async function updateAndFetch() {
      await updateTodoList(newList);
      let fetchedList = await fetchTodoList();
      setList(fetchedList.listItems)
    }
    updateAndFetch()
  }

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