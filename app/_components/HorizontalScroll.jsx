import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./ImageContainer";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div className="bg-[#131313] h-[500vh]" ref={targetRef}>
      <div className="h-screen sticky top-0 flex items-center justify-start overflow-hidden">
        <motion.div
          className="grid grid-cols-4 grid-rows-1 gap-[3vw] px-16"
          style={{ x }}
        >
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource="/logo1.png" description="June 2024" />
          </motion.div>

          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource="/logo2.png" description="May 2024" />
          </motion.div>

          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource="logo3.png" description="April 2024" />
          </motion.div>

          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer imageSource="logo4.png" description="March 2024" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
