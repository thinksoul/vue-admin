<template>
    <div class="sidebar-box">
        <el-menu 
            class="el-menu" 
            background-color="#333"
            text-color="#fff"
            active-text-color=""
        >
            <div v-for="(item,index) in routes" :key = "index">
                <el-menu-item
                    class="menu-item"
                    v-if="!item.meta.hidden" 
                    :index="index.toString()" 
                    @click="handleGo(item.path)"
                >
                    <i class="el-icon-menu"></i>
                    <span>{{item.meta.title}}</span>
                </el-menu-item>
            </div>
        </el-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'routes'
        ])
    },
    methods:{
        handleGo(path){
            console.log(path)
            this.$router.push({path})
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar-box{
    height:100%;
    .el-menu{
        height:100%;
        .menu-item{
            width:99%;
        }
    }
}
</style>