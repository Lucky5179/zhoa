import React, { useState, useEffect, useRef } from "react";

const Links = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const slidesPerPage = isMobile ? 1 : 8;
  const [fadeIn, setFadeIn] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setFadeIn(true), 200); // Prevents premature unobserving
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

  const originalLinks = [
    { name: "DexScreener", src: "/images/dexscreener.png", url: "https://www.dextools.io/app/en/bnb/pair-explorer/0xcomingsoon" },
    { name: "PancakeSwap", src: "/images/pcs.png", url: "https://pancakeswap.finance/swap?outputCurrency=0xcomingsoon" },
    { name: "Telegram", src: "/images/tg.png", url: "https://t.me/ChengpangzhoaonBNB" },
    { name: "X", src: "/images/x.png", url: "https://x.com/ZhoaonBNB" },
  ];

  let paddedLinks;
  if (isMobile) {
    paddedLinks = originalLinks;
  } else {
    const pages = Math.ceil(originalLinks.length / slidesPerPage);
    const totalRequired = pages * slidesPerPage;
    const extraCount = totalRequired - originalLinks.length;
    paddedLinks = [...originalLinks, ...originalLinks.slice(0, extraCount)];
  }

  const slides = [...paddedLinks, ...paddedLinks];
  const totalPadded = paddedLinks.length; // number of slides in one cycle
  const slideSpace = 11; // in rem
  const cycleWidthRem = totalPadded * slideSpace;
  const animationDuration = `${totalPadded * 2}s`;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselContainerStyle = {
    width: isMobile ? "90vw" : "80vw",
    overflow: "hidden",
    position: "relative",
    marginTop: "2rem",
  };

  const slidesWrapperStyle = {
    display: "flex",
    width: `${slides.length * slideSpace}rem`,
    animation: `scroll ${animationDuration} linear infinite`,
  };

  const slideStyle = {
    width: isMobile ? "7rem" : "10rem",
    height: isMobile ? "7rem" : "10rem",
    border: "2px solid gold",
    borderRadius: "25px",
    margin: "0 0.5rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div
      ref={containerRef}
      id="memes"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        marginTop: "5rem",
        marginBottom: "1rem",
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",

      }}
    >
      <header style={{ width: "100%", textAlign: "center", marginBottom: "1rem" }}>
        <h1
          style={{
            fontFamily: "Frijole",
            fontSize: isMobile ? "1.5rem" : "3rem",
            margin: 0,
            color: "white",
          }}
        >
          LINKS
        </h1>
      </header>
      <div style={carouselContainerStyle}>
        <style>
          {`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-${cycleWidthRem}rem); }
            }
            .slides-wrapper:hover {
              animation-play-state: paused !important;
            }
          `}
        </style>
        <div className="slides-wrapper" style={slidesWrapperStyle}>
          {slides.map((link, index) => (
            <div key={index} style={{ ...slideStyle, backgroundImage: `url(${link.src})` }}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", width: "100%", height: "100%" }}
              ></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
