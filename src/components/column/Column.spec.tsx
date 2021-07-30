import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Default } from './Column.stories';
import {Middleware, Dispatch, AnyAction, Store} from 'redux';
import { Provider } from 'react-redux';

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
const mockStore = configureStore(middlewares);
let onDeleteColumn: () => void;
let store: Store;
beforeEach(() => {
    onDeleteColumn = jest.fn();
})

it('renders <Column /> with title value and without cards', () => {
    const initialState = {
        column: {
            id: 'testId1',
            name: 'Column1',
            cards: []
        }
    }
    store = mockStore(initialState);
    render(<Provider store={store}><Default index={0}  onDeleteColumn={onDeleteColumn} /></Provider>);
    expect(screen.getByRole("heading", {name: "Column Name"})).toBeTruthy();
    expect(screen.getByRole("button", {name: "Add New Card"})).toBeTruthy();
});

it('renders <Column /> with cards', () => {
    const initialState = {
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
        }
    }
    store = mockStore(initialState);
    render(<Provider store={store}><Default index={1} onDeleteColumn={onDeleteColumn} /></Provider>);
    expect(screen.getByRole("heading", {name: "Column Name"})).toBeTruthy();
    expect(screen.queryByText("textbox")).toBeFalsy();
    expect(screen.getByText('card1')).toBeTruthy();
    expect(screen.getByText('card1.2')).toBeTruthy();
});

it('<Column /> should call delete column', () => {
    const initialState = {
        column: {
            id: 'testId1',
            name: 'Column1',
            cards: []
        }
    }
    store = mockStore(initialState);
    render(<Provider store={store}><Default index={0} onDeleteColumn={onDeleteColumn} /></Provider>);
    fireEvent.click(screen.getByRole("button", {name: "remove item"}));
    expect(onDeleteColumn).toHaveBeenCalled();
});

