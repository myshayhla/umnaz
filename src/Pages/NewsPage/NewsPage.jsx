import React, { useState } from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import BgImg from "../../assets/images/HeroSection.webp";
import { useNavigate } from "react-router-dom";
import BgImage from "../../assets/images/news.png";

function NewsPage() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  const newsData = [
    {
      id: 1,
      title: "Xeber adi",
      date: "09/04/2026",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
    },
    {
      id: 2,
      title: "Xeber adi",
      date: "05/04/2026",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
    },
    {
      id: 3,
      title: "Xeber adi",
      date: "01/04/2026",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
    },
    {
      id: 4,
      title: "Xeber adi",
      date: "28/03/2026",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
    },
    {
      id: 5,
      title: "Xeber adi",
      date: "25/03/2026",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
    },
    {
      id: 6,
      title: "Xeber adi",
      date: "20/03/2026",
      description:
        "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
    },
  ];

  return (
    <>
      <HeroSection title="Xəbərlər" bgImage={BgImg} />
      <section id="news-page">
        <div className="news-page container">
          <div className="news-grid row">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="news-card col-12 col-md-6 col-lg-3 "
                onClick={() => navigate(`/xeberler/${item.id}`)}
              >
                <div className="card-container">
                  <div className="card-bg">
                    <img src={BgImage} alt="" />
                  </div>
                  <div className="text-side">
                    <h5>{item.title}</h5>
                    <span className="date">{item.date}</span>
                    <p className="desc">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsPage;
