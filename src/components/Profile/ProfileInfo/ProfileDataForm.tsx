import { createField, GetStringTypes, Input, Textarea } from "../../common/FormsContrls/FormsControls";
import { InjectedFormProps, reduxForm } from "redux-form";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsContrls/FormsControls.module.css";
import React from 'react';
import { ProfileType } from '../../../types/type';

type  PropsType = {
  profile: ProfileType
}

type ProfileTypeKeys = GetStringTypes<ProfileType>;

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <strong>Имя</strong> {createField<ProfileTypeKeys>('Имя', 'fullName', [], Input)}
      </div>
      <div>
        Ищу работу: {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </div>
      <div>
        Мои профессионалные навыки:
        {createField<ProfileTypeKeys>('Мои профессионалные навыки', 'lookingForAJobDescription', [], Textarea)}
      </div>
      <div>
        Обо мне: {createField<ProfileTypeKeys>('Обо мне', 'aboutMe', [], Textarea)}
      </div>
      <div>
        <h3>Контакты</h3>
        {Object.keys(profile.contacts).map(key => {
          return <div key={key} className={s.contact}>{key}: {createField(key, 'contacts.' + key, [], Input)}</div>
        })}
      </div>
      {error && <span className={style.formSummaryError}>{error}</span>}
      <div>
        <button>Сохранить</button>
      </div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;