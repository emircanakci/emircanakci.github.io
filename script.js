
/* Day&Night Toggle */
const toggleIcon = document.querySelector('.fa-moon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('fa-sun');
    document.body.classList.toggle('day-mode');
});
/* Day&Night Toggle */


/* Tittle focus */

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Emirhan Canakci";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});

/* Tittle focus */


/* Top Scroll */

gsap.registerPlugin( 
    ScrollTrigger
);
gsap.to("progress", {
    value: 100,
    scrollTrigger: {
    scrub: 0.5,
    },
});

/* Top Scroll */



/* To Top Buton */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTopButton").style.display = "block";
  } else {
    document.getElementById("toTopButton").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}

/* To Top Buton */
