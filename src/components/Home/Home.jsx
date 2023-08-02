import React from 'react';
import AccountAvatar from '../../icons/avatar.jpg';

import PostsBlock from '../Posts/PostsBlock.jsx';
import './Home.scss';


const Home = (props) =>{
  debugger;
   return(
      <div className='home-page'>
        <PostsBlock postData={props.state.postData} dispatch={props.dispatch}/>
    </div>
  );
}

export default Home;