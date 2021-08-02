import React, { useState } from 'react';
import SettingPage from './settingPage';
import SettingOption from './option';
import { welcomeAPI } from '../js/api';
import './sass/welcome.sass';

const Welcome = ({ id }) => {
    const [data, setData] = useState({});
    const init = async () => {
        setData({})
        // api
    };
    const optionSwitch = (title) => {

    }

    return (
        <SettingPage id="welcome" fun={init}>
            <SettingOption id="join" title="join" open={false} onClose={optionSwitch} >
                asdas
            </SettingOption>
            <SettingOption id="private-message" title="private message" open={true} onClose={optionSwitch} >
            </SettingOption>
            <SettingOption id="give-role" title="give role" open={true} onClose={optionSwitch} >
            </SettingOption>
            <SettingOption id="leave" title="leave" open={true} onClose={optionSwitch} >
            </SettingOption>
        </SettingPage>
    );
};

export default Welcome;