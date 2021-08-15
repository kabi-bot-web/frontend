/* eslint-disable react/prop-types */
import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Guild from './guild';

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

export default Guilds;
