/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UserData, Login, Lan} from './components/js/Context';
import {useState, useEffect} from 'react';
import GuildSetting from './components/guildSetting';
import {userAPI} from './components/js/api';
import Main from './components/main';

const App = () => {
  // test data
  const [login, setLogin] = useState(true);
  const [userData, setUserData] = useState(
      { "id": "458988300418416640", "username": "xiao xigua", "avatar": "31d2892e691d2c983dc6851d8a94472d", "discriminator": "8787", "public_flags": 64, "flags": 64, "locale": "zh-TW", "mfa_enabled": true, "premium_type": 2 },
  );
  const [lan, setLan] = useState('en');

  useEffect(() => {
    userAPI.get('').then((req) => {
      if (!req.data.error) {
        setUserData(req.data.data);
        setLogin(true);
      }
    });
  }, []);

  return (
    <Router>
      <UserData.Provider value={{userData, setUserData}}>
        <Login.Provider value={{login, setLogin}}>
          <Lan.Provider value={{lan, setLan}}>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/dashboard" component={Main} />
                <Route path="/dashboard/:id" component={GuildSetting} />
              </Switch>
            </div>
          </Lan.Provider>
        </Login.Provider>
      </UserData.Provider>
    </Router>
  );
};

export default App;
