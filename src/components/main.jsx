import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import LoginButton from './loginButton';
import Home from './home';
import Servers from './servers';
import './sass/main.sass';

const Main = () => {
    const [navbar, setNavbar] = useState(false);

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
                <Route exact path="/dashboard" component={Servers} />
            </Switch>

        </div>
    );
}

export default Main;
