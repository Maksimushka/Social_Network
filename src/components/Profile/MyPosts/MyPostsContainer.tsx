import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStateReduxType} from '../../../Redux/redux-store';
import {addPostAC} from '../../../Redux/profile-page/profile-actions';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
type mapStateToPropsType = {
    posts: PostsType[]
}
type mapDispatchToPropsType = {
    addPostAC: (text: string) => void
}

let mapStateToProps = (state: RootStateReduxType) => ({
    posts: state.profilePage.posts
})

const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, {
    addPostAC
})(MyPosts)

export default MyPostsContainer;