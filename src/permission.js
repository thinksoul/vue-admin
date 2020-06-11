import nprogress from 'nprogress'
import {getToken} from '../src/utils/token'
import router from './router'
import store from './store'


const whiteList = ['/login']


router.beforeEach(async(to,from,next)=>{
    nprogress.start()
    if(getToken()) {
        if(to.path === '/login'){
            next({ path: '/' })
            nprogress.done()
        }else{
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if(hasRoles){
                next()
            }else{
                const {roles} =await store.dispatch('user/fetchUserInfo')
                const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                router.addRoutes(accessRoutes)
                next({ ...to, replace: true })
                // next()
                nprogress.done()
            }
        }
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else{
            next(`/login`)
            nprogress.done()
        }
    }
  })

router.afterEach(()=>{
    nprogress.done()
})