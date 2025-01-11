function getNoteTemplateMenu(indexMyMenu) {
    let menu = myMenu[indexMyMenu]

    return `<div class="myMenu">
                <h3>${menu.courts}</h3>
                <p>${menu.with}</p>
                <p>${menu.price}</p>
                <button>
                    <img class="orderbutton" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}

function getNoteTemplateDessert(indexMyDessert) {
    let dessert = myDessert[indexMyDessert]

    return `<div class="myDessert">
                <h3>${dessert.courts}</h3>
                <p>${dessert.with}</p>
                <p>${dessert.price}</p>
                <button>
                    <img class="orderbutton" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}

function getNoteTemplateDrinks(indexMyDrinks) {
    let drinks = myDrinks[indexMyDrinks]

    return `<div class="myDrinks">
                <h3>${drinks.courts}</h3>
                <p>${drinks.with}</p>
                <p>${drinks.price}</p>
                <button>
                    <img class="orderbutton" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}
