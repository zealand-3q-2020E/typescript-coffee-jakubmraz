import {Coffee} from './coffee';
import {IMilk} from './Imilk';
import {Cortado} from './cortado';

let cortado = new Cortado;

console.log(cortado.Price);
console.log(cortado.MlMilk);
console.log(cortado.Strength);

let cheapCortado = new Cortado(5);

console.log(cheapCortado.Price);
