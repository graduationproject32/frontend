import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "./Carousel.scss";
import scoreImg from "../assets/score-page.png";
import profileImg from "../assets/profile.png";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
SwiperCore.use([Pagination, Autoplay]);
const Carousel = () => {
  return (
    <Swiper
      className="my-swiper"
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      autoplay={true}
      pagination={{
        el: ".swiper-pagination",
      }}
    >
      <SwiperSlide className="swiper-slide">
        {
          <div
            className={
              "content color1 justify-content-between align-items-center"
            }
          >
            <div className="slide-text">
              <h3>Improve your resume</h3>
              <p className="body">
                our AI-powered platform instantly gives you tailored feedback on
                your resume.
              </p>
            </div>

            <div className="slide-img">
              <img src={scoreImg} alt="" />
            </div>
          </div>
        }
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {
          <div
            className={
              "content color2 justify-content-between align-items-center"
            }
          >
            <div className="slide-text">
              <h3>Track your progress</h3>
              <p className="body">
                See how far you've come over time with detailed graphs and
                history.
              </p>
            </div>

            <div className="slide-img">
              <img src={profileImg} alt="" />
            </div>
          </div>
        }
      </SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};
export default Carousel;
