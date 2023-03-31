import { render, screen } from "@testing-library/react";
import { EditableTextField } from '../TextInput';

describe('EditableTextField', () => {
    test('should render', () => {
        const passable = [{
            editMode: false,
            setEditMode: jest.fn(),
            userText: 'Click here and type some text',
            setUserText: jest.fn(),
            inputRef: { current: null }
        }];
        expect(() => render(<EditableTextField inherited={passable} elIndex={0} />)).not.toThrow();
    });
});