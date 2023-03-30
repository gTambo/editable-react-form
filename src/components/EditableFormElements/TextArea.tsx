import { ChangeEvent, FocusEvent, FormEvent, useEffect } from "react";
import './EditableFormElements.css';

export const EditableTextArea = (props: any) => {
    const { editMode, setEditMode, userText, setUserText, inputRef } = props.inherited;

    const updateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setUserText(e.currentTarget.value);
    }

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

    useEffect(() => {

    }, [userText, editMode, inputRef]);

    return(
        
            !editMode 
            ? 
            <div className="editable-text" tabIndex={props.elIndex} onFocus={e => handleFocus(e)} >{userText}</div>
            : <form tabIndex={props.elIndex + 1} id="editable-input" onSubmit={submit}>
                <textarea ref={inputRef} 
                       autoFocus 
                       placeholder={userText}
                       value={userText}
                       onChange={e => updateText(e)} 
                       onKeyUp={handleKeyEvent}
                       />
            </ form>
        
        
    )
}