class Player {
    constructor(name, funds) {
        this.hand = [];
        this.bust = false;
        this.name = name;
        this.funds = funds;
    }
    calcHandValue() {
        let handValue = 0;
        this.hand.forEach(card => {
            handValue += cardValueInterpret(card.value);
        });
        addToDisplayText('Current hand value is ' + handValue);
        return handValue;
    }
    bustCheck() {
        let handValue = 0;
        this.hand.forEach(card => {
            handValue += cardValueInterpret(card.value);
        });
        if (handValue > 21) {
            console.log('bust');
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=player.js.map