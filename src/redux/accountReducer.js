import accountAvatar from '../icons/avatar.jpg';
import profileBg from '../icons/img.jpg';

const ADD_POST = 'ADD-POST';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    users:[
        {
            name: 'Dmytro',
            tag: '@dmytro',
            id: 1,
            joinedData: '12 липня',
            city: 'Kherson',
            contry: 'Ukreine',
    
            profileBg: profileBg,
            avatar: accountAvatar,
    
            followersNumber: 12,
            followingNumber: 20,
            followed: true,
            postData: [
                {id: 1 , avatar: accountAvatar, name: 'Dmytro', tag: '@dmytro', userId: 1,content: 'Hello World', likesCount: 0},
            ]
        },
        {
            name: 'Artem',
            tag: '@artem',
            id: 2,
            joinedData: '30 липня',
            city: 'Kherson',
            contry: 'Ukreine',
    
            profileBg: profileBg,
            avatar: accountAvatar,
    
            followersNumber: 0,
            followingNumber: 0,
            followed: false,
            postData: [
                {id: 1 ,avatar: accountAvatar, name: 'Artem', tag: '@artem', userId: 2,content: 'Hello World', likesCount: 0},
            ]
        },
        {
            name: 'Туц Тома ТОма',
            tag: '@toma',
            id: 3,
            joinedData: '30 липня',
            city: 'Kherson',
            contry: 'Ukreine',
    
            profileBg: profileBg,
            avatar: accountAvatar,
    
            followersNumber: 0,
            followingNumber: 0,
            followed: true
        }
    ]
};

const accountReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch(action.type){
        case ADD_POST:
            let postId = stateCopy.users[0].postData.length++ ;

            stateCopy.users[0].postData.push({
                avatar: accountAvatar, 
                name: 'Dmytro', 
                tag: '@dmytro', 
                content: action.postContent, 
                likesCount: 0,
                id: postId,
                userId: 1
            });
            return stateCopy;
        case FOLLOW:
            console.log('follow');
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            console.log('unfollow');
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: 
            return { ...state, users: [ ...state.users, ...action.users ]}
        default:
            return stateCopy;
   }
}

export default accountReducer;

export const addPostActionCreator = (postContent, userId) =>{
    return {
        type: ADD_POST,
        postContent: postContent,
        userId: userId
    }
}

export const followActionCreator = (userId) =>{
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unfollowActionCreator = (userId) =>{
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: UNFOLLOW,
        users: users
    }
}