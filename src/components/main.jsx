import { Link, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginButton from './loginButton';
import Home from './home';
import Servers from './servers';
import './sass/main.sass';

const Main = () => {
    const [navbar, setNavbar] = useState(false);

    const navbarClose = () => {
        setNavbar(false)
    }
    useEffect(() => {
        document.getElementsByClassName("Main")[0].onscroll = () => {
            const top = document.getElementsByClassName("Main")[0].scrollTop;
            console.log(top);
            for (let i of document.getElementsByClassName("Description")) {
                if (i.offsetTop - window.innerHeight >= top) {
                    i.style = "margin: 40vh 0;"
                } else {
                    i.style = "margin: 30vh 0;"
                }
            }
        }
    }, []);


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
                <Route exact path="/dashboard" component={Servers} />
            </Switch>

        </div>
    );
}

export default Main;
