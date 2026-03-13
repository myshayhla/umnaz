import React from "react";
import Arrow from "../../assets/icons/arrowRight.svg";
import "./Style.scss";
import { motion } from "framer-motion";

function MainBtn({title}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="main-btn"
    >
      <button type="button" className="cta-btn">
        <div className="arrow">
          <img src={Arrow} alt="Arrow icon" />
        </div>

        <span>{title}</span>
      </button>
    </motion.div>
  );
}

export default MainBtn;
