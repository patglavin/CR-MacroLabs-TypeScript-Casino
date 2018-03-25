class Player {
    name:string;
    funds:number;
    hand:Array<Card> = [];
    bust:boolean = false;

    constructor(name:string, funds:number) {
        this.name = name;
        this.funds = funds;
    }
}