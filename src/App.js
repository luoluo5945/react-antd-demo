import React from 'react';
import './App.scss';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

// 布局
import LayoutContent from './components/content'
import { ConfigProvider } from 'antd';

export default () => (
	<ConfigProvider locale={zh_CN}>
      <div className="App">
        <LayoutContent />
      </div>
    </ConfigProvider>
);
