import React, { useState, useRef, useEffect } from 'react';
import { Layout } from 'antd';

import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
// import '../../style/map.css';

const { Content } = Layout;

const Page1 = (props) => {
    const [map, setMap] = useState();
    const [featuresLayer, setFeaturesLayer] = useState();
    const [selectedCoord, setSelectedCoord] = useState();
    const mapElement = useRef();
    // let centerPos = transform([116.35, 40.01], 'EPSG:4326', 'EPSG:3857')  // 4326:WGS84地理坐标系 3857伪墨卡托投影

    // 在第一次渲染初始化map之前 放入componentDidMount
    useEffect(() => {

        // create & add 矢量源图层 Vector source layer
        const initalFeaturesLayer = new VectorLayer({
            source: new VectorSource()
        })

        // create map
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                // USGS Topo
                new TileLayer({
                    source: new XYZ({
                        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
                    })
                }),
                initalFeaturesLayer
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: [0, 0],
                zoom: 2
            }),
            controls: []
        })
        // 将地图和矢量图层保存到state
        setMap(initialMap)
        setFeaturesLayer(initalFeaturesLayer)

    }, [])

    // 如果 features 属性发生变化，则更新地图 - 之前放置在 componentDidUpdate 中的逻辑
    useEffect(() => {
        if (props.features.length) {  // 可能在首次渲染时为空
            // 在地图中设置要素
            featuresLayer.setSource(
                new VectorSource({
                    features: props.features  // 验证要素是 array
                })
            )
            // 适合地图的要素范围
            // map.geiView().fit(featuresLayer.getSource().getExtent(), {
            //     padding: [100, 100, 100, 100]
            // })
        }
    }, [props, featuresLayer, map])

    return (
        <Content style={{ padding: 24, minHeight: '80vh', background: '#f0f0f0', }}>
            <div ref={mapElement} className='map-container-page1' />
        </Content>
    );
}

export default Page1;