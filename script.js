
function renderMyMenu() {
   let menuContentRef = document.getElementById('menuContent');
   
   for (let indexMyMenu = 0; indexMyMenu < myMenu.length; indexMyMenu++) {
      menuContentRef.innerHTML += getNoteTemplateMenu(indexMyMenu);
   }
}

function renderMyDessert() {
   let dessertContentRef = document.getElementById('dessertContent');
   
   for (let indexMyDessert = 0; indexMyDessert < myDessert.length; indexMyDessert++) {
      dessertContentRef.innerHTML += getNoteTemplateDessert(indexMyDessert);
   }
}

 function renderMyDrinks() {
   let drinksContentRef = document.getElementById('drinksContent');
   
   for (let indexMyDrinks = 0; indexMyDrinks < myDrinks.length; indexMyDrinks++) {
      drinksContentRef.innerHTML += getNoteTemplateDrinks(indexMyDrinks);
   }
}

function renderMyOrder() {
   let cartContentRef = document.getElementById('orderbasket');

   for (let indexCart = 0; indexCart < cart.length; indexCart++) {
      cartContentRef.innerHTML += getNoteTemplateOrderCart(indexCart);
   }
}


function addToCart(index) {
   // ruft Gericht aus Index auf
   let sellectedDish = myMenu[index];

   cart.push({
      courts: sellectedDish.courts,
      with: sellectedDish.with,
      price: sellectedDish.price,
      amount: 1,
   });

   saveToLocalStorage();

   renderMyOrder();
}

function addToDessertCart(index) {
   // ruft Gericht aus Index auf
   let sellectedDishDessert = myDessert[index];

   cart.push({
      courts: sellectedDishDessert.courts,
      with: sellectedDishDessert.with,
      price: sellectedDishDessert.price,
      amount: 1,
   });

   saveToLocalStorage();

   renderMyOrder();
}

// let sellectedProduct = addToCart();


function saveToLocalStorage() {
   localStorage.setItem("myMenu", JSON.stringify(myMenu));
   localStorage.setItem("myDessert", JSON.stringify(myDessert));
   localStorage.setItem("myDrinks", JSON.stringify(myDrinks));
   localStorage.setItem("cart", JSON.stringify(cart));
}

// Lädt die Daten aus dem Local Storage oder erstellt leere Arrays
function getFromLocalStorage() {
   myMenu = JSON.parse(localStorage.getItem("myMenu"));
   myDessert = JSON.parse(localStorage.getItem("myDessert"));
   myMenu = JSON.parse(localStorage.getItem("myDrinks"));
   cart = JSON.parse(localStorage.getItem("cart"));
}

