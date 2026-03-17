import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getCurrentLanguage,
  removeLanguageFromPath,
  addLanguageToPath,
} from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";

const LanguageRedirect = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = getCurrentLanguage(location.pathname);

    const changeLangAndUrl = async () => {
      try {
        await i18n.changeLanguage(currentLang);

        const pathWithoutLang = removeLanguageFromPath(location.pathname);
        const newPath = addLanguageToPath(pathWithoutLang, currentLang);

        if (location.pathname !== newPath) {
          navigate(newPath, { replace: true });
        }
      } catch (err) {
        console.error("Error changing language:", err);
      }
    };

    if (i18n.isInitialized) {
      changeLangAndUrl();
    } else {
      const checkReady = () => {
        if (i18n.isInitialized) changeLangAndUrl();
        else setTimeout(checkReady, 100);
      };
      checkReady();
    }
  }, [location.pathname, i18n, navigate]);

  return children;
};

export default LanguageRedirect;
