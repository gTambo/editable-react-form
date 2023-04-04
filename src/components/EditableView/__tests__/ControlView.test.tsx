import React, { Dispatch, SetStateAction } from "react";
import { render, screen } from "@testing-library/react";
import { EditableTextField } from "../../EditableFormElements/TextInput";
import ControlView, { InputProps } from "../ControlView";

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
    });
    
});

