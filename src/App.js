import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { UserData, Login, Lan } from './components/js/Context';
import { useState, useEffect } from 'react';
import LoginButton from './components/loginButton';
import Home from './components/home';
import Dashboard from './components/dashboard';
import { userAPI } from './components/js/api';
import './App.sass';

function App() {
    // test data
    const [login, setLogin] = useState(true);
    const [userData, setUserData] = useState(
        { "id": "458988300418416640", "username": "xiao xigua", "avatar": "31d2892e691d2c983dc6851d8a94472d", "discriminator": "8787", "public_flags": 64, "flags": 64, "locale": "zh-TW", "mfa_enabled": true, "premium_type": 2 }
    );
    const [lan, setLan] = useState('ch');
    const [navbar, setNavbar] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            const top = document.documentElement.scrollTop || document.body.scrollTop;
            for(let i of document.getElementsByClassName("Description")) {
                if (i.offsetTop - document.body.clientHeight >= top) {
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

    const navbarClose = () => {
        setNavbar(false)
    }

    return (
        <Router>
            <UserData.Provider value={{ userData, setUserData }}>
                <Login.Provider value={{ login, setLogin }}>
                    <Lan.Provider value={{ lan, setLan }}>
                        <div className="App">
                            <div id="navbar">
                                <div id="Title"><Link to="/">KABI</Link></div>
                                <ul id="navbar-list" style={{ left: navbar ? '0' : '-50%' }}>
                                    <li onClick={navbarClose}>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                </ul>
                                <div id="navbar-list-button">
                                    <input type="checkbox"
                                        onClick={() => {
                                            setNavbar(!navbar);
                                        }}
                                        checked={navbar ? 'checked' : ''}
                                    />
                                    <div></div>
                                </div>
                                <LoginButton />
                            </div>

                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/dashboard" component={Dashboard} />
                            </Switch>

                        </div>
                    </Lan.Provider>
                </Login.Provider>
            </UserData.Provider>
        </Router>
    );
}

export default App;
