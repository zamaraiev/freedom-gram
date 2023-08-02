import React from 'react';

import './SamplePost.scss';

import ShortAccountInfo from '../../ShortAccountInfo/ShortAccountInfo.jsx';

const SamplePost = (props) =>{
   return(
      <div className="sample-post">
        <ShortAccountInfo avatar={props.avatar} userName={props.userName} tag={props.tag}/>
        <div className="sample-post__content">
          {props.content}
        </div>
        <div className="sample-post__likes">
          <button className="sample-post__button like_plus_button button">+</button>
          <p className="like-count">{props.likesCount}</p>
          <button className="sample-post__button like_minus_button button">-</button>
        </div>
      </div>
    );
}

export default SamplePost;