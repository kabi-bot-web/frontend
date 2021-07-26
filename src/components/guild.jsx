import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Guild = ({ value, match }) => {
    return (
        <div className="guild" key={value.id}>
            <Link to={`${match.path}/${value.id}`}>
                <Button
                    startIcon={
                        <Avatar
                            alt={value.name}
                            src={
                                value.icon === undefined ? '' :
                                    "https://cdn.discordapp.com/icons/" +
                                    `${value.id}/${value.icon}` +
                                    `.${value.icon.startsWith("a_") ? "gif" : "png"}`
                            }
                            style={{
                                width: '40px',
                                height: '40px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {value.name}
                        </Avatar>
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