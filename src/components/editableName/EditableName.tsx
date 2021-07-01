import React, {ChangeEvent, useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

interface EditableNameProps {
    label?: string,
    value: string,
    onChangeValue: (v: string) => void;
}

export const EditableName = (props: EditableNameProps) => {
    const {label, value: savedValue, onChangeValue} = props;
    const [editMode, setEditMode] = useState(true);
    const [value, setValue] = useState(savedValue);

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

    return (
        <div className={"name-container"}>
            {!editMode && <Typography variant='subtitle2'>{label}</Typography>}
            {
                editMode
                    ? <div className={"input-container"}>
                        <TextField label={label} value={value} onChange={handleChangeValue} onBlur={handleUpdate} />
                        <IconButton color="primary" aria-label="apply text" component="span" onClick={handleUpdate}>
                            <DoneIcon />
                        </IconButton>
                    </div>
                    : <Button color="primary" onClick={toggleEditMode}>Edit
                        <EditOutlinedIcon />
                    </Button>
            }
        </div>
    )
}
