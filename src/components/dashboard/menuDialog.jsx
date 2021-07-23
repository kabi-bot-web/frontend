import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
// 功能開啟彈跳視窗
const MenuDialog = ({ dialog, setDialog, options, setOptions, id, setFocus }) => {
    const history = useHistory();
    const StyleDialog = withStyles({
        paper: {
            backgroundColor: '#272934',
            color: '#ffff'
        }

    })(Dialog);
    // 文字記得翻譯
    return (
        <StyleDialog
            open={Boolean(dialog)}
            onClose={() => {
                setDialog(false);
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Do you want to enable this plugin?</DialogTitle>
            <DialogActions>
                <Button
                    onClick={() => {
                        setDialog(false);
                    }}
                    variant="outlined"
                    style={{ color: '#ffff' }}
                >
                    Nope
                </Button>
                <Button
                    onClick={() => {
                        let data = Object.assign([], options);
                        data[dialog[0]].options[dialog[1]].switch = true;
                        setOptions(data);
                        history.push(`/dashboard/${id}/${data[dialog[0]].options[dialog[1]].url}`);
                        setFocus(dialog);
                        setDialog(false);
                    }}
                    color="primary"
                    autoFocus
                    variant="contained"
                >
                    Yes
                </Button>
            </DialogActions>
        </StyleDialog>
    );
};

export default MenuDialog;