<template>
    <div class="navbar-box">
        <div class="title-box">

        </div>
        <div class='userInfo-box'>
            <div class='userInfo'>
                <span >你好，{{ueserInfo.name}}</span>
                <a href="javascrit:;" @click="handleExit">退出登录</a>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchUserInfo } from '@/api'
import { removeToken } from '@/utils/token'
export default {
    data(){
        return{
            ueserInfo:{}
        }
    },
    created(){
        fetchUserInfo().then(res=>{
            this.ueserInfo = res.data
        })
    },
    methods:{
        handleExit(){
            removeToken()
            this.$router.push({path:'/login'})
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-box{
    width:100%;
    height:100%;
    background-color: #333;
    .title-box{
        height: 70%;
    }
    .userInfo-box{
        background-color: #444;
        width:100%;
        font-size: 0.8rem;
        color:whitesmoke;
        height: 30%;
        .userInfo{
           margin-top: 10px;
            margin-right: 20px;
            float:right;
            span{
                margin-right:10px;
            }
            a{
                color:whitesmoke;
            }
        }  
    }
}
</style>