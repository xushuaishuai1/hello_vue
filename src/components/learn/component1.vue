<template>
  <div>
  <componenta></componenta>
  <componentb></componentb>
  <componentc></componentc>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
// //全局
var Event = new Vue();


export default {
  name: "component1",
  data() {
    return {
      componenta: "componenta",
      componentb: "componentb",
      componentc: "componentc",
    };
  },
  components: {
    componenta: {
        data(){
            return {
                a:'我是a数据'
            }
        },
        template:`
            <div>
            <span>这里是组件A -> {{a}}</span>
            <input type="button" value="把A数据给C" @click="send">
            </div>
        `,
        methods:{
            send(){
                Event.$emit('a-msg',this.a);
            }
        },
        mounted(){
            var _this = this;
            Event.$on('a-msg-c',function(msg){
                _this.a = msg;
            })
        }
    },
    componentb: {
        data(){
            return {
                b:'我是b数据'
            }
        },
        template:`
            <div>
            <span>这里是组件B -> {{b}}</span>
            <input type="button" value="把B数据给C" @click="send">
            </div>
        `,
        methods:{
            send(){
                Event.$emit('b-msg',this.b);
            }
        },
        mounted(){
            var _this = this;
            Event.$on('b-msg-c',function(msg){
                _this.b = msg;
            })
        }
    },
    componentc: {
        template:`
            <div>
            <span>这里是组件C</span>
            <br>
            <span>A组件数据为 -> ({{aMsg}})</span><input type="button" value="修改a数据" @click="changea">
            <br>
            <span>b组件数据为 -> ({{bMsg}})</span><input type="button" value="修改b数据" @click="changeb">
            </div>
        `,
        data(){
            return {
                aMsg:'',
                bMsg:''
            }
        },
        methods:{
            changea(){
                this.aMsg = "a已修改";
                Event.$emit('a-msg-c',this.aMsg);
            },
            changeb(){
                this.bMsg = "b已修改";
                Event.$emit('b-msg-c',this.bMsg);
            }
        },
        mounted(){
            var _this = this;
            Event.$on('a-msg',function(msg){
                _this.aMsg = msg;
            }),
            Event.$on('b-msg',function(msg){
                _this.bMsg = msg;
            })
        }
    }
  }
};
</script>

<style type="text/css">
#vue {
  color: green;
  font-size: 28px;
}
</style>