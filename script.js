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