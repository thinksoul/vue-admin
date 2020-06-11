import axios from 'axios'
import {getToken} from './token.js'
import {  Message } from 'element-ui'

const service = axios.create({
    url:process.env.baseUrl,
    timeout:5000
})

service.interceptors.request.use(
    config => {
        if(getToken()){
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response=>{
       const res = response.data
       if(response.status !== 200){
        Message({
            message:response.message || 'Error',
            type:'error',
            duration:3000
        })
        return Promise.reject(new Error(response.message || 'Error'))
       } else {
        return res
       }
    },
    error=>{
        Message({
          message: error.message,
          type: 'error',
          duration: 3000
        })
        return Promise.reject(error)
    }
)
export default service;
