class MainMenu{
    constructor(){}
    name:string;
    initialFunds:number;
    getNameEvent = (e: Event) => this.getName();
    getFundsEvent = (e:Event) => this.getInitialFunds();
    gameChoice = (e:Event) => this.getGameChoice();

    profileSetup(){
        btn.addEventListener('click', this.getNameEvent, {once:true});
        addToDisplayText('Please enter your name');
    }

    getName(){
        this.name = userInput;
        clearInput();
        btn.addEventListener('click', this.getFundsEvent, { once: true });
        addToDisplayText('Hello  ' + this.name + '\nHow many chips would you like?')
    }

    getInitialFunds(){
        this.initialFunds = userInput;
        clearInput();
        // btn.removeEventListener('click', this.getFundsEvent);
        btn.addEventListener('click', this.gameChoice, {once:true})
        addToDisplayText('Alright, you\'ll start at ' + this.initialFunds);
        addToDisplayText('Which game would you like to play? We\'ve got\n - BlackJack')
    }

    getGameChoice(){
        let choice: string = userInput;
        if (choice.toLowerCase() == 'blackjack') {
            this.blackJackTurn();
        } else {
            addToDisplayText('Invalid input, please try again.')
            addToDisplayText('Which game would you like to play? We\'ve got\n - BlackJack')
            btn.addEventListener('click', this.gameChoice, { once: true })
        }
    }

    blackJackTurn() {
        let blackjack = new BlackJack();
        clearInput();
        blackjack.updateInput();
        btn.addEventListener("click", (e: Event) => blackjack.updateInput());
    }

}