/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const KabiAvatar = ({value, size}) => {
  return (
    <Avatar
      alt={value.name}
      src={
        value.icon === undefined ? '' :
          'https://cdn.discordapp.com/icons/' +
          `${value.id}/${value.icon}` +
          `.${value.icon.startsWith('a_') ? 'gif' : 'png'}`
      }
      style={{
        width: `${size}px`,
        height: `${size}px`,
        whiteSpace: 'nowrap',
      }}
    >
      {value.name}
    </Avatar>
  );
};

export default KabiAvatar;
