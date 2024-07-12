export const setImagesIcons = () => {
  const images = document.querySelectorAll('.card__image');
  const icons = document.querySelectorAll('.cross__icon');

  let folder = '';
  let srcset = '';

  [...images, ...icons].forEach((img) => {
    const src = img.getAttribute('src');
    if (src.includes('f1')) {
      folder = 'f1';
    } else if (src.includes('cross')) {
      folder = 'cross';
    } else if (src.includes('f3')) {
      folder = 'f3';
    }

    if (folder) {
      srcset = `${src.replace('.png', '@1.5x.png')} 1.5x, `;
    }
    srcset += `${src.replace('.png', '@2x.png')} 2x, ${src.replace(
      '.png',
      '@3x.png'
    )} 3x`;

    img.setAttribute('srcset', srcset);
  });
};
