import React, { useState } from 'react';
import { Select, Flex, Button, Layout, Menu, theme, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
    return {
        key, icon, children, label
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const selectOptions = [
    {
        value: '1',
        label: '松材线虫(AI提取)',
    },
    {
        value: '2',
        label: 'Modis',
    },
    {
        value: '3',
        label: '哨兵',
    },
    {
        value: '4',
        label: '变化地块',
    },
    {
        value: '5',
        label: 'Landsat',
    },
    {
        value: '6',
        label: '未定数据',
    },
]

const MyLayout = () => {
    const [collapsed, setCollapsed] = React.useState(true);
    const { token: { colorBgContainer }, } = theme.useToken();

    return (

        <Layout
            style={{ minHeight: '100vh', }}
        >
            {/* Sider */}
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='demo-log-vertical' />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>

            <Layout>
                {/* Header */}
                <Header style={{ width: '100%', padding: 0, background: colorBgContainer, }} />
                <Flex justify='flex-start' align='center' gap="large">
                    <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} style={{ fontSize: '16px', width: 64, height: 64, }} />
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
                    />
                </Flex>

                {/* Content */}
                <Content style={{ padding: 24, minHeight: '80vh', background: colorBgContainer, }}>
                    <Title level={2}>Map produced by zjr, 6, O</Title>
                </Content>

                {/* Footer */}
                <Footer style={{ textAlign: 'center' }}>
                    Ecolens System ©2023 Created by Zhangyiyang
                </Footer>
            </Layout>
        </Layout>
    );
}

export default MyLayout;