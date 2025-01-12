let myMenu = [
    {
     "courts": "Pizza Salami",
     "with": "Salami und Käse",
     "price": 8.50
     },  
     {
     "courts": "Pizza Schinken",
     "with": "Schinken und Käse",
     "price": 8.50
     },
     {
     "courts": "Spaghethi Bolognese",
     "with": "Hackfleisch, Gemüse und Sause",
     "price": 9.50
    },
    {
      "courts": "Spaghethi Carbonara",
      "with": "Schinken und Käsesahnesoße",
      "price": 9.50
     },
     {
      "courts": "Dönerteller mit Halloumi",
      "with": "mit Pommes und Hawaiisauce",
      "price": 11.00
     }
 ];
 
//  let cart = [];

//  let menu = document.getElementById('content');
//  myMenu.contentRef = menu {

//    for (let indexMyMenu = 0; indexMyMenu < array.length; indexMyMenu++) {
//       const element = array[indexMyMenu];  
//    }
//  };
 
 function renderMyMenu() {
    let contentRef = document.getElementById('content');
   
    for (let indexMyMenu = 0; indexMyMenu < myMenu.length; indexMyMenu++) {
       contentRef.innerHTML += getNoteTemplateMenu(indexMyMenu);
    }
}

let myDessert = [
    {
     "courts": "Donat",
     "with": "Schoko und Vanillefüllung",
     "price": 5.50
     },  
     {
     "courts": "Käsekunchen",
     "with": "Erdbeer Sahnefüllung",
     "price": 6.50
     },
     {
     "courts": "Vanilleeis",
     "with": "heißen Himmbeeren",
     "price": 5.50
    },
    {
      "courts": "Pfannenkuchen",
      "with": "Erdbeermarmelade",
      "price": 4.50
     }
 ];

 function renderMyDessert() {
    let contentRef = document.getElementById('dessertContent');
   
    for (let indexMyDessert = 0; indexMyDessert < myDessert.length; indexMyDessert++) {
       contentRef.innerHTML += getNoteTemplateDessert(indexMyDessert);
    }
}

let myDrinks = [
    {
     "courts": "Coca Cola zero",
     "with": "whitout Sugar",
     "price": 5.50
     },
     {
      "courts": "Eistee",
      "with": "Pfirsichgeswchmack",
      "price": 5.50
      }, 
     {
     "courts": "Orangensaft",
     "with": "Frischen Orangen",
     "price": 6.50
     },
     {
     "courts": "Kaffee",
     "with": "Milch und Zucker",
     "price": 5.50
    }
 ];

 function renderMyDrinks() {
    let contentRef = document.getElementById('drinksContent');
   
    for (let indexMyDrinks = 0; indexMyDrinks < myDrinks.length; indexMyDrinks++) {
       contentRef.innerHTML += getNoteTemplateDrinks(indexMyDrinks);
    }
}