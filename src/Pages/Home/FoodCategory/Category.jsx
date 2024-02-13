import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode ,Pagination } from 'swiper/modules';

const Category = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
      const updateSlidesPerView = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth < 768) {
              setSlidesPerView(1);
          } else if (screenWidth < 992) {
              setSlidesPerView(2);
          } else {
              setSlidesPerView(3);
          }
      };

      // Call the function initially and add event listener
      updateSlidesPerView();
      window.addEventListener('resize', updateSlidesPerView);

      // Remove event listener on component unmount
      return () => {
          window.removeEventListener('resize', updateSlidesPerView);
      };
    }, []);
    const imageStyle = 'h-[430px] mx-auto w-full';
    const nameStyle = 'text-3xl uppercase text-center -mt-10 bg-black absolute mx-auto text-white font-bold inline-block w-full bg-opacity-20';
    return (
        <div className='p-4 md:p-0 mb-10 md:w-5/6 mx-auto drop-shadow-lg bg-white'>
        <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className={imageStyle} src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className={nameStyle}>Grilled</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Pancake</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Salad</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Cake</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Burger</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1594627882045-57465104050f?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Waffle</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/flagged/photo-1556742524-750f2ab99913?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Noodles</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Sushi</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Sandwich</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Kebab</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://plus.unsplash.com/premium_photo-1672498294724-dde3b2e41e19?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Biriyani</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Rice & Curry</h1>
        </SwiperSlide>
        <SwiperSlide><img className={imageStyle} src="https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className={nameStyle}>Chicken</h1>
        </SwiperSlide>
      </Swiper>
      </div>
    );
};

export default Category;