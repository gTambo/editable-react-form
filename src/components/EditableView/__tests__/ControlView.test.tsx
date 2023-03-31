import { render, screen } from "@testing-library/react";
import { EditableTextField } from "../../EditableFormElements/TextInput";
import ControlView from "../ControlView";

jest.mock('../../EditableFormElements/TextInput');
describe('ControlView', () => {
    // beforeAll(() => {
        
    // });

    test('should render without crashing', () => {
        expect(() => render(<ControlView />)).not.toThrow();
    });
    test('should not render mocked child ', () => {
        render(<ControlView />);
        let childElement = screen.queryByText(/EditableTextField/i);
        expect(childElement).not.toBeInTheDocument();
        const passable = [{
            editMode: false,
            setEditMode: jest.fn(),
            userText: 'Click here and type some text',
            setUserText: jest.fn(),
            inputRef: { current: null }
        }];
        const elIndex = 0
        // expect(EditableTextField).toHaveBeenCalledWith(
        //     expect.objectContaining({elIndex: elIndex, inherited: passable }), 
        //     expect.anything()
        //     )
    });
});

