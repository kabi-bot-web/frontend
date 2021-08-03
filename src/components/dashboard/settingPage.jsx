import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './sass/settingPage.sass';

const defaultFun = async() => {}

const SettingPage = ({ data, children, initFun = defaultFun, ...props }) => {
    let [initData, setInitData] = useState({});

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const reData = await initFun();
            setInitData(reData);
            setLoading(false);
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(initData);
    })

    return (
        (loading) ?
            (
                <CircularProgress className="Loading" />
            ) : (
                <div className="setting-page" {...props}>
                    {children}
                    <div className={(initData !== data) ? 'setting-save-close' : 'setting-save-open'}>
                        <div className="Text">
                            Changes detected! Please save or cancel.
                        </div>
                    </div>
                </div>
            )
    );
};

export default SettingPage;