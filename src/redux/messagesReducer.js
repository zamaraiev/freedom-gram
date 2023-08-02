const ADD_MESSAGE = 'ADD-MESSAGE';

const messagesReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let messageId = state.messages.length++ ;
 
            state.messages.push({
                id: messageId,
                messageValue: action.messageContent
            });
            return state;
        default:
            return state;
    }
}

export default messagesReducer;

export const addMessageActionCreator = (messageContent) =>{
    //console.log('messageIvent:' + messageContent);
    return {
        type: ADD_MESSAGE,
        messageContent: messageContent
    }
}