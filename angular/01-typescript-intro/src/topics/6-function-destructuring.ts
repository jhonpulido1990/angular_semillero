export interface Product {
    description: string;
    price: number
}

/* const phone: Product = {
    description: 'nokia a1',
    price: 150.0
}

const tablet: Product = {
    description: 'ipad air',
    price: 250.0
} */

interface TaxCalculation {
    tax: number;
    products: Product[]
}

/* function taxCalculation( options: TaxCalculation ): [number, number] { */
/* function taxCalculation( { tax, products}: TaxCalculation ): [number, number] { */
export function taxCalculation( options : TaxCalculation ): [number, number] {

    const { tax, products } = options;

    let total = 0;

    products.forEach ( ({ price }) =>{
        total += price;
    })

    return [total, total * tax]
}
/* 
const shoppingCart = [ tablet, phone];
const tax = 0.15; */

/* const result = taxCalculation({
    products: shoppingCart,
    tax: tax
})
 */

/* const [total, totalTax ] = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log('Total', total)
console.log('tax', totalTax) */

/* export {};
 */