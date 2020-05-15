<template>
  <div>
      <!-- <input type="button" value="点击显示隐藏" @click="show=!show"> -->
      <input type="text" v-model="show">
      <transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
        <p v-show="show" class="animated" :key="val" v-for="(val,index) in lists">{{val}}</p>
      </transition-group>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
        show:'',
        list:['xx','yy','zz','gg']
    };
  },
  methods:{

  },
  computed:{
    lists:function(){
      var arr = [];
      this.list.forEach(function(val){
        if(val.indexOf(this.show) != -1){
          arr.push(val);
        }
      }.bind(this))
      return arr;
    }
  }
};
</script>
<style type="text/css" scoped>
p{
    width:100px;
    height: 100px;
    background: greenyellow;
    margin: 10px auto;
}
</style>