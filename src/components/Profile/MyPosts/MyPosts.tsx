import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {PostsType} from "../../../Redux/state";


type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => { props.addPost() }
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