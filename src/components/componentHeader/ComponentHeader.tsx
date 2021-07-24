import {EditableName} from '../editableName/EditableName';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {warning} from "../../shared/lightColors";
import {connect} from "react-redux";
import {changeHeaderName, RootState} from "../../lib/redux";

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
        justifyContent: 'space-between'
    },
    closeIcon: {
        paddingLeft: '0.3rem',
        paddingRight: '0.3rem',
        color: warning
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
            <Button
                className={classes.closeIcon}
                onClick={onDeleteComponent}>
                <CloseIcon />
                {buttonLabel}
            </Button>
        </div>
    )
}

export default connect(
    ({ headerName }: RootState) => ({
        name: headerName,
    }),
    dispatch => ({
        onUpdateComponentName: (value: string) => dispatch(changeHeaderName(value)),
        onDeleteComponent: () => {console.log('Item deleted!!!')}
    })
)(ComponentHeader);
