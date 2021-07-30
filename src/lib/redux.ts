import {createStore} from 'redux';
import {BoardModel, CardModel, ColumnModel} from "../shared/types";

export interface Action {
    type: actions,
    value: any
}

export interface State {
    editableName: string,
    headerName: string,
    card: CardModel,
    column: ColumnModel,
    board: BoardModel
}

export enum actions {
    CHANGE_EDITABLE_NAME = 'CHANGE_EDITABLE_NAME',
    CHANGE_HEADER_NAME = 'CHANGE_HEADER_NAME',
    CHANGE_CARD = 'CHANGE_CARD',
    CHANGE_COLUMN = 'CHANGE_COLUMN',
    CHANGE_BOARD = 'CHANGE_BOARD'
};

export const changeEditableName = (value: string) => {
    return {type: actions.CHANGE_EDITABLE_NAME, value}
};

export const changeHeaderName = (value: string) => {
    return {type: actions.CHANGE_HEADER_NAME, value}
};

export const changeCard = (card: CardModel) => {
    return {type: actions.CHANGE_CARD, value: card}
}

export const changeColumn = (column: ColumnModel) => {
    return {type: actions.CHANGE_COLUMN, value: column}
}

export const changeBoard = (board: BoardModel) => {
    return {type: actions.CHANGE_BOARD, value: board}
}

export const reducer = (state: State | undefined, action: Action): State => {
    if (state) {
        switch (action.type) {
            case actions.CHANGE_EDITABLE_NAME:
                return {...state, editableName: action.value}
            case actions.CHANGE_HEADER_NAME:
                return {...state, headerName: action.value}
            case actions.CHANGE_CARD:
                return {...state, card: action.value}
            case actions.CHANGE_COLUMN:
                return {...state, column: action.value}
            case actions.CHANGE_BOARD:
                return {...state, board: action.value}
            default:
                return state;
        }
    } else {
        return {
            editableName: '',
            headerName: '',
            card: {
                id: '',
                name: '',
                description: ''
            },
            column: {
                id: '',
                name: '',
                cards: []
            },
            board: {
                id: '',
                name: '',
                columns: []
            }
        } as State
    }
};

export type RootState = ReturnType<typeof reducer>

export default createStore(reducer,
    {
        editableName: '',
        headerName: '',
        card: {
            id: '',
            name: '',
            description: ''
        },
        column: {
            id: 'testId1',
            name: 'Column1',
            cards: [{
                id: 'test1',
                name: 'card1',
                description: 'description1'
            }, {
                id: 'test1.2',
                name: 'card1.2',
                description: 'description1.2'
            }]
        },
        board: {
            id: 'board1',
            name: 'Board1',
            columns: []
        }
    }
);
