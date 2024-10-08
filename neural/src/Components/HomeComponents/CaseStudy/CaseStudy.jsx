import React from "react";
import "./CaseStudy.css";
import Constant from "../../../Utils/Constant";

import CaseStudyGrid from "../../../Utils/CaseStudyGrid";

const CaseStudy = () => {
  return (
    <div
      className="flex h-screen justify-center items-center px-0 xl:h-screen xl:flex xl:justify-center xl:items-center"
      id="casestudy"
      style={{ scrollSnapAlign: "start", scrollPaddingTop: "20px" }}
    >
      <div className=" mt-28    w-11/12 m-auto  ">
        <div>
          <h1
            className="font-lato text-3xl  text-center sm:text-5xl sm:py-6 lg:text-5xl xl:text-5xl xl:mb-14   "
            style={{ color: "var(--case-study-heading-color)" }}
          >
            {Constant.CASE_STUDIES}
          </h1>
        </div>
        <div className="mt-16 lg:grid grid-cols-2 gap-10 ">
          {CaseStudyGrid.map((el, i) => {
            return (
              <div
                key={i}
                className=" rounded-[20px] flex border border-slate-300 px-2 py-4 justify-between items-center gap-8 mt-5 sm:py-8 sm:px-4 lg:py-10 "
                style={{ border: "1px solid var(--case-study-border-color)" }}
              >
                <p
                  className="font-lato text-lg  leading-5  sm:text-2xl md:text-3xl lg:text-3xl  "
                  style={{
                    color: "var(--case-study-content-color)",
                  }}
                >
                  {el.case_study_name}
                </p>
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="59"
                    height="59"
                    rx="29.5"
                    fill="white"
                    stroke="var(--case-study-border-color)"
                  />
                  <g clipPath="url(#clip0_906_453)">
                    <path
                      d="M26.6154 15L23 18.525L34.7436 30L23 41.475L26.6154 45L42 30L26.6154 15Z"
                      fill="var(--case-study-border-color)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_906_453">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
