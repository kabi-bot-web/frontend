import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const defaultFun = () => {
  return () => {};
};

const Roles = ({data, delRole = defaultFun, addRole = defaultFun}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      'display': 'flex',
      'flexWrap': 'wrap',
      'backgroundColor': '#1a1b20',
      'borderRadius': '10px',
      'padding': '5px',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }))();

  return (
    <div className={useStyles.root} >
      {data.map((role) => {
        return (
          <Chip label={role.name} key={role.id} onDelete={delRole(role)}/>
        );
      })}
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