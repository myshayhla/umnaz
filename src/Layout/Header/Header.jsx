import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getCurrentLanguage,
  removeLanguageFromPath,
  addLanguageToPath,
} from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo_white.webp";
import { FaBars } from "react-icons/fa6";
import "./Style.scss";

function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const currentLanguage = getCurrentLanguage(pathname);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageDropdownRef = useRef(null);

  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);

  const handleLanguageSelect = (selectedLang) => {
    setIsLanguageOpen(false);

    const pathWithoutLang = removeLanguageFromPath(pathname);
    const newPath = addLanguageToPath(pathWithoutLang, selectedLang);

    // Dil dəyişir və URL sinxron olur
    i18n.changeLanguage(selectedLang);
    navigate(newPath);
  };

  // Click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


   const createLanguageAwarePath = (path) => {
       return addLanguageToPath(path, currentLanguage);
  };
  
  return (
    <nav className="navbar navbar-expand-lg p-0 px-0">
      <div className="container-fluid">
        {/* Logo solda */}
        <Link className="logo fw-bold" to={createLanguageAwarePath("/")}>
          <img src={Logo} alt="" />
        </Link>

        {/* Hamburger icon sağda (mobil üçün) */}
        <div
          className="navbar-toggler"
          type="button"
          onClick={toggleLanguageDropdown}  //sahil cigaldi 
        >
          <FaBars />
        </div>

        {/* Navbar content */}
        <div className="collapse navbar-collapse justify-content-between">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={createLanguageAwarePath("/")}>
                {t("header.home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={createLanguageAwarePath("/haqqimizda")}
              >
                {t("header.about")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={createLanguageAwarePath("/xidmetler")}
              >
                {t("header.services")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={createLanguageAwarePath("/layiheler")}
              >
                {t("header.projects")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={createLanguageAwarePath("/terefdaslar")}
              >
                {t("header.partners")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={createLanguageAwarePath("/elaqe")}>
                {t("header.contact")}
              </Link>
            </li>
          </ul>

          {/* Language switcher sağda */}
          <div className="d-flex gap-2" ref={languageDropdownRef}>
            {["az", "en"].map((item) => (
              <button
                key={item}
                className={`lan btn-sm ${currentLanguage === item ? "active" : ""}`}
                onClick={() => handleLanguageSelect(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
