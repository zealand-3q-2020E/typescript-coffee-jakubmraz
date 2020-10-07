import {Cortado} from './cortado';
import {Latte} from './latte';
import {BlackCoffee} from './blackCoffee';

let cortado = new Cortado;

console.log("Cortado: Price, MlMilk, Strength");
console.log(cortado.Price());
console.log(cortado.MlMilk());
console.log(cortado.Strength());

let cheapCortado = new Cortado(5);

console.log("Cheap Cortado: Price");
console.log(cheapCortado.Price());

let latte = new Latte();

console.log("Latte: Price, MlMilk, Strength");
console.log(latte.Price());
console.log(latte.MlMilk());
console.log(latte.Strength());

let cheapBlackCoffee = new BlackCoffee(4);

console.log("Cheap Black Coffee: Price, Strength");
console.log(cheapBlackCoffee.Price());
console.log(cheapBlackCoffee.Strength());

let blackCoffee = new BlackCoffee();

console.log("Black Coffee: Price");
console.log(blackCoffee.Price());

console.log("Now logging the summary of all objects declared so far:");
console.log(cortado.CoffeeDrink());
console.log(cheapCortado.CoffeeDrink());
console.log(latte.CoffeeDrink());
console.log(cheapBlackCoffee.CoffeeDrink());
console.log(blackCoffee.CoffeeDrink());

