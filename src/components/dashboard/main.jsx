/* eslint-disable react/prop-types */
import React from 'react';
import './sass/main.sass';
import {IOSSwitch} from './switch/IOSSwitch';

const Main = ({options, setOptions}) => {
  return (
    <div id="Dashboard-main">
      {options.map((option, index1) => {
        return (option.name !== undefined) ? (
          <div className="Option" key={option.name}>
            <span>{option.name}</span>
            <hr />
            <div id="Switchs">
              {option.options.map((switchOption, index2) => {
                return (
                  <div className="Switch" key={switchOption.name}>
                    {switchOption.icon}
                    <IOSSwitch
                      checked={switchOption.switch}
                      onClick={() => {
                        const data = Object.assign([], options);
                        data[index1].options[index2]['switch'] =
                          !options[index1].options[index2]['switch'];
                        setOptions(data);
                      }}
                    />
                    <p>{switchOption.name}</p>
                    <p id="Description">
                      {switchOption.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (null);
      })}
    </div>
  );
};

export default Main;
