import { useEffect, useState, useRef } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [fadeIn, setFadeIn] = useState(false);
  const containerRef = useRef(null);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use Intersection Observer to trigger fade-in when container is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFadeIn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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

  return (
    <div 
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        marginTop: isMobile ? "6rem" : "10rem",
        marginBottom: isMobile ? "2rem" : "5rem",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: isMobile ? "90vw" : "80vw",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "black",
          borderRadius: "25px",
          borderStyle: "solid",
          borderColor: "gold",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        {/* Fullscreen Video Background */}
        <video
          muted
          autoPlay
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: 1,
            display: "block",
            backgroundColor: "black",
          }}
          onError={(e) => console.error("Video failed to load:", e.target.src)}
        >
          <source src={isMobile ? "/images/zhoa-jesus.mp4" : "/images/zhoa-mcduck.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Floating Text Container */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: "2rem",
            borderRadius: "15px",
            maxWidth: isMobile ? "80%" : "45%",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 style={{ 
            fontSize: isMobile ? "1.5rem" : "3rem", 
            fontWeight: "bold", 
            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)", 
            fontFamily: "Frijole",
            padding: "0",
            margin: "0",
          }}>
            Chengpang Zhoa
          </h1>
          <h1 style= {{
            fontSize: isMobile ? "2.2rem" : "6rem",
            fontWeight: 800,
            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)", 
            fontFamily: "Slackey",
            padding: "0",
            margin: "0",
          }}>
            JOIN THE CULT 
          </h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.5rem", margin: "0 auto" }}>
            Where we never stopped believing that $BNB was great, Chengpang Zhoa was launched on August 28, 2024, on four.meme.
            The <strong>$ZHOA</strong> token aims to bring back the popularity of Binance’s DeFi platform and rekindle
            its former memecoin glory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
