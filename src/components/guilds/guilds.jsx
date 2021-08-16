import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Guild from './guild';
import PropTypes from 'prop-types';

const Guilds = ({guilds}) => {
  const match = useRouteMatch();

  return (
    guilds === null ? (
      <CircularProgress className="Loading" />
    ) : (
      <div id="guilds">
        {
          guilds.map((value) => {
            return (
              <Guild value={value} match={match} key={value.id}/>
            );
          })
        }
      </div>
    )
  );
};

Guilds.propTypes = {
  guilds: PropTypes.array,
};

export default Guilds;
