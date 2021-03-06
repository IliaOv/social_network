import React from 'react';
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileData = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name: </b>
            {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job: </b>
            {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills: </b>
            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>Contacts: </b>{Object.keys(profile.contacts)
            .map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}
                    </b>
                </div>
            })}
        </div>
        <div>
            <b>About me: </b>
            {createField('About me', 'aboutMe', [], Textarea)}
        </div>
    </form>
};

const ProfileDataForm = reduxForm({form: 'edit-profile'})(ProfileData);

export default ProfileDataForm;