import React from 'react';
import { addPostActionCreator } from '../../../redux/accountReducer';
import { addPostGlobalActionCreator } from '../../../redux/homeReducer';
import AddNewPost from './AddNewPost';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
  return{
    newPostText: (postContent) => {
      dispatch(addPostGlobalActionCreator(postContent));
      dispatch(addPostActionCreator(postContent));
    }
  }
}

const AddNewPostContainer = connect(null , mapDispatchToProps)(AddNewPost);


export default AddNewPostContainer;