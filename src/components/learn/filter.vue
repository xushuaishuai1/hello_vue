<template>
  <div id="vue" v-red>
    Filter Vue.js! {{ message1 | fiterHtml('aa','bb') }}
    <input type="text" v-model="message1" />
    <hr />
    {{new Date() | normalTime}}
    <hr/>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <hr />
    <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
    <hr />
    <el-button @click="show2 = !show2">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center ">
        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
    <hr />
    <el-button @click="show3 = !show3">Click Me</el-button>
    <div style="margin-top: 20px; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </el-collapse-transition>
    </div>
    <hr/>
    <div>
      <el-button :plain="true" @click="open1">消息</el-button>
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  //这里需要将模块引出，可在其他地方使用
  name: "HelloVue1",
  data() {
    //注意：data即使不需要传数据，也必须return,否则会报错
    return {
      message1: "啦啦啦啦啦",
      visible: false,
      show: true,
      show2: true,
      show3: true
    };
  },
  transitions: {
    bounce: {
      enterClass: "zoomInLeft",
      leaveClass: "zoomOutRight"
    }
  },
  //自定义过滤
  filters: {
    //可带参数
    fiterHtml: function(input,a,b) {
      return input.replace(/<[^<]+>/g, "")+"a="+a+"##b="+b;
    }
  },
  //自定义指令
  directives: {
    red: function(obj) {
      obj.style.background = "white";
    }
  },
  methods: {
      open1() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
};
</script>

<style type="text/css">
#vue {
  color: blueviolet;
  font-size: 28px;
}
.transition-box {
  margin-bottom: 10px;
  /* width: 200px; */
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>