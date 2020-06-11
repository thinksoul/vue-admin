import { getToken, setToken, removeToken } from '../../utils/token'
import { login,fetchUserInfo } from '@/api'

const getDefaultState = () =>{
    return {
        token: getToken(),
        name: '',
        roles: []
      }
}
const state = getDefaultState()

const mutations = {
    resetState: (state) => {
        Object.assign(state, getDefaultState())
    },
    setToken:(state, token)=>{
        state.token = token
    },
    setName:(state,name)=>{
        state.name = name
    },
    setRoles:(state,roles) => {
        state.roles = roles
    }
}

const actions = {
    login({commit}){
        return new Promise((resolve,reject)=>{
            login().then(response=>{
                commit('setToken', response.token)
                setToken(response.token)
                resolve()
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    fetchUserInfo({commit, state}){
        return new Promise((resolve,reject)=>{
            fetchUserInfo(state.token).then(response=>{
                const {data} = response
                if (!data) {
                    reject('Verification failed, please Login again.')
                }
                const { roles, name } = data
                if (!roles || roles.length <= 0) {
                    reject('getInfo: roles must be a non-null array!')
                }
                commit('setName', name)
                commit('setRoles', roles)
                resolve(data)
            }).catch(error=>{
                reject(error)
            })
        })
    },
    resetToken({ commit }) {
        return new Promise(resolve => {
          removeToken() // must remove  token  first
          commit('resetState')
          resolve()
        })
      }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}