import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { LeftNavigationGroup } from '../data/nav';

const NavListGroup: FC<LeftNavigationGroup> = ({ groupName, items }) => {
  const [open, setOpen] = useState(true);

  return (
    <List
      className="relative"
    >
      <div
        className="text-white pl-5 text-sm cursor-pointer select-none flex"
        onClick={() => setOpen(!open)}
      >
        <div className="text-center flex items-center">{groupName}</div>
        <div className="w-full grid justify-items-end mr-5">
          <ExpandLess sx={{ transition: 'all .3s' }} className={`delay-150 ${open ? '' : '-rotate-180'}`} />
        </div>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map((item) => {
          const location = useLocation();
          const bgColor = location.pathname === item.path ? 'rgba(255, 255, 255, 0.05)' : '';
          return (
            <Link to={item.path}>
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
              >
                <ListItemIcon
                  sx={{ color: 'inherit' }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          );
        })}
      </Collapse>
    </List>
  );
};

export default NavListGroup;
