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
    },
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
            .then(resp => resp)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then( (resp) => resp )
    },
    changeStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(img: File) {
        let formData = new FormData()
        formData.append('image', img)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveData(data: any) {
        return instance.put('profile', data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(resp => resp.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(resp => resp.data)
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(resp => resp)
    }
}