import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootStateReduxType} from '../../Redux/redux-store';
import {withRouter} from 'react-router-dom';
import {profileAPI} from '../../api/api';
import {setUserProfileAC} from '../../Redux/profile-page/profile-actions';

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        profileAPI.getUser(userId).then((data) => {
            this.props.setUserProfileAC(data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}
let mapStateToProps = (state: RootStateReduxType): {profile: any} => ({
    profile: state.profilePage.profile
})

let WithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfileAC })(WithUrlData);