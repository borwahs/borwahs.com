/* Constants */
const TOGGLE_BUTTON__SELECTOR = '.toggle-theme';
const SUN_ICON__SELECTOR = '.sun';
const MOON_ICON__SELECTOR = '.moon';
const LIGHT_THEME__CLASS_NAME = 'light-theme';
const DARK_THEME__CLASS_NAME = 'dark-theme';

function setupToggleEventListener() {
  const toggleElement = document.querySelector(TOGGLE_BUTTON__SELECTOR);
  const sunElement = document.querySelector(SUN_ICON__SELECTOR);
  const moonElement = document.querySelector(MOON_ICON__SELECTOR);

  if (!toggleElement || !sunElement || !moonElement) {
    return;
  }

  toggleElement.addEventListener('click', function(e) {
    e.preventDefault();

    if (document.body.classList.contains(LIGHT_THEME__CLASS_NAME)) {
      document.body.classList.remove(LIGHT_THEME__CLASS_NAME);
      document.body.classList.add(DARK_THEME__CLASS_NAME);
      sunElement.style.display = 'block';
      moonElement.style.display = 'none';
    } else {
      document.body.classList.remove(DARK_THEME__CLASS_NAME);
      document.body.classList.add(LIGHT_THEME__CLASS_NAME);
      sunElement.style.display = 'none';
      moonElement.style.display = 'block';
    }
  });
}

setupToggleEventListener();
