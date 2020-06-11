<template>
    <div class="demo-box">
        <el-table :data="tableData">
            <el-table-column
                prop='id'
                label="ID"
                width="50"
            >
            </el-table-column>
            <el-table-column
                prop='tag'
                label="TAG"
                width="100"
            >
            </el-table-column>
            <el-table-column
                prop='title'
                label="标题"
                width="200"
            >
            </el-table-column>
            <el-table-column
                prop='desc'
                label="描述"
            >
            </el-table-column>
             <el-table-column
                label="图形"
                width="100"
            >
                <template slot-scope="scope">
                    <img
                    v-for="(item,index) in scope.row.images" 
                    :key = "index"
                    :src="item"
                    >
                </template>
            </el-table-column>
            <el-table-column
                prop='createTime'
                label="创建时间"
                width="150"
            >
            </el-table-column>
            <el-table-column
                prop='views'
                label="阅读量"
                width="100"
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {news} from '@/api'
export default {
    data(){
        return{
            tableData:[]
        }
    },
    created(){
        news().then(res=>{
            this.tableData = res.data
        })
    }
}
</script>

<style lang="scss" scoped>
.demo-box{
    height: 100%;
    width: 100%;
    overflow:scroll;
}
</style>