import logo from './logo.svg';
import './App.css';

function ListItem(props) {

  return (
    <li>{props.value}</li>
  )
}


function App() {
  const listItems = ["item1", "item2", "item3"]
  return (
    <div className="App">
      <h1 id="title">Todo List</h1>
      <div>
        <ul>
          {
            listItems.map((item, idx) => 
              <ListItem value={item} key={`list-item-${idx}`}/>
            )
          }
        </ul>
      </div>
    </div>
  );
}


export default App;
