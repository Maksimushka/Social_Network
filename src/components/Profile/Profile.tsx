import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../Redux/state";

type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.newPostText}
                     dispatch={props.dispatch}
                     posts={props.posts}
            />
        </div>
    );
}

export default Profile;