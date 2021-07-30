import React, { useState } from 'react';
import SettingPage from './settingPage';
import SettingOption from './option';
import './sass/welcome.sass';

const Welcome = ({ id }) => {

    return (
        <SettingPage id="welcome">
            <SettingOption id="join" title="join">
            </SettingOption>
            <SettingOption id="private-message" title="private-message">
            </SettingOption>
            <SettingOption id="give-role" title="give role">
            </SettingOption>
            <SettingOption id="leave" title="leave">
            </SettingOption>
        </SettingPage>
    );
};

export default Welcome;