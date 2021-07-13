import navbar from "./navbar.js";
import about from "./about-tab.js";
import menu from "./menu-tab.js";
import contact from "./contact-tab.js";
function main(){
  const CONTENT = document.getElementById('content');
  CONTENT.appendChild(navbar());
  CONTENT.appendChild(about());
}

main();