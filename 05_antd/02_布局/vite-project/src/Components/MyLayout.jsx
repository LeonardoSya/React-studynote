import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Router, Routes, NavLink, Navigate } from 'react-router-dom';
import { Col, Row, ColorPicker, Divider, ConfigProvider, App, Space, Select, Flex, Button, Layout, Menu, theme, Typography, Dropdown, Tooltip, Switch } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, GithubOutlined, WechatFilled } from '@ant-design/icons';
import HomePage from './Routers/HomePage';
import Page1 from './Routers/Page1';
import Page2 from './Routers/Page2';
import Page3 from './Routers/Page3';
import Page4 from './Routers/Page4';
import Page5 from './Routers/Page5';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;


const MyLayout = () => {
    const [collapsed, setCollapsed] = React.useState(true);
    const [primary, setPrimary] = React.useState('#13c2c2')
    // const { token: { colorBgContainer }, } = theme.useToken();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const togglePrimaryColor = (color) => {
        setPrimary(color.toHexString())
    }

    function forceCollapsed() {
        if (collapsed === false) {
            setCollapsed(true);
        }
    }

    
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token 影响范围大
                    colorPrimary: primary,
                    // // 派生变量，影响范围小
                    // // colorBgContainer:''
                }
            }}
        >
            <Layout style={{ minHeight: '100vh', }}>
                {/* Sider */}
                <MySider collapsed={collapsed} />

                <Layout onClick={forceCollapsed}>
                    {/* Header */}
                    <MyHeader collapsed={collapsed} togglePrimaryColor={togglePrimaryColor} />

                    {/* Search module */}
                    <MySearchModule collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

                    {/* Router */}
                    <MyMap  style={{width:'100vw'}}/>
                    {/* Footer */}
                    <Footer style={{ textAlign: 'center', background: '#f0f0f0' }}>
                        Ecolens System ©2023 Created by Zhangyiyang
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>

    );
}

function getItem(label, key, icon, path) {
    return {
        label, key, icon, path
    };
}

const items = [
    getItem('HomePage', '1', <PieChartOutlined />, ""),
    getItem('Page 1', '2', <DesktopOutlined />, "page1"),
    getItem('Page 2', '3', <UserOutlined />, "page2"),
    getItem('Page 3', '4', <TeamOutlined />, "page3"),
    getItem('Page 4', '5', <FileOutlined />, "page4"),
    getItem('Page 5', '6', <FileOutlined />, "page5"),
    getItem('Page 6', '7', <FileOutlined />, "page6"),

];

const MySider = ({ collapsed }) => {
    const renderMenuItems = (menuItems) => {
        return menuItems.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
        ));
    };

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className='demo-log-vertical' />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                {renderMenuItems(items)}
            </Menu>
        </Sider>
    );
};


const MyHeader = ({ primary, togglePrimaryColor }) => (
    <Header style={{ width: '100%', height: '5.5vh', padding: 0, background: '#fafafa', }}>
        <Row>
            <Col span={8}>
                <Flex justify="flex-start" align="flex-start" gap="small">
                    <ColorPicker value={primary} onChangeComplete={togglePrimaryColor} style={{ margin: '1vh', border: 'none' }} />
                    <Title style={{ fontSize: 20, fontWeight: 700 }}>Ecolens</Title>
                </Flex>
            </Col>
            <Col span={8} offset={8}>
                <Flex justify="flex-end" align='center' style={{ margin: '5px 10px' }}>
                    <Tooltip placement='bottom' title={<span>Contact us!</span>}>
                        <Button size="large" style={{ boxShadow: 'none', border: 'none', background: '#fafafa' }} icon={<WechatFilled />} />
                    </Tooltip>
                    <Tooltip placement='bottom' title={<span>Github</span>}>
                        <Button href='https://github.com/LeonardoSya/React-studynote' target='_blank' size="large" style={{ boxShadow: 'none', border: 'none', background: '#fafafa' }} icon={<GithubOutlined />} />
                    </Tooltip>
                </Flex>
            </Col>
        </Row>
    </Header>
);

const selectOptions = [
    {
        value: '1',
        label: 'HomePage',
    },
    {
        value: '2',
        label: 'Page 1',
    },
    {
        value: '3',
        label: 'Page 2',
    },
    {
        value: '4',
        label: 'Page 3',
    },
    {
        value: '5',
        label: 'Page 4',
    },
    {
        value: '6',
        label: 'Page 5',
    },
]
const MySearchModule = ({ collapsed, toggleCollapsed }) => (
    <Flex justify='flex-start' align='center' gap="large" style={{ background: '#f5f5f5' }}>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{ fontSize: '16px', width: 64, height: 64, }}
        />
        <Select
            showSearch
            style={{
                width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={selectOptions}
        // ?? 研究一下选择器 API 的 Select props : https://ant-design.antgroup.com/components/select-cn#select-props
        />
    </Flex>
);

const MyMap = () => (
    <>
        <Content>
            {/* Route用于将应用的位置映射到不同的React组件 */}
            {/* Route 接受 path(页面URL应导航到的路径，类似NavLink的to), element(页面导航到该路由时加载的元素) */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='page1' element={<Page1 />} />
                <Route path='page2' element={<Page2 />} />
                <Route path='page3' element={<Page3 />} />
                <Route path='page4' element={<Page4 />} />
                <Route path='page5' element={<Page5 />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </Content>
    </>
);

export default MyLayout;