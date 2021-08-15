import React from 'react';
import kabiImg from './imgs/kabi.png';
import Button from '@material-ui/core/Button';
import {useContext} from 'react';
import {Lan} from './js/Context';
import homeLan from './language/home.json';
import './sass/home.sass';

const Home = () => {
  const {lan} = useContext(Lan);
  // 這裡記得翻譯
  return (
    <div id="Home">
      <div id="text">
        <span>Build the best Discord Server!</span>
      </div>

      <img src={kabiImg} alt="" />
      <div className="JoinButtons">
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          href="https://discord.com/api/oauth2/authorize?client_id=848687767507828787&permissions=8&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Fuser%2Fauthorize&scope=bot"
        >
          {homeLan[lan]['Add']}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          href="/"
        >
          {homeLan[lan]['Join']}
        </Button>
      </div>
      <div className="Description">
        <span>24小時上線</span>
        <p>
          隨時隨地，打開Discord即可享受音樂
          我們會確保機器人24小時都會上線，並且提供最低的延遲以及離線時間
        </p>

      </div>
      <div className="Description">
        <span>再也不怕忘記指令</span>
        <p>
          可用斜線指令!
          有了斜線指令，即便您忘記了怎麼使用機器人，只需輸入一個斜線就可以享受您的專屬指令時間!
        </p>

      </div>
      <div className="Description">
        <span>在幾秒鐘內開始播放音樂</span>
        <p>
          您不需要等太久!
          您只需要輸入指令，機器人將會在幾毫秒之内回應!
        </p>

      </div>
    </div>
  );
};

export default Home;
