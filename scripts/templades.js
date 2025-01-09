function getNoteTemplate(indexMyMenu) {
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