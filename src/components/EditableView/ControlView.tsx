import { EditModeView } from "./EditModeView";
import StaticView from "./StaticView";
import { useEffect, useState } from 'react';
import { EditableTextField } from '../FormElements/EditableTextField';

export default function ControlView() {
    const [editMode, setEditMode] = useState(false);
    // const [userText, setUserText] = useState<string>('This is some text');

    // let editMode: boolean = false;
    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    return (
        <>
            <EditableTextField />
        </>    
    )
}
