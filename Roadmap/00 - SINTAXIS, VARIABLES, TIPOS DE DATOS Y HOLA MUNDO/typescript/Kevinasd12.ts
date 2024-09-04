// https://www.typescriptlang.org/docs

//creando comentario en una sola linea
/* comentario
en mas lineas */

// creando variable
let myNamee: string = "Kevin";

// creando una constante
const py: number = 3.14;

// types of primitave dates
let nameLanguage: string = "TypeScript";
let myAge: number = 18.5;
let areYouStrong: boolean = true;
let valorNull: null = null;
let kevin: undefined = undefined;
let id: symbol = Symbol("miSimbolo");
let array: string[] = ["Kevin", "Da Silva"];
let array2: number[] = [1, 2, 3, 4];
// no recomendado usar por que se pierde el tipado de ts
let algo: any = "hola";

console.log(typeof algo);

// impriendo hola typescript

// exercicie 1 de logica de programacion

let contador: number = 0;

while (contador < 101) {
    contador++;
    let multiploDe3: number = contador % 3;
    let multiploDe5: number = contador % 5;
    if (multiploDe3 === 0 && multiploDe5 === 0) {
        console.log("fizzbuzz");
    } else if (multiploDe3 === 0) {
        console.log("fizz");
    } else if (multiploDe5 === 0) {
        console.log("buzz");
    } else {
        console.log(contador);
    }
}
