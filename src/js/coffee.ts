export abstract class Coffee{
    discount:number;

    constructor(discount?:number){
        if(discount == void 0){ discount = 0 }
        this.discount = discount;
    }

    abstract Price():number;
    
    Strength():string{
        return "Weak";
    }
}