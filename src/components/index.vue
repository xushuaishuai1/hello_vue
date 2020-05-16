<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :router=true
      >
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->

        <el-menu-item  v-for="obj in meuns" v-bind:key="obj.id" :index="obj.id" >
          <i class="el-icon-setting"></i>
          <span slot="title">{{obj.name}}</span>
        </el-menu-item>


      </el-menu>
    </el-aside>

    <el-container :style=rightStyle>
      <el-header style="text-align: right; font-size: 12px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
          <router-view class="animated"></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      isCollapse: false,
      rightStyle: {
        'margin-left':'0px',
        'background-color':'#EEF1F6'
      },
      meuns: [
        { id: "/user", name: "路由" },
        { id: "/filter", name: "过滤器" },
        // { id: "/container", name: "前台菜单模板" },
        { id: "/component", name: "组件通信" },
        { id: "/component1", name: "组件通信推荐" },
        { id: "/transition", name: "动画" },
        { id: "/transition1", name: "动画推荐" },
        { id: "/ownComponentUse", name: "自定义主键" },
        { id: "/vuexLearn" , name: "vuex学习"},
        { id: "/commonForm" , name: "form表单"},
        { id: "/table" , name: "table"}
      ]
    };
  },
  watch:{
    isCollapse(){
      if(this.isCollapse == true){
        this.rightStyle['margin-left']='-135px';
      }else{
       this.rightStyle['margin-left']='-0px';
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>