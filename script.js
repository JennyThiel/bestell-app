
 function renderMyMenu() {
    let contentRef = document.getElementById('content');
   
    for (let indexMyMenu = 0; indexMyMenu < myMenu.length; indexMyMenu++) {
       contentRef.innerHTML += getNoteTemplateMenu(indexMyMenu);
    }
}

 function renderMyDessert() {
    let contentRef = document.getElementById('dessertContent');
   
    for (let indexMyDessert = 0; indexMyDessert < myDessert.length; indexMyDessert++) {
       contentRef.innerHTML += getNoteTemplateDessert(indexMyDessert);
    }
}

 function renderMyDrinks() {
    let contentRef = document.getElementById('drinksContent');
   
    for (let indexMyDrinks = 0; indexMyDrinks < myDrinks.length; indexMyDrinks++) {
       contentRef.innerHTML += getNoteTemplateDrinks(indexMyDrinks);
    }
}