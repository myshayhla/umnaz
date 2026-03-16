import React from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import bgImage from "../../assets/images/HeroSection.webp";
import Mail from "../../assets/icons/mail.svg";
import Clock from "../../assets/icons/clock.svg";
import Phone from "../../assets/icons/phone.svg";
import Location from "../../assets/icons/location.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Whatsapp from "../../assets/icons/whatsap.svg";
import HomeContactForm from "../../Component/HomeContactForm/HomeContactForm";


function ContactPage() {
  return (
    <>
      <HeroSection title={"Əlaqə"} bgImage={bgImage} />
      <section id="contact-sec">
        <div className="contact-sec container-fluid g-0">
          <div className="contact-header d-flex  flex-column align-items-center">
            <h2>Əlaqə vasitələri</h2>
            <p>
              Bizimlə əlaqə saxlamaq və xidmətlərimiz haqqında ətraflı məlumat
              almaq üçün aşağıdakı vasitələrdən istifadə edə bilərsiniz:
            </p>
          </div>
          <div className="contact-content">
            {/* Left Side */}
            <div className="contact-info">
              <div className="info-block">
                <div className="info-row">
                  <img src={Mail} alt="mail" />
                  <div>
                    <h4>E-mail ünvanı</h4>
                    <span>info@umnazmemarliq.az</span>
                  </div>
                </div>
              </div>

              <div className="info-block">
                <div className="info-row">
                  <img src={Clock} alt="clock" />
                  <div>
                    <h4>İş saatları</h4>
                    <span>
                      Bazar ertəsi – Şənbə: 09:00 – 18:00
                    </span>
                    <br />
                    <span>Bazar günü: istirahət günü</span>
                  </div>
                </div>
              </div>

              <div className="info-block">
                <div className="info-row">
                  <img src={Phone} alt="phone" />
                  <div>
                    <h4>Telefon</h4>
                    <span>+994 10 2400050</span>
                  </div>
                </div>
              </div>

              <div className="info-block">
                <div className="info-row">
                  <img src={Location} alt="location" />
                  <div>
                    <h4>Ünvan</h4>
                    <span>Sumqayıt şəhəri, Bulvar küçəsi 39B, M38</span>
                  </div>
                </div>
              </div>

              <div className="contact-icons">
                <div className="icon">
                  <img src={Instagram} alt="instagram" />
                </div>
                <div className="icon">
                  <img src={LinkedIn} alt="linkedin" />
                </div>
                <div className="icon">
                  <img src={Facebook} alt="facebook" />
                </div>
                <div className="icon">
                  <img src={Whatsapp} alt="whatsapp" />
                </div>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Sumqayit%20Bulvar%2039B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <HomeContactForm />
    </>
  );
}

export default ContactPage;
