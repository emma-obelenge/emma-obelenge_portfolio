import "../css/about.css";
// import "../css/coming-soon.css";
import "../css/footer.css";
import "../css/header.css";
import "../css/hero.css";
import "../css/projects.css";
import "../css/responsive.css";
import "../css/resume.css";
import "../css/services.css";
import "../css/theme-switch.css";
import "../css/styles.css";
import themeEvent from "./theme";
import eventListeners from "./eventListeners";

function init() {
  console.log("index.js loaded...");
  themeEvent();
  eventListeners();
  // document.querySelector(".logo").addEventListener("click", loadHome);
  // document.querySelector(".home-btn").addEventListener("click", loadHome);
  // document.querySelector(".menu-btn").addEventListener("click", loadMenu);
  // document.querySelector(".about-btn").addEventListener("click", loadAbout);
  // document.querySelector(".contact-btn").addEventListener("click", loadContact);
  // loadHome(); // Load home page by default
}

window.addEventListener("DOMContentLoaded", init);
