import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Fn1 from '@/components/fn1'
import Fn2 from '@/components/fn2'
import Fn3 from '@/components/fn3'
import Fn4 from '@/components/fn4'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'
import Page4 from '@/components/page4'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path: '/index',
    	redirect: 'index/page1'
    },
    {
	    path: '/index', //首页框架
	    name: 'Index',
	    component: Index,
	    children:[
	    	{
		      path: 'fn1', //课程列表
			    component: Fn1
		    },
		    {
		      path: 'fn2', //编辑课程
			    component: Fn2
		    },
		    {
		      path: 'fn3', //首页统计
			    component: Fn3
		    },
		    {
		      path: 'fn4', //后台用户
			    component: Fn4
		    },
		    {
		      path: 'page1', //后台用户
			    component: Page1
		    },
		    {
		      path: 'page2', //后台用户
			    component: Page2
		    },
		    {
		      path: 'page3', //后台用户
			    component: Page3
		    },
		    {
		      path: 'page4', //后台用户
			    component: Page4
		    },
		    {
		       path: '*',           //其他路径都跳转到首页
			    redirect: 'index/page1'
		    }
	    ]
		}
  ]
})
