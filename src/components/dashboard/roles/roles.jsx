import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import './roles.sass';

const defaultFun = () => {
  return () => {};
};

const Roles = ({data, delRole = defaultFun, addRole = defaultFun}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      'display': 'flex',
      'position': 'relative',
      'flexWrap': 'wrap',
      'backgroundColor': '#1a1b20',
      'borderRadius': '5px',
      'padding': '5px',
      'maxWidth': '483px',
      'height': '30px',
      '& > .MuiChip-root': {
        margin: theme.spacing(0.5),
        height: '22px',
        backgroundColor: 'rgba(31, 33, 41, 0)',
        color: '#ffff',
        border: '1px #ffff solid',
      },
      '& > .MuiChip-root:focus': {
        backgroundColor: '#fafafa42',
      },
    },
  }))();


  const [roles, setRoles] = useState([]);
  useEffect(() => {
    setRoles([
      {name: 'a', id: 1},
      {name: 'b', id: 2},
      {name: 'v', id: 3},
      {name: 'd', id: 4},
      {name: 'e', id: 5},
      {name: 'f', id: 6},
    ]);
  }, []);

  return (
    <div className={useStyles.root} >
      {data.map((role) => {
        return (
          <Chip
            label={role.name}
            key={role.id}
            onDelete={delRole(role)}
            className="select-roles"
          />
        );
      })}
      <div
        className="roles"
        tabIndex="0"
      ></div>
      <div id="roles-menu">
        {roles.map((role) => {
          return (
            <div key={role.id}>
              {role.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Roles.propTypes = {
  data: PropTypes.arrayOf({
    name: PropTypes.string,
  }),
  delRole: PropTypes.func,
  addRole: PropTypes.func,
};

export default Roles;
