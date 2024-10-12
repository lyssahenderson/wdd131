const menuButton = document.querySelector('#menuButton');
const menuItems = document.querySelector('#menuItems');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('hide');
});

function handleResize() {
    if (window.innerWidth > 1000) {
        menuItems.classList.remove('hide');
    } else {
        menuItems.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize);

handleResize();
const modal = document.querySelector('.viewer');
const modalImage = document.querySelector('.viewer img');
const closeModalButton = document.querySelector('.close-viewer');

galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
        modalImage.src = e.target.src;
        modal.classList.remove('hide');
    });
});

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hide');
});
// Function to generate the modal HTML dynamically
function viewerTemplate(imagePath, altText) {
    return `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}"></img>
      </div>`;
}
  
// Function to handle image click events
function viewHandler(event) {
// Get the element that was clicked on
const clickedElement = event.target;
  
// Only proceed if the clicked element is an image
if (clickedElement.tagName !== 'IMG') return;
  
// Get the src attribute and split it to get the base filename
const imageSrc = clickedElement.getAttribute('src');
const imageSrcParts = imageSrc.split('-');
  
// Construct the full-size image filename
const fullImageSrc = `${imageSrcParts[0]}-full.jpeg`;
  
// Get the alt text of the clicked image
const altText = clickedElement.getAttribute('alt');
  
// Insert the modal viewer into the body
document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, altText));
  
// Add a click listener to the close button to remove the modal
const closeButton = document.querySelector('.close-viewer');
closeButton.addEventListener('click', closeViewer);
}
  
// Function to remove the modal viewer from the DOM
function closeViewer() {
const viewer = document.querySelector('.viewer');
viewer.remove();
}
  
// Add an event listener to the gallery section to handle image clicks
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);  