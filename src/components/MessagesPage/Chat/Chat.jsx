import React from 'react';
import AddNewMessage from './AddNewMessage/AddNewMessage';
import './Chat.scss';


const Chat = (props) =>{
    let messages = props.messagesData.map(message => 
    (<div className="curent-chat__message">
        {message.messageValue}
     </div>));

    return(
        <div className="curent-chat">
            <div className="message-area">
                {messages}
            </div>
            <AddNewMessage dispatch={props.dispatch}/>
        </div>
    );
    
}

export default Chat;