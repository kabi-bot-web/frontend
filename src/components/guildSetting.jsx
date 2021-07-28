import { useParams, Switch, useRouteMatch, Route } from 'react-router-dom';
import { useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import { HiOutlineHand } from 'react-icons/all';
import SettingsIcon from '@material-ui/icons/Settings';
import Main from './dashboard/main';
import Menu from './dashboard/menu';
import LoginButton from './loginButton';
import Welcome from './dashboard/welcome';
import './sass/guildSetting.sass';

const Guild = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState(false);
    const match = useRouteMatch();
    const [focus, setFocus] = useState([0, 0]);
    //要翻譯name description
    const [options, setOptions] = useState([
        {
            options: [
                {
                    name: 'Dashboard',
                    url: '',
                    icon: <AppsIcon />,
                    description: 'wtf is this'
                }
            ]
        },
        {
            name: 'Server Management',
            options: [
                {
                    name: 'Welcome',
                    url: 'welcome',
                    icon: <HiOutlineHand />,
                    description: 'wtf is this',
                    switch: true
                },
                {
                    name: '???',
                    url: 'a',
                    icon: <SettingsIcon />,
                    description: 'wtf is this',
                    switch: true
                }
            ]
        }
    ]);

    return (
        <span id="Guild-dashboard">
            <Menu 
                menu={menu} 
                id={id} 
                options={options} 
                setOptions={setOptions} 
                setFocus={setFocus} 
            />
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
                    <h2>{options[focus[0]].options[focus[1]].name}</h2>
                    <Switch>
                        <Route exact path={match.path}>
                            <Main options={options} setOptions={setOptions}/>
                        </Route>
                        <Route exact path={`${match.path}/welcome`} >
                            <Welcome id={id} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </span>
    );
};

export default Guild;