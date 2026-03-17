import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import BgImage from "../../assets/images/HeroSection.webp";
import Img from "../../assets/images/WhyUs.webp";
import Arrow from "../../assets/icons/arrowRight.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { apiRequest } from "../../../utils/api";
import { useTranslation } from "react-i18next";
import { getCurrentLanguage } from "../../utils/languageUtils";

function ProjectPage() {
  // const projects = [
  //   {
  //     id: 1,
  //     title: "Modern Villa",
  //     image: Img,
  //   },
  //   {
  //     id: 2,
  //     title: "Restaurant Interior",
  //     image: Img,
  //   },
  //   {
  //     id: 3,
  //     title: "Luxury Store",
  //     image: Img,
  //   },
  //   {
  //     id: 4,
  //     title: "Garden House",
  //     image: Img,
  //   },
  //   ];
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const currentLanguage = getCurrentLanguage(pathname);
  useEffect(() => {
    apiRequest("/projects").then((data) => {
      if (data && data.data) {
        setProjects(data.data); 
  
      }
    });
  }, []);


  return (
    <>
      {console.log(projects)}
      <HeroSection title={t("header.projects")} bgImage={BgImage} />
      <section id="projects-page">
        <div className="projects-page container-fluid">
          <div className="projects-grid">
            {projects?.map((item) => (
              <div
                key={item.id}
                className="project-card"
                style={{
                  backgroundImage: `url(${
                    item?.thumbnail
                      ? `https://api.umnazmemarliq.az${encodeURI(item.thumbnail)}`
                      : BgImage
                  })`,
                }}
                onClick={() => navigate(`/layiheler/${item.id}`)}
                // onClick={() => navigate(`/layihe-detail`)}
              >
                <div className="overlay">
                  <h3>{item.title.az}</h3>
                  <div className="arrow">
                    <FaArrowRightLong className="" />
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

export default ProjectPage;
