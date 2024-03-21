import Banner from './Banner';
import Category from './FoodCategory/Category';

const Home = () => {
    return (
        <div className='min-h-screen'>
            {/* carousel  */}
            <Banner/>
            {/* food category  */}
            <Category/>
        </div>
    );
};

export default Home;