import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  const postData = [
    {id: 1, message: 'Привет, мир!', likesCount: 5},
    {id: 2, message: 'Ом намо бхагавате васудевайа!\'', likesCount: 108},
  ];

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
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts;