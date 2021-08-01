import s from "./Post.module.css";
import React from 'react';

type PropsType = {
  message: string
  likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <img src="https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg" alt="Ava"/>
      {props.message}
      <div>
        <span>{props.likesCount} like</span>
      </div>
    </div>
  )
}

export default Post;