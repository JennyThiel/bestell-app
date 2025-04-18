function getNoteTemplateMenu(indexMyMenu, myMeal, category) {
    let menu = myMeal[indexMyMenu];
   
    return `<div class="food">
                <div>
                    <h3>${menu.courts}</h3>
                    <p>${menu.with}</p>
                    <p>${menu.price.toFixed(2)} €</p>
                </div>
                <button onclick="addToCart(${indexMyMenu}, '${category}')" id="myMenuBtn-${indexMyMenu}" class="orderBtn">
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
    return `<div class="mySum">${total > 0 ? `
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
                </div>`
                : ""}
            </div>`;
}