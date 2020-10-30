import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false),
        [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
            setEditMode(true)
        },
        deactivateEditMode = () => {
            setEditMode(false);
            props.updateUserStatus(status);
        },
        onStatusChange = (e) => {
            setStatus(e.currentTarget.value);
        };

    return (
        <div>
            {!editMode && <div>
                <b>Status: </b>
                <span onDoubleClick={activateEditMode}>
                    {props.status || '---'}
                </span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>}
        </div>
    )
};

export default ProfileStatusWithHooks;
