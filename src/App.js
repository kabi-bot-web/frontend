import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { UserData, Login } from './components/js/Context';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Home from './components/home';
import './App.sass';

function App() {
  const [login, setLogin] = useState(true);
  const [userData, setUserData] = useState({ name: 'ww', 'id': '458988300418416640', 'avatar': '31d2892e691d2c983dc6851d8a94472d', });

  return (
    <Router>
      <UserData.Provider value={{ userData, setUserData }}>
        <Login.Provider value={{ login, setLogin }}>
          <div className="App">
            <ul id="navbar">
              <li id="Title">
                <Link to="/">KABI</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

            </ul>

            <div id="Login">
              {
                login ? (
                  <Button
                    color="primary"
                    size="medium"
                    startIcon={
                      <Avatar
                        alt="Avatar"
                        style={{width: '30px', height: '30px'}}
                        src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`}
                      />
                    }
                  >
                    {userData.name}
                  </Button>
                ) : (
                  <Button variant="contained" size="medium" color="primary" href="/user/authorize" >
                    Login
                  </Button>
                )
              }

            </div>

            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Login.Provider>
      </UserData.Provider>
    </Router>
  );
}

export default App;
