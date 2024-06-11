import React, { useEffect, useState } from "react";

import LoaderPart2 from "./Components/LoaderPart/LoaderPart2";

import AllRouter from "./Routes/AllRouter";

import "./App.css";
import { Helmet } from "react-helmet-async";

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
      <AllRouter />
    </div>
  );
}

export default App;
