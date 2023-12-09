import { Col, Row, } from 'antd';
import { InstagramFilled } from '@ant-design/icons';

const HomePage_Header = () => {

    return (

        <Row
            align="middle"
            justify="space-around"
            style={{
                background:"rgba(8,8,8,.88)",
                height: '6vh',
                fontWeight: '400',
                color:"#a78bfa"
            }}
        >
            <Col span={2}></Col>
            <Col span={1}>
                <InstagramFilled style={{ fontSize: "2vw" }} />
            </Col>
            <Col span={8}>
                <span style={{ fontSize: "1.6vw", fontFamily: "Silkscreen" }}>Ecolens System</span>
            </Col>
            <Col span={4}></Col>
            <Col span={8}
                style={{ textAlign: "center", fontSize: "0.8vw" }}>
                <span style={{ margin: "auto 1vw", fontFamily: "Poppins" }}>Services</span>
                <span style={{ margin: "auto 1vw", fontFamily: "Poppins" }}>Document</span>
                <span style={{ margin: "auto 1vw", fontFamily: "Poppins" }}>Star us on GitHub</span>
            </Col>
            <Col span={1}></Col>
        </Row>

    )

}

export default HomePage_Header;