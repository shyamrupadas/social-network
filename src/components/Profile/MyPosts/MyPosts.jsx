import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsContrls/FormsControls";

const MyPosts = React.memo(props => {
  const postsElements = props.profilePage.posts.map(p => <Post message={p.message} key={p.id}
                                                               likesCount={p.likesCount}/>);

  const addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostReduxForm onSubmit={addNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
});

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' placeholder='Как у вас дела?'
        validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Добавить запись</button>
      </div>
    </form>
  )
}

const MyPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(MyPostForm)

export default MyPosts;