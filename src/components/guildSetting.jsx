import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from './dashboard/menu';
import './sass/guildSetting.sass';

const Guild = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState(false);

    return (
        <div id="Guild-dashboard">
            <Menu />
            <div id="setting">
            </div>
        </div>
    );
};

export default Guild;