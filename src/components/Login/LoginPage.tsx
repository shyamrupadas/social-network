import style from '../common/FormsContrls/FormsControls.module.css'
import s from './Login.module.css'
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, GetStringTypes, Input } from "../common/FormsContrls/FormsControls";
import { required } from "../../utils/validators/validators";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from '../../redux/redux-store';
import React from 'react';

type LoginFormOwnProps = {
  captchaUrl: string | null
};

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,
  LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>{createField<LoginFormValuesTypeKeys>('Email',
          'email', [required], Input)}</div>
        <div>{createField<LoginFormValuesTypeKeys>('Пароль',
          'password', [required], Input, { type: 'password' })}</div>
        <div>{createField<LoginFormValuesTypeKeys>('Пароль',
          'rememberMe', [], Input, { type: 'checkbox' })}</div>
        {error && <span className={style.formSummaryError}>{error}</span>}

        <div>
          <button>Войти</button>
        </div>
        {captchaUrl &&
        <div>
          <div>Введите символы с картинки</div>
          <img src={captchaUrl} alt={'captcha'} />
          <div>{createField<LoginFormValuesTypeKeys>('Введите символы', 'captcha', [required], Input)}
          </div>
        </div>
        }
      </form>

    </div>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  email: string
  password: string
};

type LoginFormValuesTypeKeys = GetStringTypes<LoginFormValuesType>;

export const LoginPage: React.FC = () => {

  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const dispatch = useDispatch();

  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
  };

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }

  return <div className={s.wrapper}>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
  </div>
}