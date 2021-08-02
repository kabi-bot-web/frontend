import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Lan, Login, UserData } from '../js/Context';
import { userAPI } from '../js/api';

const LoginButtonMenu = ({ menuSwitch, setMenuSwitch }) => {
    const { setLan } = useContext(Lan);
    const { setLogin } = useContext(Login);
    const { setUserData } = useContext(UserData);

    const StyleMenu = withStyles({
        paper: {
            backgroundColor: '#424242',
            display: 'table'
        }
    })(Menu);

    const lanData = {
        "中文": "ch",
        "English": "en"
    };

    const setLanFun = (lanName) => {
        return () => {
            setLan(lanName);
            setMenuSwitch(false);
        }
    };

    return (
        <StyleMenu
            keepMounted
            open={Boolean(menuSwitch)}
            anchorEl={menuSwitch}
            onClose={() => {
                setMenuSwitch(false);
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

            <MenuItem id="Server-link">
                <Link to="/dashboard">My Servers</Link>
            </MenuItem>
            <MenuItem id="Language">
                Language
            </MenuItem>
            <List id="menu" component="nav" aria-label="main mailbox folders">
                {Object.keys(lanData).map(lanName => {
                    return (
                        <ListItem
                            button
                            onClick={setLanFun(lanData[lanName])}
                            key={lanName}
                        >
                            <ListItemText>
                                {lanName}
                            </ListItemText>
                        </ListItem>
                    )
                })}

            </List>
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
    );
};

export default LoginButtonMenu;