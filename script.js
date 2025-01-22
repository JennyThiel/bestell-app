
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
    cartContentRef.innerHTML = "";

   for (let indexCart = 0; indexCart < cart.length; indexCart++) {
      cartContentRef.innerHTML += getNoteTemplateOrderCart(indexCart);
   }
}

function addToCart(index) {
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

function renderMySum() {
   let priceContentRef = document.getElementById('MySum');
   priceContentRef.innerHTML = "";


}

function addToDrinksCart(index) {
   let sellectedDishDrinks = myDrinks[index];

   cart.push({
      courts: sellectedDishDrinks.courts,
      with: sellectedDishDrinks.with,
      price: sellectedDishDrinks.price,
      amount: 1,
   });

   saveToLocalStorage();
   renderMyOrder();
}

function deleteOne(index) {
   if (cart[index].amount > 1) {
      cart[index].amount--;
   } else {
      cart.splice(index, 1);
   }

   saveToLocalStorage();
   renderMyOrder();
}

function addOne(index) {
   cart[index].amount++;
   saveToLocalStorage();
   renderMyOrder();
}

function calculatePrice(price) {
   
}

function saveToLocalStorage() {
   localStorage.setItem("myMenu", JSON.stringify(myMenu));
   localStorage.setItem("myDessert", JSON.stringify(myDessert));
   localStorage.setItem("myDrinks", JSON.stringify(myDrinks));
   localStorage.setItem("cart", JSON.stringify(cart));
}

// Lädt die Daten aus dem Local Storage oder erstellt leere Arrays
function getFromLocalStorage() {
   myMenu = JSON.parse(localStorage.getItem("myMenu")) || [];
   myDessert = JSON.parse(localStorage.getItem("myDessert")) || [];
   myDrinks = JSON.parse(localStorage.getItem("myDrinks")) || [];
   cart = JSON.parse(localStorage.getItem("cart")) || [];
}