import './App.sass';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <ul id="navbar">
          <li id="Title">
            <Link to="/">KABI</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li id="Login">
            <Button variant="contained" size="medium" color="primary" href="/user/authorize" >
              Login
            </Button>
          </li>
        </ul>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
