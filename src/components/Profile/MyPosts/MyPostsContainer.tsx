import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {RootStoreType} from '../../../Redux/redux-store';
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

let mapStateToProps = (state: RootStoreType) => ({
    posts: state.profilePage.posts
})

const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStoreType>(mapStateToProps, {
    addPostAC
})(MyPosts)

export default MyPostsContainer;