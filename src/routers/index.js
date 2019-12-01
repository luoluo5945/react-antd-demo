import Home from '@/pages/home'
import UserManage from '@/pages/userManage'
import ReduxDemo from '@/pages/reduxDemo'

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
  }
]
