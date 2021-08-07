import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import './sass/settingPage.sass';

const defaultFun = async () => { }

const SettingPage = ({ data, children, initFun = defaultFun, ...props }) => {
    let [initData, setInitData] = useState({});

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const reData = await initFun();
            setInitData(reData);
            setLoading(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(initData === data);
        JSON.stringify()
    })

    return (
        (loading) ?
            (
                <CircularProgress className="Loading" />
            ) : (
                <div className="setting-page" {...props}>
                    {children}
                    <div className="block"></div>
                    <div className={(JSON.stringify(initData) !== JSON.stringify(data)) ? 'setting-save-open' : 'setting-save-close'}>
                        <div className="Text">
                            Changes detected! Please save or cancel.
                        </div>
                        <div className="Buttons">
                            <Button className="button" variant="outlined" color="primary">
                                Cancel
                            </Button>
                            <Button className="button" variant="contained" color="primary">
                                Save
                            </Button>
                        </div>

                    </div>
                </div>
            )
    );
};

export default SettingPage;