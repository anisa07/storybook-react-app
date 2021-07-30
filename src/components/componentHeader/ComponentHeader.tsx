import {EditableName} from '../editableName/EditableName';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import {warning} from "../../shared/lightColors";
import {connect} from "react-redux";
import {changeHeaderName, RootState} from "../../lib/redux";
import Tooltip from '@material-ui/core/Tooltip';

interface ComponentHeaderProps {
    name: string;
    label?: string;
    buttonLabel?: string;
    onDeleteComponent: () => void;
    onUpdateComponentName: (newName: string) => void;
}

const useStyles = makeStyles({
    componentHeaderContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "baseline",
    },
    closeIcon: {
        paddingLeft: '0.3rem',
        paddingRight: '0.3rem',
        color: warning,
        minWidth: '36px',
    }
})

export const ComponentHeader = (props: ComponentHeaderProps) => {
    const {name, label, buttonLabel, onUpdateComponentName, onDeleteComponent} = props;
    const classes = useStyles();

    const handleUpdateComponent = (newName: string) => {
        onUpdateComponentName(newName)
    }

    return (
        <div className={classes.componentHeaderContainer}>
            <EditableName
                label={label}
                value={name}
                onChangeValue={handleUpdateComponent}
            />
            <Tooltip title={buttonLabel || "Delete Item"}>
                <Button
                    aria-label="remove item"
                    className={classes.closeIcon}
                    onClick={onDeleteComponent}>
                    <CloseIcon/>
                </Button>
            </Tooltip>
        </div>
    )
}

export default connect(
    ({headerName}: RootState) => ({
        name: headerName,
    }),
    dispatch => ({
        onUpdateComponentName: (value: string) => dispatch(changeHeaderName(value)),
    })
)(ComponentHeader);
