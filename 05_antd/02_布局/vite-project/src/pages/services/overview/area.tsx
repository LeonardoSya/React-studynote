import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';
import { useSafeState } from '../../../hooks/hooks';
import './index.css';

const Area: React.FC = () => {
    const chartContainerRef = useRef(null);
    const chartRef = useRef<Chart | null>(null);
    const [loading, setLoading] = useSafeState<boolean>(true);

    useEffect(() => {
        // 定义接口描述数据结构,通过as语法告诉ts该响应符合接口类型,这样在编译时会检查类型错误
        interface Data {
            date: string;
            unemployed: number;
            industry: string;
        }

        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch('https://assets.antv.antgroup.com/g2/unemployment-by-industry.json');
                // 告诉TypeScript这个response符合Data接口
                const data = (await response.json()) as Data[];

                // 读取data的值以消除ts warning
                console.log(data);

                const chartInstance = new Chart({
                    container: chartContainerRef.current!,
                    autoFit: true,
                });

                chartRef.current = chartInstance;

                // 数据请求和图表配置
                chartInstance.data({
                    type: 'fetch',
                    value: 'https://assets.antv.antgroup.com/g2/unemployment-by-industry.json',
                });

                chartInstance
                    .area()
                    .encode('x', (d: { date: string | number | Date; }) => new Date(d.date))
                    .encode('y', 'unemployed')
                    .encode('color', 'industry')
                    .encode('shape', 'smooth');

                chartInstance.render();

            } catch (error) {
                console.error('Error fetching data "Area" :', error);
            }
        };
        setLoading(false);

        fetchData();
    }, []);

    if (loading) return <LoadingSpinner />

    return <div id='area-container' ref={chartContainerRef} className="container" />;
};





export function LoadingSpinner() {
    return <div className="container">
        <div className="text">Loading...</div>
    </div>
}

export default Area;
