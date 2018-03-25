class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    get getSuit() {
        return this.suit;
    }
    get getValue() {
        return cardValueInterpret(this.value);
    }
}
//# sourceMappingURL=card.js.map