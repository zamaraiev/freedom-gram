const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1 , userName: 'Artem'},
        {id: 2 , userName: 'Dmytro'},
        {id: 3 , userName: 'Shasha'},
        {id: 4 , userName: 'Lisa'},
        {id: 5 , userName: 'Viktor'},
        {id: 6 , userName: 'Thomas'},
        {id: 7 , userName: 'Nikolai'},
        {id: 8 , userName: 'Volodymyr'}
    ],
    messages: [
        {id: 1 , messageValue: 'Artem'},
        {id: 2 , messageValue: 'Dmytro'},
        {id: 3 , messageValue: 'Shasha'},
        {id: 4 , messageValue: 'Lisa'},
    ]
}

const messagesReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch(action.type){
        case ADD_MESSAGE:
            let messageId = stateCopy.messages.length++ ;
 
            stateCopy.messages.push({
                id: messageId,
                messageValue: action.messageContent
            });
            return stateCopy;
        default:
            return stateCopy;
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