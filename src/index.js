import about from "./about-tab.js";

function main(){
  const CONTENT = document.getElementById('content');
  CONTENT.appendChild(about());
}

main();