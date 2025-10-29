import "./styles/home.css";

export default function loadHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.className = "home-section";
  section.innerHTML = `
    <h1>Welcome to Taste Haven</h1>
    <p>Delicious food served with love and tradition.</p>
    <p>Experience the best of local and continental dishes in a cozy environment.</p>
  `;

  content.appendChild(section);
}
