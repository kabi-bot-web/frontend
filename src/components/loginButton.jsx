import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useContext, useState } from 'react';
import { UserData, Login } from './js/Context';
import LoginButtonMenu from './loginButton/menu';
import './sass/language.sass';

const LoginButton = () => {
    const [menuSwitch, setMenuSwitch] = useState(false);
    const { login } = useContext(Login);
    const { userData } = useContext(UserData);

    return (
        <div id="Login">
            {
                login ? (
                    <Button
                        color="primary"
                        size="medium"
                        startIcon={
                            <Avatar
                                alt="Avatar"
                                style={{ width: '30px', height: '30px' }}
                                src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`}
                            />
                        }
                        endIcon={
                            menuSwitch ? (<ArrowDropDownIcon />) : (<ArrowLeftIcon />)
                        }
                        onClick={(event) => {
                            setMenuSwitch(event.currentTarget);
                        }}
                        style={{ textTransform: 'none' }}
                    >
                        <span id="User-name">{userData.username}</span>
                    </Button>
                ) : (
                    <Button variant="contained" size="medium" color="primary" href="/user/authorize" >
                        Login
                    </Button>
                )
            }
            <LoginButtonMenu menuSwitch={menuSwitch} setMenuSwitch={setMenuSwitch} />
        </div>
    );
}

export default LoginButton;