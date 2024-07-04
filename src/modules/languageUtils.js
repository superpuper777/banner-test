const languages = ['en', 'fr', 'es', 'de', 'pt', 'ja'];

export const getLanguage = () => {
  const urlParams = new URLSearchParams(window.location.search);
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
