import accountAvatar from '../icons/avatar.jpg';

const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, avatar: accountAvatar, name: 'Dmytro', tag: '@dmytro', userId: 1, content: 'Hello World', likesCount: 11},
        {id: 2, avatar: accountAvatar, name: 'Artem', tag: '@artem', userId: 2,content: 'Hi everyone!', likesCount: 11}
    ]
}

const postReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch(action.type){
        case ADD_POST:
            let postId = stateCopy.posts.length++ ;

            console.log(action.postContent);


            stateCopy.posts.push({
                avatar: accountAvatar, 
                name: 'Dmytro', 
                tag: '@dmytro', 
                content: action.postContent, 
                likesCount: 0,
                id: postId,
                userId: action.userId
            });
            return stateCopy;
        default:
            return state;
   }
}

export default postReducer;

export const addPostActionCreator = (postContent, userId) =>{
    return {
        type: ADD_POST,
        postContent: postContent,
        userId: userId
    }
}

