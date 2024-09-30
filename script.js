// Array of image URLs
const images = [
  "images/gallery_images/pic0.jpg",
  "images/gallery_images/pic1.jpeg",
  "images/gallery_images/pic2.jpeg",
  "images/gallery_images/pic3.jpeg",
  "images/gallery_images/pic4.jpeg",
  "images/gallery_images/pic5.jpeg",
];

// Function to change the background image
let currentImageIndex = 0;
const heroSection = document.querySelector(".hero-section");

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// Set initial background image
heroSection.style.backgroundImage = `url(${images[0]})`;

// Change image every 5 seconds (5000ms)
setInterval(changeBackgroundImage, 5000);
