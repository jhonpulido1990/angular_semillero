function addNumber (a: number, b: number): number {
    return a + b;
}

const addNumberArrow = (a: number, b: number):string => {
    return `${a + b}`;
}

function multiply ( firstNumber: number, secondNumber?: number, base: number = 2 ) {
    return firstNumber * base;
}

/* const result: number = addNumber(1, 2);
const result1: string = addNumberArrow(1, 2);
const result2: number = multiply(5);

console.log({ result, result1, result2 }) */


interface Character {
    name: string;
    hp: number;
    showhp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'strider',
    hp: 50,
    showhp() {
        console.log(`Puntos de vida: ${ this.hp }`)
    }
}

strider.showhp();

healCharacter(strider, 10);

strider.showhp();

export {};
