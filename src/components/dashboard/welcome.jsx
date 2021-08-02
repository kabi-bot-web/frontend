import React, { useState } from 'react';
import SettingPage from './settingPage';
import SettingOption from './option';
import { welcomeAPI } from '../js/api';
import './sass/welcome.sass';

const Welcome = ({ id }) => {
    const [data, setData] = useState({
        "join": {
            switch: false
        },
        "private message": {
            switch: false
        },
        "give role": {
            switch: false
        },
        "leave": {
            switch: false
        }
    });
    const init = async () => {
        // test
        setData({
            "join": {
                switch: false
            },
            "private message": {
                switch: false
            },
            "give role": {
                switch: false
            },
            "leave": {
                switch: false
            }
        });
        // api
    };
    const optionSwitch = (title) => {
        return () => {
            const welcomeData = Object.assign({}, data);
            welcomeData[title].switch = !welcomeData[title].switch;
            setData(welcomeData);
        }
    }

    return (
        <SettingPage id="welcome" fun={init}>
            <SettingOption 
                id="join" 
                title="join" 
                open={data.join.switch} 
                onSet={optionSwitch("join")} 
            >
                asdas
            </SettingOption>
            <SettingOption 
                id="private-message" 
                title="private message" 
                open={data["private message"].switch} 
                onSet={optionSwitch("private message")} 
            >
            </SettingOption>
            <SettingOption 
                id="give-role" 
                title="give role" 
                open={data["give role"].switch} 
                onSet={optionSwitch("give role")} 
            >
            </SettingOption>
            <SettingOption 
                id="leave" 
                title="leave" 
                open={data["leave"].switch} 
                onSet={optionSwitch("leave")} 
            >
            </SettingOption>
        </SettingPage>
    );
};

export default Welcome;