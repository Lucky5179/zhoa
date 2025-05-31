import { useEffect, useState, useRef } from "react";

const Staking = () => {
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
          backgroundImage: isMobile ? "url('/images/staking.png')" : "url('/images/staking.png')",
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
            The ZHOA HODL Club
          </h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.5rem", lineHeight: "1.5" }}>
          Introducing the Chengpang Zhoa ($ZHOA) HODL Club: a staking haven for diamond hand believers in the BNB Chain meme token inspired by Binance’s CZ. With the tagline “If Yu C*nt Holdl Yu Wund bi reech!”, $ZHOA rewards dedicated HODLers through its new staking service.
          </p>

          {/* Buttons Container */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "10px" : "15px",
              marginTop: isMobile ? "10px" : "20px",
              marginBottom: isMobile ? '1rem' : '2rem',
              justifyContent: "center",
            }}
          >
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=%220xcomingsoon%22"
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle}
            >
              BUY $ZHOA
            </a>
          </div>
        </div>

        {/* Right-side image - Stacks below on mobile */}
        <img
          src="/images/zhoa-balloon.png"
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

export default Staking;
