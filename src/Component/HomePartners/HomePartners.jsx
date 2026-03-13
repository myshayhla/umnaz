import React, { useEffect, useState } from "react";
import "./Style.scss";
import Img1 from "../../assets/icons/partner1.svg";
import Img2 from "../../assets/icons/partner1.svg";
import Img3 from "../../assets/icons/partner1.svg";
import Img4 from "../../assets/icons/partner1.svg";
import Img5 from "../../assets/icons/partner1.svg";
import { apiRequest } from "../../../utils/api";

function HomePartners() {
  const [partners, setPartners] = useState([]);
useEffect(() => {
  // Backenddən partner məlumatlarını çəkirik
  apiRequest("/business-partners") // backenddəki endpoint
    .then((res) => {
      if (res && res.data) {
        setPartners(res.data);
        console.log(partners);
        // data arrayini state-ə qoyuruq
      }
    })
    .catch((err) => {
      console.error("Partners data fetch error:", err);
    });
}, []);
  
  return (
    <div className="partners">
      <div className="partners-track m-0">
        {/* 2 dəfə render edirik ki infinite görünsün */}
        {[...partners, ...partners].map((item, index) => (
          <div className="partner-item" key={index}>
            <img
              src={`https://api.umnazmemarliq.az${item.thumbnail}`}
              alt="partner"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePartners;