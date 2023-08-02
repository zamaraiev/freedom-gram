import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { getStateActionCreator } from './redux/addNewPostReducer';

import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AccountPage from './components/AccountPage/AccountPage.jsx';
import Home from './components/Home/Home.jsx';
import MessagesPage from './components/MessagesPage/MessagesPage.jsx';

import './App.scss';

function App(props) {
  return (
      <div className='app-wrapper'>
        <Header/>
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home state={props.store.homePage} dispatch={props.dispatch}/>} />
            <Route path='/profile' element={<AccountPage state={props.store.accountPage} dispatch={props.dispatch}/>} />
            <Route path='/messages/*' element={<MessagesPage state={props.store.messagePage} dispatch={props.dispatch}/>} />
          </Routes>
        </div>
        <Sidebar/>
      </div>
  );
}

export default App;
