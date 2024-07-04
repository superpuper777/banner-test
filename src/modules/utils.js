export const interpolateTemplate = (template, variables) => {
  return template.replace(/{{(.*?)}}/g, (match, key) => variables[key.trim()]);
};

export const changeBannerBg = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  let model;

  if (screenWidth == 414 && screenHeight == 736) {
    model = 'iphone8Plus';
  } else if (screenWidth == 375 && screenHeight == 667) {
    model = 'se';
  } else {
    model = 'default';
  }

  const banner = document.querySelector('.banner');

  banner.classList.add(`banner-${model}`);
};
