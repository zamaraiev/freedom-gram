import { combineReducers, legacy_createStore as createStore } from "redux";
import accountReducer from './accountReducer';
import messagesReducer from './messagesReducer';
import postReducer from './postReducer'

let reducers = combineReducers(
    {
        postData: postReducer,
        accountData: accountReducer,
        messagePage: messagesReducer
    }
);

let store = createStore(reducers);

export default store;