import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContrls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} name='login' placeholder='Логин' validate={required} /></div>
        <div><Field component={Input} name='password' placeholder='Пароль' validate={required} /></div>
        <div><Field component={Input} name='rememberMe' type='checkbox' />Запомнить меня</div>
        <div><button>Войти</button></div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

export default Login;