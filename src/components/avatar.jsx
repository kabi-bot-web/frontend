import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

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

KabiAvatar.propTypes = {
  value: PropTypes.objectOf({
    name: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.number,
  }),
  size: PropTypes.number,
};

export default KabiAvatar;
