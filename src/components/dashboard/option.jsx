import React, { useState } from 'react';
import { IOSSwitch } from './switch/IOSSwitch';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import './sass/settingOption.sass';

const SettingOption = ({ title, open, onClose }) => {

    return (
        <div className="Setting-option">
            <div className="title">{title}</div>
            <IOSSwitch
                checked={Boolean(open)}
            />
            <ArrowLeftIcon />
            <input type="checkbox" />
        </div>
    );
};

export default SettingOption;