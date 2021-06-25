import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useContext, useState } from 'react';
import { UserData, Login } from './js/Context';
import { userAPI } from './js/api';

const LoginButton = () => {
    const [menuSwith, setMenuSwith] = useState(false);
    const { login, setLogin } = useContext(Login);
    const { userData, setUserData } = useContext(UserData);

    const StyleMenu = withStyles({
        paper: {
            backgroundColor: '#424242'
        }

    })(Menu);

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
                            menuSwith ? (<ArrowDropDownIcon />) : (<ArrowLeftIcon />)
                        }
                        onClick={(event) => {
                            setMenuSwith(event.currentTarget);
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
            <StyleMenu
                keepMounted
                open={Boolean(menuSwith)}
                anchorEl={menuSwith}
                onClose={() => {
                    setMenuSwith(false);
                }}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem
                    style={{ color: '#A72A39' }}
                    onClick={() => {
                        userAPI.get("/logout").then(req => {
                            if (!req.data.error) {
                                setLogin(false);
                                setUserData(null);
                            }
                        })
                    }}
                >
                    Logout
                </MenuItem>
            </StyleMenu>
        </div>
    );
}

export default LoginButton;