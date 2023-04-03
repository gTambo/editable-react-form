import { render, screen } from "@testing-library/react";
import { EditableTextArea } from "../TextArea";
import { InputProps } from "../../EditableView/ControlView";
import userEvent from "@testing-library/user-event";

describe('EditableTextArea', () => {
    // beforeAll()
    test('should render a text element', () => {
        const passable = {
            editMode: false,
            setEditMode: jest.fn(),
            userText: 'Click here and type some text',
            setUserText: jest.fn(),
            inputRef: { current: null }
        };
        render(<EditableTextArea inherited={passable} elIndex={0} />);
        const element = screen.getByTestId("editable-area");
        expect(element).toBeInTheDocument();
    });
    test('should show a text field if "editMode" is false', async () => {
        let passable: InputProps = {
            editMode: false,
            setEditMode: jest.fn(),
            userText: 'Click here and type some text',
            setUserText: jest.fn(),
            inputRef: { current: null }
        };
        render(<EditableTextArea inherited={passable} elIndex={0} />);
        const textField = await screen.findByTestId('editable-area');
        expect(textField).toBeInTheDocument();
    });
    test('should show a text area if "editMode" is true', async () => {
        let passable:InputProps = {
            editMode: true,
            setEditMode: jest.fn(),
            userText: 'Click here and type some text',
            setUserText: jest.fn(),
            inputRef: { current: null }
        };
        render(<EditableTextArea inherited={passable} elIndex={0} />);
        const textField = await screen.findByTestId('edit-text-area');
        expect(textField).toBeInTheDocument();
    });
    test('should show not show the text field if blank', async () => {
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
        render(<EditableTextArea inherited={passable} elIndex={0} />)
        const textElement = await screen.findByTestId('edit-text-area')
        userEvent.click(textElement);
        userEvent.keyboard('{ArrowRight}');
        userEvent.keyboard('{Backspace>31}');
        userEvent.keyboard('{Enter}');
        expect(screen.queryByTestId('editable-area')).not.toBeInTheDocument()
    });
});