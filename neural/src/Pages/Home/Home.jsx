import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import LoaderPart2 from "../../Components/LoaderPart/LoaderPart2";
import Introduction from "../../Components/HomeComponents/Introduction/Introduction";
import AboutUsComponent from "../../Components/HomeComponents/AboutUSComponents/AboutUsComponent";
import GenerativeAi from "../../Components/HomeComponents/GenerativeAi/GenerativeAi";
import OurService from "../../Components/HomeComponents/OurService/OurService";
import CaseStudy from "../../Components/HomeComponents/CaseStudy/CaseStudy";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const LOADING_DELAY = 2000;
const SCROLL_THRESHOLD = 3000;
const DESKTOP_WIDTH = 1024;

const useLoading = (delay) => {
  const [loading, setLoading] = useState({
    isLoading: true,
    initialLoad: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading({ isLoading: false, initialLoad: false });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
};

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollPosition;
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

const Scroller = React.memo(({ scrollPosition, handleScrollerClick }) => (
  <div className="scroller_container" onClick={handleScrollerClick}>
    <div className="aniWrap">
      <div className="mouse">
        <div
          className="scroller"
          style={{
            top: `${
              (scrollPosition /
                (document.documentElement.scrollHeight - window.innerHeight)) *
              100
            }%`,
          }}
        />
      </div>
    </div>
  </div>
));

const Home = () => {
  const { isLoading, initialLoad } = useLoading(LOADING_DELAY);
  const screenSize = useScreenSize();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollerContainer = document.querySelector(".mouse");
      if (window.innerWidth > 767) {
        scrollerContainer?.classList.toggle(
          "hidden",
          scrollY >= SCROLL_THRESHOLD
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Consider using a more specific action here if needed
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const handleScrollerClick = useCallback(() => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  if (initialLoad || isLoading) return <LoaderPart2 />;

  return (
    <>
      <Helmet>
        <title>NeuralHQ.ai</title>
        <meta
          name="description"
          content="NeuralHQ.ai specializes in AI solutions and services to enhance business operations and customer experiences. Discover our innovative AI technology."
        />
        <meta
          property="og:title"
          content="Innovative AI Solutions - NeuralHQ.ai"
        />
        <meta
          property="og:description"
          content="Empower your business with NeuralHQ.ai's cutting-edge AI solutions. From machine learning to data analytics, we offer comprehensive AI services."
        />
        <meta
          name="twitter:title"
          content="NeuralHQ.ai - Your Partner in AI Innovation"
        />
        <meta
          name="twitter:description"
          content="Join forces with NeuralHQ.ai to revolutionize your business with advanced AI solutions tailored to your needs."
        />
      </Helmet>
      <Navbar showNavs={true} />
      <div className="home">
        <Introduction />
        {screenSize > DESKTOP_WIDTH && (
          <Scroller
            scrollPosition={scrollPosition}
            handleScrollerClick={handleScrollerClick}
          />
        )}
        <AboutUsComponent />
        <GenerativeAi />
        <OurService />
        <CaseStudy />
        <Footer />
      </div>
    </>
  );
};

export default Home;
