import React from 'react';
import Button from '@material-ui/core/Button';
import KabiAvatar from './avatar';
import { Link } from 'react-router-dom';

const Guild = ({ value, match }) => {
    return (
        <div className="guild" key={value.id}>
            <Link to={`${match.path}/${value.id}/`}>
                <Button
                    startIcon={
                        <KabiAvatar value={value} size={40} />
                    }
                    style={{
                        textTransform: 'none',
                        justifyContent: 'normal',
                        width: '100%',
                        color: '#ffff',
                        padding: '10px 0',
                        paddingLeft: '20px'
                    }}
                >
                    <span className="text">
                        {value.name}
                    </span>
                </Button>
            </Link>

        </div>
    );
};

export default Guild;