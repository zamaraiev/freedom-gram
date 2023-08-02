import accountAvatar from '../icons/avatar.jpg';
import profileBg from '../icons/img.jpg';
import addNewPostReducer from './addNewPostReducer';
import messagesReducer from './messagesReducer';

let store = {
    _state: {
        messagePage:{
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
        },
        accountPage:{
            userData: { 
                userName: 'Dmytro',
                followersNumber: 'На вас підписані ' + 12,
                profileBg: profileBg,
                accountAvatar: accountAvatar,
                joinedData: 'Приєдналися 12 липня',
                followingNumber: 'Ви підписалися ' + 20
            },
            postData: [
                {avatar: accountAvatar, userName: 'Dmytro', tag: '@dmytro', content: 'Hello World', likesCount: 11},
                {avatar: accountAvatar, userName: 'Dmytro', tag: '@dmytro', content: 'Hi everyone1111', likesCount: 11}
            ],
        },
        homePage:{
            postData: [
                {avatar: accountAvatar, userName: 'Dmytro', tag: '@dmytro', content: 'Hello World', likesCount: 11},
                {avatar: accountAvatar, userName: 'Artem', tag: '@artem', content: 'Hi everyone!', likesCount: 11}
            ]
        }
    },
    _callSubscriber(){},
    subscriber(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },

    dispatch(action){
        this._state = addNewPostReducer(this._state , action);
        this._state.messagePage = messagesReducer(this._state.messagePage , action);

        this._callSubscriber()
    }
}   

export default store;
