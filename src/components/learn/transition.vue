<template>
  <div>
      <input type="button" value="点击显示隐藏" @click="show=!show">
      <transition name="fade" 
      @before-enter="beforeEnter" 
      @enter="enter" 
      @after-enter="afterEnter"
      @before-leave="beforeLeave" 
      @leave="leave" 
      @after-leave="afterLeave"
      >
        <p v-show="show"></p>
      </transition>
  </div>
</template>
<script type="text/javascript">
export default {
  name:'transitionA',
  data() {
    return {
        show:false
    };
  },
  methods:{
    beforeEnter(el){
      console.log('动画enter之前');
    },
    enter(el){
      console.log('动画enter进入');
    },
    afterEnter(el){
      console.log('动画进入之后');
      // el.style.background="blue";
    },
    beforeLeave(el){
      console.log('动画leave之前');
    },
    leave(el){
      console.log('动画leave离开');
    },
    afterLeave(el){
      console.log('动画离开之后')
    }
  }
};
</script>
<style type="text/css" scoped>
p{
    width:100px;
    height: 100px;
    background: greenyellow;
}
.fade-enter-active,.fade-leave-active{
    transition: 1s all ease;
}
.fade-enter,.fade-leave{
    opacity: 0;
    width: 100px;
    height: 100px;
}
.fade-enter-active{
    opacity: 1;
    width: 300px;
    height: 300px;
}
.fade-leave-active{
    opacity: 0;
    width: 100px;
    height: 100px;  
}
</style>