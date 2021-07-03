import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Default, DefaultWithValue, DefaultWithLabel } from './EditableName.stories';

it('renders <EditableName /> without value and custom label', () => {
    const handleChange = jest.fn();
    render(<Default  value={''} label={''} onChangeValue={handleChange}/>);
    expect(screen.getByRole("textbox").getAttribute('value')).toBe('');
    expect(screen.getByRole("button").getAttribute('aria-label')).toBe('apply text');
    expect(screen.getByText('Editable Name')).toBeTruthy();
});

it('renders <EditableName /> with label and value', () => {
    const handleChange = jest.fn();
    render(<DefaultWithValue  value={'Awesome Value'} label={'Important Label'} onChangeValue={handleChange}/>);
    expect(screen.getByRole("heading", {name: "Important Label"})).toBeTruthy();
    expect(screen.queryByText("textbox")).toBeFalsy();
    expect(screen.getByRole("button", {name: "Edit Awesome Value"})).toBeTruthy();
});

it('<EditableName /> should call onChangeValue', () => {
    const handleChange = jest.fn();
    render(<DefaultWithLabel value={''} label={'New label'} onChangeValue={handleChange}/>);
    const textfield = screen.getByRole("textbox");
    fireEvent.change(textfield, { target: { value: 'New Name' } });
    expect(textfield.getAttribute('value')).toBe('New Name');
    fireEvent.click(screen.getByRole("button"));
    expect(handleChange).toHaveBeenCalled();
});
