import React from "react";
import { motion } from "framer-motion";
import styles from "./skeletonLoader.module.scss";

const SkeletonLoader = ({
  width = "100%",
  height = "20px",
  className = "",
}) => {
  const widthValue = parseFloat(width);
  const heightValue = parseFloat(height);

  // Calculate dynamic border-radius as a percentage of the smaller dimension
  const minDimension = Math.min(widthValue, heightValue);
  const borderRadius = minDimension * 0.15;

  return (
    <motion.div
      className={`${styles.skeleton} ${className}`}
      style={{
        width,
        height,
        borderRadius: `${borderRadius}px`,
      }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
};

export default SkeletonLoader;
