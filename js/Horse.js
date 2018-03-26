class Horse {
    constructor(name, speed) {
        this.name = name;
        this.baseSpeed = speed;
        this.payout = (3 - this.baseSpeed);
    }
    run() {
        let raceSpeed = (Math.floor(Math.random() * 6) * this.baseSpeed);
        console.log(raceSpeed);
        return raceSpeed;
    }
}
//# sourceMappingURL=Horse.js.map