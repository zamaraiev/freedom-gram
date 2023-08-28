import React from "react";
import './AccountInfo.scss';

const AccountInfo = (props) => {
    return(
        <div className='account'>
          <img className='account__bg' alt='accountBg' src={props.userData.profileBg}></img>
          <div className='account__short-info'>
            <div className='account__short-info__column_1'>
              <img className='account-avatar' alt='account img' src={props.userData.avatar}></img>
              <h2 className='account-name'>{props.userData.name}</h2>
              <p className='account-tag'>{props.userData.tag}</p>
              <p className='account-joined-date'>Приєдналися: {props.userData.joinedData}</p>
              <div className='account__short-info__statistic'>
                <p className='account-followers-number'>Підписані: {props.userData.followersNumber}</p>
                <p className='account-following-number'>Підписано: {props.userData.followingNumber}</p>
              </div>
            </div>
            <div className='account__short-info__column_2'>
              <button className='edit_account_button button'>Редагувати Профіль</button>
            </div>
          </div>
        </div>
    );
}

export default AccountInfo;