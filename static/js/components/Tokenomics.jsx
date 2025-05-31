import React, { useEffect, useState, useRef } from "react";

const TOKEN_ADDRESS = "0xcomingsoon"; // Your token contract address
const DEXSCREENER_API = `https://api.dexscreener.com/latest/dex/tokens/${TOKEN_ADDRESS}`;

const Tokenomics = () => {
  const [marketData, setMarketData] = useState({
    marketCap: "Loading...",
    volume: "Loading...",
    priceChange: "Loading...",
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [fadeIn, setFadeIn] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch market data
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(DEXSCREENER_API);
        const data = await response.json();
        if (data.pairs && data.pairs.length > 0) {
          setMarketData({
            marketCap: `$${parseFloat(data.pairs[0].marketCap).toLocaleString()}`,
            volume: `$${parseFloat(data.pairs[0].volume.h24).toLocaleString()}`,
            priceChange: parseFloat(data.pairs[0].priceChange.h24).toFixed(2), // 24h price change %
          });
        }
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchMarketData();
    const interval = setInterval(() => fetchMarketData(), 10000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for fade-in effect
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
        justifyContent: "center",
        overflow: "hidden",
        marginTop: isMobile ? "1rem" : "5rem",
        marginBottom: isMobile ? "1rem" : "5rem",
      }}
    >
      <div
        ref={containerRef}
        id="tokenomics"
        style={{
          width: isMobile ? "90vw" : "80vw",
          backgroundImage: "url('/images/bnb_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "25px",
          borderStyle: "solid",
          borderColor: "gold",
          position: "relative",
          display: isMobile ? "block" : "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: isMobile ? "2rem" : "5rem",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "1.5rem" : "3rem",
            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
            fontWeight: "bold",
            marginBottom: 0,
            marginTop: isMobile ? "2rem" : "10rem",
            fontFamily: "Frijole",
            color: "white",
          }}
        >
          ZHOA
        </h1>
        <h1
          style={{
            fontSize: isMobile ? "1.5rem" : "3rem",
            textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
            fontWeight: "bold",
            marginBottom: isMobile ? "1rem" : "5rem",
            marginTop: 0,
            fontFamily: "Frijole",
            color: "white",
          }}
        >
          TOKENOMICS
        </h1>

        {/* Tokenomics Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
            gap: isMobile ? "10px" : "20px",
            width: isMobile ? "90%" : "80%",
            maxWidth: isMobile ? "900px" : "1200px",
            margin: "0 auto 5rem auto",
          }}
        >
          {[
            { label: "Circ Supply", value: "1,000,000,000" },
            { label: "Liquidity", value: "Burned", color: "#ff4444" },
            { label: "Contract", value: "Renounced", color: "#44ff44" },
            { label: "Tax", value: "0% Buy/Sell", color: "#ffaa00" },
          ].map((item, index) => (
            <div key={index} style={isMobile ? { ...mobileDataBoxStyle, color: item.color || "white" } : { ...dataBoxStyle, color: item.color || "white" }}>
              <h2 style={{ fontSize: isMobile ? "1.3rem" : "1.8rem" }}>{item.label}</h2>
              <p style={{ fontSize: isMobile ? "1rem" : "1.5rem" }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
            width: isMobile ? "90vw" : "70vw",
            margin: "0 auto",
            paddingBottom: isMobile ? "2rem" : 0,
          }}
        >
          {["zhoa-motorcycle.png", "zhoa-machine.png", "zhoa-workout.png"].map((img, index) => (
            <img key={index} src={`/images/${img}`} alt={`Zhoa ${img.split("-")[1]}`} style={{ width: "100%" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Desktop Style
const dataBoxStyle = {
  backgroundColor: "rgba(63, 62, 44, 0.6)",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  color: "white",
};

// Mobile Style
const mobileDataBoxStyle = {
  backgroundColor: "rgba(63, 62, 44, 0.6)",
  padding: "10px",
  borderRadius: "8px",
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  color: "white",
};

export default Tokenomics;
