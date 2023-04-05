import { FormEvent, useEffect, useId } from "react";
import './EditableFormElements.css';


export const EditableTextField = (props: any) => {
    const { editMode, setEditMode, userText, setUserText, inputRef } = props.inherited;
    const id = useId();

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(userText !== ''){
            setEditMode(false);
        }
    }

    const handleKeyEvent = (e: any) => {
        e.preventDefault();
        if(e.key === 'ArrowRight') inputRef.current.value = inputRef.current.placeholder;
        else console.log(e.key);
        
    }

    useEffect(() => {

    }, [userText, editMode, inputRef]);

    return !editMode ? (
             
            
            <div id={`${id}-editableText`} 
                 className="editable-text"
                 data-testid="editable-text" 
                 tabIndex={props.elIndex} 
                 onFocus={e => setEditMode(true)} >
                    {userText}
            </div>
            ) : (
            <form tabIndex={props.elIndex + 1} id="editable-input" onSubmit={submit}>
                <label htmlFor={`${id}-input`}></label>
                <input ref={inputRef} 
                       id={`${id}-input`}
                       data-testid="editable-input"
                       className=""
                       autoFocus 
                       type="text"
                       placeholder={userText}
                       onChange={e => setUserText(e.currentTarget.value)} 
                       onKeyUp={handleKeyEvent}
                       required
                       />
            </ form>
            
    )
}