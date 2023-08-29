import React from 'react';
import ArrowImg from '../../icons/arrow-left.svg';
import PostsBlock from '../Posts/PostsBlock.jsx';
import { NavLink } from 'react-router-dom';
import AccountInfo from './AccountInfo/AccountInfo';

import './AccountPage.scss';

const AccountPage = (props) =>{
   return(
      <div className='account-page'>
        <div className='back-button'>
          <NavLink to='/'><img className='back-button__img' src={ArrowImg} alt='logo'></img></NavLink>
          <div className='back-button__wrapper'>
            <h2 className='account-name'>{props.state.name}</h2>
            <p className='account-followers-number'>Підписано:{props.state.followersNumber}</p>
          </div>
        </div>
        <AccountInfo userData={props.state}/>
        <PostsBlock postData={props.postData.posts}/>
    </div>
  );
}

export default AccountPage;