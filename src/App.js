import logo from './logo.svg';
import './App.css';

function ListItem(props) {

  return (
    <li>{props.value}</li>
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
