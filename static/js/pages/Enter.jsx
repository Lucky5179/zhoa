import { useEffect, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useNavigate } from "react-router-dom";

const Enter = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ?? NEW loading state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const navigate = useNavigate();

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);

    // ?? Wait until everything is fully loaded
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500); // slight delay for smoother experience
    };
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate("/main");
    }, 3000);
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    resetMousePosition();
    setIsHover(true);
  };

  const handlePointerUp = () => {
    setTimeout(() => setIsHover(false), 300);
  };

  // ?? Show loader until fully loaded
  if (isLoading) {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      {/* Background Spinner */}
      <motion.div
        initial={{ scale: 1, rotate: 0 }}
        animate={isClicked ? { scale: 5, rotate: 360, opacity: 0 } : { rotate: 360 }}
        transition={{ duration: isClicked ? 4 : 30, ease: "linear", repeat: Infinity }}
        style={{
          marginBottom: isMobile ? "20px" : 0,
          marginRight: isMobile ? "-5px" : 0,
          position: "absolute",
          width: isMobile ? "500%" : "150%",
          height: isMobile ? "500%" : "400%",
          backgroundImage: isMobile
            ? "url('/images/circular-binance-mobile-new.png')"
            : "url('/images/circular-binance-new.png')",
          backgroundPosition: "center",
          filter: "brightness(110%)",
          zIndex: 50,
        }}
      />

      {/* Floating Character Image */}
      <motion.img
        src="/images/body.png"
        alt="Body Image"
        initial={{ y: 50 }}
        animate={
          isClicked
            ? { y: isMobile ? 500 : 50, opacity: 0 }
            : isHover
            ? { y: isMobile ? -225 : -50 }
            : { y: 300 }
        }
        transition={{ type: "spring", stiffness: 80 }}
        style={{
          position: "absolute",
          bottom: isMobile ? "10%" : "2%",
          width: isMobile ? "150px" : "400px",
          zIndex: 40,
        }}
      />

      {/* Title Text */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          zIndex: 69,
          fontSize: isMobile ? "16px" : "40px",
          paddingBottom: isMobile ? "125px" : "250px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        JOIN THE CULT
      </motion.div>

      {/* BNB Button */}
      <div
        style={{
          position: "relative",
          zIndex: 70,
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <MotionConfig transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.img
            ref={ref}
            src="/images/bnb_button.png"
            alt="BNB Button"
            initial={false}
            animate={isHover ? "hover" : "rest"}
            whileTap="press"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.3 },
              press: { scale: 1.1 },
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onClick={handleClick}
            style={{
              width: isMobile ? "75px" : "200px",
              cursor: "pointer",
              opacity: isClicked ? 0 : 1,
              transition: "opacity 1.5s ease",
              paddingTop: isMobile ? "0px" : "50px",
              userSelect: "none",
              WebkitUserDrag: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          />
        </MotionConfig>
      </div>
    </div>
  );
};

export default Enter;
