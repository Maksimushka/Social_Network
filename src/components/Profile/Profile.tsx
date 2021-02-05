import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { AddPostType, PostsType} from "../../Redux/state";

type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: AddPostType
}

const Profile = (props: ProfilePropsType) => {
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