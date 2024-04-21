const profileBtn = document.querySelector('.profile-btn-container');
const profileBtnMobile = document.querySelector(
  '.profile-btn-container-mobile'
);
const shareDivDesktop = document.querySelector('.connect-container-desktop');
const shareDivDesktopChild = document.querySelector('.connect-desktop');
const shareDivMobile = document.querySelector('.connect-container-mobile');

profileBtn.addEventListener('click', function () {
  if (window.innerWidth >= '1440') {
    shareDivDesktop.classList.toggle('active-desktop');
  } else shareDivMobile.classList.toggle('active-mobile');
});

profileBtnMobile.addEventListener('click', function () {
  shareDivMobile.classList.toggle('active-mobile');
});
