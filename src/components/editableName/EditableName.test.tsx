import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Default, DefaultWithLabel } from './EditableName.stories';
import {Middleware, Dispatch, AnyAction, Store} from 'redux';
import { Provider } from 'react-redux';

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
const mockStore = configureStore(middlewares);
let store: Store;
beforeEach(() => {
    const initialState = {
        editableName: ''
    }
    store = mockStore(initialState);
})

it('renders <EditableName /> without value and custom label', () => {
    render(<Provider store={store}><Default label={''} /></Provider>);
    expect(screen.getByRole("textbox").getAttribute('value')).toBe('');
    expect(screen.getByRole("button").getAttribute('aria-label')).toBe('apply text');
    expect(screen.getByText('Editable Name')).toBeTruthy();
});

it('renders <EditableName /> with label and value', () => {
    const initialState = {
        editableName: 'Awesome Value'
    }
    store = mockStore(initialState);
    render(<Provider store={store}><DefaultWithLabel label={'Important Label'} /></Provider>);
    expect(screen.getByRole("heading", {name: "Important Label"})).toBeTruthy();
    expect(screen.queryByText("textbox")).toBeFalsy();
    expect(screen.getByText('Awesome Value')).toBeTruthy();
});

it('<EditableName /> should call onChangeValue', () => {
    render(<Provider store={store}><DefaultWithLabel label={'New label'} /></Provider>);
    const textfield = screen.getByRole("textbox");
    fireEvent.change(textfield, { target: { value: 'New Name' } });
    expect(textfield.getAttribute('value')).toBe('New Name');
    fireEvent.click(screen.getByRole("button"));
});
