import './style.css';
import { setImagesIcons } from './modules/setImagesIcons.js';
import { selectPlan } from './modules/selectPlan.js';
import { changeFontSize } from './modules/changeFontSize.js';
import { getLanguage, changeLanguage } from './modules/languageUtils.js';
import { interpolateTemplate } from './modules/utils.js';
import { useTranslations } from './modules/useTranslations.js';

document.addEventListener('DOMContentLoaded', function () {
  setImagesIcons();
  selectPlan();
});

const language = getLanguage();

const urlParams = new URLSearchParams(window.location.search);
if (!urlParams.has('lang')) {
  urlParams.set('lang', 'en');
  const newUrl = `${window.location.pathname}?${urlParams.toString()}${
    window.location.hash
  }`;
  window.history.replaceState({}, '', newUrl);
}

changeLanguage(urlParams.get('lang'));
changeFontSize(urlParams.get('lang'));

const loadLanguage = async (lang) => {
  try {
    const response = await fetch(`assets/locales/${lang}.json`);
    const data = await response.json();
    useTranslations(data);
  } catch (error) {
    console.error('Error loading:', error);
  }
};

loadLanguage(language);
