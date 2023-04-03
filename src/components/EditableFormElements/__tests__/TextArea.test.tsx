import { render, screen } from "@testing-library/react";
import { EditableTextArea } from "../TextArea";

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
        const element = screen.getByTestId("editableArea");
        expect(element).toBeInTheDocument();
    });
});