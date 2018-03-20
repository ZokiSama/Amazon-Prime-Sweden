$(function(){  

let products = [ // Array med alla produkter
  {name: 'Trust GXT 628', category: 'Elektronik', id: 1, description: 'Some Text', price: 899, picture: './images/hogtalare.jpeg'},
  {name: 'Kef Högtalarpaket E305', category: 'Elektronik', id: 2, description: 'A perfectly balanced, seamlessly integrated high end 5.1 sub/sat system based on KEF’s new 4.25” Uni-Q driver array and a superlative matching subwoofer, the new E305 home theatre system outperforms the competition by filling the room with a spacious, exquisitely detailed and compellingly natural soundscape that captures all the magic of the original performance.', price: 12990, picture: './images/hogtalarevit.jpeg'},
  {name: 'StarWars Cap', category: 'Klader', id: 3, description: 'Snapback based on the Star Wars Series.', price: 119, picture: './images/cap.jpeg'},
  {name: 'Fallout 4 Holliday', category: 'Klader', id: 4, description: '100% Acrylic', price: 339, picture: './images', picture: './images/279680.jpeg'},
  {name: 'NERF Gun', category: 'Leksaker', id: 5, description: 'Förgör de elaka zombierna en efter en med den grymma NERF Zombie Strike Flipfury-blastern.', price: 199, picture: './images/nerfgun.jpeg'},
  {name: 'Samsung Galaxy s9', category: 'Mobiltelefon', id: 6, description: 'Senaste telefonen från Samsung med enastående prestanda', price: 9890, picture: './images/galaxys9.png'},
  {name: 'Yuneec E-GO2', category: 'Sport', id: 7, description: 'Eldriven skateboard', price: 5990, picture: './images/skateboard.jpeg'},
  {name: 'Zelda: History of A Legendary Saga', category: 'Bok', id: 8, description: 'This work chronicles every game of the series, from the first episode to the latest Hyrule Warriors on 3DS, deciphering the whole universe using deep analysis and reflection.', price: 199, picture: './images/zeldabok.jpeg'},
  {name: 'WoW Chronicle Vol.2', category: 'Bok', id: 9, description: "Volume 2 will reveal more sought-after details about the game universe's history and mythology.", price: 299, picture: './images/wowbok.jpeg'},
  {name: "Norse Mythology", category: "Bok", id: 10, description: "The great Norse myths are woven into the fabric of our storytelling - from Tolkien, Alan Garner and Rosemary Sutcliff to Game of Thrones and Marvel Comics.", price: 129, picture: './images/norsebok.jpeg'}
]

var cart = []; // tom array

// funktion som lägger ut produkterna på sidan
function appendList (array, location){
  let template = array.map(function (item, id) {
    return `
      <li class="product">
        <div class="product-content">
          <img src="${item.picture}" alt="produktbild">
          <h4>
            ${item.name} - <span class="category">${item.category}</span>
          </h4>
          <p>${item.description}</p>
        </div>
      <button type="button" id="${item.id}">Köp</button>
    `;
    });
    $(location).html(template); // skriver ut template på angiven plats
}
appendList(products, $('.product-list'));


});