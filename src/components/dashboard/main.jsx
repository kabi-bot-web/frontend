import './sass/main.sass';
import { IOSSwitch } from './switch/IOSSwitch';
const Main = ({ options, menu }) => {
    return (
        <div id="Dashboard-main">
            {options.map((option) => {
                return (
                    <div className="Option" key={option.name}>
                        <span>{option.name}</span>
                        <hr />
                        <div id="Switchs">
                            {option.options.map((switchOption) => {
                                return (
                                    <div className="Switch" key={switchOption.name}>
                                        <span>{switchOption.name}</span>
                                        <IOSSwitch />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Main;