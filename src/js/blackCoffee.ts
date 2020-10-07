import {Coffee} from './coffee';

export class BlackCoffee extends Coffee{
    Price():number{
        return 20 - this.discount;
    }

    Strength():string{
        return "Strong";
    }
}