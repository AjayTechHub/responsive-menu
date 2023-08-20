
let activeMenuItem = document.querySelector('.main-menu .menu-item.active');
function onMenuItemClick(item, sync) {
  if (activeMenuItem) {
    activeMenuItem.classList.remove('active');
  }
  console.log(item);
  item.classList.add('active');

  activeMenuItem = item;
  if (!sync) {
    const counterpartItem = document.querySelector('.overlay-menu .menu-item[data-choice="' + item.getAttribute('data-choice') + '"]');
    this.onOverlayMenuItemClick(counterpartItem, true);
  }
}

let overlayMenu = document.querySelector('.overlay-menu');
function showOverlayMenu() {
  console.log('show overlay menu');
  if (overlayMenu) {
    overlayMenu.classList.add('show');
  }
}

function hideOverlayMenu() {
  if (overlayMenu) {
    overlayMenu.classList.remove('show');
  }
}

let activeOverlayMenuItem = document.querySelector('.overlay-menu .menu-item.active');
function onOverlayMenuItemClick(item, sync) {
  if (activeOverlayMenuItem) {
    activeOverlayMenuItem.classList.remove('active');
  }
  console.log(item);
  item.classList.add('active');

  activeOverlayMenuItem = item;

  if (!sync) {
    this.hideOverlayMenu();
  }

  const counterpartItem = document.querySelector('.main-menu .menu-item[data-choice="' + item.getAttribute('data-choice') + '"]');
   this.onMenuItemClick(counterpartItem, true);
}

const copyrightYear = document.querySelector('.copyrightYear');
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}
