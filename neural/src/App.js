import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import LoaderPart2 from "./Components/LoaderPart/LoaderPart2";
import Navbar from "./Components/Navbar/Navbar";
import AllRouter from "./Routes/AllRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showInitialLoader, setShowInitialLoader] = useState(true);

  // Simulate loading delay for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowInitialLoader(false); // Hide initial loader after initial loading
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
    <div className="App">
      {showInitialLoader ? (
        <LoaderPart2 /> // Render initial loading animation
      ) : (
        <>
          {isLoading && <LoaderPart2 />}{" "}
          {/* Render loader again when navigating back */}
          {!isLoading && (
            <>
              <Navbar />

              <AllRouter />
              <Footer />
              <p className="name_of_website">NeuralHQ@2024</p>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
