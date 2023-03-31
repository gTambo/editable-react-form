import { render, screen } from "@testing-library/react";
import { EditableTextArea } from "../TextArea";

describe('EditableTextArea', () => {
    // beforeAll()
    test('should render', () => {
        expect(() => render(<EditableTextArea />)).not.toThrow();
    });
});