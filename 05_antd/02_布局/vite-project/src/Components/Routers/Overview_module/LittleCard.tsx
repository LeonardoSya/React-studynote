import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import styles from "../../../style/Overview.module.css";
import CardImage3 from '../../../assets/images/CardImage-3.png';
import AvatarImage from '../../../assets/images/Avatar.jpg';

const { Meta } = Card;

interface LittleCardProps { }

const LittleCard: React.FC<LittleCardProps> = () => {

    return (
        <Card
            className={styles.card}
            cover={
                <img
                    alt='example'
                    src={CardImage3}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title="TiTle"
                description="在此编辑文案"
                avatar={<Avatar src={AvatarImage} />}
            />
        </Card>
    );
};

export default LittleCard;


