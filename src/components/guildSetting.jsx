import { useParams } from 'react-router-dom';
import './sass/guildSetting.sass';
import LoginButton from './loginButton';

const Guild = () => {
    const { id } = useParams();
    return (
        <div id="Guild-dashboard">
            <div id="navbar">
                <LoginButton />
            </div>
            <div id="Side-menu">
                {id}
            </div>
            <div id="setting">
            </div>
        </div>
    );
};

export default Guild;