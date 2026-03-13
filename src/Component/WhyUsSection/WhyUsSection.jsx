import React from 'react';
import "./Style.scss";
import { motion } from "framer-motion";

function WhyUsSection() {
  return (
    <section id="why-us">
      <div className="why-us container-fluid">
        <div className="content">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Niyə biz?
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Biz hər bir layihəyə yalnız dizayn işi kimi deyil, dəyər yaradan bir
            proses kimi yanaşırıq. Müasir memarlıq yanaşmalarını funksionallıq
            və estetik baxışla birləşdirərək, müştərilərimizin ehtiyac və
            gözləntilərinə uyğun həllər təqdim edirik.{" "}
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Peşəkar və məsuliyyətli komandamız hər mərhələdə fərdi yanaşmanı
            əsas götürür, yaradıcı və innovativ ideyalarla keyfiyyətli və
            davamlı məkanlar formalaşdırır. Bizim üçün məqsəd yalnız layihə
            təqdim etmək deyil, uzunmüddətli məmnuniyyət və etibar qazanmaqdır.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
