<template>
    <div class="layout-box">
        <div class="title-box">
            <navbar/>
        </div>
        <div class="content-box">
            <div class="sidebar">
                <sidebar/>
            </div>
            <div class="appmain">
                <appmain/>
            </div>
        </div>
        
    </div>
</template>

<script>
import { sidebar, navbar, appmain } from './index'
export default {
    components:{
        sidebar,
        navbar,
        appmain,
    }
}
</script>

<style lang="scss" scoped>
.layout-box{
    height: 100%;
    .title-box{
        height:20%;
    }
    .content-box{
        clear: both;
        display: flex;
        height:80%;
        .sidebar{
            width:15%;
            height:100%;
        }
        .appmain{
            width:85%;
            height:100%;
        }
    }
}
</style>