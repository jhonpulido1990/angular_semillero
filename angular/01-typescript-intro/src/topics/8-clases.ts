
export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Fernando';
        this.address = 'New York'
    }
}

const iroman = new Person();

console.log(iroman.address)
