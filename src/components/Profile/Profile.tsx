import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getUserProfile, getUserStatus,} from '../../Redux/profile-page/profile-actions';
import {compose} from 'redux';
import {Preloader} from '../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {RootStoreType} from '../../Redux/redux-store';
import MyPosts from './MyPosts/MyPosts';
import AuthRedirect from '../../HOC/AuthRedirect';
import {Content} from 'antd/es/layout/layout';
import {useHistory} from 'react-router';

const Profile: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams<{id: string}>()
    const {profile} = useSelector((state: RootStoreType) => state.profilePage)
    const {userId} = useSelector((state: RootStoreType) => state.auth)

    useEffect(() => {
        let currentUserId = Number(id)
        if (!currentUserId) {
            currentUserId = userId!
            if (!currentUserId) {
                history.push('/login')
            }
        }
        dispatch(getUserProfile(currentUserId))
        dispatch(getUserStatus(currentUserId))
    }, [id, history, userId, dispatch])

    if (!profile) {
        return <Preloader/>
    }

    return (
        <Content>
            <ProfileInfo profile={profile} isOwner={!id}/>
            <MyPosts/>
        </Content>
    );
})

export default compose<React.ComponentType>(
    AuthRedirect
)(Profile)