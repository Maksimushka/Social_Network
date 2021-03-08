import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0c7f7a4d-ffbe-4143-a04f-3a08c1c80984'
    }
})

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( resp => resp.data )
    },
    changePage(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( resp => resp.data )
    }
}

export const followAPI = {
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then( resp => resp.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then( resp => resp.data)
    }
}

export const profileAPI = {
    getUser(userId: number) {
        return instance.get(`profile/` + userId)
            .then(resp => resp.data)
    },
}

