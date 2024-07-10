const languages = ['en', 'fr', 'es', 'de', 'pt', 'ja'];
const urlParams = new URLSearchParams(window.location.search);

export const setLanguageInURL = () => {
  if (!urlParams.has('lang')) {
    const systemLang = navigator.language.slice(0, 2);
    const lang = languages.includes(systemLang) ? systemLang : 'en';
    urlParams.set('lang', lang);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}${
      window.location.hash
    }`;
    window.history.replaceState({}, '', newUrl);
  }
};

export const getLanguage = () => {
  const lang = urlParams.get('lang');
  if (lang && languages.includes(lang)) {
    return lang;
  }
  const systemLang = navigator.language.slice(0, 2);
  if (languages.includes(systemLang)) {
    return systemLang;
  }
  return 'en';
};

export const changeLanguage = (lang) => {
  document.documentElement.lang = lang;
};
