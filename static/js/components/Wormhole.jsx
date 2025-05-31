import { useEffect, useState, useRef } from "react";

const Wormhole = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [fadeIn, setFadeIn] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setFadeIn(true), 200); // Prevent premature unobserving
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" } // Improved trigger
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    minWidth: "100px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "black",
    textDecoration: "none",
    backgroundColor: "rgba(243, 186, 47, 0.95)",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
    borderRadius: "10px",
    textAlign: "center",
    transition: "background 0.3s",
    cursor: "pointer",
    marginTop: isMobile ? "1.5rem" : "50px",
  };

  return (
    <div 
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        marginTop: isMobile ? "2rem" : "5rem",
        marginBottom: isMobile ? "1rem" : "5rem",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: isMobile ? "90vw" : "80vw",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: isMobile ? "2rem" : "5rem",
          paddingBottom: isMobile ? "2rem" : "5rem",
          position: "relative",
          overflow: "hidden",
          backgroundImage: isMobile ? "url('/images/wormhole-mobile.jpg')" : "url('/images/wormhole.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "25px",
          borderStyle: "solid",
          borderColor: "gold",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        {/* Left-side text container */}
        <div
          style={{
            width: isMobile ? "70%" : "40%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent
            padding: isMobile ? "1rem" : "2rem",
            borderRadius: "15px",
            color: "white",
            textAlign: "center",
            zIndex: 2,
            marginBottom: isMobile ? "1rem" : "0",
          }}
        >
          <h1 style={{ 
            fontSize: isMobile ? "1.5rem" : "3rem", 
            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)", 
            fontWeight: "bold", 
            marginBottom: isMobile ? "10px" : "15px", 
            fontFamily: "Frijole" 
          }}>
            The ZHOA Wormhole
          </h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.5rem", lineHeight: "1.5" }}>
            Wrapped $ZHOA (wZHOA) is officially live on Pancake DEX on the BSC blockchain. That’s right—you can now
            trade, hold, and expand your $ZHOA journey across chains, using BSC's lightning-fast ecosystem and the
            ever-popular Metamask wallet.
          </p>

          {/* Buttons Container */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "10px" : "15px",
              marginTop: isMobile ? "10px" : "20px",
              justifyContent: "center",
              marginBottom: isMobile ? '1rem' : '2rem',
            }}
          >

          </div>
        </div>

        {/* Right-side image - Stacks below on mobile */}
        <img
          src="/images/czworm.png"
          alt="CZ Wormhole"
          style={{
            width: isMobile ? "60%" : "500px",
            height: "auto",
            marginTop: isMobile ? "10px" : "0",
          }}
        />
      </div>
    </div>
  );
};

export default Wormhole;
