import React from "react";
import { connect } from 'react-redux';
import { followActionCreator } from '../../redux/accountReducer';
import { unfollowActionCreator } from '../../redux/accountReducer';

import UsersOverview from './UsersOverview.jsx';

let mapStateToProps = (state) => {
    return{
        users: state.accountData.users
    };
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        }
    }
}

export const UsersOverviewContainer = connect(mapStateToProps , mapDispatchToProps)(UsersOverview);
