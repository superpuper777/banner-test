export const selectPlan = () => {
  const handleSelectorClick = (event) => {
    const selectedClass = 'selector__selected';
    const selectors = document.querySelectorAll('.selector');

    selectors.forEach((selector) => selector.classList.remove(selectedClass));
    event.currentTarget.classList.add(selectedClass);
  };

  const selectors = document.querySelectorAll('.selector');
  selectors.forEach((selector) => {
    selector.addEventListener('click', handleSelectorClick);
  });

  const button = document.querySelector('.button');
  const buttonWrapper = document.querySelector('.button__wrapper');

  buttonWrapper.addEventListener('click', function (event) {
    if (event.target === buttonWrapper) {
      button.click();
    }
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedSelector = document.querySelector('.selector__selected');
    const firstSelector = selectors[0];
    const secondSelector = selectors[1];
    if (selectedSelector === firstSelector) {
      window.location.href = 'https://www.apple.com';
    } else if (selectedSelector === secondSelector) {
      window.location.href = 'https://www.google.com';
    }
  });
};
