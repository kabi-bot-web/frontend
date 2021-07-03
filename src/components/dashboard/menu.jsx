import { useContext } from "react";
import { UserData } from '../js/Context';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import './sass/menu.sass'

const Menu = () => {
    const { userData, setUserData } = useContext(UserData);
    return (
        <div id="Dashboard-menu">
            <ul id="Menu">
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
                <div className="Options">ww</div>
            </ul>
            <div id="Avatar">
                <Avatar
                    id="Img"
                    alt="avatar" 
                    src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`}
                />
                <span id="Name">{userData.username}</span>
                <div id="Exit-icon">
                    <ExitToAppIcon />
                </div>
                
            </div>
        </div>
    );
};

export default Menu;