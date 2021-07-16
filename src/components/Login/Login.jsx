import style from '../common/FormsContrls/FormsControls.module.css'
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContrls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} name='email' placeholder='Email'
                    validate={required}/></div>
        <div><Field component={Input} name='password' placeholder='Пароль' type='password'
                    validate={required}/></div>
        <div><Field component={Input} name='rememberMe' type='checkbox'/>Запомнить меня</div>
        {props.error && <span className={style.formSummaryError}>{props.error}</span>}

        <div>
          <button>Войти</button>
        </div>
        {props.captchaUrl &&
        <div>
          <div>Введите символы с картинки</div>
          <img src={props.captchaUrl} alt={'captcha'}/>
          <div><Field component={Input} name='captcha' placeholder='Введите символы'
                      validate={required}/></div>
        </div>
        }
      </form>

    </div>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
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

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);