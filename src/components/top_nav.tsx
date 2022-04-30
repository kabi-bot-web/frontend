import { FC } from "react";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const Top_navigation: FC = () => {
    return (
        <div className="h-16 w-full pl-72 bg-gray-800 flex grow">
            <div className="h-full w-full">
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>
            </div>
            <div className="h-full w-full">

            </div>
        </div>
    );
}

export default Top_navigation;