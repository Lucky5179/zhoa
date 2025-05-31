import React, { useState, useEffect, useRef } from "react";

const ScrollingText = () => {
  // Create an array of 50 instances of the text
  const words = new Array(50).fill("LAUNCHED ON FOUR.MEME");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    width: "100vw",
    overflow: "hidden",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    padding: 0,
    margin: 0,
  };

  const marqueeStyle = {
    display: "flex",
    whiteSpace: "nowrap",
    animation: "marquee 500s linear infinite",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: isMobile ? "2rem" : "5rem",
    fontFamily: "Slackey",
  };

  // Adjust marginRight to control spacing between each repeated text
  const wordStyle = {
    marginRight: "3rem",
  };

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div style={containerStyle}>
        <div style={marqueeStyle}>
          {/* First copy */}
          <div style={{ display: "flex" }}>
            {words.map((word, index) => (
              <span key={index} style={wordStyle}>{word}</span>
            ))}
          </div>
          {/* Second copy for seamless looping */}
          <div style={{ display: "flex" }}>
            {words.map((word, index) => (
              <span key={index} style={wordStyle}>{word}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollingText;
