import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="w-full h-100% px-6 md:px-12 lg:px-20 flex items-center justify-center p-4 ">
      <section
        className="
          bg-linear-to-br from-purple-600 via-purple-400 to-purple-700
          rounded-3xl p-16 shadow-2xl 
          animate-[fadeIn_0.8s_ease] w-full 
          min-h-[550px]
          flex items-center 
        "
      >
        <div
          className="
            flex flex-col lg:flex-row items-center justify-between 
            gap-14 lg:gap-20
          "
        >
          {/* LEFT TEXT */}
          <div
            className="
              flex-1 text-left space-y-6 
              animate-[slideLeft_1s_ease] ml-20!
            "
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Jobpoint –
              <br />
              Find Your Dream Job or Hire the Best Talent
            </h1>

            <p className="text-white/80 text-lg max-w-xl">
              Join thousands of professionals and employers — your one-stop
              platform to discover, connect, and grow your career.
            </p>

            <Link to="/postjob">
              <button
                className="
                  px-4 py-3 rounded 
                  bg-white text-purple-700 font-semibold
                  hover:scale-110 hover:shadow-xl
                  transition-all duration-300
                "
              >
                Post a Job
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              flex-1 flex justify-end
              animate-[slideRight_1s_ease]
              mr-4!
            "
          >
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/job-interview-illustration-download-in-svg-png-gif-file-formats--hiring-human-resources-hr-business-pack-illustrations-4182832.png"
              alt="Hero"
              className="
                w-72 md:w-96 xl:w-[420px]
                drop-shadow-2xl
                hover:scale-105 transition-transform duration-500
              "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
