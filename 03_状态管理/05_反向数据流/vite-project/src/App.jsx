import React, { useState, useCallback } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }
  return (
    <Layout>
      <MySider collapsed={collapsed} />
      <MyHeader collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
    </Layout>
  );
};
export default App;

const MySider = ({ collapsed }) => (
  <Sider trigger={null} collapsible collapsed={collapsed}>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          label: 'nav 1',
        },
        {
          key: '2',
          label: 'nav 2',
        },
        {
          key: '3',
          label: 'nav 3',
        },
      ]}
    />
  </Sider>
)

const MyHeader = ({ collapsed, toggleCollapsed }) => {
  return (
    <Header
      style={{
        padding: 0,
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}
