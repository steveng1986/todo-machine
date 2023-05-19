import './App.css';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoItem } from './TodoItem'
import { TodoButton } from './TodoButton'
import { TodoList } from './TodoList'

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem text='holii' number='+1' />
        <TodoItem text='bye' number='09'/>
      </TodoList>
      <TodoButton />
    </div>
  );
}

export default App;
