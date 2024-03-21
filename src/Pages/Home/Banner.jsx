import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GiChessQueen } from "react-icons/gi";
const Banner = () => {
    const divStyle = 'h-[600px] mx-auto flex justify-center content-center relative';
    return (
        <Carousel className=''>
            <div className={divStyle}>
                <img src="https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute bg-black/50 h-full w-full flex justify-center items-center'>
                    <div className='mt-20'>
                    <h1 className='text-white text-6xl font-bold'>Welcome To<br /> <span className='text-yellow-400 text-8xl'>Cuisine Queen</span></h1>
                    <GiChessQueen className='text-yellow-400 mx-auto text-5xl'></GiChessQueen>
                    <p className='bg-white font-bold text-xl mt-12'>Where Every Bite Tells a Story!</p>
                    </div>
                </div>
            </div>
            <div className={divStyle}>
                <img src="https://images.unsplash.com/photo-1628294895933-4360614f39dd?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className='absolute bg-black/50 h-full w-full flex justify-center items-center'>
                    <div className='mt-20'>
                    <h1 className='text-white text-6xl font-bold'>Welcome To <br /> <span className='text-yellow-400 text-8xl'>Cuisine Queen</span></h1>
                    <p className='bg-white font-bold text-xl mt-12'>Where Every Bite Tells a Story!</p>
                    </div>
                </div>
            </div>
            <div className={divStyle}>
                <img src="https://images.unsplash.com/photo-1659954868279-2d8fe7a0acdb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className='absolute bg-black/50 h-full w-full flex justify-center items-center'>
                    <div className='mt-20'>
                    <h1 className='text-white text-6xl font-bold'>Welcome To <br /> <span className='text-yellow-400 text-8xl'>Cuisine Queen</span></h1>
                    <p className='bg-white font-bold text-xl mt-12'>Where Every Bite Tells a Story!</p>
                    </div>
                </div>
            </div>
            <div className={divStyle}>
                <img src="https://images.unsplash.com/photo-1651978595432-905a420b879d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute bg-black/50 h-full w-full flex justify-center items-center'>
                    <div className='mt-20'>
                    <h1 className='text-white text-6xl font-bold'>Welcome To <br /> <span className='text-yellow-400 text-8xl'>Cuisine Queen</span></h1>
                    <p className='bg-white font-bold text-xl mt-12'>Where Every Bite Tells a Story!</p>
                    </div>
                </div>
            </div>
            <div className={divStyle}>
                <img src="https://images.unsplash.com/photo-1565498253128-c06e0488ddee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute bg-black/50 h-full w-full flex justify-center items-center'>
                    <div className='mt-20'>
                    <h1 className='text-white text-6xl font-bold'>Welcome To <br /> <span className='text-yellow-400 text-8xl'>Cuisine Queen</span></h1>
                    <p className='bg-white font-bold text-xl mt-12'>Where Every Bite Tells a Story!</p>
                    </div>
                </div>
            </div>
            <div className={divStyle}>
                <img src="https://images.unsplash.com/photo-1588644525273-f37b60d78512?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute bg-black/50 h-full w-full flex justify-center items-center'>
                    <div className='mt-20'>
                    <h1 className='text-white text-6xl font-bold'>Welcome To <br /> <span className='text-yellow-400 text-8xl'>Cuisine Queen</span></h1>
                    <p className='bg-white font-bold text-xl mt-12'>Where Every Bite Tells a Story!</p>
                    </div>
                </div>
            </div>
            <div className={divStyle}>
                <img src="https://images.unsplash.com/photo-1599173687303-7e1eb50f1e60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='absolute bg-black/50 h-full w-full flex justify-center items-center'>
                    <div className='mt-20'>
                    <h1 className='text-white text-6xl font-bold'>Welcome To <br /> <span className='text-yellow-400 text-8xl'>Cuisine Queen</span></h1>
                    <p className='bg-white font-bold text-xl mt-12'>Where Every Bite Tells a Story!</p>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;