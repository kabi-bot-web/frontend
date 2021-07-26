import Setting from './settingPage';
import './sass/welcome.sass';

const Welcome = ({ id }) => {
    return (
        <Setting id="welcome" title="welcome">
            <div id="join">
            </div>
            <div id="leave">
            </div>
        </Setting>
    );
};

export default Welcome;