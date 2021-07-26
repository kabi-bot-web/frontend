import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MenuDialog from './menuDialog';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import kabiImg from '../imgs/kabi.png';
import { userAPI } from '../js/api';
import './sass/dashboardMenu.sass'

const Menu = ({ menu, id, options, setOptions }) => {
    const [guilds, setGuilds] = useState([]);
    const [useId, setUseId] = useState(id);
    const [dialog, setDialog] = useState(false);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        // test
        setGuilds([
            { "id": "439411756033638400", "name": "Young ✮", "icon": "a_881eea41cf9f06d92bdb44bfdcb28775", "owner": false, "permissions": 137438953471, "features": ["ANIMATED_ICON", "INVITE_SPLASH", "WELCOME_SCREEN_ENABLED", "NEWS", "MEMBER_VERIFICATION_GATE_ENABLED", "COMMUNITY", "PREVIEW_ENABLED"] },
            { "id": "480000987306655744", "name": "邊緣聚集地", "icon": "93a289d52cbcb493bb10f937fe490fdf", "owner": false, "permissions": 137438953471, "features": ["NEWS", "COMMUNITY", "WELCOME_SCREEN_ENABLED"] }, { "id": "562671245884129280", "name": "亞洲入口✅", "icon": "de45b733db3192828cfedb2beaaaa835", "owner": false, "permissions": 137438953471, "features": ["ANIMATED_ICON", "INVITE_SPLASH", "NEWS", "MEMBER_VERIFICATION_GATE_ENABLED", "COMMUNITY", "PREVIEW_ENABLED"] },
            { "id": "644187547056078868", "name": "兔兔的窩", "icon": "7e001e30bcc86f197c4c9371f0e7217c", "owner": false, "permissions": 137438953471, "features": ["INVITE_SPLASH", "BANNER", "WELCOME_SCREEN_ENABLED", "NEWS", "ANIMATED_ICON", "COMMUNITY"] }, { "id": "685079895365124110", "name": "禰豆子", "icon": "eae20eb1bbaac27fe53b9903d85045c7", "owner": false, "permissions": 137438953471, "features": [] }, { "id": "697764026712850493", "name": "小西瓜工作室", "icon": "de926249818629a36036cdae834db53c", "owner": false, "permissions": 137438953471, "features": [] },
            { "id": "700292398965719072", "name": "試驗區", "owner": false, "permissions": 137438953471, "features": ["NEWS", "COMMUNITY", "WELCOME_SCREEN_ENABLED"] },
            { "id": "766293623930486825", "name": "Thinking", "icon": "560df29480e05a2e4d2d4cc07adf0a5e", "owner": true, "permissions": 137438953471, "features": [] },
            { "id": "770905714654576661", "name": "網頁設計社肥宅專用Discord群", "owner": false, "permissions": 137438953471, "features": [] },
            { "id": "850311557191303209", "name": "黑客松 🔥🔥Pan電神椒麻🔥🔥", "icon": "39e0c3f29de2401728bb2392575d6684", "owner": false, "permissions": 137438953471, "features": [] },
            { "id": "770905714654576662", "name": "網頁設計社肥宅專用Discord群", "owner": false, "permissions": 137438953471, "features": [] }
        ]);

        // api
        userAPI.get("/guilds")
            .then(req => {
                if (!req.data.error) {
                    setGuilds(req.data.data);
                }
            });
    }, []);

    return (
        <div id="Dashboard-menu" className={menu ? 'Menu-open' : 'Menu-close'}>
            <ul id="Menu">
                <li id="title">
                    <Link to="/">
                        <Avatar
                            alt="Avatar"
                            style={{ width: '40px', height: '40px' }}
                            src={kabiImg}
                        />
                        <span
                            style={{ width: menu ? '100%' : '0' }}
                        >
                            KABI
                        </span>
                    </Link>
                </li>

                <li id="Guild-select">
                    <Select
                        id="select"
                        disableUnderline
                        value={useId}
                        onChange={(event) => {
                            setUseId(event.target.value);
                            history.push(`/dashboard/${event.target.value}`);
                        }}
                    >
                        {guilds.map((value) => {
                            return (
                                <MenuItem value={value.id} key={value.id} >
                                    <Avatar
                                        alt={value.name}
                                        src={
                                            value.icon === undefined ? '' :
                                                "https://cdn.discordapp.com/icons/" +
                                                `${value.id}/${value.icon}` +
                                                `.${value.icon.startsWith("a_") ? "gif" : "png"}`
                                        }
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {value.name}
                                    </Avatar>
                                    <span
                                        style={{
                                            marginLeft: '10px'
                                        }}
                                    >
                                        {menu ? value.name : ''}
                                    </span>
                                </MenuItem>
                            );
                        })}

                    </Select>
                </li>

                {options.map((value, index) => {
                    return (
                        <li className="Classification" key={value.name || ''}>
                            <input type="checkbox" />
                            <div
                                className="Drop-down"
                                style={{ opacity: (menu && value.name !== undefined) ? 1 : 0 }}
                            >
                                <span>{value.name}</span>
                                <ArrowLeftIcon />
                            </div>
                            <div 
                                className="Options" 
                                style={{ height: (menu && value.name !== undefined) ? '' : '100%' }}
                            >
                                {value.options.map((value2, index2) => {
                                    return (
                                        <div
                                            className={
                                                (location.pathname === `/dashboard/${useId}/${value2.url}`) ?
                                                    (menu ?
                                                        'Option Option-focus-open' : 'Option Option-focus-close'
                                                    ) : (menu ? 'Option' : 'Option Option-close') 
                                            }
                                            key={value2.name}
                                            onClick={() => {
                                                if (value2.switch || value2.switch === undefined) {
                                                    history.push(`/dashboard/${useId}/${value2.url}`);
                                                } else setDialog([index, index2]);
                                            }}
                                        >
                                            {value2.icon}
                                            <span
                                                style={{
                                                    marginLeft: menu ? '20px' : '',
                                                    display: 'inline-block',
                                                    width: menu ? '' : '0'
                                                }}
                                            >
                                                {value2.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </li>
                    );
                })}
            </ul>

            <MenuDialog
                options={options}
                setOptions={setOptions}
                dialog={dialog}
                setDialog={setDialog}
                id={id}
            />
        </div>
    );
};

export default Menu;