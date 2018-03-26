class Horse{
    name:string;
    baseSpeed:number;
    payout:number;

    constructor(name:string, speed:number){
        this.name = name;
        this.baseSpeed = speed;
        this.payout = (3 - this.baseSpeed);
    }

    run():number{
        let raceSpeed: number = (Math.floor(Math.random() * 6) * this.baseSpeed);
        console.log(raceSpeed);
        return raceSpeed;
    }    
}