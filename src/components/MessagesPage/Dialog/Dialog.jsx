import React from 'react';
import { NavLink } from 'react-router-dom';

import './Dialog.scss';

const Dialog = (props) =>{
    let dialogUrl = '/messages/' + props.id;

    return(
        <NavLink className='dialog' to={dialogUrl}>
            <h3 className='dialog__title'>{props.userName}</h3>
        </NavLink>
    );
    
}

export default Dialog;