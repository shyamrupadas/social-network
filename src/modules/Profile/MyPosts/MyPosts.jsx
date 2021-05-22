import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} placeholder='Как у вас дела?' value={props.newPostText} onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;