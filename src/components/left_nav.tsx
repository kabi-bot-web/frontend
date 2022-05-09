import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import SendIcon from '@mui/icons-material/Send';
import LeftNavigationSubheader from './nav_subdeader';
import { LeftNavigationGroup } from '../data/nav';
import NavListGroup from './nav_list_group';

interface LeftNavigation {
  setNavFull: React.Dispatch<React.SetStateAction<boolean>>;
  navFull: boolean;
}

const navList: Array<LeftNavigationGroup> = [
  { groupName: '123', items: [
    { name: '123',  path: '/', icon: <SendIcon /> },
    { name: '123',  path: '/123', icon: <SendIcon /> }
  ] },
  { groupName: '123', items: [
    { name: '123',  path: '/', icon: <SendIcon /> },
    { name: '123',  path: '/123', icon: <SendIcon /> }
  ] },
  { groupName: '123', items: [] }
];

const LeftNavigation: FC<LeftNavigation> = ({ navFull, setNavFull }) => {
  return (
    <div
      className={`left-0 top-0 h-full fixed z-10 transition-all duration-500 overflow-hidden ${navFull ? 'sm:w-64 w-full' : 'w-20'}`}
      style={{ backgroundColor: 'rgb(26, 28, 30)' }}
    >
      <div className={`h-16 flex items-center ${navFull ? 'justify-end pr-5' : 'justify-center'}`}>
        <IconButton size="large" style={{ color: '#ffffff' }}
          onClick={() => {
            setNavFull(!navFull);
          }}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
      </div>
      <List
        className="h-full shadow-md"
        style={{ backgroundColor: 'rgb(24, 26, 27)' }}
        subheader={<LeftNavigationSubheader />}
      >
        {/* meun */}
        {navList.map((group) => {
          return <NavListGroup {...group} navFull={navFull} />
        })}
      </List>
    </div>
  );
};

export default LeftNavigation;