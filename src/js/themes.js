const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const btnRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const itemsRef = document.querySelectorAll('.menu__item');
const imagesRef = document.querySelector('img[loading="lazy"]');

btnRef.addEventListener('change', changeTheme);
imagesRef.addEventListener('load', appearItems, { once: true });

function appearItems() {
  itemsRef.forEach(item => {
    item.classList.add('appear');
  });
}

//console.log(localStorage);

function setDefaultTheme() {
  if (localStorage.Theme !== JSON.stringify(Theme.DARK)) {
    setLightTheme();
    setLocalStorageLight();
    btnRef.checked = false;
  } else {
    setDarkTheme();
    setLocalStorageDark();
    btnRef.checked = true;
  }
}

setDefaultTheme();

function changeTheme() {
  if (localStorage.Theme === JSON.stringify(Theme.LIGHT)) {
    setDarkTheme();
    setLocalStorageDark();
  } else if (localStorage.Theme === JSON.stringify(Theme.DARK)) {
    setLightTheme();
    setLocalStorageLight();
  }
}

function setDarkTheme() {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');
}

function setLightTheme() {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
}

function setLocalStorageLight() {
  localStorage.removeItem(Theme);
  localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
}

function setLocalStorageDark() {
  localStorage.removeItem(Theme);
  localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
}
