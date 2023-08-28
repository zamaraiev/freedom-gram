import React from 'react';

import './PostsBlock.scss';

import SamplePost from './SamplePost/SamplePost';
import AddNewPostContainer from './AddNewPost/AddNewPostContainer';


const PostsBlock = (props) =>{
  let posts = props.postData.map(post => (<SamplePost avatar={post.avatar} name={post.name} tag={post.tag} content={post.content} likesCount={post.likesCount}/>));

   return(
    <div className='posts-block'>
      <AddNewPostContainer/>
      {posts}
    </div>
  );
}

export default PostsBlock;