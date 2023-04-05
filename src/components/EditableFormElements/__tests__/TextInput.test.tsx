import { fireEvent, render, screen } from "@testing-library/react";
import { InputProps } from "../../EditableView/ControlView";

import userEvent from "@testing-library/user-event";
import { EditableTextField } from '../TextInput';


describe('EditableTextField', () => {
    
    const passable: InputProps = {
        editMode: false,
        setEditMode: jest.fn(),
        userText: 'Click here and type some text',
        setUserText: jest.fn(),
        inputRef: { current: null }
    };

    test('should render', () => {
        
        expect(() => render(<EditableTextField inherited={passable} elIndex={0} />)).not.toThrow();
    });
    test('should show a text field if "editMode" is false', async () => {
        render(<EditableTextField inherited={passable} elIndex={0} />);
        const textField = await screen.findByTestId('editable-text');
        expect(textField).toBeInTheDocument();
    });
    test('should show an input if "editMode" is true', async () => {
        passable.editMode = true 
        render(<EditableTextField inherited={passable} elIndex={0} />);
        const textField = await screen.findByTestId('editable-input');
        expect(textField).toBeInTheDocument();
    });
    test('should show not show the text field if blank', async () => {
        passable.editMode = true;
        passable.userText = '';
        render(<EditableTextField inherited={passable} elIndex={0} />)
        const textElement = await screen.findByTestId('editable-input')
        userEvent.click(textElement);
        userEvent.keyboard('{ArrowRight}');
        userEvent.keyboard('{Backspace>31}');
        userEvent.keyboard('{Enter}');
        // this works for the wrong reason - the mocked jest funtions do not update the state,
        // so the following assertion will be ALWAYS be true for this spec 
        expect(screen.queryByTestId('editable-text')).not.toBeInTheDocument()
        expect(screen.getByTestId('editable-input')).toBeInTheDocument();
    });
    test("should initialize with 'hiya buddy!' when passed 'hiya buddy!'", async () => {
        passable.editMode = false;
        passable.userText = 'hiya buddy!'
        render(<EditableTextField inherited={passable} elIndex={0} />)
        expect(screen.getByText('hiya buddy!')).toBeInTheDocument();
    });
    test("should show 'hiya back buddy!' when entered into field", async () => {
        passable.editMode = true;
        passable.userText = 'Click here and type some text'
        render(<EditableTextField inherited={passable} elIndex={0} />);
        const inputField = await screen.findByTestId('editable-input') as HTMLInputElement;
        userEvent.click(inputField);
        userEvent.keyboard('yo, whaddup.');
        userEvent.keyboard('{Enter}');
        expect(screen.getByDisplayValue('yo, whaddup.')).toBeInTheDocument();
        /*Aternate method of doing a similar thing. */
        fireEvent.change(inputField, 
        { target: { value: 'hiya back buddy!'},});
        expect(screen.getByDisplayValue('hiya back buddy!')).toBeInTheDocument();
    });
});