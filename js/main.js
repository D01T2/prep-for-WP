// menu button 
function openNav() {
  document.getElementById("menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("menu").style.width = "0%";
}

//fade in and out
const redContainer = document.getElementById('redContainer');
const whiteContainer = document.getElementById('whiteContainer');
let showRed = true;

function toggleContainers() {
  if (showRed) {
    redContainer.style.display = 'none';
    whiteContainer.style.display = 'grid';
  } else {
    redContainer.style.display = 'grid';
    whiteContainer.style.display = 'none';
  }
  showRed = !showRed;
}

setInterval(toggleContainers, 3500); 

//----------------------------
// Get references to the red and white images and the image container
const redImage = document.querySelector('.product-r');
const whiteImage = document.querySelector('.product-w');
const container = document.getElementById('image-container');

// Define the number of copies you want (12 in this case)
const numCopies = 10;
let currentImageIndex = 0;

// Function to add images to the container
function addImagesToContainer() {
  // Clear the container before adding new images
  container.innerHTML = '';

  // Loop to create and append copies
  for (let i = 0; i < numCopies; i++) {
    // Clone the red image and the white image
    const clonedRedImage = redImage.cloneNode(true);
    const clonedWhiteImage = whiteImage.cloneNode(true);

    // Append the cloned images to the container
    container.appendChild(clonedRedImage);
    container.appendChild(clonedWhiteImage);
  }
}

// Function to handle left arrow click
function handleLeftArrowClick() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
  }
  addImagesToContainer();
}

// Function to handle right arrow click
function handleRightArrowClick() {
  if (currentImageIndex < numCopies - 1) {
    currentImageIndex++;
  }
  addImagesToContainer();
}

// Add event listeners to left and right arrow buttons
document.querySelector('.left-arrow').addEventListener('click', handleLeftArrowClick);
document.querySelector('.right-arrow').addEventListener('click', handleRightArrowClick);

// Initialize by adding the initial set of images
addImagesToContainer();
