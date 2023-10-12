import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
      <h1>App</h1>
      <Link to="/countries">Countries</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
