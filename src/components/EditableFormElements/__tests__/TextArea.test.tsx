import { render, screen } from "@testing-library/react";
import { EditableTextArea } from "../TextArea";

describe('EditableTextArea', () => {
    // beforeAll()
    test('should render a text element', () => {
        render(<EditableTextArea />);
        const element = screen.getByTestId("editableArea");
        expect(element).toBeInTheDocument();
    });
});