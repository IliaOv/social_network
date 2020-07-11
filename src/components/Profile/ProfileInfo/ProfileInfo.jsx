import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ7CoqlHVkGqkv8cjCtNYY9pI99vjRVpugZg&usqp=CAU'
          alt='img'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
};

export default ProfileInfo;
