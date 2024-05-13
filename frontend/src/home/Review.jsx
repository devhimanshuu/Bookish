import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import profile from "../assets/profile.jpg";

// import "./styles.css";
import { Avatar } from "flowbite-react";
// import required modules
import { Pagination } from "swiper/modules";
const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-12">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  I have found myself diving into new genres and authors I never
                  would have explored otherwise. The recommendation feature is
                  spot-on, often suggesting titles that align perfectly with my
                  interests.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-2 border rounded-full"
                />
              </div>
              <div>
                <h5 className="text-lg font-medium"> Mark Ling</h5>
                <p className="text-base"> CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  often suggesting titles that align perfectly. the smooth
                  checkout process and prompt delivery make ordering books a
                  breeze. Highly recommend this app to all book enthusiasts!
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-2 border rounded-full"
                />
              </div>
              <div>
                <h5 className="text-lg font-medium"> Mark Ling</h5>
                <p className="text-base"> CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Absolutely thrilled with my experience on the Bookish! The
                  user-friendly interface made it a breeze to browse through
                  their extensive collection. Highly recommend this platform to
                  all book lovers out there!
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-2 border rounded-full"
                />
              </div>
              <div>
                <h5 className="text-lg font-medium"> Mark Ling</h5>
                <p className="text-base"> CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  I am always on the lookout for new titles, and this platform
                  delivered beyond my expectations. The interface is clean and
                  intuitive. What truly sets this app apart is its personalized
                  recommendations,
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-2 border rounded-full"
                />
              </div>
              <div>
                <h5 className="text-lg font-medium"> Mark Ling</h5>
                <p className="text-base"> CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Absolutely thrilled with my experience on the Bookish! The
                  user-friendly interface made it a breeze to browse through
                  their extensive collection. Highly recommend this platform to
                  all book lovers out there!
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-2 border rounded-full"
                />
              </div>
              <div>
                <h5 className="text-lg font-medium"> Mark Ling</h5>
                <p className="text-base"> CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  I stumbled upon Bookish while searching for a convenient way
                  to expand my reading list, and I am so glad I did! Overall, a
                  fantastic experience that has become my go-to for all things
                  books!
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Avatar
                  img={profile}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-2 border rounded-full"
                />
              </div>
              <div>
                <h5 className="text-lg font-medium"> Mark Ling</h5>
                <p className="text-base"> CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
