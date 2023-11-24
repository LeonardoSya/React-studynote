import React, { useState } from 'react'
import './App.css'
import './index.css';
import { YuqueFilled, RestFilled, BugFilled, AmazonOutlined, WeiboOutlined, WindowsOutlined, SearchOutlined, DownloadOutlined, PoweroffOutlined, QuestionCircleOutlined, SyncOutlined, AppleFilled, GithubOutlined, TwitterCircleFilled, AlibabaOutlined } from '@ant-design/icons';
import { Carousel, Button, Flex, Tooltip, FloatButton, Divider, Card, Typography, Space, } from 'antd';
import { SwitchMenu } from './Components/SwitchMenu';
import { MyDropdown } from './Components/MyDropdown';

const App = () => {

  // #region
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };

  const cardStyle = {
    width: 620,
    background: "#d9d4d4",
  };
  const imgStyle = {
    display: 'block',
    width: 273,
    objectFit: 'cover',
    borderRadius: '3%'
  }

  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  }

  const contentStyle = {
    height: '50vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }
  // #endregion

  return (
    <>
      <Flex
        gap='middle'
        wrap='warp'
        vertical
        justify='space-evently'
        align='center'
        style={{
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <h1 style={{color:'#000'}}>了解我们的产品</h1>

      <Tooltip title='search'>
        <Button shape='circle' icon={<SearchOutlined />}></Button>
      </Tooltip>

      <Space
        direction='vertical'
        size='middle'
        style={{ display: 'flex', }}
      >
        <Button type='primary' href='https://github.com' target='_blank'>Go to Github!</Button>

        <Button type='primary' icon={<DownloadOutlined />}>Download</Button>

        <Button
          type='primary'
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>

        <Button type='dashed' ghost style={{ color: '#000', borderColor: '#000', }}>Dashed</Button>

        {/* <MyDropdown /> */}

      </Space>

      <Divider></Divider>

      <SwitchMenu />

      <FloatButton.Group
        shape='square'
        style={{ right: 24, }}
      >
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton.BackTop />
      </FloatButton.Group>


      <Divider>Divider</Divider>

      <Space size={'large'} style={{ fontSize: 30, color: '#000', cursor: 'pointer' }} >
        <AppleFilled />
        <GithubOutlined />
        <TwitterCircleFilled />
      </Space>

    </Flex >

      <Flex
        vertical
        wrap='wrap'
        justify='space-evently'
      >

        <Flex
          justify='space-around'
          align='center'
        >
          <Card
            hoverable
            style={cardStyle}
            bodyStyle={{
              padding: 0,
              overflow: 'hidden',
            }}
          >
            <Flex justify='sapce-between'>
              <img
                alt='avatar'
                src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                style={imgStyle}
              />
              <Flex
                vertical
                align='flex-end'
                justify='space-between'
                style={{
                  padding: 32,
                }}
              >
                <Typography.Title level={3}>
                  <i> 我非常信任 "GIS研发创赛超级小队" , 他们的产品富有创造力。爱来自林学院522</i>
                </Typography.Title>
                <Button type='primary' href='https://github.com/LeonardoSya' target='_blank'>
                  Learn More About Our Team {': )'}
                </Button>
              </Flex>
            </Flex>
          </Card>
          <Card
            hoverable
            style={cardStyle}
            bodyStyle={{
              padding: 0,
              overflow: 'hidden',
            }}
          >
            <Flex justify='sapce-between'>
              <img
                alt='avatar'
                src='https://react.docschina.org/images/home/community/react_conf_hallway.webp'
                style={imgStyle}
              />
              <Flex
                vertical
                align='flex-end'
                justify='space-between'
                style={{
                  padding: 32,
                }}
              >
                <Typography.Title level={3}>
                  <i>毋庸置疑, "GIS研发创赛超级小队"的产品在森林监测领域卓有建树。他们一定能获奖, 耶稣都拦不住</i>
                </Typography.Title>
                <Button type='primary' href='https://github.com/LeonardoSya' target='_blank'>
                  Sponsor Us, Thanks {': )'}
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>


        <Divider style={{ margin: '40px' }}></Divider>

        <Card
          title='赞助我们的团队'
          style={{ fontSize: 20, borderRadius: '15px' }}
        >
          <Card.Grid style={gridStyle}><AlibabaOutlined />{' '}Alibaba</Card.Grid>
          <Card.Grid style={gridStyle}><WindowsOutlined />{' '}Windows</Card.Grid>
          <Card.Grid style={gridStyle}><WeiboOutlined />{' '}新浪</Card.Grid>
          <Card.Grid style={gridStyle}><AmazonOutlined />{' '}Amazon</Card.Grid>
          <Card.Grid style={gridStyle}><AppleFilled />{' '}Apple</Card.Grid>
          <Card.Grid style={gridStyle}><RestFilled />{' '}北林控股</Card.Grid>
          <Card.Grid style={gridStyle}><BugFilled />{' '}12-1102</Card.Grid>
          <Card.Grid style={gridStyle}><YuqueFilled />{' '}梁boy</Card.Grid>
        </Card>

      </Flex>

  {/* bug Carousel */ }
  {/* <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>塞罕坝遥感图</h3>
        </div>
        <div>
          <h3 style={contentStyle}>塞罕坝土壤含水量图</h3>
        </div>
        <div>
          <h3 style={contentStyle}>1102合影</h3>
        </div>
        <div>
          <h3 style={contentStyle}>塞罕坝NDVI图</h3>
        </div>
      </Carousel> */}

      <Divider>Divider</Divider>

      <Space size={'large'} style={{ fontSize: 30, color: '#000', cursor: 'pointer' }} >
        <p>还没编完</p>
      </Space>
    </>
  );

};

export default App;