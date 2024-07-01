import './style.css';

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.card__image');
  const icons = document.querySelectorAll('.cross__icon');

  let folder = '';
  let srcset = '';

  [...images, ...icons].forEach(function (img) {
    const src = img.getAttribute('src');
    if (src.includes('f1')) {
      folder = 'f1';
    } else if (src.includes('cross')) {
      folder = 'cross';
    } else if (src.includes('f3')) {
      folder = 'f3';
    }

    if (folder) {
      srcset = `${src.replace('png', '1.5@.svg')} 1.5x, `;
    }
    srcset += `${src.replace('.png', '@2x.png')} 2x, ${src.replace(
      '.png',
      '@3x.png'
    )} 3x`;

    img.setAttribute('srcset', srcset);
  });
});

const languages = ['en', 'fr', 'es', 'de', 'it', 'ru'];

const getLanguage = () => {
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

const loadLanguage = async (lang) => {
  try {
    const response = await fetch(`assets/locales/${lang}.json`);
    const data = await response.json();
    useTranslations(data);
  } catch (error) {
    console.error('Error loading:', error);
  }
};

const interpolateTemplate = (template, variables) => {
  return template.replace(/{{(.*?)}}/g, (match, key) => variables[key.trim()]);
};

const useTranslations = (strings) => {
  const yearlyPrice = '$39.99';
  const perWeekYearlyPrice = '$0.48';
  const perWeekWeeklyPrice = '$6.99';

  document.querySelector('.header__title').innerHTML =
    strings['Get Unlimited <br>Access'];

  const cards = document.querySelectorAll('.card');
  cards[0].querySelector('.card__text').innerHTML =
    strings['Unlimited Art <br>Creation'];
  cards[1].querySelector('.card__text').innerHTML =
    strings['Exclusive <br>Styles'];
  cards[2].querySelector('.card__text').innerHTML =
    strings['Magic Avatars <br>With 20% Off'];

  document.querySelector('.offer').textContent = strings['BEST OFFER'];

  const selectors = document.querySelectorAll('.selector');
  selectors[0].querySelector('.selector__title').textContent =
    strings['YEARLY ACCESS'];
  selectors[0].querySelector('.selector__text').textContent =
    interpolateTemplate(strings['Just {{price}} per year'], {
      price: yearlyPrice,
    });
  selectors[0].querySelector('.selector__price .selector__text').innerHTML =
    interpolateTemplate(strings['{{price}} <br>per week'], {
      price: perWeekYearlyPrice,
    });

  selectors[1].querySelector('.selector__title').textContent =
    strings['WEEKLY ACCESS'];
  selectors[1].querySelector('.selector__text').innerHTML = interpolateTemplate(
    strings['{{price}} <br>per week'],
    {
      price: perWeekWeeklyPrice,
    }
  );

  document.querySelector('.button').textContent = strings['Continue'];
  document.querySelector('.footer__link.terms').textContent =
    strings['Terms of Use'];
  document.querySelector('.footer__link.privacy').textContent =
    strings['Privacy Policy'];
  document.querySelector('.footer__link.restore').textContent =
    strings['Restore'];
};

const language = getLanguage();
loadLanguage(language);
