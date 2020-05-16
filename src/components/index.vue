<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        mode="vertical"
        background-color="#333"
        text-color="#FFF"
        active-text-color="#000"
        router
      >
        <el-menu-item  v-for="(obj) in meuns" v-bind:key="obj.id" :index="obj.id">
          <i class="el-icon-setting"></i>
          <span slot="title">{{obj.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container :style=rightStyle>
      <el-header style="text-align: right; font-size: 12px;">
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
  background-color: #333;
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
    return {
      isCollapse: false,
      rightStyle: {
        'margin-left':'0px',
        'background-color':'#e0e0e0'
      },
      meuns: [
        { id: "/user", name: "路由" },
        { id: "/filter", name: "过滤器" },
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