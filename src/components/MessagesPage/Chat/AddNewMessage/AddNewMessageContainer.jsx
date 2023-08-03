import React from 'react';
import {addMessageActionCreator} from '../../../../redux/messagesReducer';
import AddNewMessage from './AddNewMessage';

const AddNewMessageContainer = (props) =>{

  let addNewMessage = (messageContent) =>{   
    props.dispatch(addMessageActionCreator(messageContent));
  };

  return(
    <AddNewMessage newMessageText={addNewMessage}/>
  );
}

export default AddNewMessageContainer;