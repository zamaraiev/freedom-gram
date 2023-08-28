import accountAvatar from '../icons/avatar.jpg';

const ADD_POST_GLOBAL = 'ADD-POST-GLOBAL';

let initialState = {
    postData: [
        {id: 1, avatar: accountAvatar, name: 'Dmytro', tag: '@dmytro', userId: 1, content: 'Hello World', likesCount: 11},
        {id: 2, avatar: accountAvatar, name: 'Artem', tag: '@artem', userId: 2,content: 'Hi everyone!', likesCount: 11}
    ]
}

const homeReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch(action.type){
        case ADD_POST_GLOBAL:
            let postId = stateCopy.postData.length++ ;

            stateCopy.postData.push({
                avatar: accountAvatar, 
                name: 'Dmytro', 
                tag: '@dmytro', 
                content: action.postContent, 
                likesCount: 0,
                id: postId,
                userId: 1
            });
            return stateCopy;
        default:
            return stateCopy;
   }
}

export default homeReducer;

export const addPostGlobalActionCreator = (postContent, userId) =>{
    return {
        type: ADD_POST_GLOBAL,
        postContent: postContent,
    }
}

