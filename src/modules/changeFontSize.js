export const changeFontSize = (languageCode) => {
  const settings = {
    fr: { marginRight: '20px', fontSize: '32px' },
    de: {
      marginRight: '20px',
      fontSize: '27px',
      selectorTitle: '12px',
      footerLinkFont: '10px',
    },
    es: { marginRight: '40px', fontSize: '38px' },
    pt: { marginRight: '40px', fontSize: '32px' },
    ja: { fontSize: '34px', footerLinkFont: '11px' },
    default: { fontSize: '42px', selectorTitle: '16px' },
  };

  const {
    marginRight = '',
    fontSize,
    selectorTitle = '',
    footerLinkFont = '',
  } = settings[languageCode] || settings.default;

  document.querySelector('.header__title').style.fontSize = fontSize;

  document.querySelectorAll('.selector__price').forEach((element) => {
    element.style.marginRight = marginRight;
  });

  document.querySelectorAll('.selector__title').forEach((element) => {
    element.style.fontSize = selectorTitle;
  });

  document.querySelectorAll('.footer__link').forEach((element) => {
    element.style.fontSize = footerLinkFont;
  });
};
