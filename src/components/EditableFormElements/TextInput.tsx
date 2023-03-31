import { ChangeEvent, FocusEvent, FormEvent, useEffect, useId } from "react";
import './EditableFormElements.css';


export const EditableTextField = (props: any) => {
    const { editMode, setEditMode, userText, setUserText, inputRef } = props.inherited;
    const id = useId();


    const handleFocus = (e: FocusEvent<HTMLDivElement, Element>) => {
        setEditMode(true);
        setUserText(e.currentTarget.textContent);
    }

    // const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     setUserText(e.currentTarget.placeholder);
    //     setEditMode(false);
    // }

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEditMode(false);
    }

    const handleKeyEvent = (e: any) => {
        e.preventDefault();
        if(e.key == 'ArrowRight') inputRef.current.value = inputRef.current.placeholder;
    }

    useEffect(() => {

    }, [userText, editMode, inputRef]);

    return(
        
            !editMode 
            ? 
            <div id={`${id}-editableText`} className="editable-text" tabIndex={props.elIndex} onFocus={e => handleFocus(e)} >{userText}</div>
            : <form tabIndex={props.elIndex + 1} id="editable-input" onSubmit={submit}>
                <label htmlFor={`${id}-input`}></label>
                <input ref={inputRef} 
                       id={`${id}-input`}
                       data-testid="editableInput"
                       className=""
                       autoFocus 
                       type="text"
                       placeholder={userText}
                       onChange={e => setUserText(e.currentTarget.value)} 
                       onKeyUp={handleKeyEvent}
                    //    onBlur={e => handleBlur(e)} 
                       />
            </ form>
        
        
    )
}