import React from "react";
import styles from "./styles.module.css";
import gradient from "../../../Assets/gradient.png";
import iphone from "../../../Assets/iphone.png";
import { motion } from "framer-motion";

function PhoneComponent() {
  return (
    <div className={styles.phoneBox}>
      <img className={styles.gradient} src={gradient} />
      <motion.img
        className={styles.iphone}
        src={iphone}
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default PhoneComponent;
