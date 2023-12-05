import React, { useState } from 'react'
import { Divider, Typography } from 'antd';
import '../App.css'

const { Title, Paragraph, Text, Link } = Typography;
const blockContent = `Ecolens 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，Ecolens 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。
我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行。`;

const HomePageIntroduction = () => {


    return (

        <Typography className='beLeft' >

            <Title>介绍</Title>
            <Paragraph>
                Ecolens的企业级产品是一个庞大且复杂的体系
            </Paragraph>
            <Paragraph>
                Ecolens对更好的用户体验有了进一步要求。Ecolens System，基于<Text mark>“确定” 和 “自然”</Text>的设计价值观，通过模块化的解决方案，降低荣誉的生产成本，让设计者专注于<Text strong>更好的用户体验</Text>
            </Paragraph>

            <Divider />

            <Title level={2}>设计资源</Title>
            <Paragraph>
                我们提供完善的设计原则、最佳实践和设计资源文件( <Text code>Sketch</Text> 和 <Text code>Axure</Text> )，来帮助业务快速设计出高质量的产品原型
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>
                        <Link href='#'>设计原则</Link>
                    </li>
                    <li>
                        <Link href='#'>设计模式</Link>
                    </li>
                    <li>
                        <Link href='#'>设计资源</Link>
                    </li>
                </ul>
            </Paragraph>
            <Paragraph>
                <blockquote>{blockContent}</blockquote>
                {/* <pre>{blockContent}</pre> */}
            </Paragraph>

        </Typography>

    );

}

export default HomePageIntroduction;