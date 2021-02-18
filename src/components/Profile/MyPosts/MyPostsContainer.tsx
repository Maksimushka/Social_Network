import React from 'react';
import {addPostAC, updateNewPostText} from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import {ActionsTypes, PostsType} from "../../../Redux/state";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

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

let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostText(text))
        }
    }
}

const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;