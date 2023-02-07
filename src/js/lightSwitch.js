const icon = document.querySelector('.fas');
const switchDayNight = document.querySelector('.day-night-switch');

if (localStorage.getItem('darkMode') === null) {
  localStorage.setItem('darkMode', 'false');
}
checkDarkModeStatus();

function checkDarkModeStatus() {
  if (localStorage.getItem('darkMode') === 'true') {
    addDarkTheme();
    switchDayNight.checked = true;
  } else {
    removeDarkTheme();
    switchDayNight.checked = false;
  }
}

switchDayNight.addEventListener('change', () => {
  if (switchDayNight.checked) {
    addDarkTheme();
  } else {
    removeDarkTheme();
  }
  localStorage.setItem('darkMode', switchDayNight.checked);
});

function addDarkTheme() {
  document.body.classList.add('dark__theme');
}
function removeDarkTheme() {
  document.body.classList.remove('dark__theme');
}