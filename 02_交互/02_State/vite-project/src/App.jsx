import './App.css'
import Gallery from './Gallery';

export default function Page() {
    return (
        // * 两个组件的State都是隔离且私有的
        <div className='Page'>
            <Gallery /> 
            <br />
            <Gallery />
        </div>
    )
}