import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {useState} from "react";
import {theme} from "../../shared/theme";

interface AlertDialogProps {
    title: string;
    text: string;
    agreeButton?: string;
    cancelButton?: string;
    onCancel: () => void;
    onAgree: () => void;
}

const useStyles = makeStyles({
    agreeButton: {
        color: theme.palette.warning.color
    }
})

export const AlertDialog = (props: AlertDialogProps) => {
    const { title, text, agreeButton, cancelButton, onCancel, onAgree } = props;
    const classes = useStyles();

    const agreeButtonText = () => agreeButton ? agreeButton : 'Ok';

    const cancelButtonText = () => cancelButton ? cancelButton : 'Cancel';
    return (
        <>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary">
                    {cancelButtonText()}
                </Button>
                <Button className={classes.agreeButton} onClick={onAgree} autoFocus>
                    {agreeButtonText()}
                </Button>
            </DialogActions>
        </>
    )
}

interface AlertDialogExampleProps extends AlertDialogProps {}

export const AlertDialogExample = (props: AlertDialogExampleProps) => {
    const {title, text} = props;
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-text"
            >
                <AlertDialog title={title} text={text} onCancel={handleClose} onAgree={handleClose}/>
            </Dialog>
        </>
    )
}

