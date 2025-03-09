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

// function renderMyMenu() {
//    let menuContentRef = document.getElementById('menuContent');
   
//    for (let indexMyMenu = 0; indexMyMenu < myMenu.length; indexMyMenu++) {
//       menuContentRef.innerHTML += getNoteTemplateMenu(indexMyMenu);
//    }
// }

// function renderMyDessert() {
//    let dessertContentRef = document.getElementById('dessertContent');
   
//    for (let indexMyDessert = 0; indexMyDessert < myDessert.length; indexMyDessert++) {
//       dessertContentRef.innerHTML += getNoteTemplateDessert(indexMyDessert);
//    }
// }

//  function renderMyDrinks() {
//    let drinksContentRef = document.getElementById('drinksContent');
   
//    for (let indexMyDrinks = 0; indexMyDrinks < myDrinks.length; indexMyDrinks++) {
//       drinksContentRef.innerHTML += getNoteTemplateDrinks(indexMyDrinks);
//    }
// }

function renderMyMenu(menuContent, dessertContent, drinksContent) {
   let menuContentRef = document.getElementById('menuContent');
   let dessertContentRef = document.getElementById('dessertContent');
   let drinksContentRef = document.getElementById('drinksContent');
   menuContentRef.innerHTML = menuContent
   dessertContentRef.innerHTML = dessertContent
   drinksContentRef.innerHTML = drinksContent
   for (let indexMyMenu = 0; indexMyMenu < myMenu.length; indexMyMenu++) {
      menuContentRef.innerHTML += getNoteTemplateMenu(indexMyMenu);
   }
   for (let indexMyDessert = 0; indexMyDessert < myDessert.length; indexMyDessert++) {
      dessertContentRef.innerHTML += getNoteTemplateDessert(indexMyDessert);
   }
   for (let indexMyDrinks = 0; indexMyDrinks < myDrinks.length; indexMyDrinks++) {
      drinksContentRef.innerHTML += getNoteTemplateDrinks(indexMyDrinks);
   }
};

function renderMyOrder() {
   let cartContentRef = document.getElementById('orderbasket');
   let cartOverlayRef = document.getElementById('orderbasketOverlay');
   cartContentRef.innerHTML = cartOverlayRef.innerHTML = "";
   
   if (!cart.length) return renderEmptyCart(cartContentRef, cartOverlayRef);
   
   cart.forEach((_, index) => {
      let itemHTML = getNoteTemplateOrderCart(index);
      cartContentRef.innerHTML += itemHTML;
      cartOverlayRef.innerHTML += itemHTML;
   });

   renderCartTotal();
}

function showOrderMessage() {
   let orderMessage = document.getElementById("addOrder");
   if (orderMessage) {
      orderMessage.style.display = "block";
   }
}

function placeOrder() {
   cart = [];
   saveToLocalStorage();
   renderMyOrder();
   renderCartTotal();
   showOrderMessage();
}

showOrderMessage();

function renderEmptyCart(cartRef, overlayRef) {
   let emptyHTML =   `<div class="basket">
                        <img class="shoppingCartIcon" src="./assets/icons/warenkorb.png" alt="WarenkorbIcon">
                        <p class="shoppingCartText">Befülle hier deinen Warenkorb</p>
                     </div>`;
   cartRef.innerHTML = overlayRef.innerHTML = emptyHTML;
}

function renderCartTotal() {
   let total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
   let deliveryCost = 5.00, grandTotal = total + deliveryCost;
   let totalHTML =   `<div class="mySum">
                        <div class="deliveryPrice">
                           <p>Lieferkosten:</p>
                           <p>${deliveryCost.toFixed(2)} €</p>
                        </div>
                        <div class="deliveryPrice">
                           <p class="bold">Gesamtbetrag:</p>
                           <p class="bold">${grandTotal.toFixed(2)} €</p>
                        </div>
                        <div class="myCartBtn">
                           <button class="cartBtn" onclick="placeOrder()">Bestellen</button>
                           <p class="addOrderBtn" id="addOrder">Testbestellung war Erfolgreich!</p>
                        </div>
                     </div>`;
   document.getElementById('mySum').innerHTML = document.getElementById('mySumOverlay').innerHTML = totalHTML;
}

function renderMySum() {
   let priceContentRef = document.getElementById('mySum');
   let priceContentRefOverlay = document.getElementById('mySumOverlay');
   let total = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
   let deliveryCost = cart.length ? 5.00 : 0;

   priceContentRef.innerHTML = getSumTemplate(total, deliveryCost);
   priceContentRefOverlay.innerHTML = getSumTemplate(total, deliveryCost);
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
   cart = [];
   saveToLocalStorage();
   renderMyOrder();
   renderMySum();

   let orderMessage = document.getElementById("addOrder") || document.createElement("p");
   orderMessage.id = "addOrder";
   orderMessage.className = "addOrderBtn";
   orderMessage.textContent = "Testbestellung war Erfolgreich!";
   orderMessage.style.display = "flex";

   if (!document.getElementById("addOrder")) {
      document.getElementById("mySum")?.appendChild(orderMessage);
   }
}

function removeOverlay() {
   cart = [];
   saveToLocalStorage();
   renderMyOrder();
   renderMySum();

   let orderMessage = document.getElementById("addOrderOverlay") || document.createElement("p");
   orderMessage.id = "addOrderOverlay";
   orderMessage.className = "addOrderBtn";
   orderMessage.textContent = "Testbestellung war Erfolgreich!";
   orderMessage.style.display = "flex";

   if (!document.getElementById("addOrderOverlay")) {
      document.getElementById("mySumOverlay")?.appendChild(orderMessage);
   }
}

document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("openOverlay").addEventListener("click", showOverlay);
   document.getElementById("closeOverlay")?.addEventListener("click", hideOverlay);
});

function showOverlay() {
   document.getElementById("overlay").style.display = "flex"; 
}

function hideOverlay() {
   document.getElementById("overlay").style.display = "none";
}