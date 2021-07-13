import myMap from './img/map-contact.png'
function contact(){
  let contactDiv = document.createElement('div');
  let name = document.createElement('p');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let map = document.createElement('div');

  name.innerHTML = "TP's Ramen and sushi";
  address.innerHTML = 'This is an address';
  phone.innerHTML='(443)-111-2222';
  email.innerHTML='tprs@gmail.com';
  map = new Image();
  map.src = myMap;


  contactDiv.appendChild(name);
  contactDiv.appendChild(address);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);
  contactDiv.appendChild(map);
  // class adding
  contactDiv.classList.add('contact');
  name.classList.add('contact__name');
  address.classList.add('contact__address');
  phone.classList.add('contact__phone');
  email.classList.add('contact__email');
  map.classList.add('contact__map');
  
  // end of class adding
  return contactDiv;
}

export default contact;