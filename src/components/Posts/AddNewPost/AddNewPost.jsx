import React from 'react';

import './AddNewPost.scss';

const AddNewPost = (props) =>{

  let postTextarea = React.createRef()

  let addNewPost = () =>{
    let postContent = postTextarea.current.value;

    props.newPostText(postContent , 1);
  };

   return(
      <div className='add-new-post'>
        <h2 className='add-new-post__title'>Додати новий пост</h2>
        <div className='add-new-post__input_grup'>
          <textarea className='add-new-post__content' ref={postTextarea}/>
          <button className='button' onClick={addNewPost}>Додати</button>
        </div>
      </div>
    );
};

export default AddNewPost;