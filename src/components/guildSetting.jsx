import { useParams, Switch } from 'react-router-dom';
import { useState } from 'react';
import Menu from './dashboard/menu';
import LoginButton from './loginButton';
import './sass/guildSetting.sass';

const Guild = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState(false);

    return (
        <span id="Guild-dashboard">
            <Menu menu={menu} id={id}/>
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
                    </Switch>
                </div>
            </div>

        </span>
    );
};

export default Guild;