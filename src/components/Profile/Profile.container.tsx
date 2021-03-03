import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfileAC} from '../../Redux/profile-reducer';
import {RootStateReduxType} from '../../Redux/redux-store';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(({data}) => {
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