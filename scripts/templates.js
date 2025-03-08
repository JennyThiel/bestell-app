function getNoteTemplateMenu(indexMyMenu) {
    let menu = myMenu[indexMyMenu];
   

    return `<div class="food">
                <div>
                    <h3>${menu.courts}</h3>
                    <p>${menu.with}</p>
                    <p>${menu.price.toFixed(2)} €</p>
                </div>
                <button onclick="addToCart(${indexMyMenu})" id="myMenuBtn-${indexMyMenu}" class="orderBtn">
                    <img class="orderBtnImg" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}

function getNoteTemplateDessert(indexMyDessert) {
    let dessert = myDessert[indexMyDessert]

    return `<div class="food">
                <div>
                    <h3>${dessert.courts}</h3>
                    <p>${dessert.with}</p>
                    <p>${dessert.price.toFixed(2)} €</p>
                </div>
                <button onclick="addToDessertCart(${indexMyDessert})" id="dessertBtn-${indexMyDessert}" class="orderBtn">
                    <img class="orderBtnImg" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}

function getNoteTemplateDrinks(indexMyDrinks) {
    let drinks = myDrinks[indexMyDrinks]

    return `<div class="food">
                <div>
                    <h3>${drinks.courts}</h3>
                    <p>${drinks.with}</p>
                    <p>${drinks.price.toFixed(2)} €</p>
                </div>    
                <button onclick="addToDrinksCart(${indexMyDrinks})" id="drinksBtn${indexMyDrinks}" class="orderBtn">
                    <img class="orderBtnImg" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}

function getNoteTemplateOrderCart(indexMyCart) {
    let selectedCart = cart[indexMyCart];

    return `<div class="sum">
                <h3>${selectedCart.courts}</h3>
                <p>${selectedCart.with}</p>
                <div class="orderRow">
                    <div>
                        <button onclick="deleteOne(${indexMyCart})" class="plusBtn">-</button>
                        <span>${selectedCart.amount}</span>
                        <button onclick="addOne(${indexMyCart})" class="plusBtn">+</button>
                    </div>
                    <p class="bold">${(selectedCart.price * selectedCart.amount).toFixed(2)} €</p>
                </div>    
            </div>`;
}

function getSumTemplate(total, deliveryCost) {
    return `<div class="mySum">
                ${total > 0 ? `
                <div class="deliveryPrice">
                    <p>Lieferkosten:</p>
                    <p>${deliveryCost.toFixed(2)} €</p>
                </div>
                <div class="deliveryPrice">
                     <p class="bold">Gesamtbetrag:</p>
                    <p class="bold">${(total + deliveryCost).toFixed(2)} €</p>
                </div>
                <div class="myCartBtn">
                    <button class="cartBtn" onclick="remove()" onclick="removeOverlay()">Bestellen</button>
                    <p class="addOrderBtn" id="addOrder">Bestellung war Erfolgreich!</p>
                </div>` 
                : ""}
            </div>`;
}

function renderCartTotal() {
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].amount;
    }

    let deliveryCost = 5.00;
    let grandTotal = total + deliveryCost;
    
    let totalHTML = `<div class="mySum">
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
                            <p class="addOrderBtn" id="addOrder">Bestellung war Erfolgreich!</p>
                         </div>
                      </div>`;

    document.getElementById('mySum').innerHTML = document.getElementById('mySumOverlay').innerHTML = totalHTML;
}
