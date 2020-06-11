import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/index.vue'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path:'/',
    component:Layout,
    redirect:'/index',
    meta:{
      title:'首页',
      icon:'',
      hidden: false
    },
    children:[
      {
        path:'index',
        component:()=>import('@/views/index'),
      }
    ]
  },
  {
    path:'/demo',
    component:Layout,
    redirect:'/demo/list',
    meta:{
      title:'示例',
      icon:'',
      hidden: false
    },
    children:[
      {
        path:'list',
        component:()=>import('@/views/demo'),
      }
    ]
  },
  {
    path:'/login',
    component:()=>import('@/views/login'),
    meta:{
      title:'登录',
      icon:'',
      hidden: true
    }
  },
  {
    path:'/404',
    component:()=>import('@/views/404'),
    meta:{
      title:'404',
      icon:'',
      hidden: true
    }
  }
]

export const asyncRoutes = [
  {
    path:'/illustration',
    component:()=>import('@/views/illustration'),
    meta:{
      roles:['admin'],
      title:'插画',
      icon:'',
      hidden: false
    }
  },
  {
    path:'/photos',
    component:Layout,
    redirect: '/photos/list',
    meta:{
      roles:['admin','base'],
      title:'摄影',
      icon:'',
      hidden: false
    },
    children:[
      {
        path:'list',
        component:()=>import('@/views/photos'),
      }
    ]
  },
  {
    path:'/math',
    component:()=>import('@/views/math'),
    meta:{
      roles:['admin'],
      title:'数学',
      icon:'',
      hidden: false
    }
  },
  {
    path:'/games',
    component:()=>import('@/views/games'),
    meta:{
      roles:['admin'],
      title:'游戏',
      icon:'',
      hidden: false
    }
  }
]

const createRouter = () =>  new VueRouter({
  // mode: 'history',
  mode:'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes:constantRoutes
})

const router = createRouter()

export function resetRouter(){
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}



const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
