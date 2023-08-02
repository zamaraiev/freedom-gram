import React from 'react';
import { addPostActionCreator } from '../../../redux/addNewPostReducer';

import './AddNewPost.scss';

const AddNewPost = (props) =>{

  let postTextarea = React.createRef()

  let addNewPost = () =>{
    let postContent = postTextarea.current.value;

    //console.log(postContent)
    
    props.dispatch(addPostActionCreator(postContent));
  };

 /* let onPostChange = (value) => {
    debugger;
    let postContent = postTextarea.current.value;
    props.newPostContent.content = postContent;
    // value={props.newPostContent.content} onChange={onPostChange}
  };*/

   return(
      <div className='add-new-post'>
        <h2 className='add-new-post__title'>Додати новий пост</h2>
        <div className='add-new-post__input_grup'>
          <textarea className='add-new-post__content' ref={postTextarea}/>
          <button className='button' onClick={addNewPost}>Опублікувати!</button>
        </div>
      </div>
    );
};

export default AddNewPost;