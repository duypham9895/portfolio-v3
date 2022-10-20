import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import userImage from "../assets/images/about/avatar.jpg";
import PageTitle from "./UI/PageTitle";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>

      <div
        className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
        data-aos="fade"
      >
        {/* Avatar Info Start */}
        <img
          className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] mx-auto object-cover"
          src={userImage}
          alt="my-avatar"
        />
        <h3 className="mt-6 mb-1 text-5xl font-semibold text-white">
          Duy (Edward) Pham
        </h3>
        <p className="mb-4 text-[#7B7B7B]">Software Engineer</p>
        {/* Avatar Info End */}

        {/* Social information start */}
        <div className="flex space-x-3">
          <a
            href="https://www.linkedin.com/in/phamanhduy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#0072b1]">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/duypham9895"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="socialbtn text-[#000] ">
              <FaGithub />
            </span>
          </a>
        </div>
        {/* Social information start */}

        {/* View button start */}
        <button className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6">
          <a
            href="https://resume.io/r/SiSFpZRMv"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Resume
          </a>
        </button>
        {/* View button End */}
      </div>
    </>
  );
};

export default HomePage;
