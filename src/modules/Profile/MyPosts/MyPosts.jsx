import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  const addPost = () => {
    props.dispatch(addPostCreator())
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextCreator(text))
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea placeholder='Как у вас дела?' value={props.newPostText} onChange={onPostChange}/>
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