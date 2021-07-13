
import about from "./about-tab.js";
import menu from "./menu-tab.js";
import contact from "./contact-tab.js";

function navbar() {
  const CONTENT = document.getElementById('content');
  let navBar = document.createElement('ul');
  let aboutTab = document.createElement('li');
  let menuTab = document.createElement('li');
  let contactTab = document.createElement('li');

  aboutTab.innerHTML = 'ABOUT';
  aboutTab.addEventListener('click', (e)=>{
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild(about());
  })
  menuTab.innerHTML = 'MENU';
  menuTab.addEventListener('click', (e)=>{
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild(menu());
  })
  contactTab.innerHTML = 'CONTACT';
  contactTab.addEventListener('click', (e)=>{
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild(contact());
  })

  navBar.appendChild(aboutTab);
  navBar.appendChild(menuTab);
  navBar.appendChild(contactTab);

  // class adding
  navBar.classList.add('nav');
  aboutTab.classList.add('nav__about');
  menuTab.classList.add('nav__menu');
  contactTab.classList.add('nav__contact');
  // end of class adding
  return navBar;
}

export default navbar;