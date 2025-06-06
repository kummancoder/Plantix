import React from "react";
import Crops from "./Crops";
import MiniCards from "./card/MiniCards";

const Home = () => {
  return (
    <div className="bg-[#FCFCFC]">
      <div className="w-full h-fit  shadow-cyan-900 pb-14">
        <Crops />

        {/* Heading Section */}
        <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center px-6 py-8">
          <h1 className="text-[28px] md:text-[44px] text-[#1e1f1f] font-medium font-sans leading-tight">
            #1 Free app for crop <br /> diagnosis and treatment
          </h1>
        </div>

        {/* Image Section */}
        <div className=" mt-[5%] relative max-w-screen-xl mx-auto flex  flex-row items-center justify-center px-6 py-6 gap-2 shrink-0">
          <img
            src="https://plantix.net/en/assets/images/hero-farmer-cut-india.png"
            alt="Farmer"
            className=" w-[60%] object-cover object-center rounded-xl "
          />
          <img
            src="https://plantix.net/en/assets/images/hero-phone-en.png"
            alt="Phone"
            className=" w-[30%] object-cover object-center rounded-xl"
          />
          <img
            src="https://plantix.net/en/assets/custom/homescreen/homescreen-en.png"
            alt="Phone"
            className=" w-[22%] object-contain absolute  "
          />
        </div>
        {/* Optional: MiniCards */}
        {/* <MiniCards /> */}
      </div>
      {/* Introduction Section 1*/}
      <div className="w-full h-fit">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center px-6 py-8">
          <h1 className="text-[23px] md:text-[36px] text-[#1e1f1f] font-sans leading-tight font-medium">
            Boost your crop production
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center px-6 py-8">
          <div className="w-[50%] flex flex-col items-start justify-start mx-auto ">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Diagnose your sick crop
            </h2>
            <p className="text-gray-700 text-base text-left md:text-lg mb-6">
              Take a photo of your sick crop and get a free diagnosis and <br />
              treatment suggestions – all in a few seconds!
            </p>
            <button className="bg-blue-700 text-white font-semibold px-5 py-3 rounded-md hover:bg-blue-700 transition">
              Get a free diagnosis
            </button>
          </div>
          <div className="w-[50%] h-[550px] ">
            {" "}
            {/* Set the desired height */}
            <video
              className="w-fit h-full   object-center "
              src="https://plantix.net/en/assets/video/farmer-app-screen-1.mp4"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>

      {/* Introduction Section 2 */}

      <div className="w-full h-fit">
        
        <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center px-6">
          <div className="w-[60%] h-[550px] ">
            {" "}
            {/* Set the desired height */}
            <video
              className="w-full h-full  object-center "
              src="https://plantix.net/en/assets/video/farmer-app-screen-2.mp4"
              autoPlay
              muted
              loop
            />
          </div>
          <div className="w-[40%] flex flex-col items-start justify-start mx-auto ">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Find the right treatment
            </h2>
            <p className="text-gray-700 text-base text-left md:text-lg mb-6">
              Get great deal on agricultural products and services from your
              local retailer. Compare prices, learn about product and how to use
              them. <br />
            </p>
            <button className="bg-blue-700 text-white font-semibold px-5 py-3 rounded-md hover:bg-blue-700 transition">
              Find product
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section 1*/}
      <div className="w-full h-fit">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center px-6 py-8 ">
          <div className="w-[50%] flex flex-col items-start justify-start mx-auto ">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Get expert advice
            </h2>
            <p className="text-gray-700 text-base text-left md:text-lg mb-6 w-[80%]">
              Have a question? No worries. Our community of agri-experts will
              help you. You can also learn about crop cultivation and help
              fellow farmers with your experience.
            </p>
            <button className="bg-blue-700 text-white font-semibold px-5 py-3 rounded-md hover:bg-blue-700 transition">
              Join plantix community
            </button>
          </div>
          <div className="w-[50%] h-[550px] ">
            {" "}
            {/* Set the desired height */}
            <video
              className="w-fit h-full   object-center "
              src="https://plantix.net/en/assets/video/farmer-app-screen-3.mp4"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
      {/* Introduction Section 2 */}

      <div className="w-full h-fit">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center text-center px-6 ">
          <div className="w-[60%] h-[550px] ">
            {" "}
            {/* Set the desired height */}
            <video
              className="w-full h-full  object-center "
              src="https://plantix.net/en/assets/video/farmer-app-screen-4.mp4"
              autoPlay
              muted
              loop
            />
          </div>
          <div className="w-[40%] flex flex-col items-start justify-start mx-auto ">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
Looking to maximise your crop yields?            </h2>
            <p className="text-gray-700 text-base text-left md:text-lg mb-6">
              Our library has got you covered! With information on your specific crop diseases and prevention methods, you can ensure a successful harvest. <br />
            </p>
            <button className="bg-blue-700 text-white font-semibold px-5 py-3 rounded-md hover:bg-blue-700 transition">
              Find plant disease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
