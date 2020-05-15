<template>
  <div id="vue">
    Hello Vue.js! {{ message }}<br/>
    {{$route.path}}
    <br/>
    {{$route.query}}
  <!-- <router-view/> -->
  </div>
</template>

<script type="text/javascript">
  export default { //这里需要将模块引出，可在其他地方使用
    name: "HelloVue",
    data (){ //注意：data即使不需要传数据，也必须return,否则会报错
      return {
        message: "啦啦啦啦啦"
      }
    }
  }
</script>
<!--代表局部样式-->
<style type="text/css" scope>
  #vue{
    color: green;
    font-size: 28px;
  }
</style>