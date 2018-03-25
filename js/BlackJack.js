class BlackJack {
    constructor() {
        this.playerHand = [];
        this.turnOrder = 0;
        this.deck = new Deck();
        this.dealer = new dealer(this);
    }
    updateInput() {
        console.log(this.turnOrder);
        if (this.turnOrder == 0) {
            this.getName();
            addToDisplayText('How much would you like to gamble with?');
            this.turnOrder += 1;
            console.log('turn 0 take name');
        }
        else if (this.turnOrder == 1) {
            addToDisplayText('Hello ' + userName);
            this.getFunds();
            addToDisplayText('You have ' + userFunds + ' chips');
            this.turnOrder += 1;
            console.log('turn 1 take funds, deal');
            this.playerDrawFirstHand();
            this.dealerDrawFirstHand();
            this.calcHandValue(this.playerHand);
            addToDisplayText('please place your bet');
        }
        else if (this.turnOrder == 2) {
            this.betStep();
            addToDisplayText('you bet ' + this.bet + ' chips.');
            this.turnOrder += 1;
            addToDisplayText('Would you like to hit?');
        }
        else if (this.turnOrder == 3) {
            if (inputField.value == 'yes') {
                this.playerDraw();
                console.log('hitting');
                this.calcHandValue(this.playerHand);
                if (this.bustCheck(this.playerHand)) {
                    addToDisplayText('you lose!');
                    this.turnOrder += 1;
                }
                addToDisplayText('would you like to hit again?');
            }
            else {
                this.turnOrder += 1;
            }
            inputField.value = '';
        }
        else if (this.turnOrder == 4) {
            console.log('dealer turn');
            addToDisplayText('Dealer Taking Turn');
            this.dealer.dealerTurn();
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
        this.playerHand.push(tempCard);
        addToDisplayText(userName + " drew " + tempCard.value + " of " + tempCard.suit);
        console.log('player drew ' + tempCard.value + " of " + tempCard.suit);
    }
    playerDrawFirstHand() {
        this.playerDraw();
        this.playerDraw();
        console.log('player initial hand');
    }
    dealerDraw(show) {
        let tempCard = this.deck.cards.pop();
        this.dealer.hand.push(tempCard);
        if (show == true) {
            addToDisplayText("Dealer drew " + tempCard.value + " of " + tempCard.suit);
        }
        else {
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
    calcHandValue(hand) {
        let handValue = 0;
        hand.forEach(card => {
            handValue += cardValueInterpret(card.value);
        });
        addToDisplayText('Current hand value is ' + handValue);
        return handValue;
    }
    bustCheck(hand) {
        let handValue = 0;
        hand.forEach(card => {
            handValue += cardValueInterpret(card.value);
        });
        if (handValue > 21) {
            console.log('bust');
            return true;
        }
    }
}
//# sourceMappingURL=BlackJack.js.map