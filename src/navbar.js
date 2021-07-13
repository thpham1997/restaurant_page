
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
  return navBar;
}

export default navbar;