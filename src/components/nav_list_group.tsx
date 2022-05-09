import React from 'react';
import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Tooltip from '@mui/material/Tooltip';
import { LeftNavigationGroup } from '../data/nav';

const mobileAutoCloseNav = (setNavFull: React.Dispatch<React.SetStateAction<boolean>>) => {
  return () => {
    if (document.body.clientWidth < 640) setNavFull(false); 
  };
};

interface NavListGroup extends LeftNavigationGroup {
  navFull: boolean;
  setNavFull: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavListGroup: FC<NavListGroup> = ({ groupName, items, navFull, setNavFull }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!navFull) setOpen(true);
  });

  return (
    <List>
      {navFull ? (
        <div
          className="text-white pl-5 text-sm cursor-pointer select-none flex"
          onClick={() => setOpen(!open)}
        >
          <div className="text-center flex items-center">{groupName}</div>
          <div className="w-full grid justify-items-end mr-5">
            <ExpandLess sx={{ transition: 'all .3s' }} className={`delay-150 ${open ? '' : '-rotate-180'}`} />
          </div>
        </div>
      ) : (
        <div className="h-3"></div>
      )}

      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map((item) => {
          const location = useLocation();
          const bgColor = (location.pathname === item.path) && navFull ? 'rgba(255, 255, 255, 0.05)' : '';
          return (
            <Link to={item.path} key={item.path}>
              <ListItemButton
                sx={{
                  color: 'rgba(255,255,255,.8)',
                  margin: '0 10px',
                  backgroundColor: bgColor,
                  borderRadius: '5px',
                  ':hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
                onClick={mobileAutoCloseNav(setNavFull)}
              >
                <ListItemIcon
                  sx={{ color: 'inherit' }}
                >
                  <Tooltip
                    title={item.name} placement="top" arrow disableInteractive
                    disableHoverListener={navFull}
                    disableFocusListener={navFull}
                    disableTouchListener
                  >
                    {item.icon}
                  </Tooltip>
                </ListItemIcon>
                {navFull ? <ListItemText primary={item.name} /> : null}
              </ListItemButton>
            </Link>
          );
        })}
      </Collapse>
    </List>
  );
};

export default NavListGroup;
