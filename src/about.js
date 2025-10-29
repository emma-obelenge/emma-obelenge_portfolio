import "./styles/about.css";

export default function loadAbout() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const section = document.createElement("section");
  section.className = "about-section";
  section.innerHTML = `
    <h2>About Us</h2>
    <p>
      Established in 2025, Taste Haven is a family-owned restaurant dedicated to blending cherished family recipes with innovative culinary techniques. Our journey began with a passion for sharing authentic flavors and creating a welcoming space for our community.
    </p>
    <p>
      At Taste Haven, we believe that great food brings people together. Our chefs use only the freshest, locally sourced ingredients to craft dishes that celebrate both tradition and creativity. From our signature entrees to our handcrafted desserts, every meal is prepared with care and attention to detail.
    </p>
    <p>
      Our mission is to provide unforgettable dining experiences through exceptional cuisine, warm hospitality, and a comfortable atmosphere. Whether you're joining us for a family gathering, a special occasion, or a casual meal, we strive to make every visit memorable.
    </p>
    <p>
      Thank you for choosing Taste Haven. We look forward to serving you and becoming your favorite destination for delicious food and genuine hospitality.
    </p>
  `;

  content.appendChild(section);
}
