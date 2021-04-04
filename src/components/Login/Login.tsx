import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {CreateField, Input} from '../common/formsControls/FormsControls';
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
            { CreateField('Login', 'email', [requiredField, maxLength30], Input, '' ) }
            { CreateField('Password', 'password', [requiredField, maxLength30], Input, 'password' ) }

            <div>
                <Field component={'input'} id={'123'}
                       name={'rememberMe'} type="checkbox"/>
                <label htmlFor="123"> remember me</label>
            </div>
            {
                props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }

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