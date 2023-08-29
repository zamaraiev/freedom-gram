import React from 'react';

import './PostsBlock.scss';

import SamplePost from './SamplePost/SamplePost';
import AddNewPostContainer from './AddNewPost/AddNewPostContainer';


const PostsBlock = (props) =>{
  let filteredPosts = props.postData;

  if(props.userId !== 0){
    filteredPosts = props.postData.filter(post => post.userId === 1);
  }

  let posts = filteredPosts.map(post => (
    <SamplePost
      key={post.id}
      avatar={post.avatar}
      name={post.name}
      tag={post.tag}
      content={post.content}
      likesCount={post.likesCount}
    />
  ));

   return(
    <div className='posts-block'>
      <AddNewPostContainer/>
      {posts}
    </div>
  );
}

export default PostsBlock;