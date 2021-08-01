import style from '../common/FormsContrls/FormsControls.module.css'
import s from './Login.module.css'
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, GetStringTypes, Input } from "../common/FormsContrls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from '../../redux/redux-store';
import React from 'react';

type LoginFormOwnProps = {
  captchaUrl: string | null
}

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
          <img src={captchaUrl} alt={'captcha'}/>
          <div>{createField<LoginFormValuesTypeKeys>('Введите символы', 'captcha', [required], Input)}
          </div>
        </div>
        }
      </form>

    </div>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
};

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
};

type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  email: string
  password: string
};

type LoginFormValuesTypeKeys = GetStringTypes<LoginFormValuesType>;

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return <div className={s.wrapper}>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
  </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);