import React from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import bgImage from "../../assets/images/HeroSection.webp";
import HomePartners from "../../Component/HomePartners/HomePartners";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getCurrentLanguage } from "../../utils/languageUtils";

function Partners() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
     const currentLanguage = getCurrentLanguage(pathname);
      const createLanguageAwarePath = (path) => {
        return addLanguageToPath(path, currentLanguage);
    };
  return (
    <>
      <HeroSection title={t("header.partners")} bgImage={bgImage} />
      <section id="partners-page">
        <div className="partners-page container-fluid g-0 d-flex justify-content-center ">
          <p className="top">{t("partners.text")}</p>
          <div className="overlay"></div>
        </div>
        <div className="our-partners">
          <p className="partners-title "> {t("partners.partnertext")}</p>
          <HomePartners />
        </div>
      </section>
    </>
  );
}

export default Partners;
