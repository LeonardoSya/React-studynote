import { Card, Carousel, Divider, Flex, Image, Typography } from 'antd';
const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    overflow: 'hidden',
}

const HomePage = () => {
    return (
        <Carousel
            autoplay
            infinite
        >
            <CardImage
                src="https://react.docschina.org/images/home/community/react_conf_elizabet.webp"
                textEN="Revolutionary Eco-Mapping: Ecolens stands as a beacon of innovation in the realm of ecological monitoring, providing a cutting-edge map service that beautifully captures and safeguards our environmental treasures.
"               textCN="革命性的生态地图：Ecolens在生态监测领域堪称创新典范，我们提供先进的地图服务，提出地理数据可视化的优秀解决方案，以保护我们的环境瑰宝"
            />
            <CardImage
                src="https://react.docschina.org/images/home/community/react_india_team.webp"
                textEN="Precision in Conservation: Ecolens doesn't just offer maps; it delivers a precision tool for environmental guardians. The intricate details and real-time monitoring empower users to make informed decisions, fostering a new era in eco-consciousness."
                textCN="环保卫士，精准保护：Ecolens不仅提供地图，更是一项堪称'环保卫士'的精准工具。其细致入微的细节和实时监测功能赋予用户明智决策的力量，开创了生态意识的新时代"
            />
            <CardImage
                src="https://react.docschina.org/images/home/community/react_india_sunil.webp"
                textEN="Seamless Integration, Maximum Impact: Ecolens seamlessly integrates into the modern world, making ecological awareness accessible to all. Its user-friendly interface and powerful features ensure that monitoring and preserving our ecosystems become second nature."
                textCN="无缝集成，影响深远：Ecolens无缝融入现代社会，使生态数据可视化唾手可得。其用户友好的界面和强大功能有力地支持了生态监测和保护工作"
            />
            <CardImage
                src="https://react.docschina.org/images/home/community/react_conf_nat.webp"
                textEN="Elevating the Green Experience: With Ecolens, the journey into environmental conservation becomes a rich, immersive experience. Its intuitive design and comprehensive data transform users into stewards of the Earth, fostering a sense of responsibility and connection to our planet."
                textCN="赋能美好绿色生活：有了Ecolens，踏上环保之旅成为丰富而沉浸式的体验。其直观设计和全面数据将用户转变为地球的守护者，培养了对我们星球的责任感和连接感。"
            />
        </Carousel>
    );
};

const CardImage = ({ src,textEN,textCN }) => (
    <Card
        style={{ background: '#f5f5f5', borderRadius: 0 }}
    >
        <Flex
            align='center'
        >
            <Image
                placeholder
                style={contentStyle}
                src={src}
            />
            <Typography
                style={{
                    width: '20vw',
                    padding: '2vw',
                    fontSize: '1vw'
                }}>
                {textEN}
                <Divider>Ecolens</Divider>
                {textCN}
            </Typography>
 
        </Flex>

    </Card>
);

export default HomePage;