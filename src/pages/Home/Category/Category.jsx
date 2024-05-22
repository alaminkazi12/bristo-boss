import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// images
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold shadow-xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold shadow-xl">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold shadow-xl">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold shadow-xl">
            Dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white font-bold shadow-xl">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
