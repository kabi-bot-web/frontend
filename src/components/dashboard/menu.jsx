import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import kabiImg from '../imgs/kabi.png';
import './sass/menu.sass'

const Menu = ({ menu }) => {
    //要翻譯
    const options = [
        {
            name: 'Server Management', options: [
                { name: '??', url: '/??', icon: <AppsIcon /> },
                { name: '???', url: '/???', icon: <SettingsIcon /> }
            ]
        }
    ];

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

                {options.map((value) => {
                    return (
                        <li className="Classification">
                            <input type="checkbox" />
                            <div className="Drop-down" style={{ opacity: menu ? 1 : 0 }}>
                                <span>{value.name}</span>
                                <ArrowLeftIcon />
                            </div>
                            <div className="Options" style={{ height: menu ? '' : '100%' }}>
                                {value.options.map((value2) => {
                                    return (
                                        <Link className="Option" to={value2.url}>
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
                                        </Link>
                                    );
                                })}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Menu;