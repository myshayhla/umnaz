import React, { useEffect, useState } from "react";
import "./Style.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo_gold.webp";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Whatsapp from "../../assets/icons/whatsap.svg";
import Mail from "../../assets/icons/mail.svg";
import Clock from "../../assets/icons/clock.svg";
import Phone from "../../assets/icons/phone.svg";
import Location from "../../assets/icons/location.svg";
import { apiRequest } from "../../../utils/api";
import { useTranslation } from "react-i18next";
import { addLanguageToPath, getCurrentLanguage } from "../../utils/languageUtils";

function Footer() {
  const [settings, setSettings] = useState([]);
  
     const { t, i18n } = useTranslation();
           const { pathname } = useLocation();
           // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const lang = i18n.language.slice(0, 2);
           const createLanguageAwarePath = (path) => {
             return addLanguageToPath(path, currentLanguage);
  };
  
    

useEffect(() => {
  apiRequest("/settings").then((res) => {
    if(res) {
      setSettings(res);
    }
  });
}, []);

  return (
    <footer>
      <div className="footer-content g-0 m-0 p-0 justify-content-center align-items-center">
        {/* FOOTER TOP */}
        <div className="footer-top container">
          <div className="row">
            {/* SOL HISSƏ — LOGO + TEXT + ICONS */}
            <div className="col-12 col-lg-6 footer-left">
              {/* Logo */}
              <div className="footer-logo">
                <img src={Logo} alt="UMNAZ Logo" />
              </div>

              {/* Text */}
              <p className="footer-desc">
                {t("home.footer.logotext")}
                <br />
                {t("home.footer.text2")}
              </p>
              <div className="footer-icons">
                {/* <div className="icon">
                  <img src={Instagram} alt="instagram" />
                </div> */}
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
                <div
                  className="icon"
                  to={settings.linkedin?.[i18n.language]}
                  target="_blank"
                >
                  <Link>
                    <img src={Facebook} alt="facebook" />
                  </Link>
                </div>
                <div className="icon">
                  <Link to={settings.whatsapp?.[i18n.language]} target="_blank">
                    <img src={Whatsapp} alt="whatsapp" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SAĞ HISSƏ */}
            <div className="col-12 col-lg-6">
              <div className="row">
                {/* Sürətli keçid */}
                <div className="col-12 col-md-6 footer-links pb-3">
                  <h5>{t("home.footer.quickLinksTitle")}</h5>
                  <ul>
                    <li>
                      <Link to={createLanguageAwarePath("/")}>
                        <span>{t("home.footer.quickLinks.home")}</span>
                      </Link>
                    </li>

                    <li>
                      <Link to={createLanguageAwarePath("/haqqimizda")}>
                        <span> {t("home.footer.quickLinks.about")}</span>
                      </Link>
                    </li>

                    <li>
                      <Link to={createLanguageAwarePath("/xidmetler")}>
                        <span> {t("home.footer.quickLinks.services")}</span>
                      </Link>
                    </li>

                    <li>
                      <Link to={createLanguageAwarePath("/layiheler")}>
                        {" "}
                        <span> {t("home.footer.quickLinks.projects")}</span>
                      </Link>
                    </li>

                    <li>
                      <Link to={createLanguageAwarePath("/terefdaslar")}>
                        {" "}
                        <span>{t("home.footer.quickLinks.partners")}</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/elaqe">
                        {" "}
                        <span> {t("home.footer.quickLinks.contact")}</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Əlaqə */}
                <div className="col-12 col-md-6 footer-contact">
                  <h5> {t("contact.headtitle")}</h5>
                  <ul className="contact-methods">
                    {/* {console.log('settings', settings)  }; */}
                    <li>
                      <div>
                        {" "}
                        <img src={Location} alt="location" />
                      </div>
                      <span> {settings?.address?.[lang]}</span>
                    </li>
                    <li>
                      <div>
                        {" "}
                        <img src={Mail} alt="location" />
                      </div>
                      <span> {settings?.email?.[lang]}</span>
                    </li>
                    <li>
                      <div>
                        {" "}
                        <img src={Phone} alt="location" />
                      </div>
                      <Link
                        to={"https://api.whatsapp.com/send?phone=994102400050"}
                      >
                        <span> {settings?.phone_number?.[lang]}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom g-0 m-0">
          <p>{t("home.footer.rights")}</p>
          <Link to="https://birsayt.az" target="_blank" rel="noreferrer">
            {t("home.footer.developed")}
          </Link>
        </div>
      </div>

      {/* <div className="footer-content row g-0 justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-xl-6">
            <h3>UMNAZ</h3>
          </div>
          <div className="col-12 col-md-8 col-xl-6">
            <p>Copyright © 2024 UMNAZ. All rights reserved.</p>
            <div className="logo"></div>
          </div>
          <div className="footer-bottom row-cols g-0 d-md-flex p-2 justify-content-between">
            <div>© Bütün hüquqlar qorunur.</div>
            <div>Sayt hazırlandı: Birsayt.az</div>
          </div>
        </div> */}
    </footer>
  );
}

export default Footer;
