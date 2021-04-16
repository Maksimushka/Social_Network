import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    changeUserStatus,
    getUserProfile,
    getUserStatus,
    savePhotoTC,
    saveProfileDataTC
} from '../../Redux/profile-page/profile-actions';
import AuthRedirect from '../../HOC/AuthRedirect';
import {compose} from 'redux';
import {Preloader} from '../common/Preloader/Preloader';
import styleContainer from '../../common/container.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {RootStoreType} from '../../Redux/redux-store';

class ProfileContainer extends React.Component<any> {
    refreshProfile () {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return (
            <div className={styleContainer.container}>
                <ProfileInfo
                    saveProfileDataTC={this.props.saveProfileDataTC}
                    savePhoto={this.props.savePhotoTC}
                    changeUserStatus={this.props.changeUserStatus}
                    status={this.props.status}
                    profile={this.props.profile}
                    isOwner={!this.props.match.params.userId} {...this.props} />
                <MyPostsContainer/>
            </div>
        );
    }
}

let mapStateToProps = (state: RootStoreType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getUserStatus, changeUserStatus, savePhotoTC, saveProfileDataTC }),
    withRouter,
    AuthRedirect
)(ProfileContainer)