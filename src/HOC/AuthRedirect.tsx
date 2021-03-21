import React, {ComponentType} from 'react';
import {Redirect} from 'react-router';
import {RootStateReduxType} from '../Redux/redux-store';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootStateReduxType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

function AuthRedirect<T>(Component: ComponentType<T>) {
    let RedirectComponent = ({isAuth, ...restProps}: MapStateToPropsType) => {
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T} />
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export default AuthRedirect;