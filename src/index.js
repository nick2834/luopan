import React from 'react';
import ReactDOM from 'react-dom';
import "./style/index.less"
import App from './App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
