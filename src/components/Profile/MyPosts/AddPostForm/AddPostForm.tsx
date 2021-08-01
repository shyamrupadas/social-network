import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, GetStringTypes, Textarea } from '../../../common/FormsContrls/FormsControls';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import React from 'react';

type PropsType = {};

export type AddPostsFormValuesType = {
  newPostText: string
};

type AddPostsFormValuesTypeKeys = GetStringTypes<AddPostsFormValuesType>;

const AppPostForm: React.FC<InjectedFormProps<AddPostsFormValuesType,
  PropsType> & PropsType> = (props) => {
  const maxLength10 = maxLengthCreator(10);

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<AddPostsFormValuesTypeKeys>('Как у вас дела?', 'newPostText',
          [required, maxLength10], Textarea)}
      </div>
      <div>
        <button>Добавить запись</button>
      </div>
    </form>
  )
}

export default reduxForm<AddPostsFormValuesType, PropsType>({ form: 'ProfileAddNewPostForm' })(AppPostForm)