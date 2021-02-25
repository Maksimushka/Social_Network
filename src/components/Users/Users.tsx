import React from 'react'
import {UserReducerType} from '../../Redux/users-reducer';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import axios from 'axios';

type UsersPropsType = {
    users: UserReducerType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: UserReducerType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

class Users extends React.Component<UsersPropsType, any> {

    getState = () => {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
        }
    }

    componentDidMount() {
        this.getState()
    }

    onChangePage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            onClick={() => this.onChangePage(p)}
                            className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(us => {
                        let onFollowHandler = () => {
                            this.props.follow(us.id)
                        }
                        let onUnFollowHandler = () => {
                            this.props.unFollow(us.id)
                        }

                        return (<div className={s.user} key={us.id}>
                            <div className={s.userIcon}>
                                <div>
                                    <img className={s.photo}
                                         src={us.photos.small! !== null ? us.photos.small! : userPhoto} alt="dsg"/>
                                </div>
                                <div>
                                    {us.followed
                                        ? <button onClick={onUnFollowHandler}>Unfollow</button>
                                        : <button onClick={onFollowHandler}>Follow</button>}
                                </div>
                            </div>
                            <div className={s.userDescription}>
                                <div className={s.userDescriptionInfo}>
                                    <div>
                                        {us.name}
                                    </div>
                                    <div>
                                        {us.status}
                                    </div>
                                </div>
                                <div className={s.userDescriptionLocation}>
                                    <div>
                                        {'us.location.city'}
                                    </div>
                                    <div>
                                        {'us.location.country'}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        )
    }
}

export default Users