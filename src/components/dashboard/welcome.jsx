import React, { useState } from 'react';
import SettingPage from './settingPage';
import './sass/welcome.sass';

const Welcome = ({ id }) => {

    return (
        <SettingPage id="welcome">
            <div id="join">
            </div>
            <div id="private-message">
            </div>
            <div id="give-role">
            </div>
            <div id="leave">
            </div>
        </SettingPage>
    );
};

export default Welcome;