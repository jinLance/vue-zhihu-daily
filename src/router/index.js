import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Index from '@/views/Index'
import NewsDetail from '@/views/NewsDetail'
import Comment from '@/views/Comment'
import Collect from '@/views/Collect'
import WriteComment from '@/views/WriteComment'
import Login from '@/views/Login'
import User from '@/views/User'
import Message from '@/views/Message'
import ThemeDetail from '@/views/ThemeDetail'
import Editor from '@/views/Editor'
import EditorList from '@/views/EditorList'

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path:'/NewsDetail/:id',
      name:'详情页',
      component:NewsDetail
    },
    {
      path:'/Comment/:id',
      name:'评论页',
      component:Comment
    },
    {
      path:'/Collect',
      name:'收藏页',
      component:Collect
    },
    {
      path:'/WriteComment/:id',
      name:'写评论页',
      component:WriteComment
    },
    {
      path:'/login',
      name:'登录页',
      component:Login
    },
    {
      path:'/user',
      name:'用户页',
      component:User,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/message',
      name:'消息页',
      component:Message
    },
    {
      path:'/themeDetail/:id',
      name:'主题页',
      component:ThemeDetail
    },
    {
      path:'/editor/:editorId/:editorName',
      name:'编辑页',
      component:Editor
    },
    {
      path:'/editorList/:id',
      name:'列表页',
      component:EditorList
    }
  ]
})
