import React, {ChangeEvent, useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {RootState,changeEditableName} from "../../lib/redux";

interface EditableNameProps {
    label?: string,
    value: string,
    onChangeValue: (v: string) => void;
}

const useStyles = makeStyles({
    caption: {
        textTransform: "capitalize",
        display: "inline-block",
        margin: '0 0.5rem',
        fontWeight: 'bold'
    },
    nameContainer: {
        display: 'flex'
    },
})

export const EditableName = (props: EditableNameProps) => {
    const {label, value: savedValue, onChangeValue} = props;
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(savedValue);
    const classes = useStyles();

    useEffect(() => {
        if (!savedValue) {
            setEditMode(true);
        }
    }, [savedValue])

    useEffect(() => {
        if (value !== savedValue) {
            setValue(savedValue);
        }
    }, [savedValue, editMode])


    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const handleUpdate = () => {
        if (value) {
            onChangeValue(value);
        }
        toggleEditMode();
    }

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const controlLabel = () => label || 'Editable Name'

    return (
        <div>
            {!editMode && <Typography color="secondary" variant='subtitle2'>{controlLabel()}</Typography>}
            {
                editMode
                    ? <div className={classes.nameContainer}>
                        <TextField
                            autoFocus={true}
                            color={'primary'}
                            label={controlLabel()}
                            value={value}
                            onChange={handleChangeValue}
                            onBlur={handleUpdate}
                        />
                        <IconButton color="primary" aria-label="apply text" component="span" onClick={handleUpdate}>
                            <DoneIcon/>
                        </IconButton>
                    </div>
                    : <Button aria-label="edit text" color="primary" onClick={toggleEditMode}>Edit
                        <Typography variant='subtitle1' color={'secondary'} className={classes.caption}>{value}</Typography>
                        <EditOutlinedIcon/>
                    </Button>
            }
        </div>
    )
}

export default connect(
    ({ editableName }: RootState) => ({
        value: editableName,
    }),
    dispatch => ({
        onChangeValue: (value: string) => dispatch(changeEditableName(value)),
    })
)(EditableName);
