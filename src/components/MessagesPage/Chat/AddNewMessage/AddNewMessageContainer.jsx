import React from 'react';
import {addMessageActionCreator} from '../../../../redux/messagesReducer';
import AddNewMessage from './AddNewMessage';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
  return{
    newMessageText: (messageContent) => {
      dispatch(addMessageActionCreator(messageContent));
    }
  }
}

const AddNewMessageContainer = connect(null , mapDispatchToProps)(AddNewMessage);

export default AddNewMessageContainer;