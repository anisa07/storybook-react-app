import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Default } from './Card.stories';
import {Middleware, Dispatch, AnyAction, Store} from 'redux';
import { Provider } from 'react-redux';

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
const mockStore = configureStore(middlewares);
let onDeleteCard: () => void;
let store: Store;
beforeEach(() => {
    onDeleteCard = jest.fn();
})

it('renders <Card /> without header title value and custom label', () => {
    const initialState = {
        card: {
            id: '',
            name: '',
            description: ''
        }
    }
    store = mockStore(initialState);
    render(<Provider store={store}><Default index={0} onDeleteCard={onDeleteCard}/></Provider>);
    expect(screen.getByRole("textbox").getAttribute('value')).toBe('');
    expect(screen.getByRole("button", {name: 'apply text'})).toBeTruthy();
    expect(screen.getByRole("button", {name: 'remove item'})).toBeTruthy();
    expect(screen.getByRole("button", {name: 'Open Edit'})).toBeTruthy();
});

it('renders <Card /> with label and header title value', () => {
    const initialState = {
        card: {
            id: '1234test',
            name: 'Important Card',
            description: 'Description test card'
        }
    }
    store = mockStore(initialState);
    render(<Provider store={store}><Default index={1} onDeleteCard={onDeleteCard}/></Provider>);
    expect(screen.getByRole("heading", {name: "Card Name"})).toBeTruthy();
    expect(screen.queryByText("textbox")).toBeFalsy();
    expect(screen.getByText('Important Card')).toBeTruthy();
});

it('<Card /> should call delete item', () => {
    const initialState = {
        card: {
            id: '1234test',
            name: 'Important Card',
            description: 'Description test card'
        }
    }
    store = mockStore(initialState);
    render(<Provider store={store}><Default index={1} onDeleteCard={onDeleteCard}/></Provider>);
    fireEvent.click(screen.getByRole("button", {name: "remove item"}));
    expect(onDeleteCard).toHaveBeenCalled();
});

it('<Card /> should open edit textarea', () => {
    const initialState = {
        card: {
            id: '1234test',
            name: 'Important Card',
            description: 'Description test card'
        }
    }
    store = mockStore(initialState);
    render(<Provider store={store}><Default index={1} onDeleteCard={onDeleteCard}/></Provider>);
    fireEvent.click(screen.getByRole("button", {name: "Open Edit"}));
    expect(screen.getByTestId('description')).toBeTruthy();
    expect(screen.getByText('Description test card')).toBeTruthy();
});
