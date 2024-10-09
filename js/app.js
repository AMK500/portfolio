const spinnerWrapperEl = document.querySelector('.loading')
setTimeout(() => {
  spinnerWrapperEl.style.display= 'none';
}, 1000);

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});


