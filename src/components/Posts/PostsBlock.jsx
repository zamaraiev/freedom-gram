import React from 'react';

import './PostsBlock.scss';

import SamplePost from './SamplePost/SamplePost';
import AddNewPost from './AddNewPost/AddNewPost';


const PostsBlock = (props) =>{
  let posts = props.postData.map(post => (<SamplePost avatar={post.avatar} userName={post.userName} tag={post.tag} content={post.content} likesCount={post.likesCount}/>));

   return(
    <div className='posts-block'>
      <AddNewPost dispatch={props.dispatch}/>
      {posts}
    </div>
  );
}

export default PostsBlock;