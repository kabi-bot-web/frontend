import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const MenuDialog = ({ dialog, setDialog, options, setOptions, id }) => {
    const history = useHistory();
    const StyleDialog = withStyles({
        paper: {
            backgroundColor: '#272934',
            color: '#ffff'
        }

    })(Dialog);
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
                        setDialog(false);
                        history.push(`/dashboard/${id}/${data[dialog[0]].options[dialog[1]].url}`);
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