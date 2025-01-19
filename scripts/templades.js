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
                <button onclick="addToCart(${indexMyDessert})" id="dessertBtn" class="orderBtn">
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
                <button onclick="addToCart(${indexMyDrinks})" id="drinksBtn" class="orderBtn">
                    <img class="orderBtnImg" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}

function getNoteTemplateOrderCart(indexMyCart) {
    let selectedCart = cart[indexMyCart]

    return `   <div class="cart">
                    <h3>${selectedCart.courts}</h3>
                    <p>${selectedCart.with}</p>
                    <button onclick="deleteOne()" class="plusBtn">-</button>
                    <span>1</span>
                    <button onclick="addOne()" class="plusBtn">+</button>
                    <p>${selectedCart.price.toFixed(2)} €</p>
                </div>`;
}
