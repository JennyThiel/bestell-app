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
   let dessertContentRef = document.getElementById('dessertContent');
   let drinksContentRef = document.getElementById('drinksContent');
   
   for (let indexMyMenu = 0; indexMyMenu < myMenu.length; indexMyMenu++) {
      menuContentRef.innerHTML += getNoteTemplateMenu(indexMyMenu, myMenu);
   }
   for (let indexMyDessert = 0; indexMyDessert < myDessert.length; indexMyDessert++) {
      dessertContentRef.innerHTML += getNoteTemplateMenu(indexMyDessert, myDessert);
   }
   for (let indexMyDrinks = 0; indexMyDrinks < myDrinks.length; indexMyDrinks++) {
      drinksContentRef.innerHTML += getNoteTemplateMenu(indexMyDrinks, myDrinks);
   }
};

function renderMyOrder() {
   let cartContentRef = document.getElementById('orderbasket');
   let cartOverlayRef = document.getElementById('orderbasketOverlay');
   cartContentRef.innerHTML = "";
   cartOverlayRef.innerHTML = "";
   if (!cart.length) return renderEmptyCart(cartContentRef, cartOverlayRef);
   let contentHTML = "";
   let overlayHTML = "";
   for (let index = 0; index < cart.length; index++) {
      let itemHTML = getNoteTemplateOrderCart(index);
      contentHTML += itemHTML;
      overlayHTML += itemHTML;
   }
   cartContentRef.innerHTML = contentHTML;
   cartOverlayRef.innerHTML = overlayHTML;

   renderCartTotal();
}

function renderMySum() {
   let priceContentRef = document.getElementById('mySum');
   let priceContentRefOverlay = document.getElementById('mySumOverlay');
   let total = 0;
   for (let index = 0; index < cart.length; index++) {
       total += cart[index].price * cart[index].amount;
   }
   let deliveryCost = cart.length ? 5.00 : 0;
   priceContentRef.innerHTML = getSumTemplate(total, deliveryCost);
   priceContentRefOverlay.innerHTML = getSumTemplate(total, deliveryCost);
   
   saveToLocalStorage();
}


function placeOrder() {
   cart = [];
   saveToLocalStorage();
   renderMyOrder();
   renderCartTotal();
   showOrderMessage();
}

function addToCart(index, menu) {
   let sellectedDish = myMenu[index];
   let sellectedDishDessert = myDessert[index];
   let sellectedDishDrinks = myDrinks[index];
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

// function addToDessertCart(index) {
//    let sellectedDishDessert = myDessert[index];
//    let existingDishDessert = cart.find(item => item.courts === sellectedDishDessert.courts);
//    if (existingDishDessert) { existingDishDessert.amount += 1;
//    } else { cart.push({
//             courts: sellectedDishDessert.courts,
//             with: sellectedDishDessert.with,
//             price: sellectedDishDessert.price,
//             amount: 1,
//             });
//          }
//    saveToLocalStorage();
//    renderMyOrder();
//    renderMySum(); 
// }

// function addToDrinksCart(index) {
//    let sellectedDishDrinks = myDrinks[index];
//    let existingDishDrinks = cart.find(item => item.courts === sellectedDishDrinks.courts);
//    if (existingDishDrinks) { existingDishDrinks.amount += 1;
//    } else { cart.push({
//             courts: sellectedDishDrinks.courts,
//             with: sellectedDishDrinks.with,
//             price: sellectedDishDrinks.price,
//             amount: 1,
//          });
//    }
//    saveToLocalStorage();
//    renderMyOrder();
//    renderMySum();
// }

showOrderMessage();

function renderEmptyCart(cartRef, overlayRef) {
   let emptyHTML =   `<div class="basket">
                        <img class="shoppingCartIcon" src="./assets/icons/warenkorb.png" alt="WarenkorbIcon">
                        <p class="shoppingCartText">Befülle hier deinen Warenkorb</p>
                     </div>`;
   cartRef.innerHTML = overlayRef.innerHTML = emptyHTML;
}

function renderCartTotal() {
   let total = 0;
   for (let i = 0; i < cart.length; i++) {
       total += cart[i].price * cart[i].amount;
   }
   let totalHTML = `<div class="mySum">
                   </div>`;

   document.getElementById('mySum').innerHTML = document.getElementById('mySumOverlay').innerHTML = totalHTML;
}

function addOne(index) {
   cart[index].amount++;
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


function showOrderMessage() {
   let orderMessage = document.getElementById("addOrder");
   let orderMessageOverlay = document.getElementById("addOrderOverlay");
   if (orderMessage) {
      orderMessage.style.display = "block";
   }
   if (orderMessageOverlay) {
      orderMessageOverlay.style.display = "block";
   } return "Bestellung war Erfolgreich!";
}


function remove() {
   cart = [];
   saveToLocalStorage();
   renderMyOrder();
   renderMySum();

   let orderMessage = document.getElementById("addOrder") || document.createElement("p");
   let orderMessageOverlay = document.getElementById("addOrderOverlay") || document.createElement("p");
   orderMessage.id = "addOrder";
   orderMessageOverlay.id = "addOrderOverlay";
   orderMessage.textContent = "Bestellung war Erfolgreich!";
   orderMessageOverlay.textContent = "Bestellung war Erfolgreich!";
   orderMessage.style.display = "flex";
   orderMessageOverlay.style.display = "flex";

   if (!document.getElementById("addOrder")) {
      document.getElementById("mySum")?.appendChild(orderMessage);
   }
   if (!document.getElementById("addOrderOverlay")) {
      document.getElementById("mySumOverlay")?.appendChild(orderMessageOverlay);
   }
}
function toggleOverlay(show) {
   document.getElementById("overlay").style.display = show ? "flex" : "none";

}

document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("openOverlay").addEventListener("click", () => toggleOverlay(true));
   document.getElementById("closeOverlay")?.addEventListener("click", () => toggleOverlay(false));
});