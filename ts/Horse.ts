class Horse{
    name:string;
    baseSpeed:number;
    odds:number;

    constructor(name:string, speed:number){
        this.name = name;
        this.baseSpeed = speed;
    }

    run():number{
        let raceSpeed: number = (Math.floor(Math.random() * 6) * this.baseSpeed);
        console.log(raceSpeed);
        return raceSpeed;
    }    
}