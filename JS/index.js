//^ Global Variables

var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("nav .nav-links a");
var clickedLinks = document.querySelectorAll(".clickedLinks");
var scrollToTopBtn = document.getElementById("scroll-to-top");
var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");

//& End The Global Variables

//^ The Logic OF The Scroll Spy OF NavBar Links

//? Make The Scroll Spy By Scroll Event

var isClicked = false;
window.addEventListener("scroll", () => {
  if (isClicked) {
    return;
  }
  var currentSection = "";

  sections.forEach((section) => {
    var sectionTop = section.offsetTop - 100;

    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

//? Prevent Scroll Spy When click

preventClickScrollSpy(navLinks);
preventClickScrollSpy(clickedLinks);

//& End The Logic OF NavBar

//^ The Rocket Button Logic

//? Show The Rocket Button When Scrolling

window.addEventListener("scroll", () => {
  if (scrollY >= document.querySelector("footer").offsetTop - 500) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
  } else {
    scrollToTopBtn.classList.add("opacity-0", "invisible");
  }
});

//? Move To The Top OF Page When The Rocket Button Clicked

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//& End The Rocket Button Logic

//^ The Nav And Tags Logic

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //? Remove Active Class From All Buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    //? Add Active Class To The Current Clicked Button
    button.classList.add("active");

    //? Get The Value OF Data Filter Attribute
    var filterValue = button.dataset.filter;

    portfolioItems.forEach((item) => {
      //? Get The Value OF Data Category Attribute
      var itemCategory = item.dataset.category;

      if (filterValue === "all" || filterValue === itemCategory) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

//& End The Nav And Tags Logic

//^ Helpful Functions

//? Prevent Scroll Spy Function, It is used To Prevent Scroll Spy When Clicking On Any Button Make Scroll On Page
function preventClickScrollSpy(Items) {
  Items.forEach((item) => {
    item.addEventListener("click", () => {
      isClicked = true;

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      setTimeout(() => {
        isClicked = false;
      }, 1000);
    });
  });
}

//& End Helpful Functions
