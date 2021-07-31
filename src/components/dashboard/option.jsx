import React, { useState } from 'react';
import { IOSSwitch } from './switch/IOSSwitch';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import './sass/settingOption.sass';

const SettingOption = ({ children, title, open, setOpen }) => {

    const [drop, setDrop] = useState(false);

    return (
        <div className="Setting-option">
            <div className="title">{title}</div>
            <IOSSwitch
                checked={Boolean(open)}
                onClick={() => {
                    setOpen(!open);
                }}
            />
            <ArrowLeftIcon className={drop ? 'open' : 'close'}/>
            <input 
                type="checkbox" 
                onClick={() => {
                    if (open)
                        setDrop(!drop);
                }}
            />
            <div 
                className="content"
                style={{
                    height: drop ? '100%' : '0',
                    marginTop: drop ? '10px' : '0'
                }}
            >
                <hr />
                {children}
            </div>
        </div>
    );
};

export default SettingOption;