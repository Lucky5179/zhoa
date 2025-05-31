import React, { useState, useEffect, useRef } from "react";

const Team = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
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

  const teamMembers = [
    {
      name: "Chris Campbell aka SuperBennyBear",
      role: "CEO",
      image: "/images/benny.jpg",
      description:
        "BNB Maxi since 2021. The main developer of $ZHOA has always believed that BNBchain is the best blockchain and lives and breathes the Binance ecosystem even though it is currently heavily regulated in his home country of Canada!",
    },
    { name: "Gato", image: "/images/gato.png" },
    { name: "Jason", image: "/images/jason.png" },
    { name: "Slinky", image: "/images/slinky.png" },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: isMobile ? "90vw" : "80vw",
    backgroundImage: isMobile
      ? "url('/images/zhoa-team-mobile.png')"
      : "url('/images/zhoa-team.png')",
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "bottom" : "center",
    borderRadius: "25px",
    borderStyle: "solid",
    borderColor: "gold",
    marginTop: isMobile ? "1rem" : "5rem",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
    paddingBottom: isMobile ? "15rem" : "0", // Adds padding only on mobile
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%", // Ensures content stays within the container
  };

  const titleStyle = {
    fontSize: isMobile ? "1.5rem" : "3rem",
    fontWeight: "bold",
    fontFamily: "Frijole",
    textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
    color: "white",
    textAlign: "center",
    marginTop: "2rem",
  };

  const teamSectionStyle = {
    width: isMobile ? "100%" : "50%",
    textAlign: "center",
    padding: isMobile ? "0 1rem" : "0 20rem",
  };

  const ceoCardStyle = {
    width: isMobile ? "70%" : "25rem",
    margin: "0 auto",
    background: "rgba(0, 0, 0, 0.6)",
    padding: "20px",
    borderRadius: "10px",
  };

  const teamMembersStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: isMobile ? ".2rem" : ".5rem",
    marginTop: "20px",
    marginBottom: "3rem",
  };

  const teamMemberCardStyle = {
    width: isMobile ? "20%" : "150px",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.6)",
    padding: "10px",
    borderRadius: "10px",
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: "3rem",
        marginBottom: "3rem",
      }}
    >
      <div style={containerStyle}>
        <h1 style={titleStyle}>ZHOA TEAM</h1>
        <div style={contentStyle}>
          <div style={teamSectionStyle}>
            {/* CEO Section */}
            <div style={ceoCardStyle}>
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                style={{ width: "50%", borderRadius: "10px" }}
              />
              <h3
                style={{
                  fontSize: isMobile ? "1rem" : "2rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {teamMembers[0].name}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? ".8rem" : "1rem",
                  color: "white",
                }}
              >
                {teamMembers[0].description}
              </p>
            </div>

            {/* Team Members Section */}
            <div style={teamMembersStyle}>
              {teamMembers.slice(1).map((member, index) => (
                <div key={index} style={teamMemberCardStyle}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <h4 style={{ fontSize: "1rem", color: "white" }}>
                    {member.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
