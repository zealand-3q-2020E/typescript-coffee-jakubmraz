import {Coffee} from './coffee';
import {IMilk} from './Imilk';
import {Cortado} from './cortado';
import {Latte} from './latte';

let cortado = new Cortado;

console.log("Cortado");
console.log(cortado.Price());
console.log(cortado.MlMilk());
console.log(cortado.Strength());

let cheapCortado = new Cortado(5);

console.log("Cheap Cortado");
console.log(cheapCortado.Price());

let latte = new Latte();

console.log("Latte");
console.log(latte.Price());
console.log(latte.MlMilk());
console.log(latte.Strength());


