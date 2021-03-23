import LeftBar from '../Header/LeftBar';
import ProductList from '../Product/ProductsList';
import './style.css';

const Home = () => {

    return (
        <div className='home'>
            <LeftBar></LeftBar>

            
            <ProductList></ProductList>
        </div>
    )
}

export default Home;