
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

function renderMySum() {
   let priceContentRef = document.getElementById('MySum');
   priceContentRef.innerHTML = "";

   for (let indexPrice = 0; indexPrice < array.length; indexPrice++) {
      priceContentRef.innerHTML += getNoteTemplateOrderPrice(indexPrice);
   }
}

function addToCart(index) {
   let sellectedDish = myMenu[index];
   let existingDish = cart.find(item => item.courts === sellectedDish.courts);
   if (existingDish) { existingDish.amount += 1;
   } else { cart.push({
      courts: sellectedDish.courts,
      with: sellectedDish.with,
      price: sellectedDish.price,
      amount: 1,
      });
   }
   saveToLocalStorage();
   renderMyOrder();
}

function addToDessertCart(index) {
   let sellectedDishDessert = myDessert[index];
   let existingDishDessert = cart.find(item => item.courts === sellectedDishDessert.courts);
   if (existingDishDessert) { existingDishDessert.amount += 1;
   } else { cart.push({
      courts: sellectedDishDessert.courts,
      with: sellectedDishDessert.with,
      price: sellectedDishDessert.price,
      amount: 1,
      });
   }
   saveToLocalStorage();
   renderMyOrder();
}

function addToDrinksCart(index) {
   let sellectedDishDrinks = myDrinks[index];
   let existingDishDrinks = cart.find(item => item.courts === sellectedDishDrinks.courts);
   if (existingDishDrinks) { existingDishDrinks.amount += 1;
   } else { cart.push({
         courts: sellectedDishDrinks.courts,
         with: sellectedDishDrinks.with,
         price: sellectedDishDrinks.price,
         amount: 1,
      });
   }
   saveToLocalStorage();
   renderMyOrder();
}

function deleteOne(index) {
   if (cart[index].amount > 1) { cart[index].amount--;
   } else { cart.splice(index, 1);
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

function getFromLocalStorage() {
   myMenu = JSON.parse(localStorage.getItem("myMenu")) || [];
   myDessert = JSON.parse(localStorage.getItem("myDessert")) || [];
   myDrinks = JSON.parse(localStorage.getItem("myDrinks")) || [];
   cart = JSON.parse(localStorage.getItem("cart")) || [];
}