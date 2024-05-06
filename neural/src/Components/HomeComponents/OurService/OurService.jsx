import React from "react";
import Constant from "../../../Utils/Constant";
import ourService1 from "../../../Images/Our_Servive_1.png";
import ourService2 from "../../../Images/Our_Service_2.png";

const OurService = () => {
  return (
    <div
      className="h-full py-16 px-4 lg:h-screen lg:px-5 lg:py-10 xl:h-screen xl:px-6 xl:py-10   2xl:px-8 2xl:h-screen xl:flex xl:justify-center xl:items-center"
      style={{
        background: "linear-gradient(90deg, #203B60 0%, #4C648B 100%)",
        scrollSnapAlign: "center",
        scrollPaddingTop: "100px",
      }}
      id="services"
    >
      <div>
        <h1
          className="font-lato text-3xl mb-0 text-center sm:text-5xl sm:py-6 lg:text-6xl xl:text-5xl   xl:py-0 "
          style={{ color: "#E0E0E0" }}
        >
          {Constant.OUR_SERVICES}
        </h1>


        <div className="h-4/5 lg:px-10 lg:gap-10  lg:pt-5 xl:px-5 xl:pb-6 xl:mt-4 ">
          <div className=" flex flex-col h-full xl:flex-row justify-between lg:gap-x-12 lg:my-0 xl:gap-x-24      xl:px-5  xl:mt-0 ">
            <InnerContainer
              image={ourService2}
              heading={Constant.BESPOKE_AI_ML_DEVELOPMENT}
              description={Constant.BESPOKE_AI_ML_DEVELOPMENT_DESCRIPTION}
            />
            <InnerContainer
              image={ourService1}
              heading={Constant.STRATEGIC_AI_CONSULTANCY}
              description={Constant.STRATEGIC_AI_CONSULTANCY_DESCRIPTION}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurService;

// function InnerContainer({ image, heading, description }) {
//   return (
//     <div
//       className="pt-10 pb-20 w-38 px-10 mt-6 h-3/6 lg:w-full lg:h-full  xl:pb-4  xl:pt-0 xl:h-full xl:mt-6  "
//       style={{ background: "#FFFFFF" }}
//     >
//       <div c>
//         <div>
//           <img
//             className="w-42 h-24 lg:w-80 lg:h-52 xl:w-64 xl:h-44 2xl:w-72 2xl:h-44  "
//             src={image}
//             alt={`${heading}`}
//             loading="lazy"
//           />
//         </div>
//         <div className="mt-6 w-full  lg:mt-12 xl:mt-5 xl:w-5/12  ">
//           <h1 className="font-lato text-3xl sm:text-4xl  text-left lg:text-4xl xl:text-3xl">
//             {heading}
//           </h1>
//         </div>
//         <div className="mt-5 lg:w-11/12  xl:mt-3 xl:w-11/12 ">
//           <h1 className="font-lato text-xl sm:text-xl lg:text-2xl xl:text-xl">
//             {description}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }
function InnerContainer({ image, heading, description }) {
  return (
    <div

      className="py-10 pl-5 pr-6 mt-6 lg:flex lg:flex-col lg:justify-between xl:flex xl:flex-col xl:items-start xl:py-8 xl:pl-10 xl:pr-8"
      style={{ backgroundColor: "#fff" }}
    >
      <div>
        <img
          className="w-48 h-32 lg:w-80 lg:h-52 xl:w-64 xl:h-44 2xl:w-72 2xl:h-48"
          src={image}
          alt={`${heading}`}
          loading="lazy"
        />
      </div>
      <div className="mt-6 text-left lg:mt-12 xl:mt-8  xl:w-3/6">
        <h1 className="font-lato text-3xl sm:text-4xl lg:text-4xl xl:text-3xl">
          {heading}
        </h1>
      </div>
      <div className="mt-6 text-left lg:w-11/12 xl:w-11/12">
        <h1 className="font-lato text-xl sm:text-xl lg:text-2xl xl:text-xl">
          {description}
        </h1>

      </div>
    </div>
  );
}
