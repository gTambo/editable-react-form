import { ChangeEvent, FocusEvent, FormEvent, useEffect } from "react";
import './EditableFormElements.css';


export const EditableTextField = (props: any) => {
    const { editMode, setEditMode, userText, setUserText, inputRef } = props.inherited;

    const updateText = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUserText(e.currentTarget.value);
    }

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
            <div className="editable-text" tabIndex={props.elIndex} onFocus={e => handleFocus(e)} >{userText}</div>
            : <form tabIndex={props.elIndex + 1} id="editable-input" onSubmit={submit}>
                <input ref={inputRef} 
                       className=""
                       autoFocus 
                       type="text"
                       placeholder={userText}
                       onChange={e => updateText(e)} 
                       onKeyUp={handleKeyEvent}
                    //    onBlur={e => handleBlur(e)} 
                       />
            </ form>
        
        
    )
}