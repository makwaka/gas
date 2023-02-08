 const products = [
    {
        id: 1,
        title: '13kg Supa-gas',
        img: "./images/13kg-supagas.png",
        price: "Ksh. 6000",
    },
      {
        id: 2,
        title: '13kg K-gas',
        img: "./images/13kg-kgas.jpg",
        price: "Ksh. 6000",
    },
      {
        id: 3,
        title: '6kg Hashi gas',
        img: "./images/6kg-hashigas.jpg",
        price: "Ksh. 3000",
    },
      {
        id: 4,
        title: '6kg SEA gas',
        img: "./images/6kg-seagas.jpg",
        price: "Ksh. 3000",
    },
      {
        id: 5,
        title: '13kg SEA gas',
        img: "./images/13kg-seagas.jpg",
        price: "Ksh. 6000",
    },
      {
        id: 6,
        title: '6kg Oilibya Mpishi',
        img: "./images/6kg-mpishigas.jpg",
        price: "Ksh. 3000",
    },
      {
        id: 7,
        title: '13kg Oilibya Mpishi',
        img: "./images/13kg-mpishigas.jpg",
        price: "Ksh. 6000",
    },
      {
        id: 8,
        title: '6kg Total',
        img: "./images/6kg-total.jpg",
        price: "Ksh. 3000",
    },
      {
        id: 9,
        title: '13kg Total',
        img: "./images/13kg-total.png",
        price: "Ksh. 6000",
    },
      {
        id: 10,
        title: '13kg M-Gas',
        img: "./images/13kg-mgas.png",
        price: "Ksh. 6000",
    },
      {
        id: 11,
        title: '6kg Mid-Gas',
        img: "./images/6kg-midgas.jpg",
        price: "Ksh. 3000",
    },
      {
        id: 12,
        title: '6kg handigas',
        img: "./images/6kg-handigas.png",
        price: "Ksh. 3000",
    },
 ];

// select items
 const items = document.querySelector('.items');
const searchInput = document.querySelector('#search-input');

//load items
 window.addEventListener('DOMContentLoaded', () =>{
displayGasItems(products);
 });

 function displayGasItems(gasItems){
let displayProducts = gasItems.map((product) => {
        // console.log(product);
        return `<div class="description">
        <img src=${product.img} alt="gas image" loading="lazy">
        <div id="info">
        <h3>${product.title}</h3>
        <hr id="line">
        <p>${product.price}</p>
        </div>
    </div>`;
    })
    displayProducts = displayProducts.join('');
    items.innerHTML = displayProducts;
 };

const carousel = document.querySelector('.not');

//  Search for products
const searchGas = () =>{
const searchQuery = searchInput.value.toLowerCase();
let search = document.getElementsByClassName('description');
for(let i = 0; i < search.length; i++) {
if(!search[i].innerHTML.toLowerCase().includes(searchQuery)){
  search[i].style.display = 'none';
  // alert('Not Found');
  // return;
}else if(searchQuery === ''){
displayGasItems(products);
}else{
   search[i].style.display = 'list-item';
}
}}

// search for product on enter keypress
searchInput.addEventListener('keypress', (e) => {
if(e.key === 'Enter'){
  e.preventDefault;
  searchGas();
}
});

// search for product on enter keyup
searchInput.addEventListener('keyup', (e) => {
  searchGas();
});
