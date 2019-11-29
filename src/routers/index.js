import Home from '@/pages/home'
import UserManage from '@/pages/userManage'

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
  },
]
