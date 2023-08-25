import accountAvatar from '../icons/avatar.jpg';

const ADD_POST_GLOBAL = 'ADD-POST-GLOBAL';

let initialState = {
    postData: [
        {avatar: accountAvatar, userName: 'Dmytro', tag: '@dmytro', content: 'Hello World', likesCount: 11},
        {avatar: accountAvatar, userName: 'Artem', tag: '@artem', content: 'Hi everyone!', likesCount: 11}
    ]
}

const homeReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch(action.type){
        case ADD_POST_GLOBAL:
            debugger;
            let postId = stateCopy.postData.length++ ;

            stateCopy.postData.push({
                avatar: accountAvatar, 
                userName: 'Dmytro', 
                tag: '@dmytro', 
                content: action.postContent, 
                likesCount: 0,
                id: postId
            });
            return stateCopy;
        default:
            return stateCopy;
   }
}

export default homeReducer;

export const addPostGlobalActionCreator = (postContent) =>{
    return {
        type: ADD_POST_GLOBAL,
        postContent: postContent
    }
}

