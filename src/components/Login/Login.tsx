import React from 'react';
import s from './Login.module.scss'
import {InputUse, MyCheckbox} from '../common/formsControls/FormsControls';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from '../../Redux/auth-page/auth-actions';
import {Redirect} from 'react-router';
import {RootStoreType} from '../../Redux/redux-store';
import {authReducerType} from '../../Redux/auth-page/auth-reducer';
import {Formik} from 'formik';
import * as Yup from 'yup';

type LoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
    captcha: string
}

const Login = () => {
    const dispatch = useDispatch()
    const {isAuth, captcha} = useSelector<RootStoreType, authReducerType>(state => state.auth)

    const onSubmit = (formData: LoginDataType) => {
        dispatch(setLogin(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                    captcha: ''
                }}
                validationSchema= {Yup.object({
                    email: Yup.string().max(25, 'Must be 25 characters or less').required('Required').email(),
                    password: Yup.string().max(25, 'Must be 95 characters or less').required('Required')
                })}
                onSubmit={ (values) => {
                    onSubmit(values)
                }}>
                {formik => (
                    <form className={s.form} onSubmit={formik.handleSubmit}>
                        <InputUse className={s.input} label='Email: ' name='email' id='email' placeholder='Enter your email' />
                        <InputUse className={s.input} label='Password: ' type='password' name='password' id='password' />
                        <div className={s.rememberBlock}>
                            <span>Remember me</span>
                            <MyCheckbox id='rememberMe' name='rememberMe' />
                        </div>

                        {captcha && <img src={captcha} alt="captcha"/>}
                        {
                            captcha && <InputUse className={s.input} label='Enter symbols from image: '
                                                 name='captcha' id='captcha' />}

                        <button type='submit'>Login</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Login