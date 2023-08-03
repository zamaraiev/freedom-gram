import accountAvatar from '../icons/avatar.jpg';
import profileBg from '../icons/img.jpg';

const ADD_POST_GLOBAL = 'ADD-POST-GLOBAL';

let initialState = {
    postData: [
        {avatar: accountAvatar, userName: 'Dmytro', tag: '@dmytro', content: 'Hello World', likesCount: 11},
        {avatar: accountAvatar, userName: 'Artem', tag: '@artem', content: 'Hi everyone!', likesCount: 11}
    ]
}

const homeReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST_GLOBAL:
            debugger;
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

export default homeReducer;

export const addPostGlobalActionCreator = (postContent) =>{
    return {
        type: ADD_POST_GLOBAL,
        postContent: postContent
    }
}

