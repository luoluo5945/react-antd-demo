import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'; // 把当前组件通过路由切换传递react-router对象进来，方便高亮操作
import { Menu, Icon } from 'antd';
import './index.scss';
import routers from '@/routers'
// 路由 S
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const path = this.props.location.pathname // 当前页面导航默认高亮
    // 根据router.js列表渲染导航
    const menuItems = routers.map((router) =>
      <Menu.Item key={router.path}>
        <Link to={router.path}>
          <Icon type={router.icon} />
          <span>{router.name}</span>
        </Link>
      </Menu.Item>
    );
    return (
      <div className="app-nav">
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          className="app-nav-menu"
        >
          {menuItems}
        </Menu>
      </div>
    );
  }
}
export default withRouter(Navbar);