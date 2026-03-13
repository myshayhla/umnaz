import React, { useState } from 'react';
import "./Style.scss";
import BgImage from "../../assets/images/OurMission.webp";
// import {motion} from "../"
import { motion } from "framer-motion";


function OurMission() {
    const values = [
    {
      title: "Peşəkarlıq və məsuliyyət",
    },
    {
      title: "Fərdi yanaşma",
    },
    {
      title: "Yaradıcılıq və innovasiya",
    },
    {
      title: "Keyfiyyət və davamlılıq",
    }
  ];

  return (
    <section id="values-section">
      <div
        className="values-section d-flex justify-content-between  "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* SOL */}
        <div className="left">
          <h1>Dəyərlərimiz</h1>

          {values.map((item, index) => (
            <button
              key={index}
              className="value-btn"
              onClick={() => setActive(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* SAĞ */}
        <div className="right ">
          <div className="content">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Missiyamız
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Müasir, funksional və estetik baxımdan dəyər yaradan memarlıq
              həlləri ilə müştərilərimizin gözləntilərini üstələmək.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
