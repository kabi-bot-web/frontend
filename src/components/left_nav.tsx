import React, { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import LeftNavigationSubheader from './nav_subdeader';
import { LeftNavigationGroup } from '../data/nav';
import NavListGroup from './nav_list_group';

interface LeftNavigation {
  setNavFull: React.Dispatch<React.SetStateAction<boolean>>;
  navFull: boolean;
  navList: Array<LeftNavigationGroup>;
}

const LeftNavigation: FC<LeftNavigation> = ({ navFull, setNavFull, navList }) => {
  return (
    <div
      className={`left-0 top-0 h-full fixed z-10 transition-all duration-500 ${navFull ? 'sm:w-64 w-full' : 'sm:w-20 w-0'}`}
      style={{ backgroundColor: navFull ? 'rgb(26, 28, 30)' : '' }}
    >
      <div className={`h-16 flex items-center flexed ml-10 sm:ml-0 ${navFull ? 'justify-end pr-5 sm:pr-0 ml-0'   : 'justify-center'}`}>
        <IconButton size="large" style={{ color: '#ffffff' }}
          onClick={() => {
            setNavFull(!navFull);
          }}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
      </div>
      <List
        className={`h-full shadow-md transition-all overflow-hidden ${navFull ? '' : 'w-0 sm:w-full'}`}
        style={{ backgroundColor: 'rgb(24, 26, 27)' }}
        subheader={<LeftNavigationSubheader />}
      >
        {/* meun */}
        {navList.map((group) => {
          return (<NavListGroup {...group} navFull={navFull} key={group.groupName} setNavFull={setNavFull} />);
        })}
      </List>
    </div>
  );
};

export default LeftNavigation;
