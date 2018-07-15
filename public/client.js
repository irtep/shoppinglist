const foodPlace = document.getElementById('allFoods');
const shoppingList = [];
const buttons = document.getElementsByTagName("input");
const chosenFoods = [];
const foodlist = [
{id: 0, nombre: 'Arroz_chaufa', madeOf: [
'arroz', 'cebolla china', 'pollo, carne o chanco', 'huevos', 'kikkoman', 'ginger'
]},
{id: 1, nombre: 'Sopa_de_verduras', madeOf: [
'pollo', 'fideos', 'zanahorias', 'apio', 'ginger', 'papas'
]},
{id: 2, nombre: 'Papa_rellena', madeOf: [
'arroz', 'papas', 'carne o pollo', 'cebolla', 'tomate', 'aceite de oliva'
]},
{id: 3, nombre: 'Tallarines', madeOf: [
'fideos', 'mucho tomatos', 'hamburguesitas'
]},
{id: 4, nombre: 'Caja_de_macarones', madeOf: [
'fideos', 'carne picado', 'huevos', 'leche'
]},
{id: 5, nombre: 'Pure_de_papas', madeOf: [
'arroz', 'papas', 'mantequilla', 'huevos o carne'
]},
{id: 6, nombre: 'Tortilla_de_califlor', madeOf: [
'huevos', 'califlor', 'queso'
]},
{id: 7, nombre: 'Malaquita', madeOf: [
'arroz', 'papas', 'tomate', 'zanahoria', 'carne', 'oregano'
]},
{id: 8, nombre: 'Quiso_de_pollo', madeOf: [
'arroz', 'papas', 'pollo', 'tomate', 'zanahoria'
]},
{id: 9, nombre: 'Lomo_saltado', madeOf: [
'arroz', 'carne', 'cebolla', 'tomate', 'zanahoria', 'aceite', 'papas'
]}
];

function randomGenerator(){
  const number = foodlist.length;
  const result =  1 + Math.floor(Math.random() * number);
  const trueResult = result - 1;
  console.log("from random: ", foodlist[trueResult].nombre);
  return foodlist[trueResult].nombre;
}

function addToList(val){ 
  
  var selected = val;
  console.log("selected before val", selected);
 
  if (val === 'random') {
    console.log("random detected");
    selected = randomGenerator();
    console.log("inside if, selected: ", selected);
  }
  
  console.log("add to list fired, selected: ", selected);
  
  const choseni = document.getElementById('chosen');
  const dublix = false;
  
  // check if chosen already:
  for (let ii = 0; ii < chosenFoods.length; ii++) {
    if (selected === chosenFoods[ii]) {
      dublix = true;
    }  
  }
  
  if (dublix === false) {
    choseni.innerHTML = choseni.innerHTML + selected + '<br>';
  }
  
  let numbero;
  // check what is the number of selected food
  for (let i = 0; i < foodlist.length; i++) {
    if (foodlist[i].nombre === selected) {
      numbero = i;
    }
  }
  
  // add ingredients
  
  for (let i = 0; i < foodlist[numbero].madeOf.length; i++) {
    console.log("checking: ", foodlist[numbero].madeOf[i]);
    let dublicated = false;
    // check for dublicates:
    for (let iz = 0; iz < shoppingList.length; iz++) {
      console.log("to compare: ", shoppingList[iz]);
      if (foodlist[numbero].madeOf[i] === shoppingList[iz]) {
        dublicated = true;
        console.log("dublicated!");
      }
    }
    if (dublicated === false) {
      shoppingList.push(foodlist[numbero].madeOf[i]);
      console.log("adding to list");
    }
  }
  
  // add to html element:
  for (let ic = 0; ic < shoppingList.length; ic++){    
    const listPlace = document.getElementById('toBuy');
    const forShow = shoppingList.join('<br>')
    listPlace.innerHTML = forShow;
    // return dates.split(',').join("<br />")
  }
}

for (let i = 0; i < foodlist.length; i++){
  const currentName = foodlist[i].nombre
  foodPlace.innerHTML = foodPlace.innerHTML + '<input type = "button" value='+currentName+ ' class= "foods" onclick="addToList(this.value)" >' + '</input>'
  + '<br>'; 
}

