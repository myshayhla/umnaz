import React from 'react';
import "./Style.scss";
import MainBtn from '../MainBtn/MainBtn';
import { motion } from "framer-motion";


function HomeContactForm() {
  return (
    <section className="contact-section">
      <motion.div
        className="container"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Title */}
        <div className="contact-header">
          <p>Əlaqə</p>
          <h2>Bizimlə əlaqə saxlayın</h2>
        </div>

        {/* Form */}
        <form className="contact-form">
          <div className="row">
            {/* Ad Soyad */}
            <div className="col-12 col-md-6">
              <label>Ad, Soyad</label>
              <input type="text" placeholder="Ad və soyadınızı daxil edin" />
            </div>

            {/* Email */}
            <div className="col-12 col-md-6">
              <label>E-mail</label>
              <input type="email" placeholder="E-mailinizi daxil edin" />
            </div>

            {/* Başlıq */}
            <div className="col-12">
              <label>Başlıq</label>
              <input type="text" placeholder="Başlıq" />
            </div>

            {/* Mesaj */}
            <div className="col-12">
              <label>Mesaj</label>
              <textarea rows="5" placeholder="Mesajınızı daxil edin"></textarea>
            </div>

            {/* Button */}
            <div className="col-12">
              <MainBtn title={"Mesaj göndərin"} />
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default HomeContactForm;
