import { motion } from "framer-motion";
import Header from "../components/Header";
import About from "../components/About";
import Wormhole from "../components/Wormhole";
import Tokenomics from "../components/Tokenomics";
import Memes from "../components/Memes";
import Links from "../components/Links";
import Team from "../components/Team";
import ScrollingText from "../components/ScrollingText";
import Footer from "../components/Footer";
import Staking from "../components/Staking";
const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Header />
      <About />
      <ScrollingText />
      <Wormhole />
      <Tokenomics />
      <Staking />
      <Memes />
      <Links />
      <Team />
      <Footer />
    </motion.div>
  );
};

export default Main;
