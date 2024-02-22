
export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string
    ) {}
}

const iroman = new Person('Iroman', 'New york');

console.log(iroman)
