<template>
    <div class="login-box">
        <el-form :model="formField" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="formField.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formField.passWord"></el-input>
            </el-form-item>
            <el-form-item class="btn-box">
                <el-button type="primary" @click="handleLogin">登录</el-button>
                <el-button>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            formField:{
                userName:'',
                passWord:''
            }
        }
    },
    methods:{
        handleLogin(){
            this.$store.dispatch('user/login').then(()=>{
                this.$router.push({path:'/demo'})
            }).catch(()=>{

            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-box{
        width:300px;
        margin:0 auto;
        margin-top:200px;
    }
</style>