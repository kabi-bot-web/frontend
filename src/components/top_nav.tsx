import { FC } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface Top_navigation {
  full: boolean
}

const Top_navigation: FC<Top_navigation> = ({ full }) => {
  return (
    <div className={`h-16 w-full bg-zinc-800 flex grow transition-all duration-500 shadow-md ${full ? 'sm:pl-72 pl-24' : 'pl-24'}`}
      style={{ backgroundColor: 'rgb(26, 28, 30)' }}
    >
      <div className="h-full w-full flex items-center">
        <Paper
          className="hover:w-96 hover:animate-search-input hover:rounded-md animate-search-input2 focus-within:animate-search-input focus-within:rounded-md focus-within:w-96 relative"
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
      <div className="h-full w-full">
          {/* avatar and menu */}
      </div>
    </div>
  );
}

export default Top_navigation;