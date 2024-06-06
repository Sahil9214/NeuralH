import React, { useState, useEffect } from "react";
import LoaderPart2 from "../../Components/LoaderPart/LoaderPart2";
import Introduction from "../../Components/HomeComponents/Introduction/Introduction";
import AboutUsComponent from "../../Components/HomeComponents/AboutUSComponents/AboutUsComponent";
import GenerativeAi from "../../Components/HomeComponents/GenerativeAi/GenerativeAi";
import OurService from "../../Components/HomeComponents/OurService/OurService";
import CaseStudy from "../../Components/HomeComponents/CaseStudy/CaseStudy";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setInitialLoad(false); // Set initialLoad to false after initial loading
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Set isLoading to true when navigating away from the page
      setIsLoading(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {initialLoad && <LoaderPart2 />} {/* Show loader only on initial load */}
      {!initialLoad && (
        <>
          {isLoading && <LoaderPart2 />}{" "}
          {/* Show loader only when isLoading is true */}
          {!isLoading && (
            <>
              <Navbar showNavs={true} />
              <div>
                <Introduction />
                <AboutUsComponent />
                <GenerativeAi />
                <OurService />
                <CaseStudy />
                <Footer />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
