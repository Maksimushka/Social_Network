import React from 'react';
import p from './Post.module.css';
import {PostsType} from '../MyPosts';

const Post = (props: PostsType) => {
    return (
        <div key={props.id} className={p.item}>
            <img src="https://northlands.ru/data/media/14/50930ef9c06c1b4f1a3619eaf0b56a96.jpg" alt='' />
            {props.message}
            <div>
                {props.likesCount} likes
            </div>

        </div>
    )

}

export default Post;