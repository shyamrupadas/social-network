import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        new post
      </div>
      <div className={c.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;