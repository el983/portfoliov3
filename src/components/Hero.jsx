import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css"; // Import external CSS
import Home from "./Home";
import Concept from "./Concept";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for Card 1
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]); // Zoom out
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Fade out

  // Transform values for Card 2
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]); // Fade in

  return (
    <div ref={containerRef} className="container">
      <div className="sticky-wrapper">
        {/* Card 1 */}
        <motion.div
          style={{ scale: scale1, opacity: opacity1 }}
          className="card card1"
        >
        <Home/>
        </motion.div>

        {/* Card 2 */}
        <motion.div style={{ opacity: opacity2 }} className="card card2">
          <Concept/>
        </motion.div>
      </div>
    </div>
  );
}
