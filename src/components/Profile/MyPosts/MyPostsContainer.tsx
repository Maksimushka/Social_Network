import React from 'react';

import {addPostAC, updateNewPostText} from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import {StoreType} from "../../../Redux/state";
import StoreContext from '../../../storeContext';

type MyPostsContainerPropsType = {
    store: StoreType
}

const MyPostsContainer = () => {



    return (
        <StoreContext.Consumer>{
            (store: StoreType) => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostAC(state.profilePage.newPostText))
                }
                let onChange = (text: string) => {
                    store.dispatch(updateNewPostText(text))
                }


                return<MyPosts
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}
                    addPost={addPost}
                    updateNewPostText={onChange}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;