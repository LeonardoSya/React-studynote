import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import '../index.css';
import '../App.css'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('邮箱', 'sub1', <MailOutlined />, [
        getItem('未读邮件', '1'),
        getItem('已送达', '2'),
        getItem('草稿箱', '3'),
        getItem('星标收件人', '4'),
    ]),
    getItem('扩展插件', 'sub2', <AppstoreOutlined />, [
        getItem('VSCode插件', '5'),
        getItem('edge插件', '6'),
        getItem('chrome插件', 'sub3', null, [getItem('Vue developer tool', '7'), getItem('React developer tool', '8')]),
    ]),
    getItem('设置', 'sub4', <SettingOutlined />, [
        getItem('接口', '9'),
        getItem('工具', '10'),
        getItem('网站', '11'),
        getItem('系统', '12'),
    ]),
];

export function SwitchMenu() {
    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <Menu
                theme={theme}
                onClick={onClick}
                style={{
                    width: 256,
                    borderRadius: '15px',
                }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
        </>
    );
}