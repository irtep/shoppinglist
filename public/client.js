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
{id: 4, nombre: 'Caja_de_macarrones', madeOf: [
'fideos', 'carne picado', 'huevos', 'leche'
]},
{id: 5, nombre: 'Pure_de_papas', madeOf: [
'arroz', 'papas', 'mantequilla', 'huevos o carne'
]},
{id: 6, nombre: 'Tortilla_de_coliflor', madeOf: [
'huevos', 'califlor', 'queso'
]},
{id: 7, nombre: 'Malaquita', madeOf: [
'arroz', 'papas', 'tomate', 'zanahoria', 'carne', 'oregano'
]},
{id: 8, nombre: 'Guiso_de_pollo', madeOf: [
'arroz', 'papas', 'pollo', 'tomate', 'zanahoria'
]},
{id: 9, nombre: 'Lomo_saltado', madeOf: [
'arroz', 'carne', 'cebolla', 'tomate', 'zanahoria', 'aceite', 'papas'
]},
{id: 10, nombre: 'Cau_cau', madeOf: [
'arroz', 'zanahoria', 'mint', 'papas', 'aji amarillo', 'cebolla', 'pollo', 'alverjita'
]},
{id: 11, nombre: 'Bistek_a_lo_pobre', madeOf: [
'arroz', 'carne', 'platano', 'huevo', 'papas fritas'
]},
{id: 12, nombre: 'Arroz_a_la_cubana', madeOf: [
'arroz', 'platano', 'papas fritas', 'huevo'
]},
{id: 13, nombre: 'Sopa_de_alverjitas', madeOf: [
'lata de sopa de alverjitas'
]},
{id: 14, nombre: 'Lihamureke', madeOf: [
'harina de korppu', 'carne picado', 'huevo'
]},
{id: 15, nombre: 'Saltado_de_atun', madeOf: [
'atun John West', 'cebolla y zanahoria', 'tomate', 'arroz', 'limon', 'papas fritas (opcional)'
]},
{id: 16, nombre: 'Pollo_la_brasa', madeOf: [
'pollo la brasa de minimani', 'arroz', 'alverjitas', 'cualquiera ensalada'
]},
{id: 17, nombre: 'Lentejitas', madeOf: [
'lentejas', 'arroz', 'cebolla', 'huevo'
]}
];

function randomGenerator(){
  const number = foodlist.length;
  const result =  1 + Math.floor(Math.random() * number);
  const trueResult = result - 1;
  return foodlist[trueResult].nombre;
}

function addToList(val){ 
  
  var selected = val;
  let randomActivated = false;
 
  if (val === 'random') {
    randomActivated = true;
    selected = randomGenerator();
  }
  
  const choseni = document.getElementById('chosen');
  let dublix = false;
  
  // check if chosen already:
  console.log("choseni length: ", chosenFoods.length);
  for (let ii = 0; ii < chosenFoods.length; ii++) {
    console.log("dub check. comparing: ", chosenFoods[ii], " to ", selected);
    if (selected === chosenFoods[ii]) {
      console.log("already chosen");
      dublix = true;
    }  
  }
 
  if (dublix === false) {
    choseni.innerHTML = choseni.innerHTML + selected + '<br>';
    chosenFoods.push(selected);
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
    let dublicated = false;
    // check for dublicates:
    for (let iz = 0; iz < shoppingList.length; iz++) {
      if (foodlist[numbero].madeOf[i] === shoppingList[iz]) {
        dublicated = true;
      }
    }
    if (dublicated === false) {
      shoppingList.push(foodlist[numbero].madeOf[i]);
    }
  }
  
  // add to html element:
  for (let ic = 0; ic < shoppingList.length; ic++){    
    const listPlace = document.getElementById('toBuy');
    const forShow = shoppingList.join('<br>')
    listPlace.innerHTML = forShow;
  }

  // if random selected something thats already selected
  if (dublix === true && randomActivated === true &&
    chosenFoods.length < foodlist.length) {
    console.log("random selected already selected. Running again");
    addToList('random'); 
  }
}

// make foodlist buttons
for (let i = 0; i < foodlist.length; i++){
  const currentName = foodlist[i].nombre
  foodPlace.innerHTML = foodPlace.innerHTML + '<input type = "button" value='+currentName+ ' class= "foods" onclick="addToList(this.value)" >' + '</input>'
  + '<br>'; 
}

