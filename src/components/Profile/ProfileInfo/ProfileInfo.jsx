import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        {/*<img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ7CoqlHVkGqkv8cjCtNYY9pI99vjRVpugZg&usqp=CAU'
          alt='img'/>*/}
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt='avatar'/>
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  )
};

export default ProfileInfo;
