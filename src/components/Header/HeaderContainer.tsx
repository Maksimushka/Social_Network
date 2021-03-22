import { withRouter} from 'react-router-dom';
import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {RootStateReduxType} from '../../Redux/redux-store';
import {getAuth} from '../../Redux/auth-page/auth-actions';

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = ({auth}: RootStateReduxType) => ({
    isAuth: auth.isAuth,
    login: auth.login,
    photo: auth.photo,
    userId: auth.userId
})

let WithHeaderRout = withRouter(HeaderContainer)

export default connect(mapStateToProps, {
    getAuth
})(WithHeaderRout);