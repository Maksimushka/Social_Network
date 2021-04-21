import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {addPostAC} from '../../../Redux/profile-page/profile-actions';
import {RootStoreType} from '../../../Redux/redux-store';
import * as Yup from 'yup';
import {InputUse} from '../../common/formsControls/FormsControls';
import {Formik} from 'formik';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts: React.FC = React.memo((props ) => {
    const dispatch = useDispatch()
    const { posts } = useSelector((state: RootStoreType) => state.profilePage)

    const addPost = (value: string) => {
        dispatch(addPostAC(value))
    }

    return (
        <div className={s.posts}>
            <h2 className={s.head}>My post</h2>
            <Formik
                initialValues={{text: ''}}
                validationSchema= {Yup.object({
                    text: Yup.string().max(195, 'Must be 195 characters or less').required('Required'),
                })}
                onSubmit={(values, actions) => {
                    addPost(values.text)
                    actions.resetForm()
                }}>
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <InputUse className={s.input} label='New post' name='text' id='text' placeholder='What is new?' />
                        <br/>
                        <button className={s.button} type='submit'>Send</button>
                    </form>
                )}
            </Formik>

            <div className={s.posts__item}>
                {
                    posts
                        .map(p => {
                        return <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
                    })
                }
            </div>
        </div>
    );
})

export default MyPosts;