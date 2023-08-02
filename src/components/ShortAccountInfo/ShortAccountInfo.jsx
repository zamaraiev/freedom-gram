import React from 'react';

import './ShortAccountInfo.scss';

const ShortAccountInfo = (props) =>{
return(
    <div className='short-info'>
        <a href='#'><img className='short-info__img user_small_avatar' src={props.avatar}></img></a>
        <div className='short-info__block-name'>
          <h3 className='block-name__title'>{props.userName}</h3>
          <p className='block-name__text'>{props.tag}</p>
        </div>
    </div>
);
}

export default ShortAccountInfo;