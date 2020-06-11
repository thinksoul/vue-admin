import cookies from 'js-cookie'

const tokenKey = 'vue-admin'

export function setToken(token){
    return cookies.set(tokenKey, token)
}
export function getToken(){
    return cookies.get(tokenKey)
}
export function removeToken(){
    return cookies.remove(tokenKey)
}