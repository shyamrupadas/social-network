import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg" alt="Ava"/>
      {props.message}
      <div>
        <span>{props.likesCount} like</span>
      </div>
    </div>
  )
}

export default Post;