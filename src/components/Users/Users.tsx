import React from 'react'
import s from './Users.module.css'
import {UserReducerType} from "../../Redux/users-reducer";

type UsersPropsType = {
    users: UserReducerType[]
    setUsers: (users: UserReducerType[]) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

export function Users(props: UsersPropsType) {
    let photoUrl = "https://northlands.ru/data/media/14/50930ef9c06c1b4f1a3619eaf0b56a96.jpg"
    if (props.users.length === 0) {
        props.setUsers(
            [ {id: 1, photoURL: photoUrl, name: "Sveta", followed: false, status: "I,m glad to see you!", location: {city: "Minsk", country: "Belarus"} },
                {id: 2, photoURL: photoUrl, name: "Vika", followed: true, status: "Hi, how are you?", location: {city: "Novosibirsk", country: "Russia"} },
                {id: 3, photoURL: photoUrl, name: "Max", followed: false, status: "What's up", location: {city: "Kiev", country: "Ukraine"} }, ]
        )
    }

    return (
        <div>
            {
                props.users.map( us => {
                    let onFollowHandler = () => { props.follow(us.id) }
                    let onUnFollowHandler = () => { props.unFollow(us.id) }

                    return <div className={s.user} key={us.id}>
                        <div className={s.userIcon}>
                            <div>
                                <img className={s.photo} src={us.photoURL} alt="dsg"/>
                            </div>
                            <div>
                                { us.followed
                                    ? <button onClick={onUnFollowHandler}>Unfollow</button>
                                    : <button onClick={onFollowHandler}>Follow</button> }

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
                                    {us.location.city}
                                </div>
                                <div>
                                    {us.location.country}
                                </div>
                            </div>
                        </div>
                    </div>
                } )
            }
        </div>
    )
}