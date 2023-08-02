import React from 'react';

import AccountAvatar from '../../icons/avatar.jpg';
import SearchIcon from '../../icons/search.svg'

import './Sidebar.scss';

import ShortAccountInfo from '../ShortAccountInfo/ShortAccountInfo.jsx';

const Sidebar = () =>{
  return(
    <div className='sidebar'>
    <div className='sidebar__search sidebar_block'>
      <img className='search__search_img' src={SearchIcon}/>
    </div>
    <div className='sidebar__following_account sidebar_block'>
      <h2 className='following_account__title'>Акаунти на які ви підписані</h2>
      <ShortAccountInfo avatar={AccountAvatar} userName='Test Test1' tag='@test'/>
      <ShortAccountInfo avatar={AccountAvatar} userName='Test Test1' tag='@test'/>
      <ShortAccountInfo avatar={AccountAvatar} userName='Test Test1' tag='@test'/>
    </div>
  </div>
  );
}

export default Sidebar;