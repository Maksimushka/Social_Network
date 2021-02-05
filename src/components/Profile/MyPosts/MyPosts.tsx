import React, {ChangeEvent, createRef} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {AddPostType, PostsType} from "../../../Redux/state";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: AddPostType
}


const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {

        props.addPost(props.newPostText);
    }
    let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.posts}>
            <h2 className={s.head}>My post</h2>
            <div>
                <div>
                    <textarea
                        value={ props.newPostText }
                        onChange={ onChange }
                        placeholder="What's new?"
                        className={s.input}/>
                </div>
                <div>
                    <button onClick={addPost} className={s.button}>Add post</button>
                </div>
            </div>
            <div className={s.posts__item}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;