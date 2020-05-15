<template>
  <parentComponent></parentComponent>
</template>
<script type="text/javascript">
  export default { //这里需要将模块引出，可在其他地方使用
    name: "component1",
    data (){ //注意：data即使不需要传数据，也必须return,否则会报错
      return {
        a:'parentComponent'
      }
    },
    components:{
				'parentComponent':{
					data(){
						return {
              childMsg:{},
              parentData:{
                  msg1:'我是父组件的数据'
              }
						}
          },
          methods:{
            //2.3 获取子组件传递的数据
						getFromChild(msg){
							this.childMsg=msg;
            },
            changeChild(){
              //修改子组件数据
              this.childMsg.msg2 = "子组件数据被改了";
            }
					},
          template:'<div><span>这里是父组件</span>->我自己数据：({{parentData.msg1}})->子组件数据：({{childMsg.msg2}})<input type="button" value="修改子组件数据" @click="changeChild">'
                  +'<br/><br/><br/>'
                  //1.1:parentMsg="parentData"以此方法获取父组件数据 父组件需要给子组件一个对象  不能给一个数据
                  //2.2 @child-msg="getFromChild"以此方法接收子组件传递的数据
                  +'<childComponet :parentMsg="parentData" @child-msg="getFromChild"></childComponet></div>',
          components:{
						'childComponet':{
              //1.2
							props:['parentMsg'],
              data(){
								return {
                  childData:{
                    msg2:'我是子组件的数据'
                  }
								}
							},
              template:'<div><span>这里是子组件->我自己数据：({{childData.msg2}})->父组件数据：({{parentMsg.msg1}})</span>'
                      +'<input type="button" value="send" @click="sendToParent"><input type="button" value="修改父组件数据" @click="changeParent"></div>',
              methods:{
								sendToParent(){
                  //2.1 以此方法向父组件发送数据
									this.$emit('child-msg',this.childData);
                },
                changeParent(){
                  //只有在1.1中，子组件接收父组件数据为对象，才能更改父组件数据
                  this.parentMsg.msg1 = "父组件数据被改了";
                }
							}
						}
					}
				}
			}
  }
</script>

<style type="text/css">
  #vue{
    color: green;
    font-size: 28px;
  }
</style>