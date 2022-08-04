import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

function ListItem(props) {

  return (
    <li>{props.value}</li>
  )
}


function App() {
  const listItems = ["item1", "item2", "item3"]
  return (
    <>
      <div id="title">Todo List</div>
      <div className="App">
        <ul>
          {
            listItems.map((item, idx) => 
              <ListItem value={item} key={`list-item-${idx}`}/>
            )
          }
        </ul>
        <li>
        </li>
      </div>
    </>
  );
}


export default App;
