import React from 'react';
import { Col, Row } from 'antd';
import G2test3d from './G2test3d';
import Area from "./Area";
import LittleCard from './LittleCard';

const Overview: React.FC = () => {
    return (
        <>
            <Row justify="space-evenly">
                <Col span={5}><LittleCard /></Col>
                <Col span={5}></Col>
                <Col span={5}></Col>
                <Col span={5}></Col>
            </Row>
            <Row justify="space-evenly">
                <Col span={10}><G2test3d /></Col>
                <Col span={10}><Area /></Col>
            </Row>
        </>
    );
}

export default Overview;