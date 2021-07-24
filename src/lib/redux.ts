import {createStore} from 'redux';

export interface Action {
    type: actions,
    value: any
}

export interface State {
    editableName: string,
    headerName: string,
}

export enum actions {
    CHANGE_EDITABLE_NAME = 'CHANGE_EDITABLE_NAME',
    CHANGE_HEADER_NAME = 'CHANGE_HEADER_NAME',
};

export const changeEditableName = (value: string) => {
    return {type: actions.CHANGE_EDITABLE_NAME, value}
};

export const changeHeaderName = (value: string) => {
    return {type: actions.CHANGE_HEADER_NAME, value}
};

export const reducer = (state: State | undefined, action: Action): State => {
    if (state) {
        switch (action.type) {
            case actions.CHANGE_EDITABLE_NAME:
                return {...state, editableName: action.value}
            case actions.CHANGE_HEADER_NAME:
                return {...state, headerName: action.value}
            default:
                return state;
        }
    } else {
        return {
            editableName: '',
            headerName: ''
        } as State
    }
};

export type RootState = ReturnType<typeof reducer>

export default createStore(reducer,
    {
        editableName: '',
        headerName: ''
    }
);
