import React from 'react';
import { Col, Row } from 'antd';
import CardComponent from './card-component';
import Pathln from './pathln';
import MiniArea from './mini-area';
import { Plots, ndviLinear } from '../../../assets/images/images';
import { ChartProvider } from '../../../models/chart-context';

const Overview: React.FC = () => {
    return (
        <>
            <Row justify="space-evenly">
                <Col span={10}>
                    <MiniArea
                        title='植被指数'
                        description='清远市2000-2020NDVI年际变化'
                    />
                </Col>

                <Col span={10}>
                    <CardComponent
                        title='植被系数分类占比'
                        description='清远市2000-2020NDVI分类占比'
                        coverImage={Plots}
                    />
                </Col>
            </Row>
            <Row justify="space-evenly">
                <Col span={10}>
                    <CardComponent
                        title='归一化植被系数拟合'
                        description='清远市2000-2020NDVI线性拟合'
                        coverImage={ndviLinear}
                    />
                </Col>
                <Col span={10}>
                    <ChartProvider>
                        <Pathln
                            title='森林储蓄量'
                            description='清远市20年森林储蓄量(万立方米)'
                        />
                    </ChartProvider>
                </Col>
            </Row>

            {/* <Row justify="space-evenly">
                <Col span={10}><G23d /></Col>
                <Col span={10}><Area /></Col>
            </Row> */}
        </>
    );
}

export default Overview;