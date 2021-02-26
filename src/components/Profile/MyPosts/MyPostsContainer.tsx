import React from 'react';
import {addPostAC, updateNewPostText} from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import {PostsType} from "../../../Redux/state";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../../Redux/redux-store";

type mapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}
type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, {
    addPost: addPostAC,
    updateNewPostText: updateNewPostText
})(MyPosts)

export default MyPostsContainer;