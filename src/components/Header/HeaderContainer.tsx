import { withRouter} from 'react-router-dom';
import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {RootStateReduxType} from '../../Redux/redux-store';
import {authAPI, profileAPI} from '../../api/api';
import {setUserDataAC, setUserPhotoAC} from '../../Redux/auth-page/auth-actions';

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        authAPI.getAuth().then(({data}) => {
            if (data.resultCode === 0) {
                let {id, login, email } = data.data
                this.props.setUserDataAC(id, email, login)
                profileAPI.getUser(id).then((resp) => {
                    this.props.setUserPhotoAC(resp.photos.small)
                })
            }
        })
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
    photo: auth.photo
})

let WithHeaderRout = withRouter(HeaderContainer)

export default connect(mapStateToProps, {setUserDataAC, setUserPhotoAC})(WithHeaderRout);