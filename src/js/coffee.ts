import {IMilk} from './Imilk';

export abstract class Coffee{
    discount:number;

    constructor(discount?:number){
        if(discount == void 0){ discount = 0 }
        this.discount = discount;
    }

    abstract Price():number;
    abstract CoffeeDrink():string;
    
    Strength():string{
        return "Weak";
    }

    Summary():string{
        return this.CoffeeDrink() + "'s summary: Price: " + this.Price() + "kr, Strength: " + this.Strength();        
    }
}