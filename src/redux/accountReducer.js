import accountAvatar from '../icons/avatar.jpg';
import profileBg from '../icons/img.jpg';

const ADD_POST = 'ADD-POST';

let initialState = {
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
    ]
}

const accountReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let postId = state.postData.length++ ;

            state.postData.push({
                avatar: accountAvatar, 
                userName: 'Dmytro', 
                tag: '@dmytro', 
                content: action.postContent, 
                likesCount: 0,
                id: postId
            });
            return state;
        default:
            return state;
   }
}

export default accountReducer;

export const addPostActionCreator = (postContent) =>{
    return {
        type: ADD_POST,
        postContent: postContent
    }
}