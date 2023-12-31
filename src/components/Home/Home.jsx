import React from 'react';
import AccountAvatar from '../../icons/avatar.jpg';

import PostsBlock from '../Posts/PostsBlock.jsx';
import './Home.scss';


const Home = (props) =>{
   return(
      <div className='home-page'>
        <PostsBlock postData={props.state.posts} userId={0}/>
    </div>
  );
}

export default Home;