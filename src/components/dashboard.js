import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './sass/dashboard.sass';
import Guilds from './guilds';
import GuildSetting from './guildSetting';

const Dashboard = () => {
    const [guilds, setGuilds] = useState(null);
    // test data
    useEffect(() => {
        setTimeout(() => {
            setGuilds([{ "id": "439411756033638400", "name": "Young ✮", "icon": "a_881eea41cf9f06d92bdb44bfdcb28775", "owner": false, "permissions": 137438953471, "features": ["ANIMATED_ICON", "INVITE_SPLASH", "WELCOME_SCREEN_ENABLED", "NEWS", "MEMBER_VERIFICATION_GATE_ENABLED", "COMMUNITY", "PREVIEW_ENABLED"] }, { "id": "480000987306655744", "name": "邊緣聚集地", "icon": "93a289d52cbcb493bb10f937fe490fdf", "owner": false, "permissions": 137438953471, "features": ["NEWS", "COMMUNITY", "WELCOME_SCREEN_ENABLED"] }, { "id": "562671245884129280", "name": "亞洲入口✅", "icon": "de45b733db3192828cfedb2beaaaa835", "owner": false, "permissions": 137438953471, "features": ["ANIMATED_ICON", "INVITE_SPLASH", "NEWS", "MEMBER_VERIFICATION_GATE_ENABLED", "COMMUNITY", "PREVIEW_ENABLED"] }, { "id": "644187547056078868", "name": "兔兔的窩", "icon": "7e001e30bcc86f197c4c9371f0e7217c", "owner": false, "permissions": 137438953471, "features": ["INVITE_SPLASH", "BANNER", "WELCOME_SCREEN_ENABLED", "NEWS", "ANIMATED_ICON", "COMMUNITY"] }, { "id": "685079895365124110", "name": "禰豆子", "icon": "eae20eb1bbaac27fe53b9903d85045c7", "owner": false, "permissions": 137438953471, "features": [] }, { "id": "697764026712850493", "name": "小西瓜工作室", "icon": "de926249818629a36036cdae834db53c", "owner": false, "permissions": 137438953471, "features": [] }, { "id": "700292398965719072", "name": "試驗區", "owner": false, "permissions": 137438953471, "features": ["NEWS", "COMMUNITY", "WELCOME_SCREEN_ENABLED"] }, { "id": "766293623930486825", "name": "Thinking", "icon": "560df29480e05a2e4d2d4cc07adf0a5e", "owner": true, "permissions": 137438953471, "features": [] }, { "id": "770905714654576661", "name": "網頁設計社肥宅專用Discord群", "owner": false, "permissions": 137438953471, "features": [] }, { "id": "850311557191303209", "name": "黑客松 🔥🔥Pan電神椒麻🔥🔥", "icon": "39e0c3f29de2401728bb2392575d6684", "owner": false, "permissions": 137438953471, "features": [] }]);
        }, 5000);
    }, []);

    const match = useRouteMatch();

    return (
        <div id="dashboard">
            <Switch>
                <Route exact path={`${match.path}`}>
                    <Guilds guilds={guilds} />
                </Route>
                <Route exact path={`${match.path}/:id`}>
                    <GuildSetting />
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;