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