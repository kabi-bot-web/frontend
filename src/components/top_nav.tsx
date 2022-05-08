import { FC, useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from "@mui/material/Avatar";
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Author } from "../data/author";
import { logout } from "../util/api";

interface Top_navigation {
  full: boolean;
  author: Author;
}

const Top_navigation: FC<Top_navigation> = ({ full, author }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <div className={`h-16 w-full bg-zinc-800 flex grow transition-all duration-500 shadow-md ${full ? 'sm:pl-72 pl-24' : 'pl-24'}`}
      style={{ backgroundColor: 'rgb(26, 28, 30)' }}
    >
      <div className="h-full w-full flex items-center">
        <Paper
          className="hover:w-full hover:animate-search-input hover:rounded-md animate-search-input2 focus-within:animate-search-input focus-within:rounded-md focus-within:w-full relative sm:focus-within:w-96 sm:hover:w-96"
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 50,
            backgroundColor: 'rgb(24, 26, 27)',
            transition: 'all .5s',
            borderRadius: '50%'
          }}
        >
          <IconButton sx={{ p: '10px', color: '#ffffffaa' }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: '#ffffff' }}
            placeholder="Search Setting"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <div className="absolute w-full h-6 left-0 top-12">
            {/* item */}
          </div>
        </Paper>
      </div>
      <div className="h-full w-full items-center justify-items-end grid mr-10 flex-1 md:flex-auto">
        {/* avatar and menu */}
        <IconButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <Avatar
            src={author.avatar}
            sx={{ width: 44, height: 44 }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            setAnchorEl(null);
          }}
          sx={{ '.MuiPaper-root': { backgroundColor: '#3E3E3E', color: '#ffff' }}}
        >
          <MenuItem
            onClick={() => {
              // call logout api
              author.id ? logout(author.id) : null;
              // redirect to home page
            }}
          >
            <ListItemIcon sx={{ color: '#ffff' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>
              Logout
            </ListItemText>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Top_navigation;