import request from '@/utils/request'

export const login = (params)=>{
    return request({
        url:'/api/login',
        method:'get',
        params
    })
}

export const fetchUserInfo = (params)=>{
    return request({
        url:'/api/fetchUserInfo',
        method:'get',
        params
    })
}

export const news = (params)=>{
    return request({
        url:'/api/news',
        method:'get',
        params
    })
}
