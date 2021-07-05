import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import AppsIcon from '@material-ui/icons/Apps';
import './sass/menu.sass'

const Menu = ({ menu }) => {
    return (
        <div id="Dashboard-menu" className={menu ? 'Menu-open' : 'Menu-close'}>
            <ul id="Menu">
                <li className="Classification">
                    <input type="checkbox" />
                    <div className="Drop-down" style={{ opacity: menu ? 1 : 0 }}>
                        <span>xiaoxigua</span>
                        <ArrowLeftIcon />
                    </div>
                    <div className="Options" style={{ height: menu ? '' : '100%' }}>
                        <Link className="Option">
                            <AppsIcon />
                            <span style={{ marginLeft: menu ? '20px' : '', display: 'inline-block', width: menu ? '' : '0' }}>ww</span>
                        </Link>
                        <Link className="Option">ww</Link>
                        <Link className="Option">ww</Link>
                        <Link className="Option">ww</Link>
                        <Link className="Option">ww</Link>
                        <Link className="Option">ww</Link>
                        <Link className="Option">ww</Link>
                        <Link className="Option">ww</Link>
                        <Link className="Option">ww</Link>
                        <Link className="Option">ww</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Menu;