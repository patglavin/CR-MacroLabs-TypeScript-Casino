class HorseRace {
    profile:Profile;
    selectedHorse:Horse;
    bet:number;
    hoof = new Horse('Hoof Master', 1.4);
    bonafide = new Horse('Bonafide', 1.2);
    grifter = new Horse('Grifter', 1.0);
    slowLoris = new Horse('Slow Loris', 0.7);
    laggy = new Horse('Laggy', 0.5);
    horses: Array<Horse> = [this.hoof, this.bonafide, this.grifter, this.slowLoris, this.laggy];

    constructor(profile:Profile) {
        this.profile = profile;
        addToDisplayText('Welcome to the Race Track!')
    }

    begin(){
        console.log('begin horse race');
        addToDisplayText('Select your horse. Your options are:');
        addToDisplayText('Hoof Master: Highest Speed, Lowest Payout');
        addToDisplayText('Bonafide: High Speed, Low Payout');
        addToDisplayText('Grifter: Medium Speed, Medium Payout');
        addToDisplayText('Slow Loris: Low Speed, High Payout');
        addToDisplayText('Laggy: Lowest speed, Highest payout');
        btn.addEventListener('click', (e:Event) => this.pickHorse(), {once:true});
    }

    pickHorse(){
        clearInput();
        switch (userInput.toLowerCase()) {
            case 'hoof master':
                this.selectedHorse = this.hoof;
                break;
            case 'bonafide':
                this.selectedHorse = this.bonafide;
                break;
            case 'grifter':
                this.selectedHorse = this.grifter;
                break;
            case 'slow loris':
                this.selectedHorse = this.slowLoris;
                break;
            case 'laggy':
                this.selectedHorse = this.laggy;
                break;
            default:
                addToDisplayText('Invalid Selection')
                btn.addEventListener('click', (e: Event) => this.pickHorse(), { once: true });
                return;
        }
        console.log(this.selectedHorse)
        addToDisplayText(this.selectionMessage(this.selectedHorse));
        addToDisplayText('Please place your bet');
    }

    acceptBet(){
        this.bet = parseInt(userInput);
    }

    selectionMessage(horse:Horse):string{
        return 'You have selected ' + horse.name;
    }
}