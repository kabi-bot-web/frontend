import React, {useState} from 'react';
import {IOSSwitch} from './switch/IOSSwitch';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import './sass/settingOption.sass';

const SettingOption = ({children, title, open, onSet, ...props}) => {
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
        className={(drop && open) ? 'open' : 'close'}
        style={{
          opacity: open ? '1' : '0',
        }}
      />
      <input
        type="checkbox"
        onClick={() => {
          if (open) {
            setDrop(!drop);
          }
        }}
      />
      <div
        className="content"
        style={{
          height: (drop && open) ? '100%' : '0',
          marginTop: (drop && open) ? '10px' : '0',
          opacity: (drop && open) ? '1' : '0',
          pointerEvents: (drop && open) ? 'auto' : 'none',
        }}
      >
        <hr />
        {children}
      </div>
    </div>
  );
};

SettingOption.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  open: PropTypes.bool,
  onSet: PropTypes.func,
};

export default SettingOption;
