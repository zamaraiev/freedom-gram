import React from 'react';
import ArrowImg from '../../icons/arrow-left.svg';

import PostsBlock from '../Posts/PostsBlock.jsx';
import { NavLink } from 'react-router-dom';
import './AccountPage.scss';

const AccountPage = (props) =>{
   return(
      <div className='account-page'>
        <div className='back-button'>
        <NavLink to='/'><img className='back-button__img' src={ArrowImg} alt='logo'></img></NavLink>
          <div className='back-button__wrapper'>
            <h2 className='account-name'>{props.state.userData.userName}</h2>
            <p className='account-followers-number'>{props.state.userData.followersNumber}</p>
          </div>
        </div>
        <div className='account'>
          <img className='account__bg' alt='accountBg' src={props.state.userData.profileBg}></img>
          <div className='account__short-info'>
            <div className='account__short-info__column_1'>
              <img className='account-avatar' alt='account img' src={props.state.userData.accountAvatar}></img>
              <h2 className='account-name'>{props.state.userData.userName}</h2>
              <p className='account-joined-date'>{props.state.userData.joinedData}</p>
              <div className='account__short-info__statistic'>
                <p className='account-followers-number'>{props.state.userData.followersNumber}</p>
                <p className='account-following-number'>{props.state.userData.followingNumber}</p>
              </div>
            </div>
            <div className='account__short-info__column_2'>
              <button className='edit_account_button button'>Редагувати Профіль</button>
            </div>
          </div>
        </div>
        <PostsBlock postData={props.state.postData}/>
    </div>
  );
}

export default AccountPage;