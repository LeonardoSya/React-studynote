import { Card, Col, Layout, Row, Flex, Typography, Image, Divider } from 'antd';
import { InstagramFilled } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import '../style/HomePage.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg';
import antdLogo from '../assets/antd.svg';
import babelLogo from '../assets/babel.svg';
import jsLogo from '../assets/js.svg';
import GEELogo from '../assets/gee.svg';

const { Title, Text } = Typography;

const HomePage_Content = () => {

    return (
        <>
            <Content
                style={{
                    backgroundImage: " linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
                    padding: "4vh 10vw"
                }}
            >
                <Flex
                    justify='center'
                    align='center'
                >
                    <Card
                        style={{
                            background: "inherit",
                            border: "none",
                            width: "500vw"
                        }}>
                        <Flex
                            vertical
                            wrap="wrap"
                            justify='center'
                            align='flex-start'
                        >
                            <Title level={1} style={{ color: "#fff", fontSize: "2.8vw", fontFamily: "Poppins" }} >
                                <span>Kickstart your</span>
                                <br />
                                exploration with
                                <br />
                                <span style={{ color: "#a78bfa", fontFamily: "Shadows Into Light", fontSize: "4.5vw" }}> Ecolens</span>
                            </Title>
                            <Title level={4} style={{ color: "#fff" }}>
                                🌍 Comprehensive Mapping <br />
                                📡 Remote Sensing Integration <br />
                                🌱 Ecosystem Monitoring <br />
                                🔍 User-Friendly Interface <br />
                                🚀 Kickstart Ecological Journey <br />
                                {/* 🚀 Kickstart Your Ecological Journey <br /> */}
                            </Title>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Start NOW !</span>
                            </button>
                        </Flex>
                    </Card>

                    <img
                        src='https://mambaui.com/assets/svg/Business_SVG.svg'
                        placeholder='blur'
                        width="450vw"
                        height="450vw"
                    />

                </Flex>

                <Divider
                    style={{
                        marginTop: "8vh",
                        color: "#fff",
                        fontFamily: "Shadows Into Light",
                        fontSize: '2vw',
                    }}
                >
                    Build with
                </Divider>

                <Row justify="space-around">
                    <Col span={3}></Col>
                    <Col span={1}>
                        <img src={reactLogo} className="logo" alt="React logo" />
                    </Col>
                    <Col span={1}>
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </Col>
                    <Col span={1}>
                        <img src={antdLogo} className="logo" alt="Antd logo" />
                    </Col>
                    <Col span={1}>
                        <img src="https://openlayers.org/theme/img/logo-dark.svg" className="logo" alt="openlayers logo" style={{ width: 32 }} />
                    </Col>
                    <Col span={1}>
                        <img src={GEELogo} className="logo" alt="GEE logo" />
                    </Col>
                    <Col span={1}>
                        <img src={jsLogo} className="logo" alt="JavaScript logo" />
                    </Col>
                    <Col span={1}>
                        <img src={babelLogo} className="logo" alt="BABEL logo" />
                    </Col>
                    <Col span={3}></Col>

                </Row>
            </Content>

        </>



    );
};



export default HomePage_Content;