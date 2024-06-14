// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Inside script.js
function adjustButtonModelPosition() {
  const lionModel = document.querySelector('model-viewer');
  const buttonModel = document.getElementById('buttonModel');

  // Get bounding rectangle of lion model
  const rect = lionModel.getBoundingClientRect();

  // Calculate new position for button model (example: place it to the right)
  const newPositionX = rect.right + 10; // 10 pixels to the right of the lion model
  const newPositionY = rect.top; // aligned to the top of the lion model

  // Apply new position
  buttonModel.style.left = `${newPositionX}px`;
  buttonModel.style.top = `${newPositionY}px`;
}

// Adjust position on initial load
adjustButtonModelPosition();

// Adjust position on window resize
window.addEventListener('resize', adjustButtonModelPosition);