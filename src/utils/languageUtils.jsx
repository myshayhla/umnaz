// Language utility functions for URL-based language switching

export const SUPPORTED_LANGUAGES = ["az", "en"];
export const DEFAULT_LANGUAGE = "az";

export const getLanguageFromPath = (pathname) => {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (SUPPORTED_LANGUAGES.includes(firstSegment)) {
    return {
      language: firstSegment,
      pathWithoutLang: "/" + segments.slice(1).join("/"),
    };
  }

  return {
    language: DEFAULT_LANGUAGE,
    pathWithoutLang: pathname,
  };
};

export const addLanguageToPath = (path, language) => {
  if (language === DEFAULT_LANGUAGE) {
    return path;
  }

  if (!path || path === "/") {
    return `/${language}`;
  }

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `/${language}/${cleanPath}`;
};

export const removeLanguageFromPath = (path) => {
  const { pathWithoutLang } = getLanguageFromPath(path);
  return pathWithoutLang;
};

export const getCurrentLanguage = (pathname) => {
  const { language } = getLanguageFromPath(pathname);
  return language;
};
