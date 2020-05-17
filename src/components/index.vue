<template>
  <el-container style="height:calc(100vh);">
    <el-aside :style="asidewidth">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        mode="vertical"
        background-color="#333"
        text-color="#FFF"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item v-for="(obj) in meuns" v-bind:key="obj.id" :index="obj.id">
          <i :class="obj.icon"></i>
          <span slot="title">{{obj.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container :style="rightStyle">
      <el-header>
        <el-row>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
            <span style="float:left;" @click="setIsCollapse">
              <i class="el-icon-s-fold"></i>
            </span>
          </el-col>
          <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#333"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item v-for="(obj) in menusHead" v-bind:key="obj.id" :index="obj.id">
                <span slot="title">{{obj.name}}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>王小虎</span>
          </el-col>
        </el-row>
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
.el-header {
  text-align: right;
  font-size: 12px;
  color: #fff;
}
</style>

<script>
// let meuns1= [
//         { id: "/user", name: "路由" ,icon:"el-icon-user-solid"},
//         { id: "/filter", name: "过滤器" ,icon:"el-icon-help"},
//         { id: "/component", name: "组件通信" ,icon:"el-icon-s-release"},
//         { id: "/component1", name: "组件通信推荐" ,icon:"el-icon-s-management"},
//         { id: "/transition", name: "动画" ,icon:"el-icon-s-promotion"},
//         { id: "/transition1", name: "动画推荐" ,icon:"el-icon-s-open"},
//         { id: "/ownComponentUse", name: "自定义主键" ,icon:"el-icon-s-shop"},
//         { id: "/vuexLearn" , name: "vuex学习",icon:"el-icon-s-opportunity"},
//         { id: "/commonForm" , name: "form表单",icon:"el-icon-tickets"},
//         { id: "/table" , name: "table",icon:"el-icon-date"}
//       ];

let meuns1 = [
  { id: "/user", name: "路由", icon: "el-icon-user-solid" },
  { id: "/filter", name: "过滤器", icon: "el-icon-help" },
];

let meuns2 = [
  { id: "/component", name: "组件通信", icon: "el-icon-s-release" },
  { id: "/component1", name: "组件通信推荐", icon: "el-icon-s-management" },
  { id: "/transition", name: "动画", icon: "el-icon-s-promotion" },
  { id: "/transition1", name: "动画推荐", icon: "el-icon-s-open" }
];

let meuns3 = [
  { id: "/ownComponentUse", name: "自定义主键", icon: "el-icon-s-shop" },
  { id: "/vuexLearn", name: "vuex学习", icon: "el-icon-s-opportunity" },
  { id: "/commonForm", name: "form表单", icon: "el-icon-tickets" },
  { id: "/table", name: "table", icon: "el-icon-date" }
];

let menusHead = [
  { id: "menus1Head", name: "路由过滤器"},
  { id: "menus2Head", name: "组件动画"},
  { id: "menus3Head", name: "表单"}
];

let map = new Map();
map["menus1Head"] = meuns1;
map["menus2Head"] = meuns2;
map["menus3Head"] = meuns3;

export default {
  data() {
    return {
      isCollapse: false,
      asidewidth: {
        width: "200px",
        height: "calc(100vh)",
        "background-color": "#333",
        transition: "width 0.5s"
      },
      rightStyle: {
        // 'margin-left':'0px',
        "background-color": "#e0e0e0"
      },
      meuns: meuns1,
      menusHead:menusHead
    };
  },
  mounted: function() {
    this.initMenuAndUser();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.meuns = map[key];
    },
    setIsCollapse() {
      if (this.isCollapse) {
        this.isCollapse = false;
        this.asidewidth["width"] = "200px";
      } else {
        this.isCollapse = true;
        this.asidewidth["width"] = "65px";
      }
    },
    initMenuAndUser() {
      // let param = new URLSearchParams()
      // this.$http.get('/index',param)
      //   .then(response => {
      //     console.log(response.data);
      //   })
      //   .catch(function(error) {
      //     this.$message.error('后台接口调用失败！');
      //     this.initCode();
      //   });
    }
  }
};
</script>