class BlackJack {
    deck: Deck;
    dealer:dealer;
    player:Player;
    bet: number;
    constructor() {
        this.deck = new Deck();
        this.dealer = new dealer(this);
    }
    turnOrder: number = 0;
    name: string;
    updateInput() {
        console.log(this.turnOrder);
        if (this.turnOrder == 0) {
            this.getName();
            addToDisplayText('How much would you like to gamble with?');
            this.turnOrder += 1;
            console.log('turn 0 take name')
        } else if (this.turnOrder == 1) {
            this.player = new Player(userName, userFunds);
            addToDisplayText('Hello ' + userName);
            this.getFunds();
            addToDisplayText('You have ' + userFunds + ' chips')
            this.turnOrder += 1;
            console.log('turn 1 take funds, deal')
            this.playerDrawFirstHand();
            this.dealerDrawFirstHand();
            this.calcHandValue(this.player.hand);
            addToDisplayText('please place your bet');
        } else if (this.turnOrder == 2) {
            this.betStep();
            addToDisplayText('you bet ' + this.bet + ' chips.')
            this.turnOrder += 1;
            addToDisplayText('Would you like to hit?');
        } else if (this.turnOrder == 3) {
            if (inputField.value == 'yes') {
                this.playerDraw();
                console.log('hitting');
                this.calcHandValue(this.player.hand);
                if (this.bustCheck(this.player.hand)) {
                    addToDisplayText('you bust!')
                    this.player.bust = true;
                    this.turnOrder += 1
                }
                addToDisplayText('would you like to hit again?');
            } else {
                this.turnOrder += 1
            }
            inputField.value = '';
        } else if (this.turnOrder == 4) {
            console.log('dealer turn');
            addToDisplayText('Dealer Taking Turn');
            this.dealer.dealerTurn();
            this.turnOrder += 1;
        } else if(this.turnOrder == 5) {
            console.log('win check');
            addToDisplayText('Final result is...');
            this.winCheck();
        }
    }
    getName() {
        userName = inputField.value;
        clearInput();
    }
    getFunds() {
        userFunds = parseInt(inputField.value);
        clearInput();
    }
    playerDraw() {
        let tempCard = this.deck.cards.pop();
        this.player.hand.push(tempCard);
        addToDisplayText(userName + " drew " + tempCard.value + " of " + tempCard.suit);
        console.log('player drew ' + tempCard.value + " of " + tempCard.suit);
    }
    playerDrawFirstHand() {
        this.playerDraw();
        this.playerDraw();
        console.log('player initial hand');
    }
    dealerDraw(show:boolean) {
        let tempCard = this.deck.cards.pop();
        this.dealer.hand.push(tempCard);
        if (show == true) {
            addToDisplayText("Dealer drew " + tempCard.value + " of " + tempCard.suit);
        } else {
            addToDisplayText("Dealer drew one hidden card");
        }
        console.log('dealer drew ' + tempCard.value + " of " + tempCard.suit);
    }
    dealerDrawFirstHand() {
        this.dealerDraw(true);
        this.dealerDraw(false);
        console.log('dealer initial hand');
    }
    betStep() {
        console.log('bet of ' + inputField.value);
        this.bet = parseInt(inputField.value);
        inputField.value = '';
    }
    hitStep() {
        this.playerDraw();
    }
    calcHandValue(hand: Array<Card>) {
        let handValue: number = 0;
        hand.forEach(card => {
            handValue += cardValueInterpret(card.value);
        });
        addToDisplayText('Current hand value is ' + handValue)
        return handValue;
    }

    bustCheck(hand: Array<Card>) : boolean{
        let handValue: number = 0;
        hand.forEach(card => {
            handValue += cardValueInterpret(card.value);
        });
        if (handValue > 21) {
            console.log('bust')
            return true;
        }
    }

    winCheck(){
        if (this.player.bust) {
            addToDisplayText('you bust dawg')
        }
        if (this.dealer.bust && !this.player.bust) {
            addToDisplayText('ok u win');
        }
    }

    
}