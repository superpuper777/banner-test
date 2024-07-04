import { interpolateTemplate } from './utils.js';

export const useTranslations = (strings) => {
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
