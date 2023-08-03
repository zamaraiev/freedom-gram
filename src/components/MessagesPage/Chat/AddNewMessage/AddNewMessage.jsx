import React from 'react';
import './AddNewMessage.scss';

const AddNewMessage = (props) =>{
  let messageTextarea = React.createRef()

  let addNewMessage = () =>{
    let messageContent = messageTextarea.current.value;

    props.newMessageText(messageContent);
  };


   return(
      <div className='add-new-message'>
        <h2 className='add-new-message__title'>Додати нове повідомлення</h2>
        <div className='add-new-message__input_grup'>
          <textarea className='add-new-message__content' ref={messageTextarea} />
          <button className='button' onClick={addNewMessage}>Опублікувати!</button>
        </div>
      </div>
    );
}

export default AddNewMessage;