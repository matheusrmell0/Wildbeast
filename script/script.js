// Debounce do Lodash
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Scroll
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
  target.forEach(function (item) {
    if (windowTop > item.offsetTop) {
      item.classList.add(animationClass);
    } else {
      item.classList.remove(animationClass);
    }
  });
}
animeScroll();

if(target.length){
window.addEventListener("scroll", debounce(animeScroll, 30));
}
