import React from 'react';
import { addPostActionCreator } from '../../../redux/postReducer';
import AddNewPost from './AddNewPost';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
  return{
    newPostText: (postContent , userId) => {
      dispatch(addPostActionCreator(postContent , userId));
    }
  }
}

const AddNewPostContainer = connect(null , mapDispatchToProps)(AddNewPost);


export default AddNewPostContainer;