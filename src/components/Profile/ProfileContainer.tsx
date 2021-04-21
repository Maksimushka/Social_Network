import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUserProfile, getUserStatus,} from '../../Redux/profile-page/profile-actions';
import {compose} from 'redux';
import {Preloader} from '../common/Preloader/Preloader';
import styleContainer from '../../common/container.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {RootStoreType} from '../../Redux/redux-store';
import MyPosts from './MyPosts/MyPosts';

const ProfileContainer = (props: any) => {
    const dispatch = useDispatch()
    const { profile } = useSelector((state: RootStoreType) => state.profilePage)
    const { userId } = useSelector((state: RootStoreType) => state.auth)

    useEffect(() => {
        let currentUserId = props.match.params.userId
        if (!currentUserId) {
            currentUserId = userId
            if (!currentUserId) {
                props.history.push('/login')
            }
        }
        if (currentUserId) {
            dispatch(getUserProfile(currentUserId))
            dispatch(getUserStatus(currentUserId))
        }
    }, [props.match.params.userId, props.history, userId, dispatch])


    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={styleContainer.container}>
            <ProfileInfo profile={profile} isOwner={!props.match.params.userId} />
            <MyPosts />
        </div>
    );
}

export default compose<React.ComponentType>(
    withRouter
)(ProfileContainer)