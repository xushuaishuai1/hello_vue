<template>
  <div id="app" width="99%">
    <Loading v-show="loading"></Loading>
    <el-row style="border:1px solid black">
      <el-col :span="4">
        <span>Vue学习</span>&nbsp;现在数字为：{{getCount}},{{judgeOdd}}
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="getData">axios</el-button>
      </el-col>
      <el-col :span="8">
        <!--自定义主键事件需要加native-->
        <OwnButton @click.native="getData">自定义button</OwnButton>
      </el-col>
      <el-col :span="6">axiosMessage - > {{axiosMessage}}</el-col>
      <el-col :span="4">
        <el-button type="primary" @click="changeMenu">切换到过滤器</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" style="border-right:1px solid black">
        <ul>
          <li v-for="obj in meuns" v-bind:key="obj.id">
            <router-link :to="obj.id">{{obj.name}}</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="18">
        <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
          <router-view class="animated"></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import OwnButton from "@/components/learn/ownButton";
import {mapGetters,mapActions} from 'vuex'
export default {
  name: "App",
  data() {
    return {
      meuns: [
        { id: "/user", name: "路由" },
        { id: "/filter", name: "过滤器" },
        { id: "/container", name: "前台菜单模板" },
        { id: "/component", name: "组件通信" },
        { id: "/component1", name: "组件通信推荐" },
        { id: "/transition", name: "动画" },
        { id: "/transition1", name: "动画推荐" },
        { id: "/ownComponentUse", name: "自定义主键" },
        { id: "/vuexLearn" , name: "vuex学习"},
        { id: "/commonForm" , name: "form表单"},
        { id: "/table" , name: "table"}
      ],
      axiosMessage: "无数据"
    };
  },
  components: {
    OwnButton
  },
  methods: {
    getData() {
      // this.axios
      this.$http
        .get("/search/?keyword=aa")
        .then(response => {
          this.axiosMessage = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    changeMenu() {
      this.$router.push({ path: "filter" });
      // this.$router.push('filter');
      //this.$router.push(path):相当于点击路由链接(可以返回到当前路由界面)
      //this.$router.replace(path):用新路由替换当前路由(不可以返回到当前路由界面)
      //this.$router.back(): 请求(返回)上一个记录路由

      //路由参数传递 获取 方法一
      //路由参数传递this.$router.push({name:"product‐list", query:{"name":val}});
      //路由参数获取let searchName = this.$route.query.name
      //路由参数传递 获取 方法二
      //路由定义{ path:'/product/:id', name:'product', component: ProductDetail }
      //模板使用<router‐link :to="{name:'product',params:{id:1}}">产品1连接</router‐link>
      //获取let id = this.$route.params.id;
    },
    firstLoading(){
      console.log("loading——OK");
    }
  },
  mounted(){
    //初始化获取数据使用
    this.firstLoading();
  },
  watch:{
    //监控路由变化
    $route:function(to,from){
      // console.log(to);//到哪个路由
      // console.log(from);//从哪个路由
      //主动调用vuex执行
      this.$store.dispatch('add');
    }
  },
  computed:mapGetters([
        'getCount',
        'judgeOdd',
        'loading'
  ])
};
</script>
<style scoped>
.router-link-exact-active,
.router-link-active {
  font-size: 20px;
  color: #f60;
}
</style>