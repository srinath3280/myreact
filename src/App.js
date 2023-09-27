import {Outlet,Link} from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
      <h1>All Countries</h1>
      <Link to="/Countries">countries</Link>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
