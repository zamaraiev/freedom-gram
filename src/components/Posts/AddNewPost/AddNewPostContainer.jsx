import React from 'react';
import { addPostActionCreator } from '../../../redux/accountReducer';
import { addPostGlobalActionCreator } from '../../../redux/homeReducer';
import AddNewPost from './AddNewPost';

const AddNewPostContainer = (props) =>{

  let addNewPost = (postContent) =>{
    props.dispatch(addPostGlobalActionCreator(postContent));
    props.dispatch(addPostActionCreator(postContent));
  };

  return(
    <AddNewPost newPostText={addNewPost}/>
  );
};

export default AddNewPostContainer;