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
   } if (cart.length === 0) {
      cartContentRef.innerHTML = 
         `<div class="basket">
            <img class="shoppingCartIcon" src="./assets/icons/warenkorb.png" alt="WarenkorbIcon">
            <p class="shoppingCartText">Befülle hier deinen Warenkorb</p>
         </div>`;
      return;
  } 
}

function renderMySum() {
   let priceContentRef = document.getElementById('mySum');
   priceContentRef.innerHTML = "";

   if (cart.length === 0) {
       priceContentRef.innerHTML = 
           `<div class="mySum">
               
           </div>`;
       return;
   }

   let total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
   let deliveryCost = 5.00;

   priceContentRef.innerHTML = 
       `<div class="mySum">
           <div class="deliveryPrice">
               <p>Lieferkosten:</p>
               <p>${deliveryCost.toFixed(2)} €</p>
           </div>
           <div class="deliveryPrice">
               <p class="bold">Gesamtbetrag:</p>
               <p class="bold">${(total + deliveryCost).toFixed(2)} €</p>
           </div>
           <div class="myCartBtn">
           <button class="cartBtn" onclick="document.getElementById('addOrder').innerHTML = remove()">Bestellen</button>
           <p id="addOrder"></p>
           <!-- <button class="cartBtn" onclick="addOrder()">Bestellen</button> -->
           </div>
       </div>`;
   saveToLocalStorage();
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
   renderMySum(); 
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
   renderMySum(); 
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
   renderMySum();
}

function deleteOne(index) {
   if (cart[index].amount > 1) {
      cart[index].amount--;
   } else { cart.splice(index, 1);
   }
   saveToLocalStorage();
   renderMyOrder();
   renderMySum();
}

function addOne(index) {
   cart[index].amount++;
   saveToLocalStorage();
   renderMyOrder();
   renderMySum();
}

function remove() {
  
   return "Testbestellung war erfolgreich!";
}

function showOrderButton() {

}

function toggleOrderButton(){
   document.getElementById("respBtn").classList.toggle('responsiveOrderBtn')

}