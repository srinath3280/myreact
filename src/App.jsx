import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/counter';
import Todolist from './components/todolist';

function App() {
  return (
    <Provider store={store}>
      <div className="mybox">
        <h1>App</h1>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
