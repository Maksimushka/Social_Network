import {NavLink, withRouter} from 'react-router-dom';
import Header from './Header';
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserDataAC, setUserPhotoAC} from '../../Redux/auth-reducer';
import {RootStateReduxType} from '../../Redux/redux-store';
import {setUserProfileAC} from '../../Redux/profile-reducer';

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email } = response.data.data
                this.props.setUserDataAC(id, email, login)
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id).then(({data}) => {
                    debugger
                    this.props.setUserPhotoAC(data.photos.small)
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