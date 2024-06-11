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
import { Helmet } from "react-helmet-async";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setInitialLoad(false); // Set initialLoad to false after initial loading
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollerContainer = document.querySelector(".mouse");

      // const vh200 = window.innerHeight * 2;
      // const vh400 = window.innerHeight * 4;

      // if (
      //   (scrollY >= vh200 && scrollY < vh200 + window.innerHeight) ||
      //   (scrollY >= vh400 && scrollY < vh400 + window.innerHeight)
      // ) {
      //   scrollerContainer.classList.add("color-change");
      // } else {
      //   scrollerContainer.classList.remove("color-change");
      // }
      if (window.innerWidth > 767) {
        if (scrollY >= 3000) {
          scrollerContainer.classList.add("hidden");
        } else {
          scrollerContainer.classList.remove("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      <Helmet>
        <title>NeuralHQ.ai</title>
        <meta
          name="description"
          content="NeuralHQ offers cutting-edge AI solutions to empower businesses with advanced tools and technologies. At NeuralHQ, we are committed to building responsible and human-centric AI systems..."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="NeuralHQ.ai | Pioneering AI Solutions for Businesses"
        />
        <meta
          property="og:description"
          content="Discover NeuralHQ.ai's bespoke AI solutions that transform businesses. From automation to insights, our services are crafted to drive growth and efficiency."
        />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:creator" content="@NeuralHQ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NeuralHQ.ai | Pioneering AI Solutions for Businesses"
        />
        <meta
          name="twitter:description"
          content="Explore NeuralHQ.ai's custom AI solutions that empower businesses to innovate and thrive. Join us in shaping the future with responsible AI technology."
        />
      </Helmet>
      {initialLoad && <LoaderPart2 />} {/* Show loader only on initial load */}
      {!initialLoad && (
        <>
          {isLoading && <LoaderPart2 />}{" "}
          {/* Show loader only when isLoading is true */}
          {!isLoading && (
            <>
              <Navbar showNavs={true} />
              <div className="home">
                <Introduction />
                {screenSize > 1024 ? (
                  <div className="scroller_container">
                    <div className="aniWrap">
                      <div className="mouse">
                        <div className="scroller"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
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
