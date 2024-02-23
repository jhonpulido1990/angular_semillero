function classDecorator<T extends { new (...args: any[]): {}}>
(
    constructor: T
){
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}



@classDecorator
export class SuperClass{
    public myProperty: string = 'assd';

    print() {
        console.log('Hola mundo')
    }
}

console.log( SuperClass );

const myClass = new SuperClass();
console.log(myClass)
