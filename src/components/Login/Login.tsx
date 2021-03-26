import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    console.log('rerender')
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={'input'} className={s.input}
                   name={'login'} placeholder={'Login'}/>
            <Field component={'input'} className={s.input}
                   name={'password'} placeholder={'Password'}/>
            <div>
                <Field component={'input'} id={'123'}
                       name={'rememberMe'} type="checkbox"/>
                <label htmlFor="123"> remember me</label>
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login