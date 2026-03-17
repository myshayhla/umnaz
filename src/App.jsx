import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import "./styles/style.scss";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Partners from "./Pages/Partners/Partners";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";
import LanguageRedirect from "./Component/languageRedirect/LanguageRedirect";
import Loader from "./Component/Loader/Loader";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loader) return <Loader />;

  return (
    <BrowserRouter>
      <LanguageRedirect>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/haqqimizda" element={<AboutPage />} />
            <Route path="/terefdaslar" element={<Partners />} />
            <Route path="/elaqe" element={<ContactPage />} />
            <Route path="/xidmetler" element={<ServicesPage />} />
            <Route path="/layiheler" element={<ProjectPage />} />
            <Route path="/layiheler/:id" element={<ProjectDetail />} />

            {/* EN */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/haqqimizda" element={<AboutPage />} />
            <Route path="/en/terefdaslar" element={<Partners />} />
            <Route path="/en/elaqe" element={<ContactPage />} />
            <Route path="/en/xidmetler" element={<ServicesPage />} />
            <Route path="/en/layiheler" element={<ProjectPage />} />
            <Route path="/en/layiheler/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </LanguageRedirect>
    </BrowserRouter>
  );
}

export default App;
