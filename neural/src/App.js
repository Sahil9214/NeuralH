import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [showBorder, setShowBorder] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBorder(false); // After some delay, hide the border
    }, 4000); // Adjust the delay time as needed (4 seconds in this example)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <h1 className={`coming-soon ${showBorder ? "bordered" : ""}`}>
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
