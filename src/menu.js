import "./styles/menu.css";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.className = "menu-section";
  section.innerHTML = `
    <h2>Our Menu</h2>
    <ul>
      <li>Jollof Rice with Grilled Chicken - ₦2500</li>
      <li>Egusi Soup with Pounded Yam - ₦2000</li>
      <li>Spaghetti Bolognese - ₦2200</li>
      <li>Fried Rice with Beef - ₦2400</li>
      <li>Vegetarian Stir Fry - ₦1800</li>
    </ul>
  `;

  content.appendChild(section);
}
