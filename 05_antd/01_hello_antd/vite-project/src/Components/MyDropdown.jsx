import React, { useState } from 'react';
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export function MyDropdown() {

    const Items = [
        {
            key: '1',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://github.com'>go to Github!</a>
            )
        },
        {
            key: '2',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://github.com'>go to Stack Overflow!</a>
            )
        },
        {
            key: '3',
            label: (
                <a target='_blank' rel='noopener noreferrer' href='https://github.com'>go to codePen!</a>
            )
        },
    ];

    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((state) => {
            const newLoadings = [...state];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((state) => {
                const newLoadings = [...state];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 2000);
    };
    return (
        <>
            <Dropdown
                menu={{ Items }}
                placement='bottomLeft'
            // arrow={{
            //   pointAtCenter: true
            // }}
            >
                <Button>Dropdown</Button>
            </Dropdown>

            <Dropdown.Button
                icon={<DownOutlined />}
                size='small'
                loading={loadings[2]}
                menu={{ Items }}
                onClick={() => enterLoading(2)}
            >
                Submit
            </Dropdown.Button>
        </>
    );
}

