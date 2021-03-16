import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootStateReduxType} from '../../Redux/redux-store';
import {withRouter} from 'react-router-dom';
import {getUserProfile} from '../../Redux/profile-page/profile-actions';
import {Redirect} from 'react-router';

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state: RootStateReduxType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlData);