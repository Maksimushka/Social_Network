import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts newPostText={props.newPostText}
                     addPost={props.addPost}
                     posts={props.posts}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;