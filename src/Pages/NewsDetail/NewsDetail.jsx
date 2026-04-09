import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import BgImage from "../../assets/images/HeroSection.webp";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../../../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import MainBtn from "../../Component/MainBtn/MainBtn";
import {
  addLanguageToPath,
  getCurrentLanguage,
} from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function ProjectDetail() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [otherNews, setOtherNews] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    // single news
    apiRequest(`/news/${id}`).then((data) => {
      if (data && data.data) {
        setNews(data.data);
      }
    });
    apiRequest("/news").then((data) => {
      if (data && data.data) {
        const filtered = data.data
          .filter((item) => item._id !== id) // cari layihəni çıxar
          .sort(() => 0.5 - Math.random()) // random qarışdır
          .slice(0, 2); // 2 layihə götür
        setOtherNews(filtered);
      }
    });
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <>
      <HeroSection
        title={
          news?.[`title_${currentLanguage}`] ||
          news?.title_az ||
          "Loading..."
        }
        bgImage={BgImage}
      />

      <section id="project-detail">
        <div className="project-detail container-fluid g-0 ">
          {/* Thumbnail */}
          <div className="thumbnail">
            <div
              className="thumbnail-bg"
              style={{
                backgroundImage: `url(https://api.umnazmemarliq.az${news.thumbnail})`,
              }}
            ></div>

            <img
              src={`https://api.umnazmemarliq.az${news.thumbnail}`}
              alt={project.title?.az}
            />
          </div>

          {/* Slider images */}
          <div className="images">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              {project.images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`https://api.umnazmemarliq.az${img}`}
                    alt=""
                    onClick={() =>
                      setActiveImage(`https://api.umnazmemarliq.az${img}`)
                    }
                    style={{ cursor: "pointer" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {activeImage && (
              <div className="image-modal" onClick={() => setActiveImage(null)}>
                <img src={activeImage} alt="preview" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="projects-content">
            <h3>
              {project?.[`title_${currentLanguage}`] || project?.title_az}
            </h3>

            <div
              className="project-text"
              dangerouslySetInnerHTML={{
                __html:
                  project?.[`text_${currentLanguage}`] || project?.text_az,
              }}
            />
          </div>

          {/* Other Projects */}
          <div className="other-projects">
            <div className="head d-flex justify-content-between pb-4">
              <h2 className="m-0">{t("projects.other-projects")}</h2>
              <Link to={createLanguageAwarePath("/layiheler")}>
                {" "}
                <MainBtn title={`${t("projects.btn")}`} />
              </Link>
            </div>

            <div className="projects">
              <div className="projects">
                {otherProjects.map((item) => (
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="project-img"
                  >
                    <Link to={createLanguageAwarePath(`/layiheler/${item.id}`)}>
                      <div className="project-overlay">
                        <p>
                          {" "}
                          {project?.[`title_${currentLanguage}`] ||
                            project?.title_az}
                        </p>
                        {/* <span>{project.text?.[lang]}</span> */}
                      </div>
                      <img
                        src={`https://api.umnazmemarliq.az${item.thumbnail}`}
                        alt={item.title_az}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
