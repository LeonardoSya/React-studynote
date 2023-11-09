import Avatar from './2.Avatar';

// Avatar嵌套在Card中，因此Card是Avatar的父组件
// 父组件Card接收一个被设置为<Avatar />的children prop并将其包裹在div中渲染
// 这样Card组件能够包裹任意嵌套内容
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

// 父组件Profile，子组件Card，Card的子组件Avatar
export default function Profile() {
    return (
        <Card>
            <Avatar
            // 要传递props，请将它们添加到JSX，就像使用HTML属性一样
                // 传递两个props给Avatar，person(对象)和size(数字)
                size={100}
                person={{
                    name: 'zyy',
                    imageId: '123'
                }}
            />
            <Avatar
                // 现在我可以自由配置Avatar，通过传递不同的props，使它以不同方式渲染  
                size={80}
                person={{
                    name: 'qja',
                    imageId: '234'
                }}
            />
        </Card>
    );
}



