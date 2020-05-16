import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import user from '@/components/learn/routeLearn/user'
import UserDetail from '@/components/learn/routeLearn/userDetail'
import filter from '@/components/learn/filter'
import component from '@/components/learn/component'
// import container from '@/components/learn/container'
import component1 from '@/components/learn/component1'
import transition from '@/components/learn/transition'
import transition1 from '@/components/learn/transition1'
import notFoundPage from '@/components/common/404'
import Index from '@/components/index'
import ownComponentUse from '@/components/learn/ownComponentUse'
import vuexLearn from '@/components/learn/vuexLearn'
import commonForm from '@/components/learn/commonForm'
import table from '@/components/learn/table'

Vue.use(Router)
export default new Router({
  //放了这个属性，打包后页面内容为空
  // mode:'history',
  //配置路由切换，界面滚动条回到最上面
  scrollBehavior:() => ({y:0}),
  routes: [

    //设置默认打开的路由
    { path: '/',
      component: Login
    },
    //404
    {
      path:'*',
      redirect:'/notFoundPage'//重定向
    },
    {
      path: '/index',
      component: Index,
      children:[
        {
          path:'/notFoundPage',
          component:notFoundPage
        },
        //普通界面路由
        {
          path: '/user',
          component: user,
          children:[
            {
              path:':username/age/:age',
              component:UserDetail
            }
          ]
        },
        {
          path: '/filter',
          component: filter
        },
        // {
        //   path:'/container',
        //   component: container
        // },
        {
          path:'/component',
          component: component
        },
        {
          path:'/component1',
          component: component1
        },
        {
          path:'/transition',
          component:transition
        },
        {
          path:'/transition1',
          component:transition1
        },
        {
          path:'/ownComponentUse',
          component:ownComponentUse
        },
        {
          path:'/vuexLearn',
          component:vuexLearn
        }
        ,{
          path:'/commonForm',
          component:commonForm
        }
        ,{
          path:'/table',
          component:table
        }
      ]
    }
  ]
})
