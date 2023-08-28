import React from 'react';
import SearchIcon from '../../icons/search.svg'

import './Sidebar.scss';

const Sidebar = () =>{
  return(
    <div className='sidebar'>
    <div className='sidebar__search sidebar_block'>
      <img className='search__search_img' src={SearchIcon}/>
    </div>
    <div className='sidebar__following_account sidebar_block'>
    </div>
  </div>
  );
}

export default Sidebar;