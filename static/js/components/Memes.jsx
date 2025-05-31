import React, { useState, useEffect, useRef } from "react";

const Memes = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [selectedImage, setSelectedImage] = useState("/images/1.jpg");
  const [selectedVideo, setSelectedVideo] = useState("/images/v1.mp4");
  const [videoKey, setVideoKey] = useState(0);
  const thumbnailsRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const images = [
    "/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg",
    "/images/5.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg",
    "/images/9.jpg", "/images/10.jpg", "/images/11.jpg", "/images/12.jpg",
    "/images/13.jpg", "/images/14.jpg", "/images/15.jpg", "/images/16.jpg",
    "/images/17.jpg", "/images/18.jpg", "/images/19.jpg", "/images/20.jpg"
  ];

  const videos = [
    "/images/v1.mp4", "/images/v2.mp4", "/images/v3.mp4", "/images/v4.mp4",
    "/images/v5.mp4", "/images/v6.mp4", "/images/v7.mp4", "/images/v8.mp4", "/images/v9.mp4",
    "/images/v10.mp4", "/images/v11.mp4", "/images/v12.mp4", "/images/v13.mp4",
    "/images/v14.mp4", "/images/v15.mp4", "/images/v16.mp4", "/images/v17.mp4",
    "/images/v18.mp4", "/images/v19.mp4", "/images/v20.mp4",
  ];

  const media = activeTab === "images" ? images : videos;

  const scrollThumbnails = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = isMobile ? 100 : 200;
      thumbnailsRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div 
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: isMobile ? "0" : "1rem",
        marginBottom: isMobile ? "0" : "1rem",
      }}
    >
      <div
        ref={containerRef}
        id="memes"
        style={{
          width: isMobile ? "90vw" : "80vw",
          backgroundImage: `url('${"/images/bnb_memes.jpg"}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: isMobile ? "2rem" : 0,
          textAlign: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          justifyContent: isMobile ? "flex-start" : "center",
          borderRadius: "25px",
          borderStyle: "solid",
          borderColor: "gold",
          marginTop: "1rem",
          marginBottom: isMobile ? "0" : "1rem",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",

        }}
      >
        <h1 style={{ 
          fontSize: isMobile ? "1.5rem" : "3rem", 
          fontWeight: "bold", 
          fontFamily: "Frijole", 
          textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
          marginBottom: isMobile ? "1rem" : "15px", 
          marginTop: isMobile ? "3rem" : "4rem", 
          color: "white"
        }}>
          ZHOA Memes
        </h1>
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          marginBottom: "1rem", 
          marginTop: isMobile ? "2rem" : "1rem" 
        }}>
          <button 
            onClick={() => setActiveTab("images")}
            style={{
              padding: isMobile ? "5px 25px" : "20px 50px",
              margin: "0 10px",
              background: activeTab === "images" ? "rgba(243, 186, 47, 0.95)" : "#0d1013",
              fontSize: isMobile ? ".7rem" : "1rem",
              fontWeight: "bold",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            Images
          </button>
          <button 
            onClick={() => setActiveTab("videos")}
            style={{
              padding: isMobile ? "10px 25px" : "20px 50px",
              margin: "0 10px",
              background: activeTab === "videos" ? "rgba(243, 186, 47, 0.95)" : "#0d1013",
              fontSize: isMobile ? ".7rem" : "1rem",
              fontWeight: "bold",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "1rem",

            }}
          >
            Videos
          </button>
        </div>
      
        <div style={{ 
          width: "100%", 
          height: isMobile ? "40%" : "50%", 
          marginBottom: isMobile ? "0rem" : "2rem", 
          display: "flex", 
          justifyContent: "center" 
        }}>
          {/* Wrap the main media element in a container with overflow hidden */}
          {activeTab === "images" ? (
            <div style={{ width: "60%", height: "100%", borderRadius: "25px", overflow: "hidden" }}>
              <img 
                src={selectedImage} 
                alt="Selected Meme" 
                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
              />
            </div>
          ) : (
            <div style={{ width: "60%", height: "100%", borderRadius: "25px", overflow: "hidden" }}>
              <video 
                key={videoKey} 
                controls 
                autoPlay 
                muted 
                style={{ width: "100%", height: "100%" }}
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          marginBottom: isMobile ? '1rem' : '2rem',
          width: isMobile ? "90%" : "100%"
        }}>
          <button 
            onClick={() => scrollThumbnails(-1)} 
            style={{ background: "rgba(255, 255, 255, 0.5)", border: "none", borderRadius: "25px", width: "40px", height: "40px", cursor: "pointer", marginRight: "10px" }}
          >
            &#9664;
          </button>
          <div 
            ref={thumbnailsRef} 
            style={{ display: "flex", gap: "10px", overflowX: "auto", whiteSpace: "nowrap", width: "80%", paddingBottom: "10px", scrollbarWidth: "none" }}
          >
            {media.map((src, index) => (
              activeTab === "images" ? (
                <img 
                  key={index} 
                  src={src} 
                  alt={`Meme ${index + 1}`} 
                  onClick={() => setSelectedImage(src)} 
                  style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer", borderRadius: "25px", border: selectedImage === src ? "2px solid white" : "none" }} 
                />
              ) : (
                <video 
                  key={index} 
                  onClick={() => { setSelectedVideo(src); setVideoKey(prevKey => prevKey + 1); }} 
                  style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer", borderRadius: "25px", border: selectedVideo === src ? "2px solid white" : "none" }}
                >
                  <source src={src} type="video/mp4" />
                </video>
              )
            ))}
          </div>
          <button 
            onClick={() => scrollThumbnails(1)} 
            style={{ background: "rgba(255, 255, 255, 0.5)", border: "none", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", marginLeft: "10px"}}
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Memes;
