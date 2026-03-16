import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const langs = ["az", "en", "ru"];

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: "az",
    fallbackLng: "az",
    supportedLngs: langs,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  const currentPath = window.location.pathname;
  if (!currentPath.startsWith(`/${lng}`) && lng !== "az") {
    const newPath = currentPath === "/" ? `/${lng}` : `/${lng}${currentPath}`;
    window.history.replaceState({}, "", newPath);
  }
});

export default i18n;
