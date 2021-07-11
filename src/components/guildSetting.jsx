import { useParams, Switch, useRouteMatch, Route } from 'react-router-dom';
import { useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import Main from './dashboard/main';
import Menu from './dashboard/menu';
import LoginButton from './loginButton';
import './sass/guildSetting.sass';

const Guild = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState(false);
    const match = useRouteMatch();
    //要翻譯name
    const options = [
        {
            name: 'Server Management', options: [
                { name: 'Dashboard', url: '', icon: <AppsIcon /> },
                { name: '???', url: 'a', icon: <SettingsIcon /> }
            ]
        }
    ];

    return (
        <span id="Guild-dashboard">
            <Menu menu={menu} id={id} options={options} />
            <div id="Setting" className={menu ? 'Setting-open' : 'Setting-close'}>
                <div id="Navbar">
                    <div id="Menu-button">
                        <input
                            type="checkbox"
                            onClick={() => {
                                setMenu(!menu);
                            }}
                            checked={menu ? 'checked' : ''}
                            readOnly={true}
                        />
                        <div></div>
                    </div>
                    <LoginButton />
                </div>
                <div id="Content">
                    <Switch>
                        <Route exact path={match.path}>
                            <Main options={options} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </span>
    );
};

export default Guild;