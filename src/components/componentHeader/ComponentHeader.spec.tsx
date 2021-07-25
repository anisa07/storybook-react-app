import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Default, DefaultWithLabel } from './ComponentHeader.stories';
import {Middleware, Dispatch, AnyAction, Store} from 'redux';
import { Provider } from 'react-redux';

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
const mockStore = configureStore(middlewares);
let onDeleteComponent: () => void;
let store: Store;
beforeEach(() => {
    const initialState = {
        headerName: ''
    }
    store = mockStore(initialState);
    onDeleteComponent = jest.fn();
})

it('renders <ComponentHeader /> without header title value and custom label', () => {
    render(<Provider store={store}><Default label={''} onDeleteComponent={onDeleteComponent}/></Provider>);
    expect(screen.getByRole("textbox").getAttribute('value')).toBe('');
    expect(screen.getByRole("button", {name: 'apply text'})).toBeTruthy();
    expect(screen.getByRole("button", {name: 'remove item'})).toBeTruthy();
});

it('renders <ComponentHeader /> with label and header title value', () => {
    const initialState = {
        headerName: 'Awesome Title Value'
    }
    store = mockStore(initialState);
    render(<Provider store={store}><DefaultWithLabel label={'Important Header Label'} onDeleteComponent={onDeleteComponent}/></Provider>);
    expect(screen.getByRole("heading", {name: "Important Header Label"})).toBeTruthy();
    expect(screen.queryByText("textbox")).toBeFalsy();
    expect(screen.getByRole("button", {name: "edit text"})).toBeTruthy();
    expect(screen.getByRole("button", {name: "remove item"})).toBeTruthy();
    expect(screen.getByText('Awesome Title Value')).toBeTruthy();
});

it('<ComponentHeader /> should call delete item', () => {
    const initialState = {
        headerName: 'Awesome Title Value'
    }
    store = mockStore(initialState);
    render(<Provider store={store}><DefaultWithLabel label={'New label'} onDeleteComponent={onDeleteComponent}/></Provider>);
    fireEvent.click(screen.getByRole("button", {name: "remove item"}));
    expect(onDeleteComponent).toHaveBeenCalled();
});
