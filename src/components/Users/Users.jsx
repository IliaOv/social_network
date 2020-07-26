import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

  if (props.users.length === 0) {

    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://st.kp.yandex.net/im/kadr/2/5/7/kinopoisk.ru-Dmitriy-Nagiev-2574443.jpg',
        followed: false,
        fullName: 'Dmitry',
        status: "I am a boss!",
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 2,
        photoUrl: 'https://st.kp.yandex.net/im/kadr/2/5/7/kinopoisk.ru-Dmitriy-Nagiev-2574443.jpg',
        followed: true,
        fullName: 'Sasha',
        status: "I am a boss too",
        location: {city: 'Kiev', country: 'Ukraine'}
      },
      {
        id: 3,
        photoUrl: 'https://st.kp.yandex.net/im/kadr/2/5/7/kinopoisk.ru-Dmitriy-Nagiev-2574443.jpg',
        followed: false,
        fullName: 'Andrew',
        status: "I am a boss too",
        location: {city: 'Moscow', country: 'Russia'}
      }
    ])
  }


  return <div>
    {props.users.map(u => <div key={u.id}>
      <span>
        <div>
          <img src={u.photoUrl} className={styles.userPhoto} alt='avatar'/>
        </div>
        <div>
          {u.followed
            ? <button onClick={() => {
              props.unfollow(u.id)
            }}>Unfollow</button>
            : <button onClick={() => {
              props.follow(u.id)
            }}>Follow</button>}
        </div>
      </span>
      <span>
        <span>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
        </span>
      </span>
    </div>)}
  </div>
};

export default Users;
