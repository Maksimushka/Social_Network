import React from 'react';
import {addPostAC, updateNewPostText} from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import {StoreType} from "../../../Redux/state";
import {connect} from "react-redux";

type MyPostsContainerPropsType = {
    store: StoreType
}


let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostText(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;