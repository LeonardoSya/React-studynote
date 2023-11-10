
function Card({ children, title }) {
    return (
        <div className='card'>
            <div className='card-content'>
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default function Profile() {
    return (
        <div>
            <Card title="Photo">
                <h1>Photo</h1>
                <img
                // xxx
                />
            </Card>
            <Card title="About">
                <h1>About</h1>
                <p>xxx</p>
            </Card>
        </div>
    )
}