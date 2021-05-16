import c from "./Post.module.css";

const Post = () => {
  return (
    <div className={c.item}>
      <img src="http://hypeava.ru/uploads/posts/2018-05/1527186681_1.jpg" alt="Ava"/>
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;