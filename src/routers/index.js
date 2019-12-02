import Home from '@/pages/home'
import UserManage from '@/pages/userManage'
import ReduxDemo from '@/pages/reduxDemo'
import ReduxDemo2 from '@/pages/reduxDemo2'

export default [
  {
    name: '首页',
    path: '/',
    code: 'home',
    component: Home,
    icon: 'pie-chart'
  }, {
    name: '用户管理',
    path: '/userManage',
    component: UserManage,
    icon: 'desktop',
    code: 'userManage'
  }, {
    name: 'redux官方示例',
    path: '/reduxDemo',
    component: ReduxDemo,
    icon: 'desktop',
    code: 'reduxDemo'
  }, {
    name: 'redux个人示例',
    path: '/reduxDemo2',
    component: ReduxDemo2,
    icon: 'desktop',
    code: 'reduxDemo2'
  }
]
