import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm, { AddPostsFormValuesType } from './AddPostForm/AddPostForm'
import { PostType } from '../../../types/type';

export type MapPropsType = {
  posts: Array<PostType>
};
export type DispatchPropsType = {
  addPost: (newPostText: string) => void
};

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {
  const postsElements = props.posts
    .reverse()
    .map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

  const addNewPost = (values: AddPostsFormValuesType) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={addNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default React.memo(MyPosts);