import React, { useState } from 'react';
import { IOSSwitch } from './switch/IOSSwitch';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './sass/settingOption.sass';

const SettingOption = ({ children, title, open, onSet, ...props }) => {

    const [drop, setDrop] = useState(false);

    return (
        <div className="Setting-option" {...props}>
            <div className="title">{title}</div>
            <IOSSwitch
                checked={Boolean(open)}
                onClick={() => {
                    onSet();
                    setDrop(!open);
                }}
            />
            <ChevronLeftIcon
                className={drop ? 'open' : 'close'}
                style={{
                    opacity: open ? '1' : '0'
                }}
            />
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