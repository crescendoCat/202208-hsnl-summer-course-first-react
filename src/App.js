import './App.css';
import TodoList from "./TodoList"


function App() {
  const listItems = ["item1", "item2", "item3"]
  return (
    <div className="App">
      
      <TodoList title="Todo List" list={listItems}/>
    </div>
  );
}


export default App;
