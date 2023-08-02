import accountAvatar from '../icons/avatar.jpg';
import profileBg from '../icons/img.jpg';

const ADD_POST = 'ADD-POST';

const addNewPostReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            let postId = state.accountPage.postData.length++ ;

            state.accountPage.postData.push({
                avatar: accountAvatar, 
                userName: 'Dmytro', 
                tag: '@dmytro', 
                content: action.postContent, 
                likesCount: 0,
                id: postId
            });

            state.homePage.postData.push({
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

export default addNewPostReducer;

export const addPostActionCreator = (postContent) =>{
    return {
        type: ADD_POST,
        postContent: postContent
    }
}