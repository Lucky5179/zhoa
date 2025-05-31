import React from "react";
import { useEffect, useState } from "react";


const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        fontSize: isMobile ? "8px" : "12px",
        color: "white",
        padding: "10px 0",
      }}
    >
      <p>COPYRIGHT @2025 CHENGPANG ZHOA. LEGAL DISCLAIMER: $ZHOA IS A MEME COIN WITH NO INTRINSIC VALUE OR EXPECTATION OF FINANCIAL RETURN. IT IS COMPLETELY USELESS AND ONLY FOR ENTERTAINMENT PURPOSES. WHEN YOU BUY $ZHOA YOU ARE AGREEING TO THIS DISCLAIMER. Email us at admin@zhoa.xyz</p>
    </footer>
  );
};

export default Footer;
