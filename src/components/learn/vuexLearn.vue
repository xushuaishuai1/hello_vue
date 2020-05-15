<template>
    <div class="vuex">
        <el-row>
            <el-col :span="2">
                <el-button @click="add">+增加</el-button>
            </el-col>
            <el-col :span="2">
                <el-button @click="del">-减少</el-button>
            </el-col>
            <el-col :span="4">
                <el-button @click="clickOdd">偶数才能+增加</el-button>
            </el-col>
            <el-col :span="3">
                <el-button @click="clickAsync">点击异步+增加(5s)</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div>
                    现在数字为：{{getCount}},{{judgeOdd}}
                </div>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    //1.调用vuex中actions.js里面方法
    methods:mapActions([
        'add',
        'del',
        'clickOdd',
        'clickAsync'
    ]),
    //2.调用vuex中getters.js里面方法获取数据
    computed:mapGetters([
        'getCount',
        'judgeOdd'
    ])
    
}
</script>
<style scoped>
.vuex{
    margin: 10px;
}
</style>