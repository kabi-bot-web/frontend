import { Link, Route, Switch } from 'react-router-dom';
import { UserData, Login } from './js/Context';
import { useState, useEffect, useContext } from 'react';
import LoginButton from './loginButton';
import Home from './home';
import Dashboard from './dashboard';
import { userAPI } from './js/api';
import './sass/main.sass';

const Main = () => {
    // test data
    const { setLogin } = useContext(Login);
    const { setUserData } = useContext(UserData);
    const [navbar, setNavbar] = useState(false);
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

    const navbarClose = () => {
        setNavbar(false)
    }

    return (

        <div className="Main">
            <div id="navbar">
                <div id="Title" onClick={navbarClose}><Link to="/">KABI</Link></div>
                <ul id="navbar-list" style={{ left: navbar ? '0' : '-50%' }}>
                    <li onClick={navbarClose}>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                <div id="navbar-list-button" style={{ position: navbar ? 'fixed' : 'absolute' }}>
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
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>

        </div>
    );
}

export default Main;
