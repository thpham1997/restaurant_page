
import about from "./about-tab.js";
import menu from "./menu-tab.js";
import contact from "./contact-tab.js";
import bgImg from "./img/nav-bg.jpg";
import logoIcon from "../src/img/ramen-logo.png";
function navbar() {
  const CONTENT = document.getElementById('content');
  let navBar = document.createElement('div');
  let logo = document.createElement('div');
  let icon = new Image();
  let tabDiv = document.createElement('div');
  let aboutTab = document.createElement('button');
  let menuTab = document.createElement('button');
  let contactTab = document.createElement('button');

  aboutTab.innerHTML = 'ABOUT';
  aboutTab.addEventListener('click', (e) => {
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild(about());
  })
  menuTab.innerHTML = 'MENU';
  menuTab.addEventListener('click', (e) => {
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild(menu());
  })
  contactTab.innerHTML = 'CONTACT';
  contactTab.addEventListener('click', (e) => {
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild(contact());
  })
  // can added img here
  navBar.style.backgroundImage = `url(${bgImg})`;
  icon.src = logoIcon;
  logo.appendChild(icon);
  tabDiv.appendChild(aboutTab);
  tabDiv.appendChild(menuTab);
  tabDiv.appendChild(contactTab);
  navBar.appendChild(logo);
  navBar.appendChild(tabDiv);
  // class adding
  navBar.classList.add('nav');
  logo.classList.add('nav__logo');
  icon.classList.add('nav__logo__icon');
  tabDiv.classList.add('nav__tab');
  aboutTab.classList.add('nav__tab__about');
  menuTab.classList.add('nav__tab__menu');
  contactTab.classList.add('nav__tab__contact');
  // end of class adding

  console.log(bgImg);
  return navBar;
}

export default navbar;