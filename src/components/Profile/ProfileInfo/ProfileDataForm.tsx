import { createField, Input, Textarea } from "../../common/FormsContrls/FormsControls";
import { InjectedFormProps, reduxForm } from "redux-form";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsContrls/FormsControls.module.css";
import React from 'react';

type LoginFormOwnProps = {
  profile: any
}

type LoginFormValuesType = {
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  aboutMe: string
}

const ProfileDataForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <strong>Имя</strong> {createField('Имя', 'fullName', [], Input)}
      </div>
      <div>
        Ищу работу: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </div>
      <div>
        Мои профессионалные навыки:
        {createField('Мои профессионалные навыки', 'lookingForAJobDescription', [], Textarea)}
      </div>
      <div>
        Обо мне: {createField('Обо мне', 'aboutMe', [], Textarea)}
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

const ProfileDataReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;