export default function eventListeners() {
  // Contact Me Toggle btn event implementation
  const sayHelloBtn = document.querySelector(".contact-content > button");
  const contactForm = document.querySelector(".contact-form");
  const overlay = document.querySelector("#overlay");
  const closeBtn = document.querySelector(".close-button");

  sayHelloBtn.addEventListener("click", () => {
    contactForm.style.display = "block";
    overlay.style.display = "block";
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    contactForm.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    contactForm.style.display = "none";
  });

  // Logo click link implementation
  // document.querySelector(".logo").addEventListener("click", () => {
  //   window.location.href = "index.html";
  // });

  // added click function support for lets chat nav button
  const letsChatNavBtn = document.querySelector("#contact-nav-btn");
  letsChatNavBtn.addEventListener("click", () => {
    window.location.href = "#contact";
  });

  //handling projects click events
  const link = document.createElement("a");
  link.style.display = "none";
  link.target = "_blank";

  document
    .querySelector("#project-web-design")
    .addEventListener("click", () => {
      link.href = "https://emma-obelenge.github.io/emma-obelenge_portfolio/";
      link.click();
    });

  document.querySelector("#project-ecommerce").addEventListener("click", () => {
    link.href = "./coming-soon.html";
    link.click();
  });

  document
    .querySelector("#project-graphics-design")
    .addEventListener("click", () => {
      link.href = "./coming-soon.html";
      link.click();
    });

  document
    .querySelector("#project-it-support")
    .addEventListener("click", () => {
      link.href = "./coming-soon.html";
      link.click();
    });

  document
    .querySelector("#project-calculator")
    .addEventListener("click", () => {
      link.href = "https://emma-obelenge.github.io/odin_calculator_project/";
      link.click();
    });

  document.querySelector("#project-coding").addEventListener("click", () => {
    link.href = "https://github.com/emma-obelenge?tab=repositories";
    link.click();
  });
}
