import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard: " + text);
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const headerStyle = {
    position: "fixed",
    top: isMobile ? 20 : 50,
    left: "50%",
    transform: "translateX(-50%)",
    width: isMobile ? "80vw" : "80vw",
    height: isMobile ? "40px" : "60px",
    backgroundColor: "rgba(243, 186, 47, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    borderRadius: "50px",
    boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.4)",
    zIndex: "1000",
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "1.1rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.2s ease-in-out",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 30px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    textDecoration: "none",
    fontWeight: "bold",
    textAlign: "center",
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <header style={headerStyle}>
      <a
        href="#top"
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "1rem",
          textDecoration: "none",
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        <img
          src="/images/head.png"
          alt="Logo"
          style={{ height: isMobile ? "30px" : "40px", marginRight: "10px" }}
        />
        CHENGPANG ZHOA
      </a>
      {!isMobile ? (
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          {["TOKENOMICS", "MEMES"].map(
            (section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                style={navLinkStyle}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                {section}
              </a>
            )
          )}
          <button
            style={buttonStyle}
            onClick={() =>
              copyToClipboard("0xcomingsoon")
            }
          >
            COPY BSC CA
          </button>
          <button
            style={buttonStyle}
            onClick={() =>
              (window.location.href =
                "https://pancakeswap.finance/swap?outputCurrency=0xcomingsoon&inputCurrency=BNB")
            }
          >
            BUY NOW
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={toggleMenu}
            style={{
              fontSize: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ?
          </button>
          {menuOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "60vw",
                height: "100vh",
                backgroundColor: "rgba(243, 186, 47, 0.95)",
                boxShadow: "-5px 0 10px rgba(0, 0, 0, 0.3)",
                transition: "right 0.3s ease-in-out",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                zIndex: "1001",
              }}
            >
              <button
                onClick={toggleMenu}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ?
              </button>
              {[
                "TOKENOMICS",
                "MEMES",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  style={navLinkStyle}
                  onClick={toggleMenu}
                >
                  {section}
                </a>
              ))}
              <button
                style={buttonStyle}
                onClick={() =>
                  copyToClipboard("0xcomingsoon")
                }
              >
                COPY BSC CA
              </button>
              <button
                style={buttonStyle}
                onClick={() =>
                  (window.location.href =
                    "https://pancakeswap.finance/?outputCurrency=0xcomingsoon")
                }
              >
                BUY NOW
              </button>
            </div>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
