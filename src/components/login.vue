<template>
  <div>
    <el-container>
      <el-header style="width: 100%;height: 60px;line-height: 60px">
        <div style="cursor: pointer;color: #0BA1DC;font-family: 微软雅黑;font-size:23px;padding-left: 5%;" >
          <img :src="require('../assets/images/logo1.png')" style="width:36px;height:24px;margin-bottom:-3px;"/> &nbsp;<span>高校档案系统</span>
        </div>
      </el-header>
      <el-main :style="backgroundImage" id="vue-login">
        <div class="login-wrap">
          <el-row>
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">&nbsp;</el-col>
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">&nbsp;</el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="login-div" id="login-div">
              <div class="layui-form">
                <div>
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  autocomplete="on" label-position="left">
                    <div>
                      <h3 class="title">用户登录</h3>
                    </div>
                    <el-form-item prop="username">
                      <el-input v-model="ruleForm.username" placeholder="用户名" class="loginInput" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                      <el-input type="password"  v-model="ruleForm.password" autocomplete="off" placeholder="密码"  prefix-icon="el-icon-lock"></el-input>
                    </el-form-item>
                    <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="submitForm('ruleForm')">立即登录</el-button>
                  </el-form>
                </div>
              </div>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">&nbsp;</el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer style="width: 100%;height: 60px;line-height: 60px;font-family:宋体;font-size:12px">
        <center>版权所有©南京远望蓝卫系统集成有限公司1999-2019 苏ICP备11047077号️</center>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "登录界面",
      backgroundImage: {
        backgroundImage: "url(" + require("../assets/images/login1.jpeg") + ")",
        "text-align": "center",
        height: "calc(100vh - 123px)",
        "padding-top": "1px",
        "margin-top": "-1px",
        overflow: "hidden",
        "background-size": "100% 100%"
      },
      ruleForm: {
        name: "",
        pass: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped >
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.title{
  color: #0BA1DC;
  font-family: serif;
  font-size:24px;
  text-align:left;
  margin-top: 40px;
}
</style>

