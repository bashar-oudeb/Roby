"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import img from "../assets/landingPage/Testimonial/avatar.png";
import img2 from "../assets/landingPage/Testimonial/fd79c99d3c1d5e163ed5cca84483dd5f.jpeg";
import img3 from "../assets/landingPage/Testimonial/img.png";

const Testimonial = () => {
  return (
    <section className=" pt-16 lg:mt-24 px-4">
      <div className="">
        <h1 className="font-roboto font-bold text-4xl text-center uppercase">
          What <span className=" font-normal text-3xl"> they</span> think
        </h1>
      </div>
      <Swiper 
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          // When window width is >= 640px (Mobile)
          640: {
            slidesPerView: 1,
          },
          // When window width is >= 768px (Tablet)
          768: {
            slidesPerView: 2,
          },
          // When window width is >= 1024px (Desktop)
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className=" pt-10 ">
            <div className=" flex items-center gap-3 justify-center">
              <div className=" mt-4">
                <Image src={img} alt="" className=" mx-auto" />
              </div>
              <div className="">
                <h3 className="mt-3 font-roboto text-base ">Matthew Webster</h3>
                <p className="  font-roboto text-sm text-secondary">
                  Webflow Founder
                </p>
              </div>
            </div>

            <p className="pt-3 lg:pt-5 pb-10 font-roboto text-base leading-5 text-primary font-semibold text-center">
              &quot;The public is more familiar with bad design than good
              design. It is, in effect, conditioned to prefer bad design,
              because that is what it lives with.&quot;
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" pt-10">
            <div className=" flex items-center gap-3 justify-center">
              <div className=" mt-4   w-[73px] h-[73px]">
                <Image src={img2} alt="" className=" w-full h-full object-cover " />
              </div>
              <div className="">
                <h3 className="mt-3 font-roboto text-base ">Matthew Webster</h3>
                <p className="  font-roboto text-sm text-secondary">
                  Webflow Founder
                </p>
              </div>
            </div>

            <p className="pt-3 lg:pt-5 pb-10 font-roboto text-base leading-5 text-primary font-semibold text-center">
              &quot;The public is more familiar with bad design than good
              design. It is, in effect, conditioned to prefer bad design,
              because that is what it lives with.&quot;
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" pt-10">
            <div className=" flex items-center gap-3 justify-center">
              <div className=" mt-4">
                <Image src={img3} alt="" className=" mx-auto" />
              </div>
              <div className="">
                <h3 className="mt-3 font-roboto text-base ">Matthew Webster</h3>
                <p className="  font-roboto text-sm text-secondary">
                  Webflow Founder
                </p>
              </div>
            </div>

            <p className="pt-3 lg:pt-5 pb-10 font-roboto text-base leading-5 text-primary font-semibold text-center">
              &quot;The public is more familiar with bad design than good
              design. It is, in effect, conditioned to prefer bad design,
              because that is what it lives with.&quot;
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" pt-10">
            <div className=" flex items-center gap-3 justify-center">
              <div className=" mt-4   w-[73px] h-[73px]">
                <Image src={img2} alt="" className=" w-full h-full object-cover " />
              </div>
              <div className="">
                <h3 className="mt-3 font-roboto text-base ">Matthew Webster</h3>
                <p className="  font-roboto text-sm text-secondary">
                  Webflow Founder
                </p>
              </div>
            </div>

            <p className="pt-3 lg:pt-5 pb-10 font-roboto text-base leading-5 text-primary font-semibold text-center">
              &quot;The public is more familiar with bad design than good
              design. It is, in effect, conditioned to prefer bad design,
              because that is what it lives with.&quot;
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
