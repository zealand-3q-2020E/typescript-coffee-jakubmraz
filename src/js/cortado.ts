import {Coffee} from './coffee';
import {IMilk} from './Imilk';

export class Cortado extends Coffee implements IMilk{
    Price():number{
        return 25 - this.discount;
    }

    Strength():string{
        return "Weak";
    }

    MlMilk():number{
        return 25;
    }

    CoffeeDrink():string{
        return "Cortado";
    }
}