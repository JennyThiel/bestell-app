function getNoteTemplateMenu(indexMyMenu) {
    let menu = myMenu[indexMyMenu]

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
 
    return `<div class="cart">
                <h3>${selectedCart.courts}</h3>
                <p>${selectedCart.with}</p>
                <div class="orderRow">
                    <div>
                        <button onclick="deleteOne(${indexMyCart})" class="plusBtn">-</button>
                        <span>${selectedCart.amount}</span>
                        <button onclick="addOne(${indexMyCart})" class="plusBtn">+</button>
                    </div>
                    <p class="bold r16">${(selectedCart.price * selectedCart.amount).toFixed(2)} €</p>
                </div>    
            </div>`;
 }

 function getNoteTemplateOrderPrice(indexPrice) {
    let orderPrice = price[indexPrice]

    return `<div class="Sum">
                <div class="deliveryPrice">
                    <p>Lieferkosten:</p>
                    <p>5,00 €</p>
                </div>
                <div class="deliveryPrice">
                    <p class="bold">Gesamtbetrag:</p>
                    <p class="bold">${orderPrice + selectedCart.amount.toFixed(2)} €</p>
                </div>
            </div>`;
 }
 