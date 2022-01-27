import React, { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import classes from './index.module.less';
import Menu from './Menu';

const { Header, Sider, Content } = Layout;

const LayoutDemo = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={classes.logo} />
        <Menu />
      </Sider>
      <Layout className={classes['site-layout']}>
        <Header
          className={classes['site-layout-background']}
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: classes.trigger,
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className={classes['site-layout-background']}
          style={{
            // margin: '24px 16px',
            // padding: 24,
            minHeight: 280,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutDemo;
