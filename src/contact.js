import "./styles/contact.css";

export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.className = "contact-section";
  section.innerHTML = `
    <h2>Contact Us</h2>
    <p>Email: obeleemmanuel@gmail.com</p>
    <p>Phone: +234 803 098 0657</p>
    <p>Address: 123 Flavor Street, Lagos, Nigeria</p>
  `;

  content.appendChild(section);
}
