import React from 'react';
import { NavLink } from 'react-router-dom';

import Dialog from './Dialog/Dialog.jsx';
import Chat from './Chat/Chat.jsx';

import './MessagesPage.scss';

const Messages = (props) =>{
    let dialogs = props.state.dialogsData.map(dialog => (<Dialog userName={dialog.userName} id={dialog.id}/>));

    return(
        <div className="messages">
            <div className="messages__dialogs">
               {dialogs}
            </div>
            <Chat messagesData={props.state.messages} dispatch={props.dispatch}/>
        </div>
    );
}

export default Messages;
