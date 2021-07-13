import about from "./about-tab.js";
import menu from "./menu-tab.js";
function main(){
  const CONTENT = document.getElementById('content');
  CONTENT.appendChild(menu());
}

main();