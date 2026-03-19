import React, { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
  addLanguageToPath,
  getCurrentLanguage,
} from "../../utils/languageUtils";
import { t } from "i18next";
import { apiRequest } from "../../../utils/api";

function ContactPage() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };

  const [settings, setSettings] = useState([]);

  useEffect(() => {
    apiRequest("/settings").then((res) => {
      if (res) {
        setSettings(res);
      }
    });
  }, []);

  return (
    <>
      <HeroSection title={t("contact.title")} bgImage={bgImage} />
      <section id="contact-sec">
        <div className="contact-sec container-fluid g-0">
          <div className="contact-header d-flex  flex-column align-items-center">
            <h2>{t("contact.headtitle")}</h2>
            <p>{t("contact.headtext")}</p>
          </div>
          <div className="contact-content">
            {/* Left Side */}
            <div className="contact-info">
              <div className="info-block">
                <div className="info-row">
                  <img src={Mail} alt="mail" />
                  <div>
                    <h4>{t("contact.mail")}</h4>
                    <span>info@umnazmemarliq.az</span>
                  </div>
                </div>
              </div>

              <div className="info-block">
                <div className="info-row">
                  <img src={Clock} alt="clock" />
                  <div>
                    <h4>{t("contact.workHour.title")}</h4>
                    <span>{t("contact.workHour.weekly")}</span>
                    <br />
                    <span>{t("contact.workHour.weekend")}</span>
                  </div>
                </div>
              </div>

              <div className="info-block">
                <div className="info-row">
                  <img src={Phone} alt="phone" />
                  <div>
                    <h4>{t("contact.phone")}</h4>
                    <span>+994 10 2400050</span>
                  </div>
                </div>
              </div>

              <div className="info-block">
                <div className="info-row">
                  <img src={Location} alt="location" />
                  <div>
                    <h4>{t("contact.location")}</h4>
                    <span>Sumqayıt şəhəri, Bulvar küçəsi 39B, M38</span>
                  </div>
                </div>
              </div>

              <div className="contact-icons">
                <div className="icon">
                  <Link
                    to={settings.instagram?.[i18n.language]}
                    target="_blank"
                  >
                    <img src={Instagram} alt="instagram" />
                  </Link>
                </div>
                <div className="icon">
                  <Link to={settings.linkedin?.[i18n.language]} target="_blank">
                    <img src={LinkedIn} alt="linkedin" />
                  </Link>
                </div>
                <div className="icon">
                  <Link to={settings.facebook?.[i18n.language]} target="_blank">
                    <img src={Facebook} alt="facebook" />
                  </Link>
                </div>
                <div className="icon">
                  <Link
                    to={settings.whatsapp?.[i18n.language]}
                    target="_blank"
                  >
                  <img src={Whatsapp} alt="whatsapp" />
                  </Link>
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
