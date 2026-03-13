import React, { useEffect, useState } from "react";
import "./Style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_gold.webp";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Whatsapp from "../../assets/icons/whatsap.svg";
import { apiRequest } from "../../../utils/api";

function Footer() {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    apiRequest("/settings").then((data) => {
      if (data && data.data) {
        setSettings(data.data[0]);
      }
    });
  }, []);
  if (!settings) return null;

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
                UMNAZ Memarlıq və Dizayn Agentliyi — memarlıqda funksionallıq,{" "}
                <br />
                dizaynda estetik baxış.
              </p>
              <div className="footer-icons">
                <div className="icon">
                  <img src={Instagram} alt="instagram" />
                </div>
                {settings.instagram?.az && (
                  <Link to={`${settings.instagram?.az}`}>
                    <img src={Instagram} alt="instagram" />
                  </Link>
                )}
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

              {/* Icons */}
              <div className="footer-icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>

            {/* SAĞ HISSƏ */}
            <div className="col-12 col-lg-6">
              <div className="row">
                {/* Sürətli keçid */}
                <div className="col-12 col-md-6 footer-links pb-3">
                  <h5>Sürətli keçid</h5>
                  <ul>
                    <li>
                      <Link to="/">Ana səhifə</Link>
                    </li>

                    <li>
                      <Link to="/haqqimizda">Haqqımızda</Link>
                    </li>

                    <li>
                      <Link to="/xidmetler">Xidmətlər</Link>
                    </li>

                    <li>
                      <Link to="/layiheler">Layihələr</Link>
                    </li>

                    <li>
                      <Link to="/terefdaslar">Partnyorlar</Link>
                    </li>

                    <li>
                      <Link to="/elaqe">Əlaqə</Link>
                    </li>
                  </ul>
                </div>

                {/* Əlaqə */}
                <div className="col-12 col-md-6 footer-contact">
                  <h5>Əlaqə vasitələri</h5>
                  <ul>
                    <li>Sumqayıt şəhəri, Bulvar küçəsi 39B, M38</li>
                    <li>info@umnazmemarliq.az</li>
                    <li>+994 10 2400050</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom g-0 m-0 p-0">
          <p>© Bütün hüquqlar qorunur.</p>
          <Link to="https://birsayt.az" target="_blank" rel="noreferrer">
            Sayt hazırlandı: Birsayt.az
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
