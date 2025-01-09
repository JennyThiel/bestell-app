function getNoteTemplate(indexMyMenu) {
    let menu = myMenu[indexMyMenu]
    contentRef.innerHTML = '';

    return `<div class="myMenu">
                <h3>${menu.courts[indexMyMenu]}</h3>
                <p>${menu.with[indexMyMenu]}</p>
                <p>${menu.price[indexMyMenu]}</p>
                <button>
                    <img class="orderbutton" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}