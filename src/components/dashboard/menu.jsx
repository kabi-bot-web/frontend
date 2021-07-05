import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import AppsIcon from '@material-ui/icons/Apps';
import { useState } from 'react';
import './sass/menu.sass'

const Menu = ({ menu }) => {
    //要翻譯
    const [options, setOptions] = useState([
        {
            name: 'Server Management', options: [
                { name: '??', url: '??', icon: <AppsIcon /> }
            ]
        }
    ]);

    return (
        <div id="Dashboard-menu" className={menu ? 'Menu-open' : 'Menu-close'}>
            <ul id="Menu">
                <li className="Classification">
                    <Link className="Option">
                        <AppsIcon />
                        <span style={{ marginLeft: menu ? '20px' : '', display: 'inline-block', width: menu ? '' : '0' }}>ww</span>
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