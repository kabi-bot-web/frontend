import './App.sass';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <ul id="navbar">
          <li id="Title">
            <Link to="/">KABI</Link>
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
