import { Product, taxCalculation } from './6-function-destructuring';

const shoppingCart: Product[] = [
  {
    description: "nokia",
    price: 100,
  },
  {
    description: "ipad",
    price: 150,
  },
];

// taxt = 0.15

const [ total, totaltax ] = taxCalculation({ products:shoppingCart, tax:0.15 });

console.log('total:  ', total);
console.log('tax: ', totaltax)

export {};
