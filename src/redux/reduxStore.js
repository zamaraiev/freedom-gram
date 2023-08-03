import { combineReducers, legacy_createStore as createStore } from "redux";
import accountReducer from './accountReducer';
import messagesReducer from './messagesReducer';
import homeReducer from './homeReducer'

let reducers = combineReducers(
    {
        homePage: homeReducer,
        accountPage: accountReducer,
        messagePage: messagesReducer
    }
);

let store = createStore(reducers);

export default store;