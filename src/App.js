import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { UserData, Login, Lan } from './components/js/Context';
import { useState, useEffect } from 'react';
import GuildSetting from './components/guildSetting';
import { userAPI } from './components/js/api';
import Main from './components/main';

function App() {
    // test data
    const [login, setLogin] = useState(true);
    const [userData, setUserData] = useState(
        { "id": "458988300418416640", "username": "xiao xigua", "avatar": "31d2892e691d2c983dc6851d8a94472d", "discriminator": "8787", "public_flags": 64, "flags": 64, "locale": "zh-TW", "mfa_enabled": true, "premium_type": 2 }
    );
    const [lan, setLan] = useState('ch');
    useEffect(() => {
        window.onscroll = () => {
            const top = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(top);
            for (let i of document.getElementsByClassName("Description")) {
                if (i.offsetTop - window.innerHeight >= top) {
                    i.style = "margin: 40vh 0;"
                } else {
                    i.style = "margin: 30vh 0;"
                }
            }
        }
        userAPI.get('').then(req => {
            if (!req.data.error) {
                setUserData(req.data.data);
                setLogin(true);
            }
        });
    }, []);

    return (
        <Router>
            <UserData.Provider value={{ userData, setUserData }}>
                <Login.Provider value={{ login, setLogin }}>
                    <Lan.Provider value={{ lan, setLan }}>
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
}

export default App;
