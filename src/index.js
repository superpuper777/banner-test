import './style.css';
import { setImagesIcons } from './modules/setImagesIcons.js';
import { selectPlan } from './modules/selectPlan.js';
import { changeFontSize } from './modules/changeFontSize.js';
import {
  setLanguageInURL,
  getLanguage,
  changeLanguage,
} from './modules/languageUtils.js';
import { useTranslations } from './modules/useTranslations.js';

document.addEventListener('DOMContentLoaded', async function () {
  await import('./modules/utils.js').then(({ changeBannerBg }) => {
    changeBannerBg();
  });
  setImagesIcons();
  selectPlan();
});

setLanguageInURL();
const language = getLanguage();

changeLanguage(language);
changeFontSize(language);

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
