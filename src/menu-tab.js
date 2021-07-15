import rImg1 from './img/1-menu-ramen.jpg';
import rImg2 from './img/2-menu-ramen.png';
import rImg3 from './img/3-menu-ramen.png';
import rImg4 from './img/4-menu-ramen.jpg';
import sImg1 from './img/1-menu-sushi.jpg';
import sImg2 from './img/2-menu-sushi.jpg';
import sImg3 from './img/3-menu-sushi.jpg';
import sImg4 from './img/4-menu-sushi.jpg';
const RAMEN_IMGS = [rImg1, rImg2, rImg3, rImg4];
const SUSHI_IMGS = [sImg1, sImg2, sImg3, sImg4];
function menu() {
  let menuDiv = document.createElement('div');
  let menuRamen = document.createElement('div');
  let menuSushi = document.createElement('div');

  let ramenTitle = document.createElement('h2');
  ramenTitle.innerHTML = 'Ramen';
  menuDiv.appendChild(ramenTitle);
  for (let i = 1; i <= 4; i++) {
    let ramenDiv = document.createElement('div');
    let ramenImg = new Image();
    ramenImg.src = RAMEN_IMGS[i - 1];
    let ramenDescription = document.createElement('p');
    ramenDescription.innerHTML = 'Description ramen' + i;
    ramenDiv.appendChild(ramenImg);
    ramenDiv.appendChild(ramenDescription);
    menuRamen.appendChild(ramenDiv);

    // class adding
    ramenDiv.classList.add('menu__ramen__' + i);
    ramenImg.classList.add('menu__ramen__img');
    ramenDescription.classList.add('menu__ramen__des');
    // end of class adding
  }
  menuDiv.appendChild(menuRamen);

  let sushiTitle = document.createElement('h2');
  sushiTitle.innerHTML = 'Sushi';
  menuDiv.appendChild(sushiTitle);
  for (let i = 1; i <= 4; i++) {
    let sushiDiv = document.createElement('div');
    let sushiImg = new Image();
    sushiImg.src = SUSHI_IMGS[i - 1];
    let sushiDescription = document.createElement('p');
    sushiDescription.innerHTML = 'Description sushi' + i;
    sushiDiv.appendChild(sushiImg);
    sushiDiv.appendChild(sushiDescription);
    menuSushi.appendChild(sushiDiv);
    // class adding
    sushiDiv.classList.add('menu__sushi__' + i);
    sushiImg.classList.add('menu__sushi__img');
    sushiDescription.classList.add('menu__sushi__des');
    // end of class adding
  }
  menuDiv.appendChild(menuSushi);

  // class adding
  menuDiv.classList.add('menu');
  menuRamen.classList.add('menu__ramen');
  menuSushi.classList.add('menu__sushi')
  ramenTitle.classList.add('menu__title');
  sushiTitle.classList.add('menu__title');

  // end of class adding
  return menuDiv;
}

export default menu;