import React, { useState } from 'react';

const Banner = ({ bannerImages }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides] = useState([0, 1, 2]);

  const handlePrevSlideChange = () => {
    const active = activeSlide === 0 ? slides.length-1 : activeSlide - 1;
    setActiveSlide(active);
  };
  const handleNextSlideChange = () => {
    const active = activeSlide === slides.length-1 ? 0 : activeSlide + 1;
    setActiveSlide(active);
  };
  return (
      <div className="mt-12  h-banner flex flex-col justify-center items-center">
        <div className="mx-auto relative w-full pl-12 pr-12">
          {slides.map((slide) => {
            return activeSlide == slide && bannerImages && bannerImages.length > 0? (
              <div
                key={slide}
                className="rounded-lg bg-cover h-banner"
                style={{backgroundImage:`url("${bannerImages[slide].bannerImage}")`}}
              />) : null;
          })}
          <div className="absolute inset-0 flex">
            <div className="flex items-center justify-start w-1/2">
              <button
                id="button-prev"
                className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 ml-6  focus:outline-none focus:shadow-outline"
                onClick={handlePrevSlideChange}
              >
                &#8592;
              </button>
            </div>
            <div className="flex items-center justify-end w-1/2">
              <button
                id="button-next"
                className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 mr-6 focus:outline-none focus:shadow-outline"
                onClick={(handleNextSlideChange)}
              >
                &#8594;
              </button>
            </div>
          </div>
          <div className="absolute w-full flex items-center justify-center px-4 left-0">
            {slides.map((slide) => {
              return (
                <div key={slide}>
                  <button
                    className="slide-change flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg"
                    className={` h-2 w-8 rounded m-1 ${
                      activeSlide === slide ? "bg-orange-600" : ""
                    } ${activeSlide !== slide ? "bg-teal-300" : ""}`}
                    onClick={()=> setActiveSlide(slide)}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Banner;
