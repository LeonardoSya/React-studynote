import React, { useState, useRef, useEffect } from 'react'
import Map from '../node_modules/ol/Map';
import View from '../node_modules/ol/View';
import TileLayer from '../node_modules/ol/layer/Tile'
import VectorLayer from '../node_modules/ol/layer/Vector'
import VectorSource from '../node_modules/ol/source/Vector'
import XYZ from '../node_modules/ol/source/XYZ'
import OSM from '../node_modules/ol/source/OSM';
import { transform } from '../node_modules/ol/proj';
import './map.css'

export default function MapWrapper(props) {
    let centerPos = transform([117.29, 31.85], 'EPSG:4326', 'EPSG:3857');
    // openlayers将会渲染进这个div
    const mapElement = useRef();
    let map = null;  // 地图全局变量
    useEffect(() => {
        map = new Map({
            view: new View({
                center: centerPos,
                zoom: 10,
                maxZoom: 15,
                minZoom: 9
            }),
            layers: [],
            target: mapElement.current
        });
        let tileLayer = new TileLayer({
            source: new OSM()
        });
        map.addLayer(tileLayer)
    }, [])
    return (
        <div ref={mapElement} className='map-container' />
    )
}