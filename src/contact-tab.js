import myMap from './img/map-contact.png'
function contact(){
  let contactDiv = document.createElement('div');
  let textDiv = document.createElement('div');
  let embedMapDiv = document.createElement('div');
  let name = document.createElement('p');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let map = document.createElement('div');

  name.innerHTML = "TP's Ramen and sushi";
  address.innerHTML = 'Addres: this is an address';
  phone.innerHTML='Phone: (443)-111-2222';
  email.innerHTML='Email: tprs@gmail.com';
  map = new Image();
  map.src = myMap;

  
  textDiv.appendChild(name);
  textDiv.appendChild(address);
  textDiv.appendChild(phone);
  textDiv.appendChild(email);
  embedMapDiv.appendChild(map);
  contactDiv.appendChild(textDiv);
  contactDiv.appendChild(embedMapDiv);
  // class adding
  contactDiv.classList.add('contact');
  textDiv.classList.add('contact__information');
  embedMapDiv.classList.add('contact__embed');
  name.classList.add('contact__information__name');
  address.classList.add('contact__information__address');
  phone.classList.add('contact__information__phone');
  email.classList.add('contact__information__email');
  map.classList.add('contact__embed__map');
  
  // end of class adding
  return contactDiv;
}

export default contact;