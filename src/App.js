import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AccountPage from './components/AccountPage/AccountPage.jsx';
import Home from './components/Home/Home.jsx';
import MessagesPage from './components/MessagesPage/MessagesPage.jsx';
import { UsersOverviewContainer } from './components/UsersOverview/UsersOverviewContainer.jsx'

import './App.scss';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header/>
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home state={props.state.homePage}/>} />
            <Route path='/profile' element={<AccountPage state={props.state.accountData.users[0]}/>} />
            <Route path='/messages/*' element={<MessagesPage state={props.state.messagePage}/>} />
            <Route path='/users-overview' element={<UsersOverviewContainer/>} />
          </Routes>
        </div>
        <Sidebar/>
      </div>
  );
}

export default App;
