import React, { useEffect, useState } from "react";
import "./Style.scss";
import MainBtn from "../MainBtn/MainBtn";
import Project1 from "../../assets/images/home-project3.webp";
import Project2 from "../../assets/images/home-project2.webp";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { apiRequest } from "../../../utils/api";

function HomeProject() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    apiRequest("/projects") // backenddəki endpoint
      .then((res) => {
        if (res && res.data) {
          setProjects(res.data);
          console.log(res.data); // backenddən gələn layihələr
        }
      })
      .catch((err) => {
        console.error("Projects data fetch error:", err);
      });
  }, []);
    // const latestProjects = projects.slice(-2);


  // Son iki layihəni göstəririk
  const latestProjects = projects.slice(-2);
  return (
    <section id="home-projects" className="home-projects container-fluid g-0 ">
      <motion.div>
        <span
          // initial={{ y: 100, opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{
          //   duration: 0.9,
          //   ease: "easeOut",
          //   delay: 0.3,
          // }}
          // viewport={{ once: false }}
          className="head-title"
        >
          Layihələrimiz
        </span>
        <div className="d-flex justify-content-between pt-3">
          <h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{ once: false }}
          >
            Son Layihələrimiz
          </h1>
          <Link to={"layiheler"} className="d-none d-md-block">
            {" "}
            <MainBtn title={"Hamısına bax "} />
          </Link>
        </div>
      </motion.div>
      <div className="projects d-flex flex-column flex-md-row  gap-md-3 gap-md-5 ">
        {latestProjects.map((project) => (
          <motion.div
            key={project._id}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col p-0 project-img"
          >
            <div className="project-overlay">
              <p className="g-0 m-0">{project.title?.az}</p>
              <span>{project.text?.az}</span>
            </div>
            <img
              src={`https://api.umnazmemarliq.az${project.thumbnail}`}
              alt={project.title}
              className="project"
            />
          </motion.div>
        ))}
      
        <Link to={"/layiheler"} className="d-block d-md-none  d-flex ">
          <MainBtn title={"Hamısına bax "} />
        </Link>
      </div>
    </section>
  );
}

export default HomeProject;
