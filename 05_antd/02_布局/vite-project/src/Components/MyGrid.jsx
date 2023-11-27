import React from 'react';
import { Col, Row } from 'antd';
import '../App.css';
import { MyCard } from './MyCard';

const MyGrid = () => {

    return (
        <>
            <Row>
                <Col span={24}>col-24</Col>
            </Row>
            <Row>
                <Col span={12}><MyCard /></Col>
                <Col span={12}><MyCard /></Col>
            </Row>
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
            </Row>
        </>
    )
}

export default MyGrid;
