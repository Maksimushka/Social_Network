import React from 'react';
import {UsersType} from '../../Redux/users-page/users-reducer';
import {Paginator} from './paginator';
import User from './User';

type UsersPropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangePage: (currentPage: number) => void
    followingInProgress: [] | number[]
    follow: (id: number) => void
    unFollow: (id: number) => void
}

let Users = React.memo((props: UsersPropsType) => {
    const {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        onChangePage,
        followingInProgress,
        follow,
        unFollow
    } = props

    // let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= 30; i++) {
        pages.push(i)
    }
    return (
        <div>
            <Paginator currentPage={currentPage} pages={pages} onChangePage={onChangePage}/>
            {
                users.map(us => {
                    const onFollowHandler = () => follow(us.id)
                    const onUnFollowHandler = () => unFollow(us.id)

                    return <User
                        key={`${us.id} ${us.name}`}
                        followingInProgress={followingInProgress}
                        onUnFollowHandler={onUnFollowHandler}
                        onFollowHandler={onFollowHandler}
                        us={us} />
                })
            }
        </div>
    )
})

export default Users