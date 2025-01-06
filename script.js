let  = myMenu [
    {
     "courts": "Pizza Salami",
     "with": "Salami und Käse",
     "price": "8,50 €"
     },  
     {
     "courts": "Pizza Schinken",
     "with": "Schinken und Käse",
     "price": "8,50 €"
     },
     {
     "courts": "Spaghethi Bolognese",
     "with": "Hackfleisch, Gemüse und Sause",
     "price": "9,50 €"
    }
 ];
 
 function renderMyMenu() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';
   
    for (let indexMyMenu = 0; indexMyMenu < myMenu.length; indexMyMenu++) {
       contentRef.innerHTML += getNoteTemplate(indexMyMenu);
    }
}

function getNoteTemplate(indexMyMenu) {
    return `<div class="myMenu">
                <h3>${myMewnu.courts[indexMyMenu]}</h3>
                <p>${myMewnu.with[indexMyMenu]}</p>
                <p>${myMewnu.price[indexMyMenu]}</p>
                <button>
                    <img class="orderbutton" src="./assets/icons/plus.png" alt="zum Warenkorb">
                </button>
            </div>`;
}