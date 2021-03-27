import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootStateReduxType} from '../../Redux/redux-store';
import {withRouter} from 'react-router-dom';
import {changeUserStatus, getUserProfile, getUserStatus} from '../../Redux/profile-page/profile-actions';
import AuthRedirect from '../../HOC/AuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 15246
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

let mapStateToProps = (state: RootStateReduxType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getUserStatus, changeUserStatus }),
    withRouter,
    AuthRedirect
)(ProfileContainer)