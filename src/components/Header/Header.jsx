import React from 'react';
import Logo from '../../icons/twitter.svg';
import HomeIcon from '../../icons/house.svg';
import MessegeIcon from '../../icons/envelope.svg';
import ProfileIcon from '../../icons/person.svg';
import SearchIcon from '../../icons/search.svg';
import SettingIcon from '../../icons/gear.svg';
import UsersOverview from '../../icons/usersOverview.svg';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () =>{
   return(
      <header className='app-header'>
        <nav className='menu'>
           <img className='menu_logo' src={Logo} alt='logo'></img>
           <ul>
               <li><NavLink className='menu__link link' to='/'><img className='menu__link_img' alt='home' src={HomeIcon}></img>Головна</NavLink></li>
               <li><NavLink className='menu__link link' to='/search'><img className='menu__link_img' alt='find' src={SearchIcon}></img>Пошук</NavLink></li>
               <li><NavLink className='menu__link link' to='/users-overview'><img className='menu__link_img' alt='users overview' src={UsersOverview}></img>Огляд користувачів</NavLink></li>
               <li><NavLink className='menu__link link' to='/messages'><img className='menu__link_img' alt='messege' src={MessegeIcon}></img>Повідомлення</NavLink></li>
               <li><NavLink className='menu__link link' to='/profile'><img className='menu__link_img' alt='profile' src={ProfileIcon}></img>Профіль</NavLink></li>
               <li><NavLink className='menu__link link' to='/setting'><img className='menu__link_img' alt='setting' src={SettingIcon}></img>Налаштування</NavLink></li>
               <li><button className='add_tweet_button button'>Tweet</button></li>
            </ul>
        </nav>
   </header>
  );
}

export default Header;