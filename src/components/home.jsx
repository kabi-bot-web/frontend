import kabiImg from './imgs/kabi.png';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { Lan } from './js/Context';
import homeLan from './language/home.json';
import './sass/home.sass';

const Home = () => {
    const { lan } = useContext(Lan);

    return (
        <div id="Home">
            <img src={kabiImg} alt="" />
            <div className="JoinButtons">
                <Button 
                    variant="outlined" 
                    color="primary" 
                    disableElevation
                    href="https://discord.com/api/oauth2/authorize?client_id=848687767507828787&permissions=8&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Fuser%2Fauthorize&scope=bot"
                >
                    {homeLan[lan]["Add"]}
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation href="/"
                >
                {homeLan[lan]["Join"]}
                </Button>
            </div>
        </div>
    );
}

export default Home;