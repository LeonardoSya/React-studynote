import React from 'react';
import { ZoomInOutlined, ZoomOutOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const MyFloatButton = () => {
    return (
        <>
            <FloatButton.Group
                shape='circle'
                style={{ right: 24 }}
            >
                <FloatButton icon={< ZoomInOutlined />} />
                <FloatButton icon={< ZoomOutOutlined />} />
                <FloatButton />
                <FloatButton icon={<SyncOutlined />} onClick={() => window.location.reload()} />
                <FloatButton.BackTop visibilityHeight={70} />
            </FloatButton.Group>
        </>
    );
}

export default MyFloatButton;