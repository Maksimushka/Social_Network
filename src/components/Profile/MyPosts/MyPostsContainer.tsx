import React from 'react';
import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {RootStateReduxType} from "../../../Redux/redux-store";
import {addPostAC, updateNewPostTextAC} from '../../../Redux/profile-page/profile-actions';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
type mapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}
type mapDispatchToPropsType = {
    updateNewPostTextAC: (text: string) => void
    addPostAC: () => void
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, {
    addPostAC,
    updateNewPostTextAC
})(MyPosts)

export default MyPostsContainer;