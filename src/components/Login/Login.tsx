import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/formsControls/FormsControls';
import {maxLengthCreator, requiredField} from '../../common/validators/validators';
import {connect} from 'react-redux';
import {setLogin} from '../../Redux/auth-page/auth-actions';
import {Redirect} from 'react-router';
import {RootStateReduxType} from '../../Redux/redux-store';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    console.log('rerender')
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={Input} name={'email'}
                   validate={[requiredField, maxLength30]}
                   placeholder={'Login'}/>
            <Field component={Input} name={'password'} type="password"
                   validate={[requiredField, maxLength30]}
                   placeholder={'Password'}/>
            <div>
                <Field component={'input'} id={'123'}
                       name={'rememberMe'} type="checkbox"/>
                <label htmlFor="123"> remember me</label>
            </div>
            <button className={s.button}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({ form: 'login' })(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.setLogin(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state: RootStateReduxType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setLogin })(Login)