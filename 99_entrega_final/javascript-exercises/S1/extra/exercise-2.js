//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let  indexFruits = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
            foodSchedule[i].name=fruits[indexFruits];
            foodSchedule[i].isVegan=true;
            indexFruits++;
        }
    }

console.log(foodSchedule);
