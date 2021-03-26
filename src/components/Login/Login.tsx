import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/formsControls/FormsControls';
import {maxLengthCreator, requiredField} from '../../common/validators/validators';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    console.log('rerender')
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={Input} name={'login'}
                   validate={[requiredField, maxLength30]}
                   placeholder={'Login'}/>
            <Field component={Input} name={'password'}
                   validate={[requiredField, maxLength30]}
                   placeholder={'Password'}/>
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