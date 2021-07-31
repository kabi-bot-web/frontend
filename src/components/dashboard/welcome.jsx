import React, { useState } from 'react';
import SettingPage from './settingPage';
import SettingOption from './option';
import './sass/welcome.sass';

const Welcome = ({ id }) => {

    return (
        <SettingPage id="welcome">
            <SettingOption id="join" title="join" open={false}>
                asdas
            </SettingOption>
            <SettingOption id="private-message" title="private-message" open={true}>
            </SettingOption>
            <SettingOption id="give-role" title="give role" open={true}>
            </SettingOption>
            <SettingOption id="leave" title="leave" open={true}>
            </SettingOption>
        </SettingPage>
    );
};

export default Welcome;