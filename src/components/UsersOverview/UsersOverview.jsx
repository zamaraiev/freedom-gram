import React from "react";
import ShortAccountInfo from '../ShortAccountInfo/ShortAccountInfo.jsx'

import './UsersOverview.scss';

const UsersOverview = (props) => {

    let usersList = props.users.map(user => (
        <div key={user.id} className='user-overview__container'>
           <ShortAccountInfo name={user.name} tag={user.tag} avatar={user.avatar}/>
           {user.followed
            ? <button className='follow-button_unfollow follow-button button' onClick={() => {
                props.unfollow(user.id)
            }}>Відписатися</button>
            : <button className='follow-button button ' onClick={() => {
                props.follow(user.id)
            }}>Підписатися</button>}
        </div>
    ));

    return(
        <div className="user-overview">
            <h3 className="user-overview__title">User Overview</h3>
            {usersList}
        </div>
    );
}

export default UsersOverview;