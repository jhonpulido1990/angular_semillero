export function whatsMyType<T>( argument: T): T {
    return argument
}

let amIString = whatsMyType<string>('hola mundo');
let AmINumber = whatsMyType<number>(90);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4]);


console.log( amIString.split('') );
console.log( AmINumber.toFixed() );
console.log( amIArray.join('-') );


export {};
