import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import './index.css';

function App() {
  return (
    <div className="mybox">
      <h1>App</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
