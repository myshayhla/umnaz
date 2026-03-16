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
      <section
        id="home-projects"
        className="home-projects container-fluid g-0 "
      >
        <motion.div>
          <span className="head-title">Layihələrimiz</span>
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
        <div className="projects row">
          {latestProjects.map((project) => (
            <div className="col-12 col-md-6" key={project._id}>
              <Link to={`/layiheler/${project.id}`}>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="project-img"
                >
                  <div className="project-overlay">
                    <p>{project.title?.az}</p>
                    <span>{project.text?.az}</span>
                  </div>

                  <img
                    src={`https://api.umnazmemarliq.az${project.thumbnail}`}
                    alt={project.title}
                    className="project"
                  />
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }

  export default HomeProject;
