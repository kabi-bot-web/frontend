import React, { useState } from 'react';
import SettingPage from './settingPage';
import SettingOption from './option';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { welcomeAPI } from '../js/api';
import './sass/welcome.sass';

const Welcome = ({ id }) => {
    const [data, setData] = useState({
        'join': {
            switch: false,
            channel: 123213,
            message: 'GG'
        },
        'private message': {
            switch: false
        },
        'give role': {
            switch: false
        },
        'leave': {
            switch: false
        }
    });
    const init = async () => {
        return {
            'join': {
                switch: false,
                channel: 123213,
                message: 'GG'
            },
            'private message': {
                switch: false
            },
            'give role': {
                switch: false
            },
            'leave': {
                switch: false
            }
        };
        // api
    };
    const optionSwitch = (title) => {
        return () => {
            const welcomeData = Object.assign({}, data);
            welcomeData[title].switch = !welcomeData[title].switch;
            setData(welcomeData);
        }
    };

    // title 要翻譯
    return (
        <SettingPage id="welcome" initFun={init} data={data} setData={setData}>
            <SettingOption
                id="join"
                title="join"
                open={data.join.switch}
                onSet={optionSwitch("join")}
            >

                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-native-simple" id="text">頻道</InputLabel>
                    <Select
                        label="Age"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
                <TextField
                    id="outlined-textarea"
                    label="歡迎文字"
                    // placeholder="Placeholder"
                    value={data.join.message}
                    onChange={(event) => {
                        let message = {...data};
                        message.join.message = event.target.value;
                        setData(message);
                    }}
                    multiline
                    variant="outlined"
                    rows={5}
                />
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