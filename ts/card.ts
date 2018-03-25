class Card {
    value: string;
    suit: string;
    constructor(value: string, suit: string) {
        this.value = value;
        this.suit = suit;
    }

    public get getSuit(): string {
        return this.suit;
    }

    public get getValue(): number {
        return cardValueInterpret(this.value);
    }
}