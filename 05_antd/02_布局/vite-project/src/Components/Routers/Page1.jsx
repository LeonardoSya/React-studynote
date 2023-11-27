import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

const Page1 = () => {
    return (
        <Content style={{ padding: 24, minHeight: '80vh', background: '#f0f0f0', }}>
            <Title level={2}>This page is Page 1 :)</Title>
        </Content>
    );
}

export default Page1;