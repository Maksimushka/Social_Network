import React, {useEffect} from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {PostsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../common/validators/validators';
import {Textarea} from '../../common/formsControls/FormsControls';

type MyPostsPropsType = {
    posts: PostsType[]
    addPostAC: (text: string) => void
}

type ProfileFormType = {}

const maxLength60 = maxLengthCreator(60)

const ProfileForm: React.FC<InjectedFormProps<ProfileFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'textField'} component={Textarea} placeholder="What's new?"
                   validate={[requiredField, maxLength60]}
            />
            <button className={s.button}>Add post</button>
        </form>
    )
}
const ReduxProfileForm = reduxForm<ProfileFormType>({form: 'profile'})(ProfileForm)

const MyPosts = React.memo((props: MyPostsPropsType) => {

    useEffect(() => {

    }, [])

    const addPost = (values: any) => {
        props.addPostAC(values.textField)
    }

    return (
        <div className={s.posts}>
            <h2 className={s.head}>My post</h2>
            <ReduxProfileForm onSubmit={addPost}/>
            <div className={s.posts__item}>
                {
                    props.posts.map(p => {
                        return <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
                    })
                }
            </div>
        </div>
    );
})

export default MyPosts;