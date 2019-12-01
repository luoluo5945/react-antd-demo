import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Home from '@/pages/home';
import UserManage from '@/pages/userManage';
import ReduxDemo from '@/pages/reduxDemo';
import { BrowserRouter } from 'react-router-dom';
// 布局
import { Layout } from 'antd';
import LayoutNavbar from '@/components/navbar'
const { Header, Content, Footer, Sider } = Layout;

class ContentMain extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ height: '100%' }}>
          <Sider><LayoutNavbar /></Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                  <div>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/userManage' exact component={UserManage}></Route>
                    <Route path='/reduxDemo' exact component={ReduxDemo}></Route>
                  </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}
export default ContentMain;

