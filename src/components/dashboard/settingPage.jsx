import React, {useState, useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './sass/settingPage.sass';

const defaultFun = async () => { };

const SettingPage = ({
  data,
  setData,
  saveFun = defaultFun,
  children,
  initFun = defaultFun,
  ...props
}) => {
  const [initData, setInitData] = useState({});

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const reData = await initFun();
      setInitData(reData);
      setData(JSON.parse(JSON.stringify(reData)));
      setLoading(false);
    })();
  }, []);

  return (
    (loading) ?
      (
        <CircularProgress className="Loading" />
      ) : (
        <div className="setting-page" {...props}>
          {children}
          <div className="block"></div>
          <div
            className={(JSON.stringify(initData) !== JSON.stringify(data)) ?
              'setting-save-open' : 'setting-save-close'}
          >
            <div className="Text">
              Changes detected! Please save or cancel.
            </div>
            <div className="Buttons">
              <Button
                className="button"
                variant="outlined"
                color="primary"
                onClick={() => {
                  setData(JSON.parse(JSON.stringify(initData)));
                }}
              >
                Cancel
              </Button>
              <Button
                className="button"
                variant="contained"
                color="primary"
                onClick={() => {
                  saveFun();
                  setInitData(JSON.parse(JSON.stringify(data)));
                }}
              >
                Save
              </Button>
            </div>

          </div>
        </div>
      )
  );
};

SettingPage.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  saveFun: PropTypes.func,
  initFun: PropTypes.func,
  children: PropTypes.any,
};

export default SettingPage;
