import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface Left_navigation {
    setTopNavFull: React.Dispatch<React.SetStateAction<boolean>>;
    topNavFull: boolean;
}

const Left_navigation: FC<Left_navigation> = ({ setTopNavFull, topNavFull }) => {
    const [leftNavFull, setLeftNavFull] = useState(true);

    return (
        <div 
            className={`left-0 top-0 h-full fixed z-10 shadow-md transition-all duration-500 ${leftNavFull ? 'w-64' : 'w-20'}`}
            style={{backgroundColor: 'rgb(24, 26, 27)'}}
        >
            <div className={`h-16 flex items-center ${leftNavFull ? 'justify-end pr-5' : 'justify-center'}`}>
                <IconButton size="large" style={{ color: '#ffffff' }}
                    onClick={() => {
                        setLeftNavFull(!leftNavFull);
                        setTopNavFull(!topNavFull);
                    }}
                >
                    <MenuIcon fontSize="inherit"/>
                </IconButton>
            </div>
            <div className="h-full">
                {/* meun */}
            </div>
        </div>
    );
};

export default Left_navigation;