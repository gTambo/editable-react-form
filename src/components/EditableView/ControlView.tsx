// import { EditModeView } from "./EditModeView";
// import StaticView from "./StaticView";
import { useRef, useState } from 'react';
import { EditableTextField } from '../FormElements/EditableTextField';

export default function ControlView() {
    const [editMode1, setEditMode1] = useState(false);
    const [editMode2, setEditMode2] = useState(false);
    const [editMode3, setEditMode3] = useState(false);
    const [editAll, setEditAll] = useState<boolean>(false);
    const [userText1, setUserText1] = useState<string>('This is some text');
    const [userText2, setUserText2] = useState<string>('This is also some text');
    const [userText3, setUserText3] = useState<string>('Is this some text?');
    const input1Ref = useRef<HTMLInputElement>(null);
    const input2Ref = useRef<HTMLInputElement>(null);
    const input3Ref = useRef<HTMLInputElement>(null);

    const editAllOn = () => {
        setEditMode1(true);
        setEditMode2(true);
        setEditMode3(true);
        setEditAll(true);
    }

    const editAllOff = () => {
        setEditMode1(false);
        setEditMode2(false);
        setEditMode3(false);
        setEditAll(false);
    }

    const submitAll = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        
        
        if(input1Ref.current?.value) {
            console.log('updated userText1: ', input1Ref.current.value);
            setUserText1(input1Ref.current.value); 
        } else console.log('nothing changed...');

        
        if(input2Ref.current?.value) {
            console.log('updated userText2: ', input2Ref.current.value);
            setUserText2(input2Ref.current.value);
        } else console.log('nothing changed...');
        
        if(input3Ref.current?.value) {
            console.log('updated userText3: ', input3Ref.current.value);
            setUserText3(input3Ref.current.value);
        } else console.log('nothing changed...');
        
        editAllOff();
    }

    const passable = [{
        editMode: editMode1,
        setEditMode: setEditMode1,
        userText: userText1,
        setUserText: setUserText1,
        inputRef: input1Ref
    },
    {
        editMode: editMode2,
        setEditMode: setEditMode2,
        userText: userText2,
        setUserText: setUserText2,
        inputRef: input2Ref
    },
    {
        editMode: editMode3,
        setEditMode: setEditMode3,
        userText: userText3,
        setUserText: setUserText3,
        inputRef: input3Ref
    }
    ];

    return (
        <div >
            <EditableTextField inherited={passable[0]} elIndex={0} />
            <EditableTextField inherited={passable[1]} elIndex={0} />
            <EditableTextField inherited={passable[2]} elIndex={0} />
            <input type='button' value="Submit All" onClick={submitAll} />
            { editAll ? <input type="button" value="Edit All - Off" onClick={editAllOff} />
            : <input type="button" value="Edit All - On" onClick={editAllOn} /> }
        </div>    
    )
}
