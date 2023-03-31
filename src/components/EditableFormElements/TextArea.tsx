import { ChangeEvent, FocusEvent, FormEvent, useEffect, useId } from "react";
import './EditableFormElements.css';

export const EditableTextArea = (props: any) => {
    const { editMode, setEditMode, userText, setUserText, inputRef } = props.inherited;
    const id = useId();

    const handleFocus = (e: FocusEvent<HTMLDivElement, Element>) => {
        setEditMode(true);
        setUserText(e.currentTarget.textContent);
    }

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEditMode(false);
    }

    const handleKeyEvent = (e: any) => {
        e.preventDefault();
        if(e.key == 'ArrowRight') inputRef.current.value = inputRef.current.placeholder;
        if (e.key === "Enter" && !e.shiftKey) {
            submit(e);
        }
    }

    useEffect(() => {}, [userText, editMode, inputRef]);

    return(
            !editMode 
            ? 
            <div data-testid="editableArea" 
                 className="editable-text" 
                 tabIndex={props.elIndex} 
                 onFocus={e => handleFocus(e)} >
                    {userText}
            </div>
            : 
            <form tabIndex={props.elIndex + 1} id="editable-text-area" onSubmit={submit}>
                <label htmlFor={`${id}-area`}></label>
                <textarea ref={inputRef}
                       id={`${id}-area`}
                       
                       autoFocus 
                       placeholder={userText}
                       value={userText}
                       onChange={e => setUserText(e.currentTarget.value)} 
                       onKeyUp={handleKeyEvent}
                       />
            </ form>
    )
}