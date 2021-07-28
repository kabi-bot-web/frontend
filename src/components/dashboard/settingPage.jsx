import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
const defaultFun = async() => {}

const SettingPage = ({ children, fun = defaultFun, ...props }) => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            await fun();
            setLoading(false);
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        (loading) ?
            (
                <CircularProgress className="Loading" />
            ) : (
                <div className="setting-page" {...props}>
                    {children}
                </div>
            )
    );
};

export default SettingPage;