import React, { useEffect, useState } from 'react';
import "./Style.scss";
import HeroSection from '../../Component/HeroSection/HeroSection';
import BgImage from "../../assets/images/HeroSection.webp";
import { apiRequest } from '../../../utils/api';
import parse from "html-react-parser";


function ServicesPage() {
   const [services, setServices] = useState([]);
    useEffect(() => {
      apiRequest("/services").then((data) => {
        if (data && data.data) {
          setServices(data.data);
        }
      });
    }, []);
  
      const details = [
        {
          id: 1,
          title: "Ümumi xidmət bloku",
          description:
            "Hər şey bir ünvanda. Eskiz layihələndirmə,Geoloji həllər və konstruksiya hesablamaları,İnteryer və eksteryer dizayn xidmətləri.",
        },
        {
          id: 2,
          title: "Restoranlar üçün",
          description:
            "Restoranlar üçün interyer və eksteryer dizayn xidməti. Fəaliyyətinizə uyğun, estetik və funksional məkan həlləri təqdim edirik.",
        },
        {
          id: 3,
          title: "Tikintiyə icazə üçün layihələr",
          description:
            "Tikintiyə icazənin alınması üçün Həyət və bağ evlərinin layihələrinin hazırlanması.",
        },
        {
          id: 4,
          title: "Mağazalar üçün",
          description:
            "Mağazalar üçün interyer və eksteryer dizayn xidməti. Brendinizə uyğun müasir və cəlbedici dizayn konseptləri.",
        },
        {
          id: 5,
          title: "Çıxarış üçün eskizlər",
          description:
            "Çıxarışın alınması üçün zəruri olan eskiz layihələrin hazırlanması.",
        },
        {
          id: 6,
          title: "Layihələndirmə prosesi",
          description:
            "Peşəkar layihələndirmə ilə prosesləri bizə həvalə edin fərdi və qeyri-yaşayış obyektlərinin layihələndirilməsi.",
        },
        {
          id: 7,
          title: "Anbar binaları",
          description:
            "Anbar binaları üçün müasir və etibarlı layihə həlləri. İstismara uyğun, funksional və davamlı konstruksiyalar.",
        },
        {
          id: 8,
          title: "Tədris / kurs bölməsi",
          description:
            "interyer dizayn (Corona, AutoCAD, 3ds Max, Photoshop), memarlıq (Archicad, SketchUp, Lumion) və qrafik dizayn proqramları ",
        },
      ];
  return (
    <>
      <HeroSection title={"Xidmətlər"} bgImage={BgImage} />
      <section id="services-page">
        <div className="services-page container-fluid">
          <div className="services-grid">
            {services.map((item,index) => (
              <div className="service-card" key={item._id}>
                    <div className="service-card__inner">
                <span className="card-id">/{index+1}</span>
                <h3 className="card-title">{parse(item.title?.az)}</h3>
                <p className="card-text">{parse(item.text?.az)}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
