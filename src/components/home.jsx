import kabiImg from './imgs/kabi.png';
import Button from '@material-ui/core/Button';
import './sass/home.sass';

const Home = () => {
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
                    Add to Server
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation href="/"
                >
                    Join our Server
                </Button>
            </div>
        </div>
    );
}

export default Home;