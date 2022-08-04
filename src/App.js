import './App.css';
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

function TodoList(props) {
  return(
    <>
      <h1 id="title">{props.title}</h1>
      <div>
        <ul>
          {
            props.list.map((item, idx) => 
              <ListItem value={item} key={`list-item-${idx}`}/>
            )
          }
        </ul>
      </div>
    </>
  )
}

function App() {
  const listItems = ["item1", "item2", "item3"]
  return (
    <div className="App">
      
      <TodoList title="Todo List" list={listItems}/>
    </div>
  );
}


export default App;
