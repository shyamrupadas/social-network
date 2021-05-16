import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        new post
      </div>
      <div className={s.posts}>
        <Post message='Привет, мир!' like='5'/>
        <Post message='Ом намо бхагавате васудевайа!' like='108'/>
      </div>
    </div>
  )
}

export default MyPosts;