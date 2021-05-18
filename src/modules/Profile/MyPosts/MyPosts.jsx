import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  const posts = [
    {id: 1, message: 'Привет, мир!', likesCount: 5},
    {id: 2, message: 'Ом намо бхагавате васудевайа!', likesCount: 108},
    {id: 3, message: 'Какой-нибудь еще пост', likesCount: 1108},
  ];

  const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea>Что у вас нового?</textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;