import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Router, Routes, NavLink, Navigate } from 'react-router-dom';
import { Col, Row, ColorPicker, Divider, ConfigProvider, App, Space, Select, Flex, Button, Layout, Menu, theme, Typography, Dropdown, Tooltip, Switch } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, GithubOutlined, WechatFilled } from '@ant-design/icons';
import HomePage from './Routers/HomePage';
import Page1 from './Routers/Page1';
import Page21 from './Routers/Page2_1';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph } = Typography;


const MyLayout = () => {
    const [collapsed, setCollapsed] = React.useState(true);
    const [primary, setPrimary] = React.useState('#13c2c2')
    // const { token: { colorBgContainer }, } = theme.useToken();

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
                <MySider />

                <Layout>
                    {/* Header */}
                    <MyHeader />

                    {/* Search module */}
                    <MySearchModule />

                    {/* Router */}
                    <MyMap />
                    {/* Footer */}
                    <Footer style={{ textAlign: 'center', background: '#d9d9d9' }}>
                        Ecolens System ©2023 Created by Zhangyiyang
                    </Footer>
                </Layout>
            </Layout>
        </ConfigProvider>

    );
}

function getItem(label, key, icon, path, children) {
    return {
        label, key, icon, path, children
    };
}

const items = [
    getItem('HomePage', '1', <PieChartOutlined />, ""),
    getItem('Page 1', '2', <DesktopOutlined />, "page1"),
    getItem('Page 2', 'sub1', <UserOutlined />, [
        getItem('Page 2-1', '3', "page21"),
        getItem('Page 2-2', '4'),
        getItem('Page 2-3', '5'),
    ]),
    getItem('Page 3', 'sub2', <TeamOutlined />, [
        getItem('Page 3-1', '6', "page31"),
        getItem('Page 3-2', '8')
    ]),
    getItem('Page 4', '9', <FileOutlined />),
];

// const items = [
//     {
//         key: '1',
//         label: "HomePage",
//         icon: <PieChartOutlined />,
//         path: "",
//     },
//     {
//         key: '2',
//         label: "Page 1",
//         icon: <DesktopOutlined />,
//         path: "page1",
//     },
//     {
//         key: '3',
//         label: "Page 2-1",
//         icon: <UserOutlined />,
//         path: "page21",
//     },
// ]

const MySider = ({ collapsed }) => (
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='demo-log-vertical' />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {items.map(item => (
                <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
    </Sider>
);


const MyHeader = ({ primary, setPrimary }) => (
    <Header style={{ width: '100%', height: '5.5vh', padding: 0, background: '#fafafa', }}>
        <Row>
            <Col span={8}>
                <Flex justify="flex-start" align="flex-start" gap="small">
                    <ColorPicker value={primary} onChangeComplete={(color) => setPrimary(color.toHexString())} style={{ margin: '1vh', border: 'none' }} />
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
        label: 'Page 2-1',
    },
    {
        value: '4',
        label: 'Page 2-2',
    },
    {
        value: '5',
        label: 'Page 3-1',
    },
    {
        value: '6',
        label: 'Page 4',
    },
]
const MySearchModule = ({ collapsed, setCollapsed }) => (
    <Flex justify='flex-start' align='center' gap="large" style={{ background: '#f5f5f5' }}>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
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
                <Route path='page21' element={<Page21 />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </Content>
    </>
);

export default MyLayout;