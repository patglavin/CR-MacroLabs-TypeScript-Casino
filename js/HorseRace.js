class HorseRace {
    constructor() {
        this.horses = [];
        let hoof = new Horse('Hoof Master', 1.4);
        let bonafide = new Horse('Bonafide', 1.2);
        let grifter = new Horse('Grifter', 1.0);
        let slowLoris = new Horse('Slow Loris', 0.7);
        let laggy = new Horse('Laggy', 0.5);
        this.horses = [hoof, bonafide, grifter, slowLoris, laggy];
        addToDisplayText('Welcome to the Race Track!');
    }
    begin() {
        console.log('begin horse race');
        addToDisplayText('Select your horse. Your options are:');
        addToDisplayText('Hoof Master: Highest Speed, Lowest Payout');
        addToDisplayText('Bonafide: High Speed, Low Payout');
        addToDisplayText('Grifter: Medium Speed, Medium Payout');
        addToDisplayText('Slow Loris: Low Speed, High Payout');
        addToDisplayText('Laggy: Lowest speed, Highest payout');
        btn.addEventListener('click', (e) => this.pickHorse(), { once: true });
    }
    pickHorse() {
        addToDisplayText('Please place your bet');
    }
    acceptBet() {
        this.bet = parseInt(userInput);
    }
}
//# sourceMappingURL=HorseRace.js.map