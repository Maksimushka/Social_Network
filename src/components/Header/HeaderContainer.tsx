import {withRouter} from 'react-router-dom';
import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {RootStoreType} from '../../Redux/redux-store';
import {setLogout} from '../../Redux/auth-page/auth-actions';

class HeaderContainer extends React.Component<any, any> {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = ({auth}: RootStoreType) => ({
    isAuth: auth.isAuth,
    login: auth.login,
    photo: auth.photo,
    userId: auth.userId
})

let WithHeaderRout = withRouter(HeaderContainer)

export default connect(mapStateToProps, {
    setLogout
})(WithHeaderRout);