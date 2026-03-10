import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import BgImage from "../../assets/images/HeroSection.webp";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../../../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import MainBtn from "../../Component/MainBtn/MainBtn";

function ProjectDetail() {
    const { id } = useParams();
      const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    // single project
    apiRequest(`/projects/${id}`).then((data) => {
      if (data && data.data) {
        setProject(data.data);
      }
    });
    apiRequest("/projects").then((data) => {
      if (data && data.data) {
        const filtered = data.data.filter((item) => item.id !== id).slice(0, 2);
        setOtherProjects(filtered);
      }
    });
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <>
      <HeroSection title={"Project name"} bgImage={BgImage} />

      <section id="project-detail">
        <div className="project-detail container-fluid g-0 ">
          {/* Thumbnail */}
          <div className="thumbnail">
            <img
              src={`https://api.umnazmemarliq.az${project.thumbnail}`}
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
                  <img src={`https://api.umnazmemarliq.az${img}`} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Content */}
          <div className="projects-content">
            <h3>{project.title_az}</h3>

            <div
              className="project-text"
              dangerouslySetInnerHTML={{ __html: project.text_az }}
            />
          </div>

          {/* Other Projects */}
          <div className="other-projects">
            <div className="head d-flex justify-content-between pb-4">
              <h2 className="m-0" >Digər Layihələr</h2>
              <Link to={"/layiheler"}>
                {" "}
                <MainBtn title={"Hamısına Bax"} />
              </Link>
            </div>

            <div className="projects">
              {project.images?.slice(0, 2).map((img, index) => (
                <div className="project-image" key={index}>
                  <img src={`https://api.umnazmemarliq.az${img}`} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
