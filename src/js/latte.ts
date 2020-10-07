import {Coffee} from './coffee';
import {IMilk} from './Imilk';

export class Latte extends Coffee implements IMilk{
    Price():number{
        return 40 - this.discount;
    }

    Strength():string{
        return "Weak";
    }

    MlMilk():number{
        return 120;
    }

    CoffeeDrink():string{
        return "Latte";
    }
}