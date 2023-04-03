import { render, screen } from "@testing-library/react";
import { InputProps } from "../../EditableView/ControlView";

import userEvent from "@testing-library/user-event";
import { EditableTextField } from '../TextInput';

describe('EditableTextField', () => {
    test('should render', () => {
        const passable: InputProps = {
            editMode: false,
            setEditMode: jest.fn(),
            userText: 'Click here and type some text',
            setUserText: jest.fn(),
            inputRef: { current: null }
        };
        expect(() => render(<EditableTextField inherited={passable} elIndex={0} />)).not.toThrow();
    });
    test('should show a text field if "editMode" is false', async () => {
        let passable: InputProps = {
            editMode: false,
            setEditMode: jest.fn(),
            userText: 'Click here and type some text',
            setUserText: jest.fn(),
            inputRef: { current: null }
        };
        render(<EditableTextField inherited={passable} elIndex={0} />);
        const textField = await screen.findByTestId('editable-text');
        expect(textField).toBeInTheDocument();
    });
    test('should show an input if "editMode" is true', async () => {
        let passable:InputProps = {
            editMode: true,
            setEditMode: jest.fn(),
            userText: 'Click here and type some text',
            setUserText: jest.fn(),
            inputRef: { current: null }
        };
        render(<EditableTextField inherited={passable} elIndex={0} />);
        const textField = await screen.findByTestId('editable-input');
        expect(textField).toBeInTheDocument();
    });
    test('should show an error message if blank', async () => {
        let editMode = true;
        const setEditMode = jest.fn();
        const setUserText = jest.fn();
        const passable = {
            editMode: editMode,
            setEditMode: setEditMode,
            userText: '',
            setUserText: setUserText,
            inputRef: { current: null }
        };
        render(<EditableTextField inherited={passable} elIndex={0} />)
        const textElement = await screen.getByTestId('editable-input')
        userEvent.click(textElement);
        userEvent.keyboard('{ArrowRight}');
        userEvent.keyboard('{Backspace>31}');
        userEvent.keyboard('{Enter}');
        expect(screen.queryByTestId('error-msg')).toBeInTheDocument();
    });
});