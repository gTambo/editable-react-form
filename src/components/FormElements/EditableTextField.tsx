import { useState, useEffect } from "react";


export const EditableTextField = (props: any) => {
    const [editMode, setEditMode] = useState(false);
    const [userText, setUserText] = useState<string>('This is some text');

    const updateText = (newText: string) => {
        setUserText(newText);
    }

    const submit = (event: any) => {
        event.preventDefault();
        setEditMode(false);
    }

    useEffect(() => {
        
    }, [userText, editMode]);

    return(
        <>
            {!editMode ? <div onClick={() => setEditMode(true)}>{userText}</div>
            : <form id="editable-input" onSubmit={submit}>
                <input autoFocus type="text"  placeholder={userText} onChange={e => updateText(e.target.value)} />
            </ form>}
        </>
        
    )
}