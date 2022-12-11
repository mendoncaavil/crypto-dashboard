import React from "react";
import styles from "./styles.module.css";
import Button from "../../Common/Button/Button";
import OutlineButton from "../../Common/Button/OutlineButton";
import { motion } from "framer-motion";
import PhoneComponent from "./PhoneComponent";
import { RWebShare } from "react-web-share";

function LandingIntro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <motion.h1
          className={styles.bigHeading}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className={styles.bigHeading2}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className={styles.para}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Track crypo through a public API in real time. Visit the dashboard to
          do so.
        </motion.p>
        <motion.div
          className={styles.flexBtn}
          initial={{ x: -5, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          <a href="/dashboard">
          <Button text="Dashboard" />
          </a>
          <RWebShare
            data={{
              text: "Crypto Dashboard made by Avil",
              url: "https://crypto-dashboard-avil.netlify.app/",
              title: "Crypto Dashboard",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <OutlineButton text="Share" outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <PhoneComponent />
    </div>
  );
}

export default LandingIntro;
