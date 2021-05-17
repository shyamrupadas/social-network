import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
        <Post message='Привет, мир!' like='5'/>
        <Post message='Ом намо бхагавате васудевайа!' like='108'/>
      </div>
    </div>
  )
}

export default MyPosts;