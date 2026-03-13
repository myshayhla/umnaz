import React from "react";
import "./Style.scss";
import Img1 from "../../assets/icons/partner1.svg";
import Img2 from "../../assets/icons/partner1.svg";
import Img3 from "../../assets/icons/partner1.svg";
import Img4 from "../../assets/icons/partner1.svg";
import Img5 from "../../assets/icons/partner1.svg";

function HomePartners() {
  const partners = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
    { id: 4, img: Img4 },
    { id: 5, img: Img5 },
  ];

  return (
    <div className="partners">
      <div className="partners-track m-0">
        {/* 2 dəfə render edirik ki infinite görünsün */}
        {[...partners, ...partners].map((item, index) => (
          <div className="partner-item" key={index}>
            <img src={item.img} alt="partner" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePartners;