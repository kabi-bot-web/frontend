import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';

interface Left_navigation {
  setTopNavFull: React.Dispatch<React.SetStateAction<boolean>>;
  setLeftNavFull: React.Dispatch<React.SetStateAction<boolean>>;
  topNavFull: boolean;
  leftNavFull: boolean;
}

const Left_navigation: FC<Left_navigation> = ({ setTopNavFull, topNavFull, leftNavFull, setLeftNavFull }) => {

  return (
    <div
      className={`left-0 top-0 h-full fixed z-10 transition-all duration-500 ${leftNavFull ? 'w-64' : 'w-20'}`}
      style={{ backgroundColor: 'rgb(26, 28, 30)' }}
    >
      <div className={`h-16 flex items-center ${leftNavFull ? 'justify-end pr-5' : 'justify-center'}`}>
        <IconButton size="large" style={{ color: '#ffffff' }}
          onClick={() => {
            setLeftNavFull(!leftNavFull);
            setTopNavFull(!topNavFull);
          }}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
      </div>
      <List className="h-full shadow-md" style={{ backgroundColor: 'rgb(24, 26, 27)' }}>
        {/* meun */}
        {/* <ListItemButton
                    sx={{ color: 'rgba(255,255,255,.8)' }}
                >
                    <ListItemIcon
                        sx={{ color: 'inherit' }}
                    >
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton> */}
      </List>
    </div>
  );
};

export default Left_navigation;